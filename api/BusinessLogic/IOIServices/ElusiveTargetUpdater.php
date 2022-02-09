<?php
namespace BusinessLogic\IOIServices;

use Config\Settings;
use DataAccess\Models\ElusiveTarget;
use DataAccess\Models\Game;
use DataAccess\Models\Mission;
use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client;
use Rollbar\Rollbar;

class ElusiveTargetUpdater {
    private $entityManager;
    private $locationToSlugMap = [
        // HITMAN
        "Paris, France" => [
            'slug' => 'the-showstopper',
            'tileSaveLocation' => '/elusive-targets/hitman/'
        ],
        "Sapienza, Italy" => [
            'slug' => 'world-of-tomorrow',
            'tileSaveLocation' => '/elusive-targets/hitman/'
        ],
        "Marrakesh, Morocco" => [
            'slug' => 'a-gilded-cage',
            'tileSaveLocation' => '/elusive-targets/hitman/'
        ],
        "Bangkok, Thailand" => [
            'slug' => 'club-27',
            'tileSaveLocation' => '/elusive-targets/hitman/'
        ],
        "Colorado, USA" => [
            'slug' => 'freedom-fighters',
            'tileSaveLocation' => '/elusive-targets/hitman/'
        ],
        "Hokkaido, Japan" => [
            'slug' => 'situs-inversus',
            'tileSaveLocation' => '/elusive-targets/hitman/'
        ],
        // HITMAN 2
        "Hawke's Bay, New Zealand" => [
            'slug' => 'nightcall',
            'tileSaveLocation' => '/elusive-targets/hitman2/'
        ],
        "Miami, USA" => [
            'slug' => 'finish-line',
            'tileSaveLocation' => '/elusive-targets/hitman2/'
        ],
        "Santa Fortuna, Colombia" => [
            'slug' => 'three-headed-serpent',
            'tileSaveLocation' => '/elusive-targets/hitman2/'
        ],
        "Mumbai, India" => [
            'slug' => 'chasing-a-ghost',
            'tileSaveLocation' => '/elusive-targets/hitman2/'
        ],
        "Whittleton Creek, USA" => [
            'slug' => 'another-life',
            'tileSaveLocation' => '/elusive-targets/hitman2/'
        ],
        "Isle of Sgàil, North Atlantic" => [
            'slug' => 'ark-society',
            'tileSaveLocation' => '/elusive-targets/hitman2/'
        ],
        // HITMAN 3
        "Dubai, United Arab Emirates" => [
            'slug' => 'on-top-of-the-world',
            'tileSaveLocation' => '/elusive-targets/hitman3/'
        ],
        "Dartmoor, England" => [
            'slug' => 'death-in-the-family',
            'tileSaveLocation' => '/elusive-targets/hitman3/'
        ],
        "Berlin, Germany" => [
            'slug' => 'apex-predator',
            'tileSaveLocation' => '/elusive-targets/hitman3/'
        ],
        "Chongqing, China" => [
            'slug' => 'end-of-an-era',
            'tileSaveLocation' => '/elusive-targets/hitman3/'
        ],
        "Mendoza, Argentina" => [
            'slug' => 'the-farewell',
            'tileSaveLocation' => '/elusive-targets/hitman3/'
        ],
        "Carpathian Mountains, Romania" => [
            'slug' => 'untouchable',
            'tileSaveLocation' => '/elusive-targets/hitman3/'
        ],
    ];

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function retrieveLatestElusiveTargetFromIOI(): bool {
        $client = new Client();
        $response = $client->request('GET', 'https://auth.hitman.io/status', [
            'headers' => [
                'User-Agent' => 'hitmaps.com',
                'Accept' => 'application/json'
            ]
        ]);

        if ($response->getStatusCode() !== 200) {
            Rollbar::error('Received a non-success response from the HITMAN Status API: ' . $response->getStatusCode(), [
                'response' => $response
            ]);

            return false;
        }

        $responseJson = json_decode($response->getBody());
        $elusiveTargetJsons = $responseJson->elusives->{'epic.hm3-service.hitman.io'};
        if (empty($elusiveTargetJsons)) {
            return false;
        }

        /* @var $hitman3Game Game */
        $hitman3Game = $this->entityManager->getRepository(Game::class)->findOneBy(['slug' => 'hitman3']);

        foreach ($elusiveTargetJsons as $elusiveTargetJson) {
            $elusiveTarget = $this->entityManager->getRepository(ElusiveTarget::class)->findOneBy(['name' => $elusiveTargetJson->name, 'gameId' => $hitman3Game->getId()]);

            if ($elusiveTarget === null) {
                $locationInfo = $this->locationToSlugMap[$elusiveTargetJson->location];
                if ($locationInfo === null) {
                    Rollbar::error("Could not find location slug for IOI location: {$elusiveTargetJson->location}!", [
                        'response' => $response
                    ]);
                    return false;
                }
                /* @var $mission Mission */
                $mission = $this->entityManager->getRepository(Mission::class)->findOneBy(['slug' => $locationInfo['slug']]);
                if ($mission === null) {
                    Rollbar::error("Could not find mission with slug '{$locationInfo['slug']}'!", [
                        'response' => $response
                    ]);
                    return false;
                }

                $image = file_get_contents($elusiveTargetJson->tile);

                $saveName = str_replace(' ', '-', strtolower($elusiveTargetJson->name));
                $fileName = "{$locationInfo['tileSaveLocation']}{$saveName}.jpg";
                $saveLocation =__DIR__ . "/{$saveName}.jpg";
                file_put_contents($saveLocation, $image);
                $settings = new Settings();
                $mediaLibraryPath = $settings->mediaLibraryPath;
                exec("mv {$saveLocation} {$mediaLibraryPath}/actors{$fileName}");

                $elusiveTarget = new ElusiveTarget();
                $elusiveTarget->setName($elusiveTargetJson->name);
                $elusiveTarget->setImageUrl("https://media.hitmaps.com/img/hitman3/actors{$fileName}");
                $elusiveTarget->setComingNotificationSent(false);
                $elusiveTarget->setPlayableNotificationSent(false);
                $elusiveTarget->setSevenDaysLeftNotificationSent(false);
                $elusiveTarget->setFiveDaysLeftNotificationSent(false);
                $elusiveTarget->setThreeDaysLeftNotificationSent(false);
                $elusiveTarget->setOneDayLeftNotificationSent(false);
                $elusiveTarget->setEndNotificationSent(false);
                $elusiveTarget->setMissionId($mission->getId());
                $elusiveTarget->setGameId($hitman3Game->getId());
            }

            $reactivated = $elusiveTarget->getReactivated();
            if (!$reactivated &&
                new \DateTime($elusiveTargetJson->nextWindow->start) > new \DateTime('2021-11-30 00:00:00', new \DateTimeZone('UTC'))) {

                $reactivated = true;
                $elusiveTarget->setComingNotificationSent(false);
                $elusiveTarget->setPlayableNotificationSent(false);
                $elusiveTarget->setSevenDaysLeftNotificationSent(false);
                $elusiveTarget->setFiveDaysLeftNotificationSent(false);
                $elusiveTarget->setThreeDaysLeftNotificationSent(false);
                $elusiveTarget->setOneDayLeftNotificationSent(false);
                $elusiveTarget->setEndNotificationSent(false);
            }
            $elusiveTarget->setBriefing($elusiveTargetJson->description);
            $elusiveTarget->setReactivated($reactivated);
            $elusiveTarget->setBeginningTime(new \DateTime($elusiveTargetJson->nextWindow->start));
            $elusiveTarget->setEndingTime(new \DateTime($elusiveTargetJson->nextWindow->end));
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
        }

        return true;
    }
}

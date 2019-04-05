<?php
namespace BusinessLogic\IOIServices;

use BusinessLogic\MissionCloner;
use Config\Settings;
use DataAccess\Models\ElusiveTarget;
use DataAccess\Models\Mission;
use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client;
use Rollbar\Rollbar;

class ElusiveTargetUpdater {
    private $entityManager;
    private $missionCloner;
    private $locationToSlugMap = [
        "Hawke's Bay, New Zealand" => [
            'slug' => 'nightcall',
            'tileSaveLocation' => '/elusive-targets/'
        ],
        "Paris, France" => [
            'slug' => 'the-showstopper',
            'tileSaveLocation' => '/elusive-targets/legacy/'
        ]
    ];

    public function __construct(EntityManager $entityManager, MissionCloner $missionCloner) {
        $this->entityManager = $entityManager;
        $this->missionCloner = $missionCloner;
    }

    public function retrieveLatestElusiveTargetFromIOI(): bool {
        $client = new Client();
        $response = $client->request('GET', 'https://auth.hitman.io/status', [
            'headers' => [
                'User-Agent' => 'hitman2maps.com',
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
        $elusiveTargetJsons = $responseJson->elusives->{'pc2-service.hitman.io'};
        if (empty($elusiveTargetJsons)) {
            return false;
        }
        $elusiveTargetJson = $elusiveTargetJsons[0];

        $elusiveTarget = $this->entityManager->getRepository(ElusiveTarget::class)->findOneBy(['name' => $elusiveTargetJson->name]);

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

            $saveName = str_replace(' ', '-', strtolower($elusiveTargetJson->name));
            $newMissionId = $this->missionCloner->cloneMissionForElusiveTarget($mission->getSlug(),
                'professional',
                $elusiveTargetJson->name,
                $saveName,
                new \DateTime($elusiveTargetJson->nextWindow->start),
                new \DateTime($elusiveTargetJson->nextWindow->end));

            $elusiveTarget = new ElusiveTarget();
            $elusiveTarget->setName($elusiveTargetJson->name);
            $image = file_get_contents($elusiveTargetJson->tile);
            $settings = new Settings();
            $fileName = "{$locationInfo['tileSaveLocation']}{$saveName}";
            file_put_contents(__DIR__ . "/../../{$settings->cdnLocation}/jpg{$fileName}.jpg", $image);
            $elusiveTarget->setImageUrl($fileName);
            $elusiveTarget->setComingNotificationSent(false);
            $elusiveTarget->setPlayableNotificationSent(false);
            $elusiveTarget->setSevenDaysLeftNotificationSent(false);
            $elusiveTarget->setFiveDaysLeftNotificationSent(false);
            $elusiveTarget->setThreeDaysLeftNotificationSent(false);
            $elusiveTarget->setOneDayLeftNotificationSent(false);
            $elusiveTarget->setEndNotificationSent(false);
            $elusiveTarget->setMissionId($newMissionId);
        }
        $elusiveTarget->setBriefing($elusiveTargetJson->description);
        $elusiveTarget->setBeginningTime(new \DateTime($elusiveTargetJson->nextWindow->start));
        $elusiveTarget->setEndingTime(new \DateTime($elusiveTargetJson->nextWindow->end));
        $this->entityManager->persist($elusiveTarget);
        $this->entityManager->flush();

        return true;
    }
}
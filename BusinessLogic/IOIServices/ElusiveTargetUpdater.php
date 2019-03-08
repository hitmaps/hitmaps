<?php
namespace BusinessLogic\IOIServices;

use DataAccess\Models\ElusiveTarget;
use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client;
use Rollbar\Rollbar;

class ElusiveTargetUpdater {
    private $entityManager;
    private $locationToSlugMap = [
        [
            'localizedName' => "Hawke's Bay, New Zealand",
            'missionSlug' => 'nightcall'
        ]
    ];

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
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

        $elusiveTarget = $this->entityManager->getRepository(ElusiveTarget::class)->findOneBy(['name' => $responseJson->name]);

        if ($elusiveTarget === null) {
            $elusiveTarget = new ElusiveTarget();
            $elusiveTarget->setName($responseJson->name);
        }
        $elusiveTarget->setBriefing($responseJson->description);
        // TODO the rest
    }
}
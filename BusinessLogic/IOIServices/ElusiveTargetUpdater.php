<?php
namespace BusinessLogic\IOIServices;

use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client;

class ElusiveTargetUpdater {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function retrieveLatestElusiveTargetFromIOI() {
        $client = new Client();
        $url = 'https://auth.hitman.io/status';
    }
}
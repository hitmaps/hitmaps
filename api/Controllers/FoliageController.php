<?php


namespace Controllers;


use DataAccess\Models\Foliage;
use DataAccess\Models\Ledge;
use Doctrine\ORM\EntityManager;

class FoliageController {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function createFoliage(int $missionId, int $level, array $vertices): Foliage {
        $foliage = new Foliage();
        $foliage->setMissionId($missionId);
        $foliage->setLevel($level);
        $foliage->setVertices($this->buildVertices($vertices));

        $this->entityManager->persist($foliage);
        $this->entityManager->flush();

        return $foliage;
    }

    private function buildVertices(array $vertices) {
        // I know this isn't the *right* way to store this in the database, but it's just faster for now.
        return implode('|', $vertices);
    }

    public function getFoliageForMission(int $missionId): array {
        return $this->entityManager->getRepository(Foliage::class)->findBy(['missionId' => $missionId]);
    }
}
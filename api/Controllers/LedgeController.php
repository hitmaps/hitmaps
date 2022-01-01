<?php


namespace Controllers;


use DataAccess\Models\Ledge;
use Doctrine\ORM\EntityManager;

class LedgeController {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function createLedge(int $missionId, int $level, array $vertices): Ledge {
        $ledge = new Ledge();
        $ledge->setMissionId($missionId);
        $ledge->setLevel($level);
        $ledge->setVertices($this->buildVertices($vertices));

        $this->entityManager->persist($ledge);
        $this->entityManager->flush();

        return $ledge;
    }

    private function buildVertices(array $vertices): string {
        // I know this isn't the *right* way to store this in the database, but it's just faster for now.
        return implode('|', $vertices);
    }

    public function getLedgesForMission(int $missionId): array {
        return $this->entityManager->getRepository(Ledge::class)->findBy(['missionId' => $missionId]);
    }
}
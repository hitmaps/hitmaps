<?php


namespace Controllers;


use DataAccess\Models\DisguiseArea;
use Doctrine\ORM\EntityManager;

class DisguiseAreasController {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function createDisguiseArea(int $missionId, int $disguiseId, int $level, string $type, array $vertices): DisguiseArea {
        $disguiseArea = new DisguiseArea();
        $disguiseArea->setMissionId($missionId);
        $disguiseArea->setDisguiseId($disguiseId);
        $disguiseArea->setLevel($level);
        $disguiseArea->setType($type);
        $disguiseArea->setVertices($this->buildVertices($vertices));

        $this->entityManager->persist($disguiseArea);
        $this->entityManager->flush();

        return $disguiseArea;
    }

    private function buildVertices(array $vertices) {
        $allVertices = [];
        /*
         * Each vertex is a 2-element array: [lat, lng]
         * I know this isn't the *right* way to store this in the database, but it's just faster for now.
         */
        foreach ($vertices as $vertex) {
            $allVertices[] = "{$vertex[0]},{$vertex[1]}";
        }

        return implode('|', $allVertices);
    }

    public function getDisguiseAreasForMission(int $missionId): array {
        return $this->entityManager->getRepository(DisguiseArea::class)->findBy(['missionId' => $missionId]);
    }
}
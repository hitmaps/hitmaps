<?php

namespace Controllers;


use DataAccess\Models\Node;
use DataAccess\Repositories\NodeRepository;
use Doctrine\ORM\EntityManager;

class NodeController {
    /* @var $nodeRepository NodeRepository */
    private $nodeRepository;

    public function __construct(EntityManager $entityManager) {
        $this->nodeRepository = $entityManager->getRepository(Node::class);
    }

    public function getNodesForMission(int $missionid, string $difficulty): array {
        return $this->nodeRepository->findByMissionAndDifficulty($missionid, $difficulty);
    }
}
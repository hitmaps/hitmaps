<?php

namespace Controllers;


use DataAccess\Models\Node;
use DataAccess\Models\NodeNote;
use DataAccess\Repositories\NodeRepository;
use Doctrine\ORM\EntityManager;

class NodeController {
    /* @var $entityManager EntityManager */
    private $entityManager;

    /* @var $nodeRepository NodeRepository */
    private $nodeRepository;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
        $this->nodeRepository = $entityManager->getRepository(Node::class);
    }

    public function getNodesForMission(int $missionid, string $difficulty): array {
        return $this->nodeRepository->findByMissionAndDifficulty($missionid, $difficulty);
    }

    public function createNode(int $missionId, string $difficulty, array $postData): void {
        $node = new Node();
        $node->setDifficulty($difficulty);
        $node->setIcon($postData['icon']);
        $node->setLatitude($postData['latitude']);
        $node->setLevel($postData['level']);
        $node->setLongitude($postData['longitude']);
        $node->setMissionId($missionId);
        $node->setName($postData['name']);
        $node->setTarget($postData['target']);
        $node->setType($postData['type']);

        $this->entityManager->persist($node);
        $this->entityManager->flush();

        $nodeId = $node->getId();

        $i = 0;
        foreach ($postData['note-type'] as $noteType) {
            $noteText = $postData['note-text'][$i++];

            if (trim($noteText) === '') {
                continue;
            }

            $nodeNote = new NodeNote();
            $nodeNote->setNodeId($nodeId);
            $nodeNote->setType($noteType);
            $nodeNote->setText($noteText);

            $this->entityManager->persist($nodeNote);
        }
        $this->entityManager->flush();
    }
}
<?php

namespace DataAccess\Repositories;


use DataAccess\Models\Node;
use DataAccess\Models\NodeDifficulty;
use Doctrine\ORM\EntityRepository;

class NodeRepository extends EntityRepository {
    public function findByMission(int $missionId): array {
        $results = $this->getEntityManager()->createQuery("SELECT n, difficulty, note 
            FROM DataAccess\Models\Node n
            INNER JOIN DataAccess\Models\NodeDifficulty difficulty
              WITH n.id = difficulty.nodeId  
            LEFT JOIN DataAccess\Models\NodeNote note 
              WITH n.id = note.nodeId
            WHERE n.missionId = :missionId
              AND n.approved = true 
            ORDER BY n.group ASC, n.name ASC")
            ->setParameter('missionId', $missionId)
            ->getResult();

        $nodes = [];
        $lastNode = null;
        foreach ($results as $result) {
            if ($result instanceof Node) {
                if ($lastNode !== null) {
                    $nodes[] = $lastNode;
                }
                $lastNode = $result;
            }

            if ($result instanceof NodeDifficulty) {
                $lastNode->difficulties[] = $result->getDifficulty();
            }
        }

        if ($lastNode !== null) {
            $nodes[] = $lastNode;
        }

        return $nodes;
    }
}
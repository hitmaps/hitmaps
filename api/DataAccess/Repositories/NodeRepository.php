<?php

namespace DataAccess\Repositories;


use DataAccess\Models\Node;
use DataAccess\Models\NodeDifficulty;
use Doctrine\ORM\EntityRepository;

class NodeRepository extends EntityRepository {
    public function findByMission(int $missionId): array {
        return $this->getEntityManager()->createQuery("SELECT n 
            FROM DataAccess\Models\Node n
            WHERE n.missionId = :missionId
              AND n.approved = true 
            ORDER BY n.group ASC, n.name ASC")
            ->setParameter('missionId', $missionId)
            ->getResult();
    }
}
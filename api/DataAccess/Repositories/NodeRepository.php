<?php

namespace DataAccess\Repositories;


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

    public function findByMissionV2(int $missionId): array {
        $qb = $this->createQueryBuilder('node');

        $qb->addSelect('variants')
            ->addSelect('notes')
            ->innerJoin('node.variants', 'variants')
            ->leftJoin('node.notes', 'notes')
            ->where($qb->expr()->andX(
                $qb->expr()->eq('node.approved', 'true'),
                $qb->expr()->eq('node.missionId', ':missionId')
            ))
            ->setParameter('missionId', $missionId);

        return $qb->getQuery()->getArrayResult();
    }
}
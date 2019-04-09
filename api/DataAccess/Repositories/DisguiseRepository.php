<?php

namespace DataAccess\Repositories;


use Doctrine\ORM\EntityRepository;

class DisguiseRepository extends EntityRepository {
    public function findByMission(int $missionId): array {
        return $this->getEntityManager()->createQuery('SELECT n, area 
            FROM DataAccess\Models\Disguise n 
            LEFT JOIN DataAccess\Models\DisguiseArea area 
              WITH n.id = area.disguiseId
            WHERE n.missionId = :missionId
            ORDER BY n.name ASC')
            ->setParameter('missionId', $missionId)
            ->getResult();
    }
}
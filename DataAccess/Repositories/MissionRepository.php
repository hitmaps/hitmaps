<?php

namespace DataAccess\Repositories;


use Doctrine\ORM\EntityRepository;

class MissionRepository extends EntityRepository {
    public function findActiveMissionsByLocation(int $locationId): array {
        return $results = $this->createQueryBuilder('e')
            ->andWhere('e.locationId = :locationId')
            ->andWhere('e.beginEffectiveDate IS NULL OR e.beginEffectiveDate <= :today')
            ->andWhere('e.endEffectiveDate IS NULL OR e.endEffectiveDate > :today')
            ->setParameter('locationId', $locationId)
            ->setParameter('today', new \DateTime('now', new \DateTimeZone('UTC')))
            ->getQuery()
            ->getResult();
    }
}
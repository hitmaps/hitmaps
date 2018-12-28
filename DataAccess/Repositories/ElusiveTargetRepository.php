<?php

namespace DataAccess\Repositories;


use DataAccess\Models\ElusiveTarget;
use Doctrine\ORM\EntityRepository;

class ElusiveTargetRepository extends EntityRepository {
    public function getActiveElusiveTarget(): ?ElusiveTarget {
        $currentUtcTime = new \DateTime('now', new \DateTimeZone('UTC'));

        $results = $this->createQueryBuilder('e')
            ->andWhere('e.beginning_time <= :now AND e.ending_time >= :now')
            ->setParameter('now', $currentUtcTime)
            ->getQuery()
            ->getArrayResult();

        if (count($results) === 0) {
            return null;
        }

        return $results[0];
    }
}
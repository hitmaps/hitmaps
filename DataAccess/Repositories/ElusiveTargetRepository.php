<?php

namespace DataAccess\Repositories;


use DataAccess\Models\ElusiveTarget;
use Doctrine\ORM\EntityRepository;

class ElusiveTargetRepository extends EntityRepository {
    public function getActiveElusiveTarget(): ?ElusiveTarget {
        $currentUtcTime = new \DateTime('now', new \DateTimeZone('UTC'));

        $results = $this->createQueryBuilder('e')
            ->andWhere('e.beginningTime <= :now AND e.endingTime >= :now')
            ->setParameter('now', $currentUtcTime)
            ->getQuery()
            ->getResult();

        if (count($results) === 0) {
            return null;
        }

        return $results[0];
    }
}
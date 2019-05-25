<?php

namespace DataAccess\Repositories;


use DataAccess\Models\ElusiveTarget;
use Doctrine\ORM\EntityRepository;

class ElusiveTargetRepository extends EntityRepository {
    public function getActiveElusiveTargets(): array {
        $currentUtcTime = new \DateTime('now', new \DateTimeZone('UTC'));

        return $this->createQueryBuilder('e')
            ->andWhere('e.endingTime >= :now')
            ->setParameter('now', $currentUtcTime)
            ->getQuery()
            ->getResult();
    }

    public function getLatestElusiveTarget(): ElusiveTarget {
        return $this->createQueryBuilder('e')
            ->select('e')
            ->orderBy('e.id', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
<?php

namespace DataAccess\Repositories;


use DataAccess\Models\ElusiveTarget;
use Doctrine\ORM\EntityRepository;

class ElusiveTargetRepository extends EntityRepository {
    public function getActiveElusiveTarget(): ?ElusiveTarget {
        $currentUtcTime = new \DateTime('now', new \DateTimeZone('UTC'));

        $results = $this->createQueryBuilder('e')
            ->andWhere('e.endingTime >= :now')
            ->setParameter('now', $currentUtcTime)
            ->getQuery()
            ->getResult();

        if (count($results) === 0) {
            return null;
        }

        return $results[0];
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
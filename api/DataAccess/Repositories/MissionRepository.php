<?php

namespace DataAccess\Repositories;


use DataAccess\Models\Location;
use DataAccess\Models\Mission;
use Doctrine\ORM\EntityRepository;

class MissionRepository extends EntityRepository {
    public function findActiveMissionsByLocation(int $locationId): array {
        return $results = $this->createQueryBuilder('e')
            ->andWhere('e.locationId = :locationId')
            ->andWhere('e.beginEffectiveDate IS NULL OR e.beginEffectiveDate <= :today')
            ->andWhere('e.endEffectiveDate IS NULL OR e.endEffectiveDate > :today')
            ->orderBy('e.order')
            ->setParameter('locationId', $locationId)
            ->setParameter('today', new \DateTime('now', new \DateTimeZone('UTC')))
            ->getQuery()
            ->getResult();
    }

    public function buildUrlForMissionAndDifficulty(int $missionId, string $difficulty): string {
        $missionInfo = $this->getEntityManager()->createQuery('SELECT m, l
            FROM DataAccess\Models\Mission m
            INNER JOIN DataAccess\Models\Location l
                WITH m.locationId = l.id
            WHERE m.id = :missionId')
            ->setParameter('missionId', $missionId)
            ->getResult();

        // $missionInfo[0]: Mission Data; $missionInfo[1]: Location Data
        if (count($missionInfo) !== 2) {
            throw new \Exception('Did not find exactly two elements in the $missionInfo array!');
        }

        /* @var $mission Mission */
        /* @var $location Location */
        $mission = $missionInfo[0];
        $location = $missionInfo[1];

        return "/games/{$location->getGame()}/{$location->getSlug()}/{$mission->getSlug()}/{$difficulty}";
    }
}
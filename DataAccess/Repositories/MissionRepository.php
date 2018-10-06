<?php

namespace DataAccess\Repositories;


use Doctrine\ORM\EntityRepository;

class MissionRepository extends EntityRepository {
    public function findByLocation(int $locationId): array {
        return $this->findBy(['locationId' => $locationId], ['order' => 'ASC']);
    }
}
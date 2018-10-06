<?php

namespace DataAccess\Repositories;


use Doctrine\ORM\EntityRepository;

class LocationRepository extends EntityRepository {
    public function findByGame(string $game): array {
        return $this->findBy(['game' => $game], ['order' => 'ASC']);
    }
}
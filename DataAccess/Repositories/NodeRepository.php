<?php

namespace DataAccess\Repositories;


use Doctrine\ORM\EntityRepository;

class NodeRepository extends EntityRepository {
    public function findByMissionAndDifficulty(int $missionId, string $difficulty): array {
        return $this->findBy(['missionId' => $missionId, 'difficulty' => $difficulty]);
    }
}
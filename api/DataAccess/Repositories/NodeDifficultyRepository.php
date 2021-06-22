<?php

namespace DataAccess\Repositories;


use DataAccess\Models\NodeDifficulty;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;

class NodeDifficultyRepository extends EntityRepository {
    public function getDifficultiesForMission(int $missionId): array {
        $sql =
            "SELECT DISTINCT difficulty 
                FROM node_to_difficulties
                WHERE node_id IN (
                    SELECT id
                    FROM nodes n
                    WHERE n.mission_id = ?
                )";

       $stmt = $this->getEntityManager()->getConnection()->prepare($sql);
       $stmt->bindParam(1, $missionId);
       $stmt->execute();

       $results = $stmt->fetchAllAssociative();
       $difficulties = [];
       foreach ($results as $result) {
           $difficulties[] = $result['difficulty'];
       }

       return $difficulties;
    }
}
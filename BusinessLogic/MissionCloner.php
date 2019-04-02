<?php

namespace BusinessLogic;


use DataAccess\Models\Mission;
use DataAccess\Models\MissionDifficulty;
use Doctrine\ORM\EntityManager;

class MissionCloner {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function cloneMissionForElusiveTarget(string $originalMissionSlug,
                                 string $originalDifficulty,
                                 string $elusiveTargetName,
                                 string $elusiveTargetSlug,
                                 \DateTime $beginningTime,
                                 \DateTime $endTime) {
        /* @var $originalMission Mission */
        $originalMission = $this->entityManager->getRepository(Mission::class)->findOneBy(['slug' => $originalMissionSlug]);

        if ($originalMission === null) {
            throw new \Exception("Could not find mission with slug '{$originalMissionSlug}'");
        }

        // Create the new mission
        $newMission = new Mission();
        $newMission->setLocationId($originalMission->getLocationId());
        $newMission->setCampaignId($originalMission->getCampaignId());
        $newMission->setName($elusiveTargetName);
        $newMission->setSlug($elusiveTargetSlug);
        $newMission->setOrder($originalMission->getOrder());
        $newMission->setMapFolderName($originalMission->getMapFolderName());
        $newMission->setMapCenterLatitude($originalMission->getMapCenterLatitude());
        $newMission->setMapCenterLongitude($originalMission->getMapCenterLongitude());
        $newMission->setLowestFloorNumber($originalMission->getLowestFloorNumber());
        $newMission->setHighestFloorNumber($originalMission->getHighestFloorNumber());
        $newMission->setStartingFloorNumber($originalMission->getStartingFloorNumber());
        $newMission->setTopLeftCoordinate($originalMission->getTopLeftCoordinate());
        $newMission->setBottomRightCoordinate($originalMission->getBottomRightCoordinate());
        $newMission->setSatelliteView($originalMission->getSatelliteView());
        $newMission->setBeginEffectiveDate($beginningTime);
        $newMission->setEndEffectiveDate($endTime);
        $this->entityManager->persist($newMission);
        $this->entityManager->flush();

        // Copy all nodes
        $copyNodesSql = "INSERT INTO `nodes` (mission_id, type, subgroup, name, target, level, latitude, longitude, difficulty, `group`, approved, created_by, date_created, icon, searchable, image, original_id)
            SELECT {$newMission->getId()}, type, subgroup, `name`, target, `level`, latitude, longitude, 'standard', `group`, approved, created_by, date_created, icon, searchable, image, `id`
            FROM `nodes`
            WHERE `mission_id` = {$originalMission->getId()}
              AND `difficulty` = 'professional'";
        $this->entityManager->getConnection()->exec($copyNodesSql);

        // Copy their notes
        $copyNotesSql = "INSERT INTO `node_notes` (node_id, type, text)
            SELECT `node`.`id`, `notes`.`type`, `text`
            FROM `nodes` AS `node`
            INNER JOIN `node_notes` AS `notes`
              ON `node_id` = `node`.`original_id`
            WHERE `mission_id` = {$newMission->getId()}
              AND `difficulty` = 'standard'";
        $this->entityManager->getConnection()->exec($copyNotesSql);

        // Remove the original IDs
        $removeOriginalSql = "UPDATE `nodes`
            SET `original_id` = NULL
            WHERE `mission_id` = {$newMission->getId()}
              AND `difficulty` = 'standard'";

        $missionDifficulty = new MissionDifficulty();
        $missionDifficulty->setMissionId($newMission->getId());
        $missionDifficulty->setDifficulty('Standard');
        $this->entityManager->persist($missionDifficulty);
        $this->entityManager->flush();

        return $newMission->getId();
    }
}
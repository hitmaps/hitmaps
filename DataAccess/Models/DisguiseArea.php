<?php

namespace DataAccess\Models;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="disguise_areas")
 */
class DisguiseArea {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="mission_id")
     */
    private $missionId;

    /**
     * @ORM\Column(type="integer", name="disguise_id")
     */
    private $disguiseId;

    /**
     * @ORM\Column(type="string")
     */
    private $vertices;

    /**
     * @ORM\Column(type="integer")
     */
    private $level;

    /**
     * @ORM\Column(type="string")
     */
    private $type;

    /**
     * @return mixed
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getMissionId() {
        return $this->missionId;
    }

    /**
     * @param mixed $missionId
     */
    public function setMissionId($missionId): void {
        $this->missionId = $missionId;
    }

    /**
     * @return mixed
     */
    public function getDisguiseId() {
        return $this->disguiseId;
    }

    /**
     * @param mixed $disguiseId
     */
    public function setDisguiseId($disguiseId): void {
        $this->disguiseId = $disguiseId;
    }

    /**
     * @return mixed
     */
    public function getVertices() {
        return $this->vertices;
    }

    /**
     * @param mixed $vertices
     */
    public function setVertices($vertices): void {
        $this->vertices = $vertices;
    }

    /**
     * @return mixed
     */
    public function getLevel() {
        return $this->level;
    }

    /**
     * @param mixed $level
     */
    public function setLevel($level): void {
        $this->level = $level;
    }

    /**
     * @return mixed
     */
    public function getType() {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type): void {
        $this->type = $type;
    }
}
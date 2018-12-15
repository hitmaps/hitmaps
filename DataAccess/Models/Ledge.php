<?php


namespace DataAccess\Models;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="ledges")
 */
class Ledge {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    public $id;

    /**
     * @ORM\Column(type="integer", name="mission_id")
     */
    public $missionId;

    /**
     * @ORM\Column(type="integer", name="level")
     */
    public $level;

    /**
     * @ORM\Column(type="string")
     */
    public $vertices;

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
    public function getVertices() {
        return $this->vertices;
    }

    /**
     * @param mixed $vertices
     */
    public function setVertices($vertices): void {
        $this->vertices = $vertices;
    }
}
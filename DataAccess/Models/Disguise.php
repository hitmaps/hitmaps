<?php

namespace DataAccess\Models;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="disguises")
 */
class Disguise {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="mission_id")
     */
    private $missionId;

    /**
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\Column(type="string")
     */
    private $image;

    /**
     * @return mixed
     */
    public function getId(): int {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId(int $id) {
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
    public function getName() {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getImage() {
        return $this->image;
    }

    /**
     * @param mixed $image
     */
    public function setImage($image): void {
        $this->image = $image;
    }
}
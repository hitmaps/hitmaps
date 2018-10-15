<?php


namespace DataAccess\Models;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="DataAccess\Repositories\NodeRepository")
 * @ORM\Table(name="nodes")
 */
class Node {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    public $id;

    /**
     * @ORM\Column(type="integer", name="mission_id")
     */
    public $missionId;

    /**
     * @ORM\Column(type="string")
     */
    public $type;

    /**
     * @ORM\Column(type="string")
     */
    public $icon;

    /**
     * @ORM\Column(type="string")
     */
    public $name;

    /**
     * @ORM\Column(type="string")
     */
    public $target;

    /**
     * @ORM\Column(type="integer")
     */
    public $level;

    /**
     * @ORM\Column(type="string")
     */
    public $latitude;

    /**
     * @ORM\Column(type="string")
     */
    public $longitude;

    /**
     * @ORM\Column(type="string")
     */
    public $difficulty;

    /**
     * @return mixed
     */
    public function getId(): int {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId(int $id): void {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getMissionId(): int {
        return $this->missionId;
    }

    /**
     * @param mixed $missionId
     */
    public function setMissionId(int $missionId): void {
        $this->missionId = $missionId;
    }

    /**
     * @return mixed
     */
    public function getType(): string {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType(string $type): void {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getIcon(): string {
        return $this->icon;
    }

    /**
     * @param mixed $icon
     */
    public function setIcon(string $icon): void {
        $this->icon = $icon;
    }

    /**
     * @return mixed
     */
    public function getName(): string {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName(string $name): void {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getTarget(): string {
        return $this->target;
    }

    /**
     * @param mixed $target
     */
    public function setTarget(string $target): void {
        $this->target = $target;
    }

    /**
     * @return mixed
     */
    public function getLevel(): int {
        return $this->level;
    }

    /**
     * @param mixed $level
     */
    public function setLevel(int $level): void {
        $this->level = $level;
    }

    /**
     * @return mixed
     */
    public function getLatitude(): string {
        return $this->latitude;
    }

    /**
     * @param mixed $latitude
     */
    public function setLatitude(string $latitude): void {
        $this->latitude = $latitude;
    }

    /**
     * @return mixed
     */
    public function getLongitude(): string {
        return $this->longitude;
    }

    /**
     * @param mixed $longitude
     */
    public function setLongitude(string $longitude): void {
        $this->longitude = $longitude;
    }

    /**
     * @return mixed
     */
    public function getDifficulty(): string {
        return $this->difficulty;
    }

    /**
     * @param mixed $difficulty
     */
    public function setDifficulty(string $difficulty): void {
        $this->difficulty = $difficulty;
    }
}
<?php


namespace DataAccess\Models;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="map_floor_to_name")
 */
class MapFloorToName {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    public $id;

    /**
     * @ORM\Column(type="integer", name="mission_id")
     */
    public $missionId;

    /**
     * @ORM\Column(type="integer", name="floor_number")
     */
    public $floorNumber;

    /**
     * @ORM\Column(type="string", name="name_key")
     */
    public $nameKey;

    public function __construct() {
        $this->dateCreated = new \DateTime("now");
    }

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
    public function getFloorNumber() {
        return $this->floorNumber;
    }

    /**
     * @param mixed $floorNumber
     */
    public function setFloorNumber($floorNumber): void {
        $this->floorNumber = $floorNumber;
    }

    /**
     * @return mixed
     */
    public function getNameKey() {
        return $this->nameKey;
    }

    /**
     * @param mixed $nameKey
     */
    public function setNameKey($nameKey): void {
        $this->nameKey = $nameKey;
    }
}

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
     * @ORM\ManyToOne(targetEntity="Mission", inversedBy="floorNames")
     * @ORM\JoinColumn(name="mission_id", referencedColumnName="id")
     */
    public $mission;

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
     * @return Mission
     */
    public function getMission(): Mission {
        return $this->mission;
    }

    /**
     * @param Mission $missionId
     */
    public function setMission(Mission $mission): void {
        $this->mission = $mission;
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

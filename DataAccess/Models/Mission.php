<?php


namespace DataAccess\Models;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="DataAccess\Repositories\MissionRepository")
 * @ORM\Table(name="missions")
 */
class Mission {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="location_id")
     */
    private $locationId;

    /**
     * @ORM\Column(type="integer", name="campaign_id")
     */
    private $campaignId;

    /**
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\Column(type="string")
     */
    private $slug;

    /**
     * @ORM\Column(type="integer")
     */
    private $order;


    /**
     * @ORM\Column(type="string", name="map_folder_name")
     */
    private $mapFolderName;

    /**
     * @ORM\Column(type="string", name="map_center_latitude")
     */
    private $mapCenterLatitude;

    /**
     * @ORM\Column(type="string", name="map_center_longitude")
     */
    private $mapCenterLongitude;

    /**
     * @ORM\Column(type="integer", name="lowest_floor_number")
     */
    private $lowestFloorNumber;

    /**
     * @ORM\Column(type="integer", name="highest_floor_number")
     */
    private $highestFloorNumber;

    /**
     * @ORM\Column(type="integer", name="starting_floor_number")
     */
    private $startingFloorNumber;

    /**
     * @ORM\Column(type="string", name="top_left_coordinate")
     */
    private $topLeftCoordinate;

    /**
     * @ORM\Column(type="string", name="bottom_right_coordinate")
     */
    private $bottomRightCoordinate;

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
    public function getLocationId(): int {
        return $this->locationId;
    }

    /**
     * @param mixed $locationId
     */
    public function setLocationId(int $locationId): void {
        $this->locationId = $locationId;
    }

    /**
     * @return mixed
     */
    public function getCampaignId(): ?int {
        return $this->campaignId;
    }

    /**
     * @param mixed $campaignId
     */
    public function setCampaignId(?int $campaignId): void {
        $this->campaignId = $campaignId;
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
    public function getSlug(): string {
        return $this->slug;
    }

    /**
     * @param mixed $slug
     */
    public function setSlug(string $slug): void {
        $this->slug = $slug;
    }

    /**
     * @return mixed
     */
    public function getOrder(): int {
        return $this->order;
    }

    /**
     * @param mixed $order
     */
    public function setOrder(int $order): void {
        $this->order = $order;
    }

    /**
     * @return mixed
     */
    public function getMapFolderName(): string {
        return $this->mapFolderName;
    }

    /**
     * @param mixed $mapFolderName
     */
    public function setMapFolderName($mapFolderName) {
        $this->mapFolderName = $mapFolderName;
    }



    /**
     * @return mixed
     */
    public function getMapCenterLatitude(): string {
        return $this->mapCenterLatitude;
    }

    /**
     * @param mixed $mapCenterLatitude
     */
    public function setMapCenterLatitude($mapCenterLatitude): void {
        $this->mapCenterLatitude = $mapCenterLatitude;
    }

    /**
     * @return mixed
     */
    public function getMapCenterLongitude(): string {
        return $this->mapCenterLongitude;
    }

    /**
     * @param mixed $mapCenterLongitude
     */
    public function setMapCenterLongitude($mapCenterLongitude): void {
        $this->mapCenterLongitude = $mapCenterLongitude;
    }

    /**
     * @return mixed
     */
    public function getLowestFloorNumber() {
        return $this->lowestFloorNumber;
    }

    /**
     * @param mixed $lowestFloorNumber
     */
    public function setLowestFloorNumber($lowestFloorNumber) {
        $this->lowestFloorNumber = $lowestFloorNumber;
    }

    /**
     * @return mixed
     */
    public function getHighestFloorNumber() {
        return $this->highestFloorNumber;
    }

    /**
     * @param mixed $highestFloorNumber
     */
    public function setHighestFloorNumber($highestFloorNumber) {
        $this->highestFloorNumber = $highestFloorNumber;
    }

    /**
     * @return mixed
     */
    public function getStartingFloorNumber() {
        return $this->startingFloorNumber;
    }

    /**
     * @param mixed $startingFloorNumber
     */
    public function setStartingFloorNumber($startingFloorNumber) {
        $this->startingFloorNumber = $startingFloorNumber;
    }

    /**
     * @return mixed
     */
    public function getTopLeftCoordinate() {
        return $this->topLeftCoordinate;
    }

    /**
     * @param mixed $topLeftCoordinate
     */
    public function setTopLeftCoordinate($topLeftCoordinate) {
        $this->topLeftCoordinate = $topLeftCoordinate;
    }

    /**
     * @return mixed
     */
    public function getBottomRightCoordinate() {
        return $this->bottomRightCoordinate;
    }

    /**
     * @param mixed $bottomRightCoordinate
     */
    public function setBottomRightCoordinate($bottomRightCoordinate) {
        $this->bottomRightCoordinate = $bottomRightCoordinate;
    }
}
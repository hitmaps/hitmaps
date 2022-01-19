<?php


namespace DataAccess\Models;


use BusinessLogic\MissionType;
use DateTime;
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
    public $id;

    /**
     * @ORM\Column(type="integer", name="location_id")
     */
    public $locationId;

    /**
     * @ORM\Column(type="integer", name="campaign_id")
     */
    public $campaignId;

    /**
     * @ORM\Column(type="string")
     */
    public $name;

    /**
     * @ORM\Column(type="string")
     */
    public $slug;

    /**
     * @ORM\Column(type="integer", name="`order`")
     */
    public $order;


    /**
     * @ORM\Column(type="string", name="map_folder_name")
     */
    public $mapFolderName;

    /**
     * @ORM\Column(type="string", name="map_center_latitude")
     */
    public $mapCenterLatitude;

    /**
     * @ORM\Column(type="string", name="map_center_longitude")
     */
    public $mapCenterLongitude;

    /**
     * @ORM\Column(type="integer", name="lowest_floor_number")
     */
    public $lowestFloorNumber;

    /**
     * @ORM\Column(type="integer", name="highest_floor_number")
     */
    public $highestFloorNumber;

    /**
     * @ORM\Column(type="integer", name="starting_floor_number")
     */
    public $startingFloorNumber;

    /**
     * @ORM\Column(type="string", name="top_left_coordinate")
     */
    public $topLeftCoordinate;

    /**
     * @ORM\Column(type="string", name="bottom_right_coordinate")
     */
    public $bottomRightCoordinate;

    /**
     * @ORM\Column(type="boolean", name="satellite_view")
     */
    public $satelliteView;

    /**
     * @ORM\Column(type="datetime", name="begin_effective_date")
     */
    public $beginEffectiveDate;

    /**
     * @ORM\Column(type="datetime", name="end_effective_date")
     */
    public $endEffectiveDate;

    /**
     * @ORM\Column(type="string", name="mission_type")
     */
    public $missionType;

    /**
     * @ORM\OneToMany(targetEntity="MissionVariant", mappedBy="mission", fetch="EAGER")
     * @var $variants Collection
     */
    public $variants;

    /**
     * @ORM\Column(type="string", name="background_url")
     */
    public $backgroundUrl;

    /**
     * @ORM\Column(type="string", name="tile_url")
     */
    public $tileUrl;

    /**
     * @ORM\Column(type="boolean", name="svg")
     */
    public $svg;

    /**
     * @ORM\Column(type="integer", name="min_zoom")
     */
    public $minZoom;

    /**
     * @ORM\Column(type="integer", name="max_zoom")
     */
    public $maxZoom;

    /**
     * @ORM\Column(type="string", name="bounding_box_top_left")
     */
    public $boundingBoxTopLeft;

    /**
     * @ORM\Column(type="string", name="bounding_box_bottom_right")
     */
    public $boundingBoxBottomRight;

    /**
     * @ORM\OneToMany(targetEntity="MapFloorToName", mappedBy="mission", fetch="EAGER")
     * @var $floorNames Collection
     */
    public $floorNames;

    // Not used by Doctrine
    public $icon = '';

    public function setIcon() {
        $this->icon = str_replace(' ', '-', mb_strtolower($this->missionType));

        if ($this->missionType === MissionType::PROLOGUE ||
            $this->missionType === MissionType::BONUS_MISSION ||
            $this->missionType === MissionType::PATIENT_ZERO ||
            $this->missionType === MissionType::SPECIAL_ASSIGNMENT) {
            $this->icon = 'mission';
        }

        if ($this->missionType === MissionType::GHOST_MODE) {
            $this->icon = 'versus';
        }
    }

    public function __construct() {
        $this->variants = new ArrayCollection();
        $this->floorNames = new ArrayCollection();
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

    /**
     * @return mixed
     */
    public function getSatelliteView() {
        return $this->satelliteView;
    }

    /**
     * @param mixed $satelliteView
     */
    public function setSatelliteView($satelliteView): void {
        $this->satelliteView = $satelliteView;
    }

    /**
     * @return DateTime|null
     */
    public function getBeginEffectiveDate() {
        return $this->beginEffectiveDate;
    }

    /**
     * @param mixed $beginEffectiveDate
     */
    public function setBeginEffectiveDate($beginEffectiveDate): void {
        $this->beginEffectiveDate = $beginEffectiveDate;
    }

    /**
     * @return DateTime|null
     */
    public function getEndEffectiveDate() {
        return $this->endEffectiveDate;
    }

    /**
     * @param mixed $endEffectiveDate
     */
    public function setEndEffectiveDate($endEffectiveDate): void {
        $this->endEffectiveDate = $endEffectiveDate;
    }

    /**
     * @return mixed
     */
    public function getMissionType(): string {
        return $this->missionType;
    }

    /**
     * @param mixed $missionType
     */
    public function setMissionType(string $missionType): void {
        $this->missionType = $missionType;
    }

    /**
     * @return Collection
     */
    public function getVariants(): Collection {
        return $this->variants;
    }

    /**
     * @param Collection $variants
     */
    public function setVariants(Collection $variants): void {
        $this->variants = $variants;
    }

    /**
     * @return string
     */
    public function getBackgroundUrl(): string {
        return $this->backgroundUrl;
    }

    /**
     * @param string $backgroundUrl
     */
    public function setBackgroundUrl(string $backgroundUrl): void {
        $this->backgroundUrl = $backgroundUrl;
    }

    /**
     * @return mixed
     */
    public function getTileUrl() {
        return $this->tileUrl;
    }

    /**
     * @param mixed $tileUrl
     */
    public function setTileUrl($tileUrl): void {
        $this->tileUrl = $tileUrl;
    }

    /**
     * @return mixed
     */
    public function getSvg() {
        return $this->svg;
    }

    /**
     * @param mixed $svg
     */
    public function setSvg($svg): void {
        $this->svg = $svg;
    }

    /**
     * @return mixed
     */
    public function getMinZoom() {
        return $this->minZoom;
    }

    /**
     * @param mixed $minZoom
     */
    public function setMinZoom($minZoom): void {
        $this->minZoom = $minZoom;
    }

    /**
     * @return mixed
     */
    public function getMaxZoom() {
        return $this->maxZoom;
    }

    /**
     * @param mixed $maxZoom
     */
    public function setMaxZoom($maxZoom): void {
        $this->maxZoom = $maxZoom;
    }

    /**
     * @return mixed
     */
    public function getBoundingBoxTopLeft() {
        return $this->boundingBoxTopLeft;
    }

    /**
     * @param mixed $boundingBoxTopLeft
     */
    public function setBoundingBoxTopLeft($boundingBoxTopLeft): void {
        $this->boundingBoxTopLeft = $boundingBoxTopLeft;
    }

    /**
     * @return mixed
     */
    public function getBoundingBoxBottomRight() {
        return $this->boundingBoxBottomRight;
    }

    /**
     * @param mixed $boundingBoxBottomRight
     */
    public function setBoundingBoxBottomRight($boundingBoxBottomRight): void {
        $this->boundingBoxBottomRight = $boundingBoxBottomRight;
    }

    /**
     * @return Collection
     */
    public function getFloorNames(): ArrayCollection|Collection {
        return $this->floorNames;
    }

    /**
     * @param Collection $floorNames
     */
    public function setFloorNames(ArrayCollection|Collection $floorNames): void {
        $this->floorNames = $floorNames;
    }
}

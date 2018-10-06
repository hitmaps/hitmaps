<?php


namespace DataAccess\Models;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="DataAccess\Repositories\MissionRepository")
 * @ORM\Table(name="missions")
 */
class Mission {
    /**
     * @ORM\Id @ORM\Column(type="integer) @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="location_id")
     */
    private $locationId;

    /**
     * @ORM\Column(type="integer")
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
}
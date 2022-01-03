<?php


namespace DataAccess\Models;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="mission_to_difficulties")
 */
class MissionVariant {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    public $id;

    /**
     * @ORM\ManyToOne(targetEntity="Mission", inversedBy="variants")
     * @ORM\JoinColumn(name="mission_id", referencedColumnName="id")
     */
    public $mission;

    /**
     * @ORM\Column(type="string", name="difficulty")
     */
    public $variant;

    /**
     * @ORM\Column(type="boolean")
     */
    public $visible;

    /**
     * @ORM\Column(type="string")
     */
    public $icon;

    /**
     * @ORM\Column(type="string")
     */
    public string $slug;

    /**
     * @ORM\Column(type="boolean", name="`default`")
     */
    public bool $default;

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
    public function getMission() {
        return $this->mission;
    }

    /**
     * @param mixed $mission
     */
    public function setMission($mission): void {
        $this->mission = $mission;
    }

    /**
     * @return mixed
     */
    public function getVariant() {
        return $this->variant;
    }

    /**
     * @param mixed $variant
     */
    public function setVariant($variant): void {
        $this->variant = $variant;
    }

    /**
     * @return mixed
     */
    public function isVisible() {
        return $this->visible;
    }

    /**
     * @param mixed $visible
     */
    public function setVisible($visible): void {
        $this->visible = $visible;
    }

    /**
     * @return string|null
     */
    public function getIcon(): ?string {
        return $this->icon;
    }

    /**
     * @param string|null $icon
     */
    public function setIcon(?string $icon): void {
        $this->icon = $icon;
    }

    /**
     * @return string
     */
    public function getSlug(): string {
        return $this->slug;
    }

    /**
     * @param string $slug
     */
    public function setSlug(string $slug): void {
        $this->slug = $slug;
    }

    /**
     * @return bool
     */
    public function isDefault(): bool {
        return $this->default;
    }

    /**
     * @param bool $default
     */
    public function setDefault(bool $default): void {
        $this->default = $default;
    }
}
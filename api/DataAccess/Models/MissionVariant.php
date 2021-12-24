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
}
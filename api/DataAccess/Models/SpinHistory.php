<?php


namespace DataAccess\Models;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;
use Doctrine\ORM\PersistentCollection;

/**
 * @ORM\Entity()
 * @ORM\Table(name="spin_history")
 */
class SpinHistory {
    /**
     * @ORM\Id() @ORM\Column(type="integer") @ORM\GeneratedValue()
     */
    public $id;

    /**
     * @ORM\Column(type="string", nullable=false, name="spin_data")
     */
    public $spinData;

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
    public function getSpinData() {
        return $this->spinData;
    }

    /**
     * @param mixed $spinData
     */
    public function setSpinData($spinData): void {
        $this->spinData = $spinData;
    }
}

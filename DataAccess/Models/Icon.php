<?php


namespace DataAccess\Models;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="icons")
 */
class Icon {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    public $id;

    /**
     * @ORM\Column(type="string")
     */
    public $icon;

    /**
     * @ORM\Column(type="string", name="alt_text")
     */
    public $altText;

    /**
     * @ORM\Column(type="string", name="`group`")
     */
    public $group;

    /**
     * @ORM\Column(type="string", name="`order`")
     */
    public $order;

    /**
     * @return mixed
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id) {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getIcon() {
        return $this->icon;
    }

    /**
     * @param mixed $icon
     */
    public function setIcon($icon): void {
        $this->icon = $icon;
    }

    /**
     * @return mixed
     */
    public function getAltText() {
        return $this->altText;
    }

    /**
     * @param mixed $altText
     */
    public function setAltText($altText): void {
        $this->altText = $altText;
    }

    /**
     * @return mixed
     */
    public function getGroup() {
        return $this->group;
    }

    /**
     * @param mixed $group
     */
    public function setGroup($group): void {
        $this->group = $group;
    }

    /**
     * @return mixed
     */
    public function getOrder() {
        return $this->order;
    }

    /**
     * @param mixed $order
     */
    public function setOrder($order): void {
        $this->order = $order;
    }
}
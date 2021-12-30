<?php


namespace DataAccess\Models;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="items")
 */
class Item {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    public $id;

    /**
     * @ORM\Column(type="string")
     */
    public $name;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public $target;

    /**
     * @ORM\Column(type="string")
     */
    public $description;

    /**
     * @ORM\Column(type="string")
     */
    public $requirement;

    /**
     * @ORM\Column(type="string")
     */
    public $warning;

    /**
     * @ORM\Column(type="string")
     */
    public $information;

    /**
     * @ORM\Column(type="string")
     */
    public $type;

    /**
     * @ORM\Column(type="string")
     */
    public $subgroup;

    /**
     * @ORM\Column(type="string")
     */
    public $icon;

    /**
     * @ORM\Column(type="string", name="`group`")
     */
    public $group;

    /**
     * @ORM\Column(type="boolean")
     */
    public $searchable;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public $image;

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
    public function getName() {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name) {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getTarget() {
        return $this->target;
    }

    /**
     * @param mixed $target
     */
    public function setTarget($target) {
        $this->target = $target;
    }

    /**
     * @return mixed
     */
    public function getDescription() {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description) {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getRequirement() {
        return $this->requirement;
    }

    /**
     * @param mixed $requirement
     */
    public function setRequirement($requirement) {
        $this->requirement = $requirement;
    }

    /**
     * @return mixed
     */
    public function getWarning() {
        return $this->warning;
    }

    /**
     * @param mixed $warning
     */
    public function setWarning($warning) {
        $this->warning = $warning;
    }

    /**
     * @return mixed
     */
    public function getInformation() {
        return $this->information;
    }

    /**
     * @param mixed $information
     */
    public function setInformation($information) {
        $this->information = $information;
    }

    /**
     * @return mixed
     */
    public function getType() {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type) {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getSubgroup() {
        return $this->subgroup;
    }

    /**
     * @param mixed $subgroup
     */
    public function setSubgroup($subgroup) {
        $this->subgroup = $subgroup;
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
    public function getGroup() {
        return $this->group;
    }

    /**
     * @param mixed $group
     */
    public function setGroup($group) {
        $this->group = $group;
    }

    /**
     * @return mixed
     */
    public function getSearchable() {
        return $this->searchable;
    }

    /**
     * @param mixed $searchable
     */
    public function setSearchable($searchable): void {
        $this->searchable = $searchable;
    }

    /**
     * @return mixed
     */
    public function getImage() {
        return $this->image;
    }

    /**
     * @param mixed $image
     */
    public function setImage($image): void {
        $this->image = $image;
    }
}
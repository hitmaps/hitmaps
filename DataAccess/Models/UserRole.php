<?php


namespace DataAccess\Models;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="user_roles")
 */
class UserRole {
    /**
     * @ORM\Id() @ORM\Column(type="integer") @ORM\GeneratedValue()
     */
    private $id;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    private $role;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    private $description;

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
    public function getRole() {
        return $this->role;
    }

    /**
     * @param mixed $role
     */
    public function setRole($role) {
        $this->role = $role;
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
}
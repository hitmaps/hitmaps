<?php


namespace DataAccess\Models;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;
use Doctrine\ORM\PersistentCollection;

/**
 * @ORM\Entity()
 * @ORM\Table(name="users",
 *     uniqueConstraints={@UniqueConstraint(name="email", columns={"email"})})
 */
class User {
    /**
     * @ORM\Id() @ORM\Column(type="integer") @ORM\GeneratedValue()
     */
    private $id;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    private $name;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    private $email;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    private $password;

    /**
     * @ORM\Column(type="string", nullable=true, name="verification_token")
     */
    private $verificationToken;

    /**
     * @ORM\Column(type="string", nullable=true, name="password_reset_token")
     */
    private $passwordResetToken;

    /**
     * @ORM\ManyToMany(targetEntity="UserRole", fetch="EAGER")
     * @ORM\JoinTable(name="user_to_user_roles",
     *     joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="role_id", referencedColumnName="id", unique=true)})
     */
    private $roles;

    public function __construct() {
        $this->roles = new ArrayCollection();
    }

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
    public function getEmail() {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email) {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getPassword() {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password) {
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getVerificationToken() {
        return $this->verificationToken;
    }

    /**
     * @param mixed $verificationToken
     */
    public function setVerificationToken($verificationToken) {
        $this->verificationToken = $verificationToken;
    }

    /**
     * @return mixed
     */
    public function getPasswordResetToken() {
        return $this->passwordResetToken;
    }

    /**
     * @param mixed $passwordResetToken
     */
    public function setPasswordResetToken($passwordResetToken) {
        $this->passwordResetToken = $passwordResetToken;
    }

    /**
     * @return mixed
     */
    public function getRoles() {
        return $this->roles;
    }

    public function getRolesAsInts() {
        $array = [];

        /* @var $role UserRole */
        foreach ($this->roles->toArray() as $role) {
            $array[] = $role->getId();
        }

        return $array;
    }

    /**
     * @param $roles mixed
     */
    public function setRoles($roles) {
        $this->roles = $roles;
    }
}
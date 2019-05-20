<?php


namespace DataAccess\Models;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="user_auth_tokens")
 */
class UserAuthToken {
    /**
     * @ORM\Id() @ORM\Column(type="integer") @ORM\GeneratedValue()
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    private $user_id;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    private $token;

    /**
     * @ORM\Column(type="datetime", nullable=false)
     */
    private $expiration;

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
    public function getUserId(): int {
        return $this->user_id;
    }

    /**
     * @param mixed $user_id
     */
    public function setUserId(int $user_id): void {
        $this->user_id = $user_id;
    }

    /**
     * @return mixed
     */
    public function getToken(): string {
        return $this->token;
    }

    /**
     * @param mixed $token
     */
    public function setToken(string $token): void {
        $this->token = $token;
    }

    /**
     * @return mixed
     */
    public function getExpiration(): \DateTime {
        return $this->expiration;
    }

    /**
     * @param mixed $expiration
     */
    public function setExpiration(\DateTime $expiration): void {
        $this->expiration = $expiration;
    }
}
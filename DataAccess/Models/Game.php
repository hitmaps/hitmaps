<?php

namespace DataAccess\Models;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="games")
 */
class Game {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $slug;

    /**
     * @ORM\Column(type="string", name="full_name")
     */
    private $fullName;

    /**
     * @ORM\Column(type="string")
     */
    private $tagline;

    /**
     * @return mixed
     */
    public function getId(): int {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId(int $id): void {
        $this->id = $id;
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
    public function getFullName(): string {
        return $this->fullName;
    }

    /**
     * @param mixed $fullName
     */
    public function setFullName(string $fullName): void {
        $this->fullName = $fullName;
    }

    /**
     * @return mixed
     */
    public function getTagline(): string {
        return $this->tagline;
    }

    /**
     * @param mixed $tagline
     */
    public function setTagline(string $tagline): void {
        $this->tagline = $tagline;
    }
}
<?php

namespace DataAccess\Models;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="DataAccess\Repositories\LocationRepository")
 * @ORM\Table(name="locations")
 */
class Location {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $game;

    /**
     * @ORM\Column(type="string")
     */
    private $destination;

    /**
     * @ORM\Column(type="string", name="destination_country")
     */
    private $destinationCountry;

    /**
     * @ORM\Column(type="integer")
     */
    private $order;

    /**
     * @ORM\Column(type="string")
     */
    private $slug;

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
    public function getGame(): string {
        return $this->game;
    }

    /**
     * @param mixed $game
     */
    public function setGame($game): void {
        $this->game = $game;
    }

    /**
     * @return mixed
     */
    public function getDestination(): string {
        return $this->destination;
    }

    /**
     * @param mixed $destination
     */
    public function setDestination($destination): void {
        $this->destination = $destination;
    }

    /**
     * @return mixed
     */
    public function getDestinationCountry(): string {
        return $this->destinationCountry;
    }

    /**
     * @param mixed $destinationCountry
     */
    public function setDestinationCountry($destinationCountry): void {
        $this->destinationCountry = $destinationCountry;
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
    public function setOrder(int $order) {
        $this->order = $order;
    }

    /**
     * @return mixed
     */
    public function getSlug() {
        return $this->slug;
    }

    /**
     * @param mixed $slug
     */
    public function setSlug($slug) {
        $this->slug = $slug;
    }
}
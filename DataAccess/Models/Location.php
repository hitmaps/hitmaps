<?php

namespace Models;

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
    private $mapFolderName;

    /**
     * @ORM\Column(type="string")
     */
    private $destination;

    /**
     * @ORM\Column(type="string")
     */
    private $destinationCountry;

    /**
     * @ORM\Column(type="string")
     */
    private $mapCenterLatitude;

    /**
     * @ORM\Column(type="string")
     */
    private $mapCenterLongitude;

    /**
     * @ORM\Column(type="integer")
     */
    private $order;

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
    public function getMapFolderName(): string {
        return $this->mapFolderName;
    }

    /**
     * @param mixed $mapFolderName
     */
    public function setMapFolderName($mapFolderName) {
        $this->mapFolderName = $mapFolderName;
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
    public function getMapCenterLatitude(): string {
        return $this->mapCenterLatitude;
    }

    /**
     * @param mixed $mapCenterLatitude
     */
    public function setMapCenterLatitude($mapCenterLatitude): void {
        $this->mapCenterLatitude = $mapCenterLatitude;
    }

    /**
     * @return mixed
     */
    public function getMapCenterLongitude(): string {
        return $this->mapCenterLongitude;
    }

    /**
     * @param mixed $mapCenterLongitude
     */
    public function setMapCenterLongitude($mapCenterLongitude): void {
        $this->mapCenterLongitude = $mapCenterLongitude;
    }
}
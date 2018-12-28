<?php

namespace DataAccess\Models;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="DataAccess\Repositories\ElusiveTargetRepository")
 * @ORM\Table(name="elusive_targets")
 */
class ElusiveTarget {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\Column(type="integer", name="mission_id")
     */
    private $missionId;

    /**
     * @ORM\Column(type="string")
     */
    private $briefing;

    /**
     * @ORM\Column(type="string", name="video_briefing_url")
     */
    private $videoBriefingUrl;

    /**
     * @ORM\Column(type="datetime", name="beginning_time")
     */
    private $beginningTime;

    /**
     * @ORM\Column(type="datetime", name="ending_time")
     */
    private $endingTime;

    /**
     * @ORM\Column(type="string", name="image_url")
     */
    private $imageUrl;

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
    public function getName(): string {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName(string $name): void {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getMissionId() {
        return $this->missionId;
    }

    /**
     * @param mixed $missionId
     */
    public function setMissionId($missionId): void {
        $this->missionId = $missionId;
    }

    /**
     * @return mixed
     */
    public function getBriefing() {
        return $this->briefing;
    }

    /**
     * @param mixed $briefing
     */
    public function setBriefing($briefing): void {
        $this->briefing = $briefing;
    }

    /**
     * @return mixed
     */
    public function getVideoBriefingUrl() {
        return $this->videoBriefingUrl;
    }

    /**
     * @param mixed $videoBriefingUrl
     */
    public function setVideoBriefingUrl($videoBriefingUrl): void {
        $this->videoBriefingUrl = $videoBriefingUrl;
    }

    /**
     * @return mixed
     */
    public function getBeginningTime() {
        return $this->beginningTime;
    }

    /**
     * @param mixed $beginningTime
     */
    public function setBeginningTime($beginningTime): void {
        $this->beginningTime = $beginningTime;
    }

    /**
     * @return mixed
     */
    public function getEndingTime() {
        return $this->endingTime;
    }

    /**
     * @param mixed $endingTime
     */
    public function setEndingTime($endingTime): void {
        $this->endingTime = $endingTime;
    }

    /**
     * @return mixed
     */
    public function getImageUrl() {
        return $this->imageUrl;
    }

    /**
     * @param mixed $imageUrl
     */
    public function setImageUrl($imageUrl): void {
        $this->imageUrl = $imageUrl;
    }
}
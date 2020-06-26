<?php


namespace DataAccess\Models;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;
use Doctrine\ORM\PersistentCollection;

/**
 * @ORM\Entity()
 * @ORM\Table(name="roulette_matchups")
 */
class RouletteMatchup {
    /**
     * @ORM\Id() @ORM\Column(type="integer") @ORM\GeneratedValue()
     */
    public $id;

    /**
     * @ORM\Column(type="string", nullable=false, name="matchup_id")
     */
    public $matchupId;

    /**
     * @ORM\Column(type="string", nullable=false, name="player_one_name")
     */
    public $playerOneName;

    /**
     * @ORM\Column(type="string", nullable=false, name="player_two_name")
     */
    public $playerTwoName;

    /**
     * @ORM\Column(type="string", nullable=true, name="matchup_data")
     */
    public $matchupData;

    /**
     * @ORM\Column(type="string", nullable=true, name="player_one_last_ping")
     */
    public $playerOneLastPing;

    /**
     * @ORM\Column(type="string", nullable=true, name="player_two_last_ping")
     */
    public $playerTwoLastPing;

    /**
     * @ORM\Column(type="datetime", nullable=true, name="spin_time")
     */
    public $spinTime;

    /**
     * @ORM\Column(type="string", nullable=true, name="match_length")
     */
    public $matchLength;

    // Used for API
    public $currentTime;
    public $remainingTimeInSeconds;
    public $showTimer;
    public $pretime;
    public $remainingPretimeInSeconds;
    public $formattedSpinTime;

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
    public function getMatchupId() {
        return $this->matchupId;
    }

    /**
     * @param mixed $matchupId
     */
    public function setMatchupId($matchupId): void {
        $this->matchupId = $matchupId;
    }

    /**
     * @return mixed
     */
    public function getPlayerOneName() {
        return $this->playerOneName;
    }

    /**
     * @param mixed $playerOneName
     */
    public function setPlayerOneName($playerOneName): void {
        $this->playerOneName = $playerOneName;
    }

    /**
     * @return mixed
     */
    public function getPlayerTwoName() {
        return $this->playerTwoName;
    }

    /**
     * @param mixed $playerTwoName
     */
    public function setPlayerTwoName($playerTwoName): void {
        $this->playerTwoName = $playerTwoName;
    }

    /**
     * @return mixed
     */
    public function getMatchupData() {
        return $this->matchupData;
    }

    /**
     * @param mixed $matchupData
     */
    public function setMatchupData($matchupData): void {
        $this->matchupData = $matchupData;
    }

    /**
     * @return mixed
     */
    public function getPlayerOneLastPing() {
        return $this->playerOneLastPing;
    }

    /**
     * @param mixed $playerOneLastPing
     */
    public function setPlayerOneLastPing($playerOneLastPing): void {
        $this->playerOneLastPing = $playerOneLastPing;
    }

    /**
     * @return mixed
     */
    public function getPlayerTwoLastPing() {
        return $this->playerTwoLastPing;
    }

    /**
     * @param mixed $playerTwoLastPing
     */
    public function setPlayerTwoLastPing($playerTwoLastPing): void {
        $this->playerTwoLastPing = $playerTwoLastPing;
    }

    /**
     * @return \DateTime
     */
    public function getSpinTime() {
        return $this->spinTime;
    }

    /**
     * @param mixed $spinTime
     */
    public function setSpinTime($spinTime): void {
        $this->spinTime = $spinTime;
    }

    /**
     * @return mixed
     */
    public function getMatchLength() {
        return $this->matchLength;
    }

    /**
     * @param mixed $matchLength
     */
    public function setMatchLength($matchLength): void {
        $this->matchLength = $matchLength;
    }
}

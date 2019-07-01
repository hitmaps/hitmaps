<?php

namespace ViewModels;


use BusinessLogic\Game;
use BusinessLogic\MissionType;
use Controllers\ViewModels\BaseModel;

class GameMapViewModel extends BaseModel {
    public $game;
    public $locationNameOne;
    public $locationNameTwo;
    public $locationSlug;
    public $mapFolderName;
    public $missionId;
    public $mission;
    public $missionType;
    public $missionSlug;
    public $tileLocation;
    public $difficulty;

    public $mapCenterLongitude;
    public $mapCenterLatitude;
    public $topLeftCoordinate;
    public $bottomRightCoordinate;
    public $lowestFloor;
    public $highestFloor;
    public $startingFloor;
    public $satelliteView;

    public $editorTitle;
    public $canDeleteNodes;

    public $nodes;
    public $searchableNodes;
    public $nodeCategories;
    public $predeterminedItems;
    public $icons;
    public $disguises;

    public function setTileLocation() {
        if ($this->missionType !== MissionType::ELUSIVE_TARGET) {
            $this->tileLocation = "{$this->pngBackgroundFileExtension}/mission-thumbnails/{$this->game}/{$this->missionSlug}.{$this->pngBackgroundFileExtension}";
            return;
        }

        if ($this->game === Game::HITMAN) {
            $this->tileLocation = "jpg/elusive-targets/legacy/{$this->missionSlug}.jpg";
            return;
        }

        $this->tileLocation = "jpg/elusive-targets/{$this->missionSlug}.jpg";
        return;
    }

    public function setIcon() {
        $this->icon = str_replace(' ', '-', mb_strtolower($this->missionType));

        if ($this->missionType === MissionType::PROLOGUE ||
            $this->missionType === MissionType::BONUS_MISSION ||
            $this->missionType === MissionType::PATIENT_ZERO ||
            $this->missionType === MissionType::SPECIAL_ASSIGNMENT) {
            $this->icon = 'mission';
        }
    }

}
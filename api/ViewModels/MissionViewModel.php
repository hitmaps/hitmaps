<?php

namespace ViewModels;


use BusinessLogic\Game;
use BusinessLogic\MissionType;
use Controllers\ViewModels\BaseModel;

class MissionViewModel extends BaseModel {
    /* @var $name string */
    public $name;

    /* @var $game string */
    public $game;

    /* @var $campaign string */
    public $campaign;

    /* @var $slug string */
    public $slug;

    /* @var $missionType string */
    public $missionType;

    /* @var $difficulties string[] */
    public $difficulties;

    /* @var $tileLocation string */
    public $tileLocation;

    /* @var $icon string */
    public $icon;

    public function setTileLocation() {
        if ($this->missionType !== MissionType::ELUSIVE_TARGET) {
            $this->tileLocation = "{$this->pngBackgroundFileExtension}/mission-thumbnails/{$this->game}/{$this->slug}.{$this->pngBackgroundFileExtension}";
            return;
        }

        if ($this->game === Game::HITMAN) {
            $this->tileLocation = "jpg/elusive-targets/legacy/{$this->slug}.jpg";
            return;
        }

        $this->tileLocation = "jpg/elusive-targets/{$this->slug}.jpg";
        return;
    }
    
    public function setIcon() {
        $this->icon = str_replace(' ', '-', mb_strtolower($this->missionType));

        if ($this->missionType === MissionType::PROLOGUE ||
            $this->missionType === MissionType::BONUS_MISSION ||
            $this->missionType === MissionType::PATIENT_ZERO) {
            $this->icon = 'mission';
        }
    }

}
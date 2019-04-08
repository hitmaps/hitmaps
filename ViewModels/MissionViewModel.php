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
}
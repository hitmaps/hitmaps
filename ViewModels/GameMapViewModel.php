<?php

namespace ViewModels;


use Controllers\ViewModels\BaseModel;

class GameMapViewModel extends BaseModel {
    public $game;
    public $locationNameOne;
    public $locationNameTwo;
    public $mapFolderName;
    public $missionId;
    public $mission;
    public $difficulty;

    public $mapCenterLongitude;
    public $mapCenterLatitude;
    public $lowestFloor;
    public $highestFloor;
    public $startingFloor;

    public $editorTitle;

    // TODO
    public $nodes;
    public $disguises; // ?
}
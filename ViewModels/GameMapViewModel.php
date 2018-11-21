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
    public $topLeftCoordinate;
    public $bottomRightCoordinate;
    public $lowestFloor;
    public $highestFloor;
    public $startingFloor;

    public $editorTitle;
    public $canDeleteNodes;

    // TODO
    public $nodes;
    public $disguises; // ?
}
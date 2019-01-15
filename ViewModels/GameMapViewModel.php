<?php

namespace ViewModels;


use Controllers\ViewModels\BaseModel;

class GameMapViewModel extends BaseModel {
    public $game;
    public $locationNameOne;
    public $locationNameTwo;
    public $locationSlug;
    public $mapFolderName;
    public $missionId;
    public $mission;
    public $missionSlug;
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

    public $nodes;
    public $searchableNodes;
    public $nodeCategories;
    public $predeterminedItems;
    public $icons;
    public $disguises;
}
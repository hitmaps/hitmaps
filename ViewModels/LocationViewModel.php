<?php

namespace ViewModels;


use Controllers\ViewModels\BaseModel;

class LocationViewModel extends BaseModel {
    /* @var $slug string */
    public $slug;

    /* @var $name string */
    public $name;

    /* @var $country string */
    public $country;

    /* @var $game string */
    public $game;

    /* @var $missions MissionViewModel[] */
    public $missions;
}
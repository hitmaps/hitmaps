<?php

namespace ViewModels;


use Controllers\ViewModels\BaseModel;

class MissionViewModel extends BaseModel {
    /* @var $name string */
    public $name;

    /* @var $campaign string */
    public $campaign;

    /* @var $slug string */
    public $slug;

    /* @var $difficulties string[] */
    public $difficulties;
}
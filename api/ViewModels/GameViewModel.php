<?php
namespace ViewModels;


use Controllers\ViewModels\BaseModel;

class GameViewModel extends BaseModel {
    /* @var $slug string */
    public $slug;

    /* @var $fullName string */
    public $fullName;

    /* @var $tagline string */
    public $tagline;

    /* @var $type string */
    public $type;

    /* @var $icon string */
    public $icon;

    /* @var $locations LocationViewModel[] */
    public $locations;
}
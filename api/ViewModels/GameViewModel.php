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

    /* @var $locations LocationViewModel[] */
    public $locations;
}
<?php

namespace ViewModels;


use Controllers\ViewModels\BaseModel;

class HomeViewModel extends BaseModel {
    public $games = [];
    public $elusiveTarget;
}
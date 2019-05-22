<?php


namespace Controllers\ViewModels;


use BusinessLogic\Session\Session;
use BusinessLogic\Session\SessionException;
use DataAccess\Models\User;

class ApiResponseModel {
    public $token;
    public $data;
}
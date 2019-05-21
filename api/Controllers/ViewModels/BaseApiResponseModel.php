<?php


namespace Controllers\ViewModels;


use BusinessLogic\Session\Session;
use BusinessLogic\Session\SessionException;
use DataAccess\Models\User;

class BaseApiResponseModel {
    public $messages = [];
    public $token;
    public $data;

    public function __construct() {

    }
}
<?php


namespace Controllers\ViewModels;


use BusinessLogic\Session\Session;
use BusinessLogic\Session\SessionException;
use DataAccess\Models\User;

class BaseModel {
    public $messages = [];
    public $loggedIn = false;
    public $userContext;

    public function __construct() {
        try {
            Session::start();
            /* @var $userContext User */
            $this->userContext = Session::read('userContext');
            $this->loggedIn = true;
            //$this->admin = $userContext->admin;
        } catch (SessionException $e) {
            $this->loggedIn = false;
            $this->admin = false;
        }
    }
}
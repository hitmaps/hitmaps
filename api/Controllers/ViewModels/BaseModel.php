<?php


namespace Controllers\ViewModels;


use BusinessLogic\Session\Session;
use BusinessLogic\Session\SessionException;
use DataAccess\Models\User;

class BaseModel {
    public $messages = [];
    public $loggedIn = false;
    public $userContext;
    public $referer;
    public $pngBackgroundFileExtension = 'png';
    public $jpgBackgroundFileExtension = 'jpg';

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

        if (isset($_SERVER['HTTP_REFERER'])) {
            $this->referer = $_SERVER['HTTP_REFERER'];
        } else {
            $this->referer = '/';
        }

        if (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'image/webp') !== false) {
            $this->pngBackgroundFileExtension = 'webp';
            $this->jpgBackgroundFileExtension = 'webp';
        }
    }
}
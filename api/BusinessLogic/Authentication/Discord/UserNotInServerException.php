<?php


namespace BusinessLogic\Authentication\Discord;


use Throwable;

class UserNotInServerException extends \Exception {
    public function __construct() {
        parent::__construct("User is not in the HITMAPS™ Discord Server");
    }
}
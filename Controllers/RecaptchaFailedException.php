<?php


namespace Controllers;


class RecaptchaFailedException extends \Exception {
    public function __construct() {
        parent::__construct("Recaptcha failed");
    }
}
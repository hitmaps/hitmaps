<?php

namespace Controllers;



use BusinessLogic\Authentication\LoginUserService;
use BusinessLogic\Authentication\RegisterNewUserCommand;
use BusinessLogic\Authentication\VerifyUserCommand;
use Config\Constants;
use Config\Settings;
use Controllers\ViewModels\BaseModel;
use ReCaptcha\ReCaptcha;
use ReCaptcha\RequestMethod\CurlPost;

class AuthenticationController {
    private $loginUserService;

    public function __construct(LoginUserService $loginUserService) {
        $this->loginUserService = $loginUserService;
    }

    public function loginUser(string $email,
                       string $password) {
        return $this->loginUserService->loginWithUserAndPassword($email, $password);
    }
}

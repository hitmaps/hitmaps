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
    private $registerNewUserCommand;
    private $loginUserService;
    private $verifyUserCommand;

    public function __construct(RegisterNewUserCommand $registerNewUserCommand,
                                LoginUserService $loginUserService,
                                VerifyUserCommand $verifyUserCommand) {
        $this->registerNewUserCommand = $registerNewUserCommand;
        $this->loginUserService = $loginUserService;
        $this->verifyUserCommand = $verifyUserCommand;
    }

    public function loginUser(string $email,
                       string $password) {
        return $this->loginUserService->loginWithUserAndPassword($email, $password);
    }
}

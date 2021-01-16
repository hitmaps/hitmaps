<?php

namespace Controllers;



use BusinessLogic\Authentication\LoginUserService;

class AuthenticationController {
    private $loginUserService;

    public function __construct(LoginUserService $loginUserService) {
        $this->loginUserService = $loginUserService;
    }

    public function loginUser(string $tokenType, string $accessToken) {
        return $this->loginUserService->loginWithDiscordToken($tokenType, $accessToken);
    }
}

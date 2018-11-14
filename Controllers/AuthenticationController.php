<?php

namespace Controllers;



use BusinessLogic\SteamHandler;

class AuthenticationController {
    function getSignInButton() {
        return SteamHandler::generateLoginLink();
    }

    function handleSteamLogin() {
        return SteamHandler::getSteam64Id();
    }
}
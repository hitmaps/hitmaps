<?php


namespace BusinessLogic\Authentication\Discord;


class DiscordAuthenticationException extends \Exception {
    public function __construct(string $uri, int $statusCode) {
        parent::__construct("Discord call to '{$uri}' failed with status: {$statusCode}");
    }
}
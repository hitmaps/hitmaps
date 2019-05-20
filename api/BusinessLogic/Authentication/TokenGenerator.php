<?php

namespace BusinessLogic\Authentication;


use BusinessLogic\AuthTokenWithExpiration;

class TokenGenerator {
    public function generateToken(): AuthTokenWithExpiration {
        $tokenWithExpiration = new AuthTokenWithExpiration();
        $tokenWithExpiration->token = bin2hex(openssl_random_pseudo_bytes(32));
        $tokenWithExpiration->expiration = $this->getTokenExpiration();

        return $tokenWithExpiration;
    }

    public function getTokenExpiration(): \DateTime {
        $currentTime = new \DateTime('now', new \DateTimeZone('UTC'));

        return $currentTime->modify('2 hours');
    }
}
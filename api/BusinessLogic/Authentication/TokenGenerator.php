<?php

namespace BusinessLogic\Authentication;


use Config\JwtConfig;
use Firebase\JWT\JWT;

class TokenGenerator {
    public function generateToken(): string {
        $config = new JwtConfig();

        $now = new \DateTime('now', new \DateTimeZone('UTC'));
        $token = [
            'iss' => $config->issuer,
            'aud' => $config->audience,
            'iat' => $now,
            'nbf' => $now,
            'exp' => $this->getTokenExpiration($now)
        ];

        return JWT::encode($token, $config->key);
    }

    public function getTokenExpiration(\DateTime $currentTime): \DateTime {
        $currentTime = new \DateTime('now', new \DateTimeZone('UTC'));

        return $currentTime->modify('2 hours');
    }
}
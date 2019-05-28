<?php

namespace BusinessLogic\Authentication;


use BusinessLogic\Session\ExpiredSessionException;
use Config\JwtConfig;
use DataAccess\Models\User;
use Firebase\JWT\JWT;

class TokenGenerator {
    public function generateToken(User $user): string {
        $config = new JwtConfig();

        $now = new \DateTimeImmutable('now', new \DateTimeZone('UTC'));
        $token = [
            'iss' => $config->issuer,
            'aud' => $config->audience,
            'iat' => $now,
            'nbf' => $now,
            'exp' => $this->getTokenExpiration($now),
            'data' => serialize($user)
        ];

        return JWT::encode($token, $config->key);
    }

    public function getTokenExpiration(\DateTimeImmutable $currentTime): \DateTimeImmutable {
        return $currentTime->modify('2 hours');
    }

    public function validateAndRenewToken(string $token): string {
        $config = new JwtConfig();

        if ($token === null) {
            return null;
        }

        try {
            $decodedToken = JWT::decode($token, $config->key);
            return $this->generateToken(unserialize($decodedToken->data));
        } catch (\Exception $e) {
            throw new ExpiredSessionException();
        }
    }
}
<?php

namespace BusinessLogic\Authentication;


use BusinessLogic\Session\ExpiredSessionException;
use Config\JwtConfig;
use DataAccess\Models\User;
use Doctrine\ORM\EntityManager;
use Firebase\JWT\JWT;

class TokenGenerator {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function generateToken(User $user): string {
        $config = new JwtConfig();

        $now = new \DateTimeImmutable('now', new \DateTimeZone('UTC'));
        $token = [
            'iss' => $config->issuer,
            'aud' => $config->audience,
            'iat' => $now->getTimestamp(),
            'nbf' => $now->getTimestamp(),
            'exp' => $this->getTokenExpiration($now)->getTimestamp(),
            'data' => $user->getId()
        ];

        return JWT::encode($token, $config->key, 'HS256');
    }

    public function getTokenExpiration(\DateTimeImmutable $currentTime): \DateTimeImmutable {
        return $currentTime->modify('2 hours');
    }

    public function validate(?string $token): ?User {
        $config = new JwtConfig();

        if ($token === null) {
            return null;
        }

        try {
            $decodedToken = JWT::decode($token, $config->key, ['HS256']);

            // PhpStorm doesn't realize that the object being returned is correct
            return $this->entityManager->getRepository(User::class)->findOneBy(['id' => $decodedToken->data]);
        } catch (\Exception $e) {
            var_dump($e->getMessage());
            throw new ExpiredSessionException();
        }
    }

    public function validateAndRenewToken(?string $token): ?string {
        if ($token === null) {
            return null;
        }

        return $this->generateToken($this->validate($token));
    }
}
<?php

namespace BusinessLogic\Authentication;


use BusinessLogic\AuthTokenWithExpiration;
use BusinessLogic\Session\Session;
use DataAccess\Models\User;
use DataAccess\Models\UserAuthToken;
use Doctrine\ORM\EntityManager;

class LoginUserService {
    private $entityManager;
    private $tokenGenerator;

    public function __construct(EntityManager $entityManager,
                                TokenGenerator $tokenGenerator) {
        $this->entityManager = $entityManager;
        $this->tokenGenerator = $tokenGenerator;
    }

    public function loginWithUserAndPassword(string $email, string $password): AuthTokenWithExpiration {
        /* @var $user User|null */
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email, 'verificationToken' => null]);

        if ($user === null || !password_verify($password, $user->getPassword())) {
            throw new LoginFailedException();
        }

        $tokenWithExpiration = $this->tokenGenerator->generateToken();

        $authTokenWithExpiration = new AuthTokenWithExpiration();
        $authTokenWithExpiration->token = $tokenWithExpiration->token;
        $authTokenWithExpiration->expiration = $tokenWithExpiration->expiration;
        $hashedToken = new UserAuthToken();
        $hashedToken->setUserId($user->getId());
        $hashedToken->setToken(hash('sha512', $tokenWithExpiration->token));
        $hashedToken->setExpiration($tokenWithExpiration->expiration);
        $this->entityManager->persist($hashedToken);
        $this->entityManager->flush();

        return $authTokenWithExpiration;
    }
}
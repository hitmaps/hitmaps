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

    public function loginWithUserAndPassword(string $email, string $password): string {
        /* @var $user User|null */
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email, 'verificationToken' => null]);

        if ($user === null || !password_verify($password, $user->getPassword())) {
            throw new LoginFailedException();
        }

        return $this->tokenGenerator->generateToken($user);
    }
}
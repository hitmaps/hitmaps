<?php

namespace BusinessLogic\Authentication;


use BusinessLogic\Session\Session;
use DataAccess\Models\User;
use Doctrine\ORM\EntityManager;

class LoginUserService {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function loginWithUserAndPassword(string $email, string $password) {
        /* @var $user User|null */
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email, 'verificationToken' => null]);

        if ($user === null || !password_verify($password, $user->getPassword())) {
            throw new LoginFailedException();
        }

        Session::start();
        Session::write($user, 'userContext');
    }
}
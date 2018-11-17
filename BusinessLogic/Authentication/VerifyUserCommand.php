<?php

namespace BusinessLogic\Authentication;


use DataAccess\Models\User;
use Doctrine\ORM\EntityManager;

class VerifyUserCommand {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function execute(string $token): bool {
        /* @var $user User|null */
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['verificationToken' => $token]);

        if ($user === null) {
            return false;
        }

        $user->setVerificationToken(null);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return true;
    }
}
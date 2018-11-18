<?php


namespace BusinessLogic\Authentication;


use DataAccess\Models\User;
use Doctrine\ORM\EntityManager;

class VerifyPasswordResetTokenCommand {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    function execute(string $email, string $token) {
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email, 'passwordResetToken' => $token]);

        return $user !== null;
    }
}
<?php


namespace BusinessLogic\Authentication;


use DataAccess\Models\User;
use Doctrine\ORM\EntityManager;

class UpdateUserPasswordCommand {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function execute(string $email,
                            ?string $oldPassword,
                            string $newPassword) {
        /* @var $user User */
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email]);
        if ($user === null) {
            throw new \Exception("User not found with email " . $email);
        }

        if ($oldPassword !== null && !password_verify($oldPassword, $user->getPassword())) {
            throw new \Exception("Current password is incorrect.");
        }

        $newHashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);
        $user->setPassword($newHashedPassword);
        $user->setPasswordResetToken(null);
        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }
}
<?php


namespace BusinessLogic\Authentication;


use DataAccess\Models\User;
use Doctrine\ORM\EntityManager;

class UpdateProfileCommand {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function execute(string $email, string $name): User {
        /* @var $user User|null */
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email]);

        if ($user === null) {
            throw new \Exception("Could not find user with email '{$email}'");
        }

        $user->setName($name);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return $user;
    }
}
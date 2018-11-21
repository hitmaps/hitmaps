<?php

namespace BusinessLogic\Authentication;


use BusinessLogic\Emailer;
use DataAccess\Models\User;
use DataAccess\Models\UserRole;
use Doctrine\ORM\EntityManager;

class RegisterNewUserCommand {
    private $entityManager;
    private $emailer;

    public function __construct(EntityManager $entityManager,
                                Emailer $emailer) {
        $this->entityManager = $entityManager;
        $this->emailer = $emailer;
    }

    public function execute(string $name, string $email, string $password, \Twig_Environment $twig): void {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $verificationToken = sha1($name . $email . uniqid());

        $user = new User();
        $user->setName($name);
        $user->setPassword($hashedPassword);
        $user->setEmail($email);
        $user->setVerificationToken($verificationToken);
        $role = $this->entityManager->getRepository(UserRole::class)->findOneBy(['id' => 2]);
        $user->getRoles()->add($role);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $model = new \stdClass();
        $model->verificationToken = $verificationToken;
        $model->name = $name;
        $model->email = $email;
        $this->emailer->sendEmail('email/user/verify-account.twig', $model, $email, $twig);
    }
}
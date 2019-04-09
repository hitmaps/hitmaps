<?php


namespace BusinessLogic\Authentication;


use BusinessLogic\Emailer;
use DataAccess\Models\User;
use Doctrine\ORM\EntityManager;

class GeneratePasswordResetCommand {
    private $entityManager;
    private $emailer;

    public function __construct(EntityManager $entityManager,
                                Emailer $emailer) {
        $this->entityManager = $entityManager;
        $this->emailer = $emailer;
    }

    public function execute(string $email, \Twig_Environment $twig) {
        $resetToken = sha1(uniqid() . $email . uniqid());

        /* @var $user User|null */
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email]);
        if ($user === null) {
            return;
        }

        $user->setPasswordResetToken($resetToken);

        $emailModel = new \stdClass();
        $emailModel->name = $user->getName();
        $emailModel->email = $user->getEmail();
        $emailModel->resetToken = $resetToken;

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $this->emailer->sendEmail('email/user/reset-password.twig', $emailModel, $user->getEmail(), $twig);
    }
}
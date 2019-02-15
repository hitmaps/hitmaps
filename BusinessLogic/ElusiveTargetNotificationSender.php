<?php
namespace BusinessLogic;


use Config\Settings;
use DataAccess\Models\ElusiveTarget;
use DataAccess\Repositories\ElusiveTargetRepository;
use Doctrine\ORM\EntityManager;

class ElusiveTargetNotificationSender {
    private $firebaseClient;
    private $entityManager;

    public function __construct(FirebaseClient $firebaseClient,
                                EntityManager $entityManager) {
        $this->firebaseClient = $firebaseClient;
        $this->entityManager = $entityManager;
    }

    public function sendElusiveTargetNotification() {
        // Get the active ET from the database
        /* @var $elusiveTargetRepository ElusiveTargetRepository */
        $elusiveTargetRepository = $this->entityManager->getRepository(ElusiveTarget::class);
        $elusiveTarget = $elusiveTargetRepository->getLatestElusiveTarget();

        // If all notifications have been sent, quit.
        if ($elusiveTarget->getComingNotificationSent() &&
            $elusiveTarget->getPlayableNotificationSent() &&
            $elusiveTarget->getSevenDaysLeftNotificationSent() &&
            $elusiveTarget->getFiveDaysLeftNotificationSent() &&
            $elusiveTarget->getThreeDaysLeftNotificationSent() &&
            $elusiveTarget->getOneDayLeftNotificationSent() &&
            $elusiveTarget->getEndNotificationSent()) {
            return;
        }

        // If an ET is coming up and no notification has been sent, send out the notification
        $settings = new Settings();
        $environment = $settings->loggingEnvironment;
        $beginningDate = $elusiveTarget->getBeginningTime()->format('F j, Y');

        if (!$elusiveTarget->getComingNotificationSent()) {
            $title = "Elusive Target Arriving";
            $body = "{$elusiveTarget->getName()} is arriving on {$beginningDate} and will be available for # days!";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-coming", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png');

            $elusiveTarget->setComingNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }

        // If it is expiring in X days, and the notification hasn't been sent out, send it out. ONLY SEND THE FIRST ONE THAT MEETS THE CRITERIA

        // Save updated ET information
    }
}
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

        if ($this->allNotificationsSent($elusiveTarget)) {
            return;
        }

        // If an ET is coming up and no notification has been sent, send out the notification
        $settings = new Settings();
        $environment = $settings->loggingEnvironment;
        $beginningDate = $elusiveTarget->getBeginningTime()->format('F j, Y');
        $availableDays = $elusiveTarget->getEndingTime()->diff($elusiveTarget->getBeginningTime())->format('%a');

        if (!$elusiveTarget->getComingNotificationSent()) {
            $title = "Elusive Target Arriving";
            $body = "{$elusiveTarget->getName()} is arriving on {$beginningDate} and will be available for {$availableDays} days!";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-coming", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png');

            $elusiveTarget->setComingNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }

        if ($availableDays === '7' && !$elusiveTarget->getSevenDaysLeftNotificationSent()) {
            $title = "{$elusiveTarget->getName()} - 7 Days Left";
            $body = "{$elusiveTarget->getName()} will be leaving in 7 days!";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-7", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png');

            $elusiveTarget->setSevenDaysLeftNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }
        if ($availableDays === '5' && !$elusiveTarget->getSevenDaysLeftNotificationSent()) {
            $title = "{$elusiveTarget->getName()} - 5 Days Left";
            $body = "{$elusiveTarget->getName()} will be leaving in 5 days!";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-5", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png');

            $elusiveTarget->setFiveDaysLeftNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }
        if ($availableDays === '3' && !$elusiveTarget->getSevenDaysLeftNotificationSent()) {
            $title = "{$elusiveTarget->getName()} - 3 Days Left";
            $body = "{$elusiveTarget->getName()} will be leaving in 3 days!";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-3", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png');

            $elusiveTarget->setThreeDaysLeftNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }
        if ($availableDays === '1' && !$elusiveTarget->getSevenDaysLeftNotificationSent()) {
            $title = "{$elusiveTarget->getName()} - Only One Day Left";
            $body = "{$elusiveTarget->getName()} will be leaving in 24 hours!";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-1", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png');

            $elusiveTarget->setOneDayLeftNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }

        if ($availableDays <= '0' && !$elusiveTarget->getEndNotificationSent()) {
            $title = "{$elusiveTarget->getName()} Has Left";
            $body = "{$elusiveTarget->getName()} has left.";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-end", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png');

            $elusiveTarget->setOneDayLeftNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }
    }

    private function allNotificationsSent(ElusiveTarget $elusiveTarget): bool {
        return $elusiveTarget->getComingNotificationSent() &&
            $elusiveTarget->getPlayableNotificationSent() &&
            $elusiveTarget->getSevenDaysLeftNotificationSent() &&
            $elusiveTarget->getFiveDaysLeftNotificationSent() &&
            $elusiveTarget->getThreeDaysLeftNotificationSent() &&
            $elusiveTarget->getOneDayLeftNotificationSent() &&
            $elusiveTarget->getEndNotificationSent();
    }
}
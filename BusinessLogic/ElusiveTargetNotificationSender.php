<?php
namespace BusinessLogic;


use Config\Constants;
use Config\Settings;
use DataAccess\Models\ElusiveTarget;
use DataAccess\Repositories\ElusiveTargetRepository;
use Doctrine\ORM\EntityManager;
use Rollbar\Rollbar;

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
            Rollbar::info('All notifications sent.');
            return;
        }

        // If an ET is coming up and no notification has been sent, send out the notification
        $settings = new Settings();
        $constants = new Constants();
        $environment = $settings->loggingEnvironment;
        $beginningDate = $elusiveTarget->getBeginningTime()->format('F j, Y');
        $currentUtcTime = new \DateTime('now', new \DateTimeZone('UTC'));
        $currentUtcTime->modify('-1 day');
        $availableDays = $elusiveTarget->getEndingTime()->diff($currentUtcTime)->format('%a');
        $url = $constants->siteDomain . $elusiveTarget->getMissionUrl();

        if (!$elusiveTarget->getComingNotificationSent()) {
            $title = "Elusive Target Arriving";
            $beginningDateForComparison = $elusiveTarget->getBeginningTime();
            $beginningDateForComparison->modify('-1 day');
            $availableDays = $elusiveTarget->getEndingTime()->diff($beginningDateForComparison)->format('%a');
            $body = "{$elusiveTarget->getName()} is arriving on {$beginningDate} and will be available for {$availableDays} days!";
            $response = $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-coming", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png', $url);

            $elusiveTarget->setComingNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();

            Rollbar::info("Sent Notification: {$elusiveTarget->getName()} is arriving on {$beginningDate} and will be available for {$availableDays} days!", ['firebaseResponse' => $response]);
            return;
        }

        if ($availableDays > 7 && !$elusiveTarget->getPlayableNotificationSent()) {
            $title = "Elusive Target Arrived";
            $body = "{$elusiveTarget->getName()} has arrived and will be available for {$availableDays} days!";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-playable", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png', $url);

            $elusiveTarget->setPlayableNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }

        if ($availableDays <= '7' && $availableDays > '5' && !$elusiveTarget->getSevenDaysLeftNotificationSent()) {
            $title = "{$elusiveTarget->getName()} - 7 Days Left";
            $body = "{$elusiveTarget->getName()} will be leaving in 7 days! Plan accordingly.";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-7", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png', $url);

            $elusiveTarget->setSevenDaysLeftNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }
        if ($availableDays <= '5' && $availableDays > '3' && !$elusiveTarget->getFiveDaysLeftNotificationSent()) {
            $title = "{$elusiveTarget->getName()} - 5 Days Left";
            $body = "{$elusiveTarget->getName()} will be leaving in 5 days. Be sure to eliminate the target before time is up.";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-5", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png', $url);

            $elusiveTarget->setFiveDaysLeftNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }
        if ($availableDays <= '3' && $availableDays > '1' && !$elusiveTarget->getThreeDaysLeftNotificationSent()) {
            $title = "{$elusiveTarget->getName()} - 3 Days Left";
            $body = "The contract on {$elusiveTarget->getName()} is only active for 3 more days! Eliminate the target before it's too late.";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-3", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png', $url);

            $elusiveTarget->setThreeDaysLeftNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }
        if ($availableDays <= '1' && $availableDays > '0' && !$elusiveTarget->getOneDayLeftNotificationSent()) {
            $title = "{$elusiveTarget->getName()} - Only One Day Left";
            $body = "{$elusiveTarget->getName()} will be leaving in just 24 hours. If you have not eliminated the target, there is not much time left!";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-1", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png', $url);

            $elusiveTarget->setOneDayLeftNotificationSent(true);
            $this->entityManager->persist($elusiveTarget);
            $this->entityManager->flush();
            return;
        }

        if ($availableDays <= '0' && !$elusiveTarget->getEndNotificationSent()) {
            $title = "{$elusiveTarget->getName()} Has Left";
            $body = "{$elusiveTarget->getName()} has left and is no longer available to play.";
            $this->firebaseClient->sendElusiveTargetMessage("{$environment}-elusive-target-end", $title, $body, 'https://www.hitman2maps.com/android-chrome-256x256.png', $constants->siteDomain);

            $elusiveTarget->setEndNotificationSent(true);
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
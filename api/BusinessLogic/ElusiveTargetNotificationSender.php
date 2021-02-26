<?php
namespace BusinessLogic;


use Abraham\TwitterOAuth\TwitterOAuth;
use Config\Constants;
use Config\Settings;
use DataAccess\Models\ElusiveTarget;
use DataAccess\Models\Mission;
use DataAccess\Repositories\ElusiveTargetRepository;
use DataAccess\Repositories\MissionRepository;
use DG\Twitter\Twitter;
use Doctrine\ORM\EntityManager;
use Rollbar\Rollbar;

class ElusiveTargetNotificationSender {
    private $firebaseClient;
    private $entityManager;
    private $countdownComposer;

    public function __construct(FirebaseClient $firebaseClient,
                                EntityManager $entityManager,
                                CountdownComposer $countdownComposer) {
        $this->firebaseClient = $firebaseClient;
        $this->entityManager = $entityManager;
        $this->countdownComposer = $countdownComposer;
    }

    public function sendElusiveTargetNotification() {
        // Get the active ET from the database
        /* @var $elusiveTargetRepository ElusiveTargetRepository */
        $elusiveTargetRepository = $this->entityManager->getRepository(ElusiveTarget::class);

        /* @var $elusiveTargets ElusiveTarget[] */
        $elusiveTargets = $elusiveTargetRepository->findBy(['endNotificationSent' => false], ['id' => 'DESC']);

        foreach ($elusiveTargets as $elusiveTarget) {
            // If an ET is coming up and no notification has been sent, send out the notification
            $settings = new Settings();
            $constants = new Constants();
            $twitter = new TwitterOAuth($settings->twitterConsumerKey,
                $settings->twitterConsumerSecret,
                $settings->twitterAccessToken,
                $settings->twitterAccessTokenSecret);
            $environment = $settings->loggingEnvironment;
            $beginningDate = $elusiveTarget->getBeginningTime()->format('F j, Y');
            $currentUtcTimeForNumberOfDays = new \DateTime('now', new \DateTimeZone('UTC'));
            $currentUtcTimeForNumberOfDays->modify('-1 day');
            $availableDays = $elusiveTarget->getEndingTime()->diff($currentUtcTimeForNumberOfDays)->format('%a');

            if (!$elusiveTarget->getComingNotificationSent()) {
                $beginningDateForComparison = $elusiveTarget->getBeginningTime();
                $availableDays = $elusiveTarget->getEndingTime()->diff($beginningDateForComparison)->format('%a');

                if ($elusiveTarget->getReactivated()) {
                    $message = [
                        'title' => 'Reactivated Elusive Target Arriving',
                        'body' => "{$elusiveTarget->getName()} will be reactivated on {$beginningDate} for {$availableDays} days!",
                        'firebaseEnvironment' => "{$environment}-reactivation"
                    ];
                } else {
                    $message = [
                        'title' => 'Elusive Target Arriving',
                        'body' => "{$elusiveTarget->getName()} will arrive on {$beginningDate} for {$availableDays} days!",
                        'firebaseEnvironment' => $environment
                    ];
                }

                $response = $this->sendWebPush("hitmaps-%s-elusive-target-coming", $message, $elusiveTarget);

                $this->postTweet($message['body'], $elusiveTarget, $twitter);

                $elusiveTarget->setComingNotificationSent(true);
                $this->entityManager->persist($elusiveTarget);
                $this->entityManager->flush();

                Rollbar::info("Sent Notification: {$elusiveTarget->getName()} will arrive on {$beginningDate} for {$availableDays} days!", ['firebaseResponse' => $response]);
                return;
            }

            // If the ET isn't playable, don't proceed past here
            $realUtcTime = new \DateTime('now', new \DateTimeZone('UTC'));
            if ($realUtcTime < $elusiveTarget->getBeginningTime()) {
                return;
            }

            if ($availableDays > 7 && !$elusiveTarget->getPlayableNotificationSent()) {
                if ($elusiveTarget->getReactivated()) {
                    $message = [
                        'title' => 'Reactivated Elusive Target Arrived',
                        'firebaseEnvironment' => "{$environment}-reactivation"
                    ];
                } else {
                    $message = [
                        'title' => 'Elusive Target Arrived',
                        'firebaseEnvironment' => $environment
                    ];
                }

                $message['body'] = "{$elusiveTarget->getName()} arrived and will be available for {$availableDays} days!";
                $imageUrl = $this->countdownComposer->composeElusiveTargetActiveImage($elusiveTarget);

                $this->sendWebPush("hitmaps-%s-elusive-target-playable",
                    $message,
                    $elusiveTarget,
                    "{$constants->siteDomain}{$imageUrl}");

                $this->postTweet($message['body'], $elusiveTarget, $twitter, __DIR__ . "/../..{$imageUrl}");

                $elusiveTarget->setPlayableNotificationSent(true);
                $this->entityManager->persist($elusiveTarget);
                $this->entityManager->flush();
                return;
            }

            if ($availableDays <= '7' && $availableDays > '5' && !$elusiveTarget->getSevenDaysLeftNotificationSent()) {
                $message = [
                    'title' => "{$elusiveTarget->getName()} - 7 Days Left",
                    'body' => "{$elusiveTarget->getName()} will be leaving in 7 days! Plan accordingly.",
                    'firebaseEnvironment' => $elusiveTarget->getReactivated() ? "{$environment}-reactivation" : $environment
                ];
                $countdownImage = $this->countdownComposer->composeElusiveTargetImage($elusiveTarget, 7);

                $this->sendWebPush("hitmaps-%s-elusive-target-7",
                    $message,
                    $elusiveTarget,
                    "{$constants->siteDomain}{$countdownImage}");

                $this->postTweet($message['body'], $elusiveTarget, $twitter, __DIR__ . "/../..{$countdownImage}");

                $elusiveTarget->setSevenDaysLeftNotificationSent(true);
                $this->entityManager->persist($elusiveTarget);
                $this->entityManager->flush();
                return;
            }
            if ($availableDays <= '5' && $availableDays > '3' && !$elusiveTarget->getFiveDaysLeftNotificationSent()) {
                $message = [
                    'title' => "{$elusiveTarget->getName()} - 5 Days Left",
                    'body' => "{$elusiveTarget->getName()} will be leaving in 5 days. Be sure to complete the contract before time is up.",
                    'firebaseEnvironment' => $elusiveTarget->getReactivated() ? "{$environment}-reactivation" : $environment
                ];
                $countdownImage = $this->countdownComposer->composeElusiveTargetImage($elusiveTarget, 5);

                $this->sendWebPush("hitmaps-%s-elusive-target-5",
                    $message,
                    $elusiveTarget,
                    "{$constants->siteDomain}{$countdownImage}");

                $this->postTweet($message['body'], $elusiveTarget, $twitter, __DIR__ . "/../..{$countdownImage}");

                $elusiveTarget->setFiveDaysLeftNotificationSent(true);
                $this->entityManager->persist($elusiveTarget);
                $this->entityManager->flush();
                return;
            }
            if ($availableDays <= '3' && $availableDays > '1' && !$elusiveTarget->getThreeDaysLeftNotificationSent()) {
                $message = [
                    'title' => "{$elusiveTarget->getName()} - 3 Days Left",
                    'body' => "The contract on {$elusiveTarget->getName()} is only active for 3 more days! Complete the contract before it's too late.",
                    'firebaseEnvironment' => $elusiveTarget->getReactivated() ? "{$environment}-reactivation" : $environment
                ];
                $countdownImage = $this->countdownComposer->composeElusiveTargetImage($elusiveTarget, 3);

                $this->sendWebPush("hitmaps-%s-elusive-target-3",
                    $message,
                    $elusiveTarget,
                    "{$constants->siteDomain}{$countdownImage}");

                $this->postTweet($message['body'], $elusiveTarget, $twitter, __DIR__ . "/../..{$countdownImage}");

                $elusiveTarget->setThreeDaysLeftNotificationSent(true);
                $this->entityManager->persist($elusiveTarget);
                $this->entityManager->flush();
                return;
            }
            if ($availableDays <= '1' && $availableDays > '0' && !$elusiveTarget->getOneDayLeftNotificationSent()) {
                $message = [
                    'title' => "{$elusiveTarget->getName()} - Only One Day Left",
                    'body' => "{$elusiveTarget->getName()} will be leaving in just 24 hours. If you have not taken care of {$elusiveTarget->getName()}, there is not much time left!",
                    'firebaseEnvironment' => $elusiveTarget->getReactivated() ? "{$environment}-reactivation" : $environment
                ];
                $countdownImage = $this->countdownComposer->composeElusiveTargetImage($elusiveTarget, 1);

                $this->sendWebPush("hitmaps-%s-elusive-target-1",
                    $message,
                    $elusiveTarget,
                    "{$constants->siteDomain}{$countdownImage}");

                $this->postTweet($message['body'], $elusiveTarget, $twitter, __DIR__ . "/../..{$countdownImage}");

                $elusiveTarget->setOneDayLeftNotificationSent(true);
                $this->entityManager->persist($elusiveTarget);
                $this->entityManager->flush();
                return;
            }

            if ($realUtcTime > $elusiveTarget->getEndingTime() && !$elusiveTarget->getEndNotificationSent()) {
                $message = [
                    'title' => "{$elusiveTarget->getName()} Has Left",
                    'body' => "The contract on {$elusiveTarget->getName()} has ended.",
                    'firebaseEnvironment' => $elusiveTarget->getReactivated() ? "{$environment}-reactivation" : $environment
                ];

                $this->sendWebPush("hitmaps-%s-elusive-target-end",
                    $message,
                    $elusiveTarget);

                $elusiveTarget->setEndNotificationSent(true);
                $this->countdownComposer->deleteAllCompositeImages($elusiveTarget);
                $this->entityManager->persist($elusiveTarget);
                $this->entityManager->flush();
                return;
            }
        }
    }

    private function sendWebPush(string $topic, array $message, ElusiveTarget $elusiveTarget, ?string $imageUrl = null) {
        /* @var $missionRepository MissionRepository */
        $missionRepository = $this->entityManager->getRepository(Mission::class);

        $constants = new Constants();
        $firebaseEnvironment = $message['firebaseEnvironment'];
        $url = $constants->siteDomain . $missionRepository->buildUrlForMissionAndDifficulty($elusiveTarget->getMissionId(), 'standard');
        return $this->firebaseClient->sendElusiveTargetMessage(sprintf($topic, $firebaseEnvironment),
            $message['title'],
            $message['body'],
            "{$constants->siteDomain}/android-chrome-256x256.png",
            $imageUrl ?? $elusiveTarget->getImageUrl(),
            $url);
    }

    private function postTweet(string $body, ElusiveTarget $elusiveTarget, TwitterOAuth $twitter, ?string $imagePath = null) {
        $uniqid = null;
        if ($imagePath === null) {
            $imageContents = file_get_contents($elusiveTarget->getImageUrl());
            $uniqid = uniqid($elusiveTarget->getName(), true);
            file_put_contents($uniqid, $imageContents);
        }

        $media = $twitter->upload('media/upload', ['media' => $imagePath ?? $uniqid]);
        $twitter->post('statuses/update', [
            'status' => $body,
            'media_ids' => $media->media_id_string
        ]);

        if ($imagePath === null) {
            @unlink($uniqid);
        }
    }
}

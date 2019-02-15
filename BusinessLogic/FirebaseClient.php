<?php


namespace BusinessLogic;


use Kreait\Firebase;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

class FirebaseClient {
    public function subscribeToTopic(string $topicId, string $token): array {
        $client = self::buildClient();

        return $client->getMessaging()
            ->subscribeToTopic(Firebase\Messaging\Topic::fromValue($topicId), $token);
    }

    private static function buildClient(): Firebase {
        $serviceAccount = ServiceAccount::fromJsonFile(__DIR__ . '/../Config/firebase-service-account.json');
        return (new Factory())
            ->withServiceAccount($serviceAccount)
            ->create();
    }

    public function unsubscribeFromTopic(string $topicId, string $token): array {
        $client = self::buildClient();

        return $client->getMessaging()
            ->unsubscribeFromTopic(Firebase\Messaging\Topic::fromValue($topicId), $token);
    }
}
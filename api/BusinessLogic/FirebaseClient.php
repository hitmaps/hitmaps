<?php
namespace BusinessLogic;

use Kreait\Firebase;
use Kreait\Firebase\Factory;

class FirebaseClient {
    public function subscribeToTopic(string $topicId, string $token): array {
        $client = self::buildClient();

        return $client->subscribeToTopic(Firebase\Messaging\Topic::fromValue($topicId), $token);
    }

    private static function buildClient(): Firebase\Messaging {
        return (new Factory())->withServiceAccount(__DIR__ . '/../Config/firebase-service-account.json')->createMessaging();
    }

    public function unsubscribeFromTopic(string $topicId, string $token): array {
        $client = self::buildClient();

        return $client->unsubscribeFromTopic(Firebase\Messaging\Topic::fromValue($topicId), $token);
    }

    public function sendElusiveTargetMessage(string $topicId, string $title, string $body, string $iconUrl, ?string $imageUrl = null, ?string $mapUrl = null): array {
        $notification = Firebase\Messaging\Notification::create($title, $body);

        $client = self::buildClient();

        $message = Firebase\Messaging\CloudMessage::withTarget('topic', $topicId)
            ->withNotification($notification);

        $config = Firebase\Messaging\WebPushConfig::fromArray([
            'notification' => [
                'title' => $title,
                'body' => $body,
                'icon' => $iconUrl,
                'click_action' => $mapUrl,
                'image' => $imageUrl,
            ],
        ]);

        $message = $message->withWebPushConfig($config);

        return $client->send($message);
    }
}

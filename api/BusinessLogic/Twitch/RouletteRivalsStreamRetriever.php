<?php

namespace BusinessLogic\Twitch;


use Config\Settings;

class RouletteRivalsStreamRetriever {
    const HITMAN_2_GAME_ID = 506342;

    public function getRouletteRivalsStreamers() {
        $settings = new Settings();
        $clientID = ['Client-ID:' . $settings->twitchClientId];
        $ch = curl_init();

        $channels = ['some_random_person',
            'frote7',
            'b3pischrist',
            'dribbleondosfm',
            'davidredsox',
            'mendietinha',
            'sajoats',
            'scroobiusjib',
            'devilvendetta',
            'johnnyaxxx',
            'adoriaclub47',
            'chubbydarksoul',
            'yellowzr1',
            '0r0707',
            'speedsterrunner217',
            'supremecommanderike',
            'duckergamin',
            'zeekomkommer69',
            'mungadungalis',
            'sheikthegeek',
            'pokeredface'];
        // Get channel IDs for usernames
        curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, 'https://api.twitch.tv/helix/users?login='.implode('&login=', $channels));
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $clientID);
        $userIds = json_decode(curl_exec($ch), true)['data'];

        $channelIds = [];
        foreach ($userIds as $user) {
            $channelIds[] = $user['id'];
        }

        curl_setopt($ch, CURLOPT_URL, 'https://api.twitch.tv/helix/streams?user_id='.implode('&user_id=', $channelIds));
        $data = curl_exec($ch);

        curl_close($ch);
        return $data;
    }
}
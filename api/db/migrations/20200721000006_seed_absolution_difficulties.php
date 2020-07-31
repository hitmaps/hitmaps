<?php


use Phinx\Migration\AbstractMigration;

class SeedAbsolutionDifficulties extends AbstractMigration {
    public function up() {
        foreach ($this->getMissions() as $name => $info) {
            $this->execute("INSERT INTO `mission_to_difficulties` (`mission_id`, `difficulty`)
                VALUES ((SELECT `id` FROM `missions` WHERE `slug` = '{$info['slug']}' AND location_id = {$info['location_id']}), 'Standard')");
        }
    }

    private function getMissions() {
        /*
         * Chicago 1 => 19
         * Hope      => 20
         * Chicago 2 => 21
         * Cornwall  => 22
         */
        /*
         * Prologue
            A Personal Contract
           Chicago
            The King of Chinatown
            Terminus
            Run For Your Life
            Hunter and Hunted
            Rosewood
           Hope, South Dakota
            Welcome to Hope
            Birdie's Gift
            Shaving Lenny
            End of the Road
            Dexter Industries
            Death Factory
            Fight Night
            Attack of the Saints
            Skurky's Law
            Operation Sledgehammer
           Chicago
            One of a Kind
            Blackwater Park
            Countdown
           Epilogue
            Absolution
         */
        $missions = [
            'A Personal Contract' => [
                'slug' => 'a-personal-contract',
                'location' => 19,
                'order' => 1,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/a-personal-contract-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            'The King of Chinatown' => [
                'slug' => 'the-king-of-chinatown',
                'location' => 19,
                'order' => 2,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/the-king-of-chinatown-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            'Terminus' => [
                'slug' => 'terminus',
                'location' => 19,
                'order' => 3,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/terminus-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            'Run For Your Life' => [
                'slug' => 'run-for-your-life',
                'location' => 19,
                'order' => 4,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/run-for-your-life-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            'Hunter and Hunted' => [
                'slug' => 'hunter-and-hunted',
                'location' => 19,
                'order' => 5,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/hunter-and-hunted-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            'Rosewood' => [
                'slug' => 'rosewood',
                'location' => 19,
                'order' => 6,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/rosewood-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            'Welcome to Hope' => [
                'slug' => 'welcome-to-hope',
                'location' => 20,
                'order' => 1,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/welcome-to-hope-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            "Birdie's Gift" => [
                'slug' => 'birdies-gift',
                'location' => 20,
                'order' => 2,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/birdies-gift-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            'Shaving Lenny' => [
                'slug' => 'shaving-lenny',
                'location' => 20,
                'order' => 3,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/shaving-lenny-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            'End of the Road' => [
                'slug' => 'end-of-the-road',
                'location' => 20,
                'order' => 4,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/end-of-the-road-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            'Dexter Industries' => [
                'slug' => 'dexter-industries',
                'location' => 20,
                'order' => 5,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/dexter-industries-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            'Death Factory' => [
                'slug' => 'death-factory',
                'location' => 20,
                'order' => 6,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/death-factory-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            'Fight Night' => [
                'slug' => 'fight-night',
                'location' => 20,
                'order' => 7,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/fight-night-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            'Attack of the Saints' => [
                'slug' => 'attack-of-the-saints',
                'location' => 20,
                'order' => 8,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/attack-of-the-saints-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            "Skurky's Law" => [
                'slug' => 'skurkys-law',
                'location' => 20,
                'order' => 9,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/skurkys-law-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            'Operation Sledgehammer' => [
                'slug' => 'operation-sledgehammer',
                'location' => 20,
                'order' => 10,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/operation-sledgehammer-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            'One of a Kind' => [
                'slug' => 'one-of-a-kind',
                'location' => 21,
                'order' => 1,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/one-of-a-kind-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            'Blackwater Park' => [
                'slug' => 'blackwater-park',
                'location' => 21,
                'order' => 2,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/blackwater-park-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            'Countdown' => [
                'slug' => 'countdown',
                'location' => 21,
                'order' => 3,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/countdown-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            'Absolution' => [
                'slug' => 'absolution',
                'location' => 22,
                'order' => 1,
                'tileUrl' => 'https://media.hitmaps.com/img/absolution/absolution-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/absolution/hitman-absolution.jpg'
            ]
        ];

        $insertRecords = [];
        foreach ($missions as $name => $info) {
            $insertRecords[] = [
                'location_id' => $info['location'],
                'name' => $name,
                'slug' => $info['slug'],
                'order' => $info['order'],
                'map_folder_name' => $info['slug'],
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'lowest_floor_number' => 0,
                'highest_floor_number' => 0,
                'starting_floor_number' => 0,
                'top_left_coordinate' => '-10000,10000',
                'bottom_right_coordinate' => '10000,-10000',
                'satellite_view' => 0,
                'mission_type' => 'Mission',
                'tile_url' => $info['tileUrl'],
                'background_url' => $info['backgroundUrl'],
                'svg' => 1
            ];
        }

        return $insertRecords;
    }

    public function down() {
        foreach ($this->getMissions() as $name => $info) {
            $this->execute("DELETE FROM `mission_to_difficulties` WHERE
                `mission_id` = (SELECT `id` FROM `missions` WHERE `slug` = '{$info['slug']}' AND location_id = {$info['location_id']})");
        }
    }
}

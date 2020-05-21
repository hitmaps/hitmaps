<?php


use Phinx\Migration\AbstractMigration;

class InitialSeedAbsolutionMissions extends AbstractMigration {
    public function up() {
        $this->insert('missions', $this->getMissions());
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
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/a-personal-contract-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-chicago.jpg'
            ],
            'The King of Chinatown' => [
                'slug' => 'the-king-of-chinatown',
                'location' => 19,
                'order' => 2,
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/the-king-of-chinatown-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-chicago.jpg'
            ],
            'Terminus' => [
                'slug' => 'terminus',
                'location' => 19,
                'order' => 3,
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/terminus-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-chicago.jpg'
            ],
            'Run For Your Life' => [
                'slug' => 'run-for-your-life',
                'location' => 19,
                'order' => 4,
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/run-for-your-life-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-chicago.jpg'
            ],
            'Hunter and Hunted' => [
                'slug' => 'hunter-and-hunted',
                'location' => 19,
                'order' => 5,
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/hunter-and-hunted-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-chicago.jpg'
            ],
            'Rosewood' => [
                'slug' => 'rosewood',
                'location' => 19,
                'order' => 6,
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/rosewood-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-chicago.jpg'
            ],
            'Welcome to Hope' => [
                'slug' => 'welcome-to-hope',
                'location' => 20,
                'order' => 1,
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/welcome-to-hope-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-hope.jpg'
            ],
            "Birdie's Gift" => [
                'slug' => 'birdies-gift',
                'location' => 20,
                'order' => 2,
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/birdies-gift-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-hope.jpg'
            ],
            'Shaving Lenny' => [
                'slug' => 'shaving-lenny',
                'location' => 20,
                'order' => 3,
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/shaving-lenny-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-hope.jpg'
            ],
            'End of the Road' => [
                'slug' => 'end-of-the-road',
                'location' => 20,
                'order' => 4,
                'tileUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/end-of-the-road-1.jpg',
                'backgroundUrl' => 'https://media.hitmaps.com/img/hitmaps-custom/absolution-hope.jpg'
            ],
            'Dexter Industries' => ['dexter-industries', 20],
            'Death Factory' => ['death-factory', 20],
            'Fight Night' => ['fight-night', 20],
            'Attack of the Saints' => ['attack-of-the-saints', 20],
            "Skurky's Law" => ['skurkys-law', 20],
            'Operation Sledgehammer' => ['operation-sledgehammer', 20],
            'One of a Kind' => ['one-of-a-kind', 21],
            'Blackwater Park' => ['blackwater-park', 21],
            'Countdown' => ['countdown', 21],
            'Absolution' => ['absolution', 22]
        ];

        // TODO Finish this
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
                'tile_url' => '',
                'background_url' => '',
                'svg' => 1
            ];
        }
    }

    public function down() {

    }
}

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
            'A Personal Contract' => ['a-personal-contract', 19],
            'The King of Chinatown' => ['the-king-of-chinatown', 19],
            'Terminus' => ['terminus', 19],
            'Run For Your Life' => ['run-for-your-life', 19],
            'Hunter and Hunted' => ['hunter-and-hunted', 19],
            'Rosewood' => ['rosewood', 19],
            'Welcome to Hope' => ['welcome-to-hope', 20],
            "Birdie's Gift" => ['birdies-gift', 20],
            'Shaving Lenny' => ['shaving-lenny', 20],
            'End of the Road' => ['end-of-the-road', 20],
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
                'location_id' => 19,
                'name' => 'Mission Name',
                'slug' => 'slug',
                'order' => 0,
                'map_folder_name' => '',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'lowest_floor_number' => 0,
                'highest_floor_number' => 0,
                'starting_floor_number' => 0,
                'top_left_coordinate' => '0,0',
                'bottom_right_coordinate' => '0,0',
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

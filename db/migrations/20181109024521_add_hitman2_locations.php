<?php


use Phinx\Migration\AbstractMigration;

class AddHitman2Locations extends AbstractMigration {
    public function change() {
        $rows = [
            [
                'game' => 'hitman2',
                'map_folder_name' => 'hawkes_bay',
                'destination' => 'Hawkes Bay',
                'destination_country' => 'New Zealand',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 1
            ],
            [
                'game' => 'hitman2',
                'map_folder_name' => 'miami',
                'destination' => 'Miami',
                'destination_country' => 'USA',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 2
            ],
            [
                'game' => 'hitman2',
                'map_folder_name' => 'santa_fortuna',
                'destination' => 'Santa Fortuna',
                'destination_country' => 'Colombia',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 3
            ],
            [
                'game' => 'hitman2',
                'map_folder_name' => 'mumbai',
                'destination' => 'Mumbai',
                'destination_country' => 'India',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 4
            ],
            [
                'game' => 'hitman2',
                'map_folder_name' => 'whittleton_creek',
                'destination' => 'Whittleton Creek',
                'destination_country' => 'USA',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 5
            ],
            [
                'game' => 'hitman2',
                'map_folder_name' => 'isle_sgail',
                'destination' => 'Isle of Sgàil',
                'destination_country' => 'North Atlantic',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 6
            ]
        ];

        $this->table('locations')->insert($rows)->save();
    }
}

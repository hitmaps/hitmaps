<?php


use Phinx\Migration\AbstractMigration;

class InsertHitman2016Locations extends AbstractMigration {
    public function up() {
        $locationTable = $this->table('locations');

        $rows = [
            [
                'game' => 'hitman',
                'map_folder_name' => 'ica-facility',
                'destination' => 'ICA Facility',
                'destination_country' => 'Classified',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 1
            ],
            [
                'game' => 'hitman',
                'map_folder_name' => 'paris',
                'destination' => 'Paris',
                'destination_country' => 'France',
                'map_center_latitude' => -102.3125,
                'map_center_longitude' => 104.25,
                'order' => 2
            ],
            [
                'game' => 'hitman',
                'map_folder_name' => 'sapienza',
                'destination' => 'Sapienza',
                'destination_country' => 'Italy',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 3
            ],
            [
                'game' => 'hitman',
                'map_folder_name' => 'marrakesh',
                'destination' => 'Marrakesh',
                'destination_country' => 'Morocco',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 4
            ],
            [
                'game' => 'hitman',
                'map_folder_name' => 'bangkok',
                'destination' => 'Bangkok',
                'destination_country' => 'Thailand',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 5
            ],
            [
                'game' => 'hitman',
                'map_folder_name' => 'colorado',
                'destination' => 'Colorado',
                'destination_country' => 'USA',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 6
            ],
            [
                'game' => 'hitman',
                'map_folder_name' => 'hokkaido',
                'destination' => 'Hokkaido',
                'destination_country' => 'Japan',
                'map_center_latitude' => 0,
                'map_center_longitude' => 0,
                'order' => 7
            ]
        ];

        $locationTable->insert($rows)->save();
    }

    public function down() {
        $this->execute("DELETE FROM `locations` WHERE `game` = 'hitman'");

    }
}

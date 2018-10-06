<?php


use Phinx\Migration\AbstractMigration;

class InsertHitman2016Locations extends AbstractMigration {
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    addCustomColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Any other destructive changes will result in an error when trying to
     * rollback the migration.
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change() {
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
}

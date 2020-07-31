<?php


use Phinx\Migration\AbstractMigration;

class SetMapCentersAndBoundaries extends AbstractMigration {
    public function up() {
        foreach ($this->getRows() as $row) {
            $this->execute("UPDATE `missions` 
              SET `map_center_latitude` = {$row['map_center_latitude']}, `map_center_longitude` = {$row['map_center_longitude']}
              WHERE `slug` = '{$row['slug']}'");
        }
    }

    public function down() {
        foreach ($this->getRows() as $row) {
            $this->execute("UPDATE `missions` 
              SET `map_center_latitude` = 0, `map_center_longitude` = 0
              WHERE `slug` = '{$row['slug']}'");
        }
    }

    private function getRows() {
        return [
            [
                'slug' => 'a-personal-contract',
                'map_center_latitude' => '54.11962890625',
                'map_center_longitude' => '48.94140625'
            ],
            [
                'slug' => 'the-king-of-chinatown',
                'map_center_latitude' => '45.1259765625',
                'map_center_longitude' => '53.92529296875'
            ],
            [
                'slug' => 'terminus',
                'map_center_latitude' => '50.881103515625',
                'map_center_longitude' => '51.939697265625'
            ],
            [
                'slug' => 'run-for-your-life',
                'map_center_latitude' => '49.6455078125',
                'map_center_longitude' => '54.97802734375'
            ],
            [
                'slug' => 'hunter-and-hunted',
                'map_center_latitude' => '50.7314453125',
                'map_center_longitude' => '63.36328125'
            ],
            [
                'slug' => 'rosewood',
                'map_center_latitude' => '52.495849609375',
                'map_center_longitude' => '48.97216796875'
            ],
            [
                'slug' => 'welcome-to-hope',
                'map_center_latitude' => '52.720703125',
                'map_center_longitude' => '51.5859375'
            ],
            [
                'slug' => 'birdies-gift',
                'map_center_latitude' => '43.9287109375',
                'map_center_longitude' => '53.4755859375'
            ],
            [
                'slug' => 'shaving-lenny',
                'map_center_latitude' => '46.33203125',
                'map_center_longitude' => '54.88427734375'
            ],
            [
                'slug' => 'end-of-the-road',
                'map_center_latitude' => '43.00244140625',
                'map_center_longitude' => '56.39111328125'
            ],
            [
                'slug' => 'dexter-industries',
                'map_center_latitude' => '51.330078125',
                'map_center_longitude' => '47.1650390625'
            ],
            [
                'slug' => 'death-factory',
                'map_center_latitude' => '47.37451171875',
                'map_center_longitude' => '57.54296875'
            ],
            [
                'slug' => 'fight-night',
                'map_center_latitude' => '39.66015625',
                'map_center_longitude' => '54.85546875'
            ],
            [
                'slug' => 'attack-of-the-saints',
                'map_center_latitude' => '45.65869140625',
                'map_center_longitude' => '56.01025390625'
            ],
            [
                'slug' => 'skurkys-law',
                'map_center_latitude' => '43.4365234375',
                'map_center_longitude' => '61.2626953125'
            ],
            [
                'slug' => 'operation-sledgehammer',
                'map_center_latitude' => '52.17919921875',
                'map_center_longitude' => '50.45361328125'
            ],
            [
                'slug' => 'one-of-a-kind',
                'map_center_latitude' => '24.8720703125',
                'map_center_longitude' => '62.56591796875'
            ],
            [
                'slug' => 'blackwater-park',
                'map_center_latitude' => '41.560546875',
                'map_center_longitude' => '55.21337890625'
            ],
            [
                'slug' => 'countdown',
                'map_center_latitude' => '60.58447265625',
                'map_center_longitude' => '63.76171875'
            ],
            [
                'slug' => 'absolution',
                'map_center_latitude' => '54.35400390625',
                'map_center_longitude' => '52.0947265625'
            ]
        ];
    }
}

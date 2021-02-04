<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class UpdateHitman3FloorInformation extends AbstractMigration {
    public function up(): void {
        $maps = [
            [
                'slug' => 'on-top-of-the-world',
                'map_center_latitude' => '46.625',
                'map_center_longitude' => '54.25',
                'lowest_floor_number' => -1,
                'highest_floor_number' => 5,
                'min_zoom' => 3,
                'max_zoom' => 6
            ],
            [
                'slug' => 'death-in-the-family',
                'map_center_latitude' => '53.5625',
                'map_center_longitude' => '58.28125',
                'lowest_floor_number' => 0,
                'highest_floor_number' => 3,
                'min_zoom' => 5,
                'max_zoom' => 8
            ],
            [
                'slug' => 'apex-predator',
                'map_center_latitude' => '62.125',
                'map_center_longitude' => '56.5',
                'lowest_floor_number' => -2,
                'highest_floor_number' => 4,
                'min_zoom' => 5,
                'max_zoom' => 8
            ],
            [
                'slug' => 'end-of-an-era',
                'map_center_latitude' => '75.84375',
                'map_center_longitude' => '56.0625',
                'lowest_floor_number' => -3,
                'highest_floor_number' => 5,
                'min_zoom' => 5,
                'max_zoom' => 8
            ],
            [
                'slug' => 'the-farewell',
                'map_center_latitude' => '46',
                'map_center_longitude' => '58.3125',
                'lowest_floor_number' => 0,
                'highest_floor_number' => 6,
                'min_zoom' => 3,
                'max_zoom' => 7
            ]
        ];

        foreach ($maps as $map) {
            $this->execute("UPDATE `missions` SET 
                  `min_zoom` = '{$map['min_zoom']}', 
                  `max_zoom` = '{$map['max_zoom']}', 
                  `lowest_floor_number` = {$map['lowest_floor_number']}, 
                  `highest_floor_number` = {$map['highest_floor_number']},
                  `map_center_latitude` = '{$map['map_center_latitude']}',
                  `map_center_longitude` = '{$map['map_center_longitude']}'
              WHERE `slug` = '{$map['slug']}'");
        }
    }

    public function down() {
        //-- no-op
    }
}

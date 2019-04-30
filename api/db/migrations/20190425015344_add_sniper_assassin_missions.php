<?php


use Phinx\Migration\AbstractMigration;

class AddSniperAssassinMissions extends AbstractMigration {
    public function up() {
        $rows = $this->getRows();

        foreach ($rows as $row) {
            $this->execute("INSERT INTO `missions` (`location_id`, `name`, `slug`, `order`, `map_folder_name`, 
            `map_center_latitude`, `map_center_longitude`, `lowest_floor_number`, `highest_floor_number`, 
            `starting_floor_number`, `top_left_coordinate`, `bottom_right_coordinate`, `satellite_view`, `mission_type`)
            SELECT `id`, '{$row['name']}', '{$row['mission_slug']}', {$row['order']}, '{$row['map_folder_name']}',
              '{$row['map_center_latitude']}', '{$row['map_center_longitude']}', {$row['lowest_floor_number']}, {$row['highest_floor_number']},
              {$row['starting_floor_number']}, '{$row['top_left_coordinate']}', '{$row['bottom_right_coordinate']}', {$row['satellite_view']}, '{$row['mission_type']}'
            FROM `locations`
            WHERE `slug` = '{$row['location_slug']}'");
        }
    }

    private function getRows() {
        return [
            [
                'location_slug' => 'himmelstein',
                'name' => 'The Last Yardbird',
                'mission_slug' => 'the-last-yardbird',
                'order' => 1,
                'map_folder_name' => 'the-last-yardbird',
                'map_center_latitude' => -119.375,
                'map_center_longitude' => 211.75,
                'lowest_floor_number' => 0,
                'highest_floor_number' => 0,
                'starting_floor_number' => 0,
                'top_left_coordinate' => '-0.125,0.25',
                'bottom_right_coordinate' => '-200,464.625',
                'satellite_view' => 0,
                'mission_type' => 'Sniper Assassin'
            ],
            [
                'location_slug' => 'hantu-port',
                'name' => 'The Pen and the Sword',
                'mission_slug' => 'the-pen-and-the-sword',
                'order' => 1,
                'map_folder_name' => 'the-pen-and-the-sword',
                'map_center_latitude' => -119.375,
                'map_center_longitude' => 211.75,
                'lowest_floor_number' => 0,
                'highest_floor_number' => 0,
                'starting_floor_number' => 0,
                'top_left_coordinate' => '-0.125,0.25',
                'bottom_right_coordinate' => '-200,464.625',
                'satellite_view' => 0,
                'mission_type' => 'Sniper Assassin'
            ]
        ];
    }

    public function down() {
        $rows = $this->getRows();

        foreach ($rows as $row) {
            $this->execute("DELETE FROM `missions` WHERE `slug` = '{$row['mission_slug']}'");
        }
    }
}

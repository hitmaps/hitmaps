<?php

use Phinx\Migration\AbstractMigration;

class UpdateUntouchableMetadata extends AbstractMigration {
    public function up() {
        $this->query("UPDATE `missions` SET `lowest_floor_number` = 0,
            `highest_floor_number` = 3,
            `map_folder_name` = 'untouchable',
            `map_center_latitude` = '50.026397705078125',
            `map_center_longitude` = '51.96881103515625',
            `tile_url` = 'https://media.hitmaps.com/img/hitman3/contracts/wolverine/wolverine_tile.jpg'
        WHERE `slug` = 'untouchable'");
    }

    public function down() {
        //-- no-op
    }
}

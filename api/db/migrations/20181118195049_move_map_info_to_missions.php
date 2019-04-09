<?php


use Phinx\Migration\AbstractMigration;

class MoveMapInfoToMissions extends AbstractMigration {
    public function up() {
        $this->table('missions')
            ->addColumn('map_folder_name', 'string')
            ->addColumn('map_center_latitude', 'string')
            ->addColumn('map_center_longitude', 'string')
            ->update();

        $this->execute("UPDATE `missions` 
            INNER JOIN `locations`
              ON `missions`.`location_id` = `locations`.`id`
            SET `missions`.`map_folder_name` = `locations`.`map_folder_name`,
              `missions`.`map_center_latitude` = `locations`.`map_center_latitude`,
              `missions`.`map_center_longitude` = `locations`.`map_center_longitude`");

        $this->table('locations')
            ->removeColumn('map_folder_name')
            ->removeColumn('map_center_latitude')
            ->removeColumn('map_center_longitude')
            ->update();
    }

    public function down() {
        $this->table('locations')
            ->addColumn('map_folder_name', 'string')
            ->addColumn('map_center_latitude', 'string')
            ->addColumn('map_center_longitude', 'string')
            ->update();

        $this->execute("UPDATE `locations` 
            INNER JOIN `missions`
              ON `missions`.`location_id` = `locations`.`id`
            SET `locations`.`map_folder_name` = `missions`.`map_folder_name`,
              `locations`.`map_center_latitude` = `missions`.`map_center_latitude`,
              `locations`.`map_center_longitude` = `missions`.`map_center_longitude`");

        $this->table('missions')
            ->removeColumn('map_folder_name')
            ->removeColumn('map_center_latitude')
            ->removeColumn('map_center_longitude')
            ->update();
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class SetSatelliteOnMiamiMissions extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` 
          SET `satellite_view` = 1 
          WHERE `slug` = 'finish-line'");
    }

    public function down() {
        $this->execute("UPDATE `missions` 
          SET `satellite_view` = 0 
          WHERE `slug` = 'finish-line'");
    }
}

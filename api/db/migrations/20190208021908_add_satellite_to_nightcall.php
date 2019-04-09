<?php


use Phinx\Migration\AbstractMigration;

class AddSatelliteToNightcall extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` 
          SET `satellite_view` = 1 
          WHERE `slug` = 'nightcall'");
    }

    public function down() {
        $this->execute("UPDATE `missions` 
          SET `satellite_view` = 0 
          WHERE `slug` = 'nightcall'");
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class AddSatelliteViewToThreeHeadedSerpent extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` 
          SET `satellite_view` = 1 
          WHERE `slug` = 'three-headed-serpent'");
    }

    public function down() {
        $this->execute("UPDATE `missions` 
          SET `satellite_view` = 0 
          WHERE `slug` = 'three-headed-serpent'");
    }
}

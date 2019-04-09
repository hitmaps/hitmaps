<?php


use Phinx\Migration\AbstractMigration;

class AddSatelliteViewToAnotherLife extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` 
          SET `satellite_view` = 1 
          WHERE `slug` = 'another-life'");
    }

    public function down() {
        $this->execute("UPDATE `missions` 
          SET `satellite_view` = 0 
          WHERE `slug` = 'another-life'");
    }
}

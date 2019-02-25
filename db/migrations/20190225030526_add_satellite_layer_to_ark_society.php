<?php


use Phinx\Migration\AbstractMigration;

class AddSatelliteLayerToArkSociety extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` SET `satellite_view` = 1 WHERE `slug` = 'ark-society'");
    }

    public function down() {
        $this->execute("UPDATE `missions` SET `satellite_view` = 0 WHERE `slug` = 'ark-society'");
    }
}

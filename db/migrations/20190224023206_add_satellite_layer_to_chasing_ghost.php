<?php


use Phinx\Migration\AbstractMigration;

class AddSatelliteLayerToChasingGhost extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` SET `satellite_view` = 1 WHERE `slug` = 'chasing-a-ghost'");
    }

    public function down() {
        $this->execute("UPDATE `missions` SET `satellite_view` = 0 WHERE `slug` = 'chasing-a-ghost'");
    }
}

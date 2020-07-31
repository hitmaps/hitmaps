<?php


use Phinx\Migration\AbstractMigration;

class SetHigherZoomLevelForAbsolution extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` SET `max_zoom` = 10 WHERE `svg` = 1");
    }

    public function down() {
        $this->execute("UPDATE `missions` SET `max_zoom` = 5 WHERE `svg` = 1");
    }
}

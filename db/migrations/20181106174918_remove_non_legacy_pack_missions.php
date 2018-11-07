<?php


use Phinx\Migration\AbstractMigration;

class RemoveNonLegacyPackMissions extends AbstractMigration {
    public function up() {
        $this->execute("DELETE FROM `missions` WHERE `id` IN (3, 6, 11, 14, 17, 19)");
    }

    public function down() {
    }
}

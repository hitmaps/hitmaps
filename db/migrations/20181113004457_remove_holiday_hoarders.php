<?php


use Phinx\Migration\AbstractMigration;

class RemoveHolidayHoarders extends AbstractMigration {
    public function up() {
        $this->execute("DELETE FROM `missions` WHERE `id` = 4");
    }

    public function down() {
    }
}

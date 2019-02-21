<?php


use Phinx\Migration\AbstractMigration;

class SeedNodeTooltips extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `nodes` SET `tooltip` = `name`");
    }

    public function down() {
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class SeedItemTooltips extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `items` SET `tooltip` = `name`");
    }

    public function down() {
    }
}

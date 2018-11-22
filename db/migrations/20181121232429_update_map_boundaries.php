<?php


use Phinx\Migration\AbstractMigration;

class UpdateMapBoundaries extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions`
            SET `bottom_right_coordinate` = '-299.125,392.25'
            WHERE `slug` = 'nightcall'");
        $this->execute("UPDATE `missions`
            SET `bottom_right_coordinate` = '-251.25,338.625'
            WHERE `slug` = 'chasing-a-ghost'");
    }

    public function down() {

    }
}

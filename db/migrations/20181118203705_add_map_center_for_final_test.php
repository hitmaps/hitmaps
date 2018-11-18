<?php


use Phinx\Migration\AbstractMigration;

class AddMapCenterForFinalTest extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions`
            SET `map_center_latitude` = '-92.875',
              `map_center_longitude` = '93.125'
            WHERE `slug` = 'the-final-test'");
    }

    public function down() {
        $this->execute("UPDATE `missions`
            SET `map_center_latitude` = '0',
              `map_center_longitude` = '0'
            WHERE `slug` = 'the-final-test'");
    }
}

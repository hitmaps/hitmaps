<?php


use Phinx\Migration\AbstractMigration;

class AddMaxBoundsForFinalTest extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` 
          SET `top_left_coordinate` = '.3125,-.125',
            `bottom_right_coordinate` = '-186.625,187.25'
          WHERE `slug` = 'the-final-test'");
    }

    public function down() {
        $this->execute("UPDATE `missions` 
          SET `top_left_coordinate` = '',
            `bottom_right_coordinate` = ''
          WHERE `slug` = 'the-final-test'");
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class SetDefaultAbsolutionBoundingBoxes extends AbstractMigration {
    public function up() {
        //0,0], [100,100
        $this->execute("UPDATE `missions` SET `bounding_box_top_left` = '0,0', `bounding_box_bottom_right` = '100,100' WHERE `location_id` IN (19,20,21,22)");
    }

    public function down() {
        //-- no-op
    }
}

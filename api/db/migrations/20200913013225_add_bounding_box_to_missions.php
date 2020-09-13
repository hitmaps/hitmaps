<?php


use Phinx\Migration\AbstractMigration;

class AddBoundingBoxToMissions extends AbstractMigration {
    public function change() {
        $this->table('missions')
            ->addColumn('bounding_box_top_left', 'string', ['default' => '0,0'])
            ->addColumn('bounding_box_bottom_right', 'string', ['default' => '0,0'])
            ->update();
    }
}

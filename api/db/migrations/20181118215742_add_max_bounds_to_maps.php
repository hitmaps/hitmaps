<?php


use Phinx\Migration\AbstractMigration;

class AddMaxBoundsToMaps extends AbstractMigration {
    public function change() {
        $this->table('missions')
            ->addColumn('top_left_coordinate', 'string')
            ->addColumn('bottom_right_coordinate', 'string')
            ->update();
    }
}

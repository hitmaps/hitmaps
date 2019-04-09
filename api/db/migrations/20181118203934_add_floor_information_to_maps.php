<?php


use Phinx\Migration\AbstractMigration;

class AddFloorInformationToMaps extends AbstractMigration {
    public function change() {
        $this->table('missions')
            ->addColumn('lowest_floor_number', 'integer')
            ->addColumn('highest_floor_number', 'integer')
            ->addColumn('starting_floor_number', 'integer')
            ->update();
    }
}

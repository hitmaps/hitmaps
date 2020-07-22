<?php


use Phinx\Migration\AbstractMigration;

class AddMapLevelToNameTable extends AbstractMigration {
    public function change() {
        $this->table('map_floor_to_name')
            ->addColumn('mission_id', 'integer')
            ->addColumn('name_key', 'string')
            ->create();
    }
}

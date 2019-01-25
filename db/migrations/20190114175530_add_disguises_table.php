<?php


use Phinx\Migration\AbstractMigration;

class AddDisguisesTable extends AbstractMigration {
    public function change() {
        $this->table('disguises')
            ->addColumn('mission_id', 'integer')
            ->addColumn('name', 'string')
            ->addColumn('image', 'string')
            ->create();
    }
}

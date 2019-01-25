<?php


use Phinx\Migration\AbstractMigration;

class AddFoliageTable extends AbstractMigration {
    public function change() {
        $this->table('foliage')
            ->addColumn('mission_id', 'integer')
            ->addColumn('vertices', 'string')
            ->create();
    }
}

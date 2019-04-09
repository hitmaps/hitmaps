<?php


use Phinx\Migration\AbstractMigration;

class AddLevelToFoliageTable extends AbstractMigration {
    public function change() {
        $this->table('foliage')
            ->addColumn('level', 'integer')
            ->update();
    }
}

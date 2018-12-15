<?php


use Phinx\Migration\AbstractMigration;

class AddLevelToLedgeTable extends AbstractMigration {
    public function change() {
        $this->table('ledges')
            ->addColumn('level', 'integer')
            ->update();
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class AddLedgesTable extends AbstractMigration {
    public function change() {
        $this->table('ledges')
            ->addColumn('mission_id', 'integer')
            ->addColumn('vertices', 'string')
            ->create();
    }
}

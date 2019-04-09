<?php


use Phinx\Migration\AbstractMigration;

class AddNodeTable extends AbstractMigration {
    public function change() {
        $table = $this->table('nodes');
        $table->addColumn('mission_id', 'integer')
            ->addColumn('type', 'string')
            ->addColumn('icon', 'string')
            ->addColumn('name', 'string')
            ->addColumn('target', 'string', ['null' => true])
            ->addColumn('image', 'binary', ['null' => true])
            ->addColumn('level', 'integer')
            ->addColumn('latitude', 'string')
            ->addColumn('longitude', 'string')
            ->addColumn('difficulty', 'string')
            ->create();
    }
}

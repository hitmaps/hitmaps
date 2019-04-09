<?php


use Phinx\Migration\AbstractMigration;

class AddItemsTable extends AbstractMigration {
    public function change() {
        $this->table('items')
            ->addColumn('name', 'string')
            ->addColumn('target', 'string')
            ->addColumn('description', 'string')
            ->addColumn('image', 'binary', ['null' => true])
            ->addColumn('type', 'string')
            ->addColumn('icon', 'string')
            ->addColumn('group', 'string')
            ->create();
    }
}

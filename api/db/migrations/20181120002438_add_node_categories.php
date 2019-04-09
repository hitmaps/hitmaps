<?php


use Phinx\Migration\AbstractMigration;

class AddNodeCategories extends AbstractMigration {
    public function change() {
        $this->table('node_categories')
            ->addColumn('type', 'string')
            ->addColumn('group', 'string')
            ->create();
    }
}

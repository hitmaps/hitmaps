<?php


use Phinx\Migration\AbstractMigration;

class AddIconsTable extends AbstractMigration {
    public function change() {
        $this->table('icons')
            ->addColumn('icon', 'string')
            ->addColumn('alt_text', 'string')
            ->addColumn('group', 'string')
            ->addColumn('order', 'string')
            ->create();
    }
}

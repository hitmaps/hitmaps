<?php


use Phinx\Migration\AbstractMigration;

class AddAdditionalNoteFieldsToItems extends AbstractMigration {
    public function change() {
        $this->table('items')
            ->addColumn('requirement', 'string')
            ->addColumn('warning', 'string')
            ->addColumn('information', 'string')
            ->update();
    }
}

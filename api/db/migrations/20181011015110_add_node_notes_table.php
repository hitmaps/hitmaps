<?php


use Phinx\Migration\AbstractMigration;

class AddNodeNotesTable extends AbstractMigration {
    public function change() {
        $table = $this->table('node_notes');
        $table->addColumn('node_id', 'integer')
            ->addColumn('type', 'string')
            ->addColumn('text', 'string')
            ->create();
    }
}

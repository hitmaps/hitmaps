<?php


use Phinx\Migration\AbstractMigration;

class AddApprovedToNodes extends AbstractMigration {
    public function change() {
        $this->table('nodes')
            ->addColumn('approved', 'boolean', ['default' => false])
            ->addColumn('created_by', 'integer')
            ->addColumn('date_created', 'datetime', ['default' => \Phinx\Util\Literal::from('now()')])
            ->update();
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class AddOrderToDisguises extends AbstractMigration {
    public function change() {
        $this->table('disguises')
            ->addColumn('order', 'integer')
            ->addColumn('description', 'text', ['limit' => 'text_medium'])
            ->update();
    }
}

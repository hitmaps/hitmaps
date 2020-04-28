<?php


use Phinx\Migration\AbstractMigration;

class AddSuitDesignationToDisguises extends AbstractMigration {
    public function change() {
        $this->table('disguises')
            ->addColumn('suit', 'boolean')
            ->update();
    }
}

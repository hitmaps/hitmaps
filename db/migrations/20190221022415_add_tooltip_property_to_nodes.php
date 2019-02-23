<?php


use Phinx\Migration\AbstractMigration;

class AddTooltipPropertyToNodes extends AbstractMigration {
    public function change() {
        $this->table('nodes')
            ->addColumn('tooltip', 'string')
            ->update();
    }
}

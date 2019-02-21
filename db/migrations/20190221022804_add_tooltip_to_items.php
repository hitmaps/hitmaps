<?php


use Phinx\Migration\AbstractMigration;

class AddTooltipToItems extends AbstractMigration {
    public function change() {
        $this->table('items')
            ->addColumn('tooltip', 'string')
            ->update();
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class ConvertIconToSubGroup extends AbstractMigration {
    public function change() {
        $this->table('nodes')
            ->renameColumn('icon', 'subgroup')
            ->update();
        $this->table('node_categories')
            ->renameColumn('icon', 'subgroup')
            ->update();
        $this->table('items')
            ->renameColumn('icon', 'subgroup')
            ->update();
    }
}

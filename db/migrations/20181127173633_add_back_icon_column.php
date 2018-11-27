<?php


use Phinx\Migration\AbstractMigration;

class AddBackIconColumn extends AbstractMigration {
    public function up() {
        $this->table('nodes')
            ->addColumn('icon', 'string')
            ->update();
        $this->table('node_categories')
            ->addColumn('icon', 'string')
            ->update();
        $this->table('items')
            ->addColumn('icon', 'string')
            ->update();
        $this->execute("UPDATE `nodes` SET `icon` = `subgroup`");
        $this->execute("UPDATE `node_categories` SET `icon` = `subgroup`");
        $this->execute("UPDATE `items` SET `icon` = `subgroup`");
    }

    public function down() {
        $this->table('nodes')
            ->removeColumn('icon')
            ->update();
        $this->table('node_categories')
            ->removeColumn('icon')
            ->update();
        $this->table('items')
            ->removeColumn('icon')
            ->update();
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class AddOrderColumnToNodeCategories extends AbstractMigration {
    public function up() {
        $this->table('node_categories')
            ->addColumn('order', 'integer')
            ->update();
        $this->execute("UPDATE `node_categories`
            SET `order` = 1
            WHERE `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `order` = 2
            WHERE `type` = 'Weapons and Tools'");
        $this->execute("UPDATE `node_categories`
            SET `order` = 3
            WHERE `type` = 'Navigation'");
    }

    public function down() {
        $this->table('node_categories')
            ->removeColumn('order')
            ->update();
    }
}

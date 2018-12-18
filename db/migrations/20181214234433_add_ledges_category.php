<?php


use Phinx\Migration\AbstractMigration;

class AddLedgesCategory extends AbstractMigration {
    public function up() {
        $this->table('node_categories')
            ->insert([
                'type' => 'Navigation',
                'group' => 'Ledge',
                'subgroup' => 'ledge',
                'require_name' => 0,
                'require_action' => 0,
                'require_target' => 0,
                'note' => 'DO NOT CREATE ITEMS IN THIS CATEGORY! This category is reserved for ledges ONLY and should be created via the ledge editor.',
                'require_pickup' => 0,
                'require_direction' => 0,
                'order' => 3,
                'icon' => 'ledge',
                'searchable' => 0,
            ])->save();
    }

    public function down() {
        $this->execute("DELETE FROM `node_categories` WHERE `group` = 'Ledge'");
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class AddCollapsiblePropertyToNodeCategories extends AbstractMigration {
    public function up() {
        $this->table('node_categories')
            ->addColumn('collapsible', 'boolean')
            ->update();

        $this->execute("UPDATE `node_categories`
            SET `collapsible` = 1
            WHERE (`type` = 'Points of Interest' AND `group` IN ('Sabotage', 'Distraction'))
                OR (`type` = 'Weapons and Tools' AND `group` IN ('Lethal Melee', 'Non-lethal Melee', 'Explosive', 'Distraction'))");
    }

    public function down() {
        $this->table('node_categories')
            ->removeColumn('collapsible')
            ->update();
    }
}

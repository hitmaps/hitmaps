<?php


use Phinx\Migration\AbstractMigration;

class AddSniperAssassinFlagToNodeCategories extends AbstractMigration {
    public function up() {
        $this->table('node_categories')
            ->addColumn('for_sniper_assassin', 'boolean')
            ->addColumn('for_mission', 'boolean')
            ->update();
        $this->execute("UPDATE `node_categories`
            SET `for_mission` = 1");
        $this->execute("UPDATE `node_categories`
            SET `for_sniper_assassin` = 0");
        $this->table('node_categories')
            ->insert([
                [
                    'type' => 'Points of Interest',
                    'group' => 'Sabotage',
                    'subgroup' => 'sabotage-sa',
                    'require_name' => 1,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'sabotage',
                    'searchable' => 1,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Misc Item',
                    'subgroup' => 'misc-item-sa',
                    'require_name' => 1,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'misc-item',
                    'searchable' => 1,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Distraction',
                    'subgroup' => 'distraction-sa',
                    'require_name' => 1,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'distraction',
                    'searchable' => 1,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Interaction',
                    'subgroup' => 'interaction-sa',
                    'require_name' => 1,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'interaction',
                    'searchable' => 1,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Location',
                    'subgroup' => 'location-sa',
                    'require_name' => 1,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'location',
                    'searchable' => 1,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Duck',
                    'subgroup' => 'duck-sa',
                    'require_name' => 0,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'duck',
                    'searchable' => 0,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Gnome',
                    'subgroup' => 'gnome-sa',
                    'require_name' => 0,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'gnome',
                    'searchable' => 0,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Rat',
                    'subgroup' => 'rat-sa',
                    'require_name' => 0,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'rat',
                    'searchable' => 0,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Flower Pot',
                    'subgroup' => 'flower-pot-sa',
                    'require_name' => 0,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'flower-pot',
                    'searchable' => 0,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Light Switch',
                    'subgroup' => 'light-switch-sa',
                    'require_name' => 0,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'light-switch',
                    'searchable' => 0,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
                [
                    'type' => 'Points of Interest',
                    'group' => 'Hiding Spot',
                    'subgroup' => 'hiding-spot-sa',
                    'require_name' => 1,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'hiding-spot',
                    'searchable' => 0,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ],
            ])->save();
    }

    public function down() {
        $this->table('node_categories')
            ->removeColumn('for_sniper_assassin')
            ->removeColumn('for_mission')
            ->update();
        $this->execute("DELETE FROM `node_categories` WHERE `subgroup` LIKE '%-sa'");
    }
}

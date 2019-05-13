<?php


use Phinx\Migration\AbstractMigration;

class AddPigeonsCategory extends AbstractMigration {
    public function up() {
        $this->table('node_categories')
            ->insert([
                [
                    'type' => 'Points of Interest',
                    'group' => 'Pigeon',
                    'subgroup' => 'pigeon-sa',
                    'require_name' => 0,
                    'require_action' => 0,
                    'require_target' => 0,
                    'require_pickup' => 0,
                    'require_direction' => 0,
                    'order' => 1,
                    'icon' => 'pigeon',
                    'searchable' => 0,
                    'collapsible' => 0,
                    'for_sniper_assassin' => 1,
                    'for_mission' => 0
                ]
            ])->save();
        $this->table('icons')
            ->insert([
                [
                    'icon' => 'pigeon',
                    'alt_text' => 'Pigeon',
                    'group' => 'Points of Interest',
                    'order' => 1
                ]
            ])->save();
    }
}

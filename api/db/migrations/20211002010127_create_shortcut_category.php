<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateShortcutCategory extends AbstractMigration {
    public function change(): void {
        $this->table('node_categories')
            ->insert([
                'type' => 'Navigation',
                'group' => 'Shortcut',
                'subgroup' => 'shortcut',
                'require_name' => true,
                'require_action' => false,
                'require_target' => false,
                'note' => 'Used to mark permanent shortcuts in HITMAN 3 maps',
                'require_pickup' => false,
                'require_direction' => false,
                'order' => 36,
                'icon' => 'shortcut',
                'searchable' => true,
                'collapsible' => false,
                'for_sniper_assassin' => false,
                'for_mission' => true
            ])->save();

        $this->table('icons')
            ->insert([
                'icon' => 'shortcut',
                'alt_text' => 'Shortcut',
                'group' => 'Navigation',
                'order' => 1
            ])->save();
    }
}

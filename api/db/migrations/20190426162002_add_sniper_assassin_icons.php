<?php


use Phinx\Migration\AbstractMigration;

class AddSniperAssassinIcons extends AbstractMigration {
    public function up() {
        $this->table('icons')
            ->insert([
                [
                    'icon' => 'duck',
                    'alt_text' => 'Duck',
                    'group' => 'Points of Interest',
                    'order' => 1
                ],
                [
                    'icon' => 'flower-pot',
                    'alt_text' => 'Flower Pot',
                    'group' => 'Points of Interest',
                    'order' => 1
                ],
                [
                    'icon' => 'gnome',
                    'alt_text' => 'Gnome',
                    'group' => 'Points of Interest',
                    'order' => 1
                ],
                [
                    'icon' => 'light-switch',
                    'alt_text' => 'Light Switch',
                    'group' => 'Points of Interest',
                    'order' => 1
                ],
                [
                    'icon' => 'rat',
                    'alt_text' => 'Rat',
                    'group' => 'Points of Interest',
                    'order' => 1
                ],
            ])->save();
    }
}

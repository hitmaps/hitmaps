<?php


use Phinx\Migration\AbstractMigration;

class AddSniperAssassinGame extends AbstractMigration {
    public function change() {
        $this->table('games')
            ->insert([
                [
                    'slug' => 'sniper-assassin',
                    'full_name' => 'Sniper Assassin',
                    'tagline' => 'Sniper Assassin',
                    'type' => 'Game Mode',
                    'icon' => 'sniper-assassin'
                ]
            ])
            ->save();
    }
}

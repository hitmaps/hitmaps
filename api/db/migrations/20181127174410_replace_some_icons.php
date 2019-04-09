<?php


use Phinx\Migration\AbstractMigration;

class ReplaceSomeIcons extends AbstractMigration {
    public function up() {
        $rows = [
            [
                'icon' => 'amputation-knife',
                'name' => 'Amputation Knife'
            ],
            [
                'icon' => 'baseball-bat',
                'name' => 'Baseball Bat'
            ],
            [
                'icon' => 'police-baton',
                'name' => 'Police Baton'
            ],
            [
                'icon' => 'amputation-knife',
                'name' => 'Amputation Knife'
            ],
            [
                'icon' => 'battle-axe',
                'name' => 'Battle Axe'
            ],
            [
                'icon' => 'brick',
                'name' => 'Brick'
            ],
            [
                'icon' => 'bust',
                'name' => 'Bust'
            ],
            [
                'icon' => 'circumcision-knife',
                'name' => 'Circumcision Knife'
            ],
            [
                'icon' => 'cleaver',
                'name' => 'Cleaver'
            ],
            [
                'icon' => 'combat-knife',
                'name' => 'Combat Knife'
            ],
            [
                'icon' => 'crowbar',
                'name' => 'Crowbar'
            ],
            [
                'icon' => 'fire-axe',
                'name' => 'Fire Axe'
            ],
            [
                'icon' => 'fire-extinguisher',
                'name' => 'Fire Extinguisher'
            ],
            [
                'icon' => 'fire-poker',
                'name' => 'Fire Poker'
            ],
            [
                'icon' => 'folding-knife',
                'name' => 'Folding Knife'
            ],
            [
                'icon' => 'golf-club',
                'name' => 'Golf Club'
            ],
            [
                'icon' => 'hammer',
                'name' => 'Hammer'
            ],
            [
                'icon' => 'hatchet',
                'name' => 'Hatchet'
            ],
            [
                'icon' => 'katana',
                'name' => 'Katana'
            ],
            [
                'icon' => 'kitchen-knife',
                'name' => 'Kitchen Knife'
            ],
            [
                'icon' => 'letter-opener',
                'name' => 'Letter Opener'
            ],
            [
                'icon' => 'old-axe',
                'name' => 'Old Axe'
            ],
            [
                'icon' => 'lead-pipe',
                'name' => 'Lead Pipe'
            ],
            [
                'icon' => 'pool-ball',
                'name' => 'Pool Ball'
            ],
            [
                'icon' => 'saber',
                'name' => 'Saber'
            ],
            [
                'icon' => 'scissors',
                'name' => 'Scissors'
            ],
            [
                'icon' => 'screwdriver',
                'name' => 'Screwdriver'
            ],
            [
                'icon' => 'shovel',
                'name' => 'Shovel'
            ],
            [
                'icon' => 'soda-can',
                'name' => 'Soda Can'
            ],
            [
                'icon' => 'toy-tank',
                'name' => 'Toy Tank'
            ],
            [
                'icon' => 'wrench',
                'name' => 'Wrench'
            ],
        ];

        foreach ($rows as $row) {
            $this->execute("UPDATE `nodes`
                SET `icon` = '{$row['icon']}'
                WHERE `name` = '{$row['name']}'");
            $this->execute("UPDATE `items`
                SET `icon` = '{$row['icon']}'
                WHERE `name` = '{$row['name']}'");
        }
    }

    public function down() {
    }
}

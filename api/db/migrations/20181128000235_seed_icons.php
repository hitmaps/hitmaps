<?php


use Phinx\Migration\AbstractMigration;

class SeedIcons extends AbstractMigration {
    public function up() {
        $rows = [
            [
                'icon' => 'agency-pickup',
                'alt_text' => 'Agency Pickup',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'alarm',
                'alt_text' => 'Fire Alarm',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'ammo',
                'alt_text' => 'Ammunition',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'amputation-knife',
                'alt_text' => 'Amputation Knife',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'baseball-bat',
                'alt_text' => 'Baseball Bat',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'battle-axe',
                'alt_text' => 'Battle Axe',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'blend-in',
                'alt_text' => 'Blend In',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'brick',
                'alt_text' => 'Brick',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'bust',
                'alt_text' => 'Bust',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'camera',
                'alt_text' => 'Security Camera',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'circumcision-knife',
                'alt_text' => 'Circumcision Knife',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'cleaver',
                'alt_text' => 'Cleaver',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'coin',
                'alt_text' => 'Coin',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'combat-knife',
                'alt_text' => 'Combat Knife',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'conceal-item',
                'alt_text' => 'Conceal Item',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'crowbar',
                'alt_text' => 'Crowbar',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'destroy-evidence',
                'alt_text' => 'Destroy Evidence',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'disguise',
                'alt_text' => 'Disguise',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'distraction',
                'alt_text' => 'Distraction',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'down-pipe',
                'alt_text' => 'Way Down',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'down-stair',
                'alt_text' => 'Stairs Down',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'exit-location',
                'alt_text' => 'Exit Location',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'explosive',
                'alt_text' => 'Explosive',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'fire-axe',
                'alt_text' => 'Fire Axe',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'fire-extinguisher',
                'alt_text' => 'Fire Extinguisher',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'fire-poker',
                'alt_text' => 'Fire Poker',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'firearm',
                'alt_text' => 'Firearm',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'folding-knife',
                'alt_text' => 'Folding Knife',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'frisk',
                'alt_text' => 'Security Check',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'golf-club',
                'alt_text' => 'Golf Club',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'hammer',
                'alt_text' => 'Hammer',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'hatchet',
                'alt_text' => 'Hatchet',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'hiding-spot',
                'alt_text' => 'Hiding Spot',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'intel',
                'alt_text' => 'Intel',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'interaction',
                'alt_text' => 'Interaction',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'katana',
                'alt_text' => 'Katana',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'knife',
                'alt_text' => 'Knife',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'lead-pipe',
                'alt_text' => 'Lead Pipe',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'lethal-melee',
                'alt_text' => 'Lethal Melee',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'letter-opener',
                'alt_text' => 'Letter Opener',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'location',
                'alt_text' => 'Location',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'locked-door',
                'alt_text' => 'Locked Door',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'misc-item',
                'alt_text' => 'Misc Item',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'non-lethal-melee',
                'alt_text' => 'Non-lethal Melee',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'old-axe',
                'alt_text' => 'Old Axe',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'passage',
                'alt_text' => 'Passage',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'poison',
                'alt_text' => 'Poison',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'poison-weapon',
                'alt_text' => 'Poison',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'police-baton',
                'alt_text' => 'Police Baton',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'pool-ball',
                'alt_text' => 'Pool Ball',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'saber',
                'alt_text' => 'Saber',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'sabotage',
                'alt_text' => 'Sabotage',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'scissors',
                'alt_text' => 'Scissors',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'screwdriver',
                'alt_text' => 'Screwdriver',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'shovel',
                'alt_text' => 'Shovel',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'soda-can',
                'alt_text' => 'Soda Can',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'starting-location',
                'alt_text' => 'Starting Location',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'toy-tank',
                'alt_text' => 'Toy Tank',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
            [
                'icon' => 'up-down-pipe',
                'alt_text' => 'Way Up and Down',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'up-down-stair',
                'alt_text' => 'Stairs Up and Down',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'up-pipe',
                'alt_text' => 'Way Up',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'up-stair',
                'alt_text' => 'Stairs Up',
                'group' => 'Navigation',
                'order' => 3
            ],
            [
                'icon' => 'weapon-crate',
                'alt_text' => 'Weapon Crate',
                'group' => 'Points of Interest',
                'order' => 1
            ],
            [
                'icon' => 'wrench',
                'alt_text' => 'Wrench',
                'group' => 'Weapons and Tools',
                'order' => 2
            ],
        ];
        $this->table('icons')->insert($rows)->save();
    }

    public function down() {
        $this->execute("DELETE FROM `icons`");
    }
}

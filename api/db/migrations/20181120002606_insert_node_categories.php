<?php


use Phinx\Migration\AbstractMigration;

class InsertNodeCategories extends AbstractMigration {
    public function up() {
        $rows = [
            [
                'type' => 'Points of Interest',
                'group' => 'Sabotage'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Distraction'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Poison'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Misc Item'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Intel'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Disguise'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Blend In'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Conceal Item'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Weapon Crate'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Locked Door'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Destroy Evidence'
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Hiding Spot'
            ],
            [
                'type' => 'Weapons and Tools',
                'group' => 'Lethal Melee'
            ],
            [
                'type' => 'Weapons and Tools',
                'group' => 'Non-Lethal Melee'
            ],
            [
                'type' => 'Weapons and Tools',
                'group' => 'Explosive'
            ],
            [
                'type' => 'Weapons and Tools',
                'group' => 'Coin'
            ],
            [
                'type' => 'Weapons and Tools',
                'group' => 'Poison'
            ],
            [
                'type' => 'Weapons and Tools',
                'group' => 'Firearm'
            ],
            [
                'type' => 'Weapons and Tools',
                'group' => 'Ammo'
            ],
            [
                'type' => 'Navigation',
                'group' => 'Starting Location'
            ],
            [
                'type' => 'Navigation',
                'group' => 'Exit Location'
            ],
            [
                'type' => 'Navigation',
                'group' => 'Agency Pickup'
            ],
            [
                'type' => 'Navigation',
                'group' => 'Stairwell'
            ]
        ];
        $this->table('node_categories')
            ->insert($rows)
            ->save();
    }

    public function down() {
        $this->execute("DELETE FROM `node_categories`");
    }
}

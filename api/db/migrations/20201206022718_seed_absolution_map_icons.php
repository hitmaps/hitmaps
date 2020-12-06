<?php

use Phinx\Migration\AbstractMigration;

class SeedAbsolutionMapIcons extends AbstractMigration {
    public function up() {
        $this->table('icons')
            ->insert([
                [
                    'icon' => 'hammer-sledge',
                    'alt_text' => 'Sledge Hammer',
                    'group' => 'Lethal Melee',
                    'order' => 1
                ],
                [
                    'icon' => 'health',
                    'alt_text' => 'First Aid',
                    'group' => 'Points of Interest',
                    'order' => 1
                ],
                [
                    'icon' => 'hula-girl',
                    'alt_text' => 'Hula Girl',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'knife-filet',
                    'alt_text' => 'Filet Knife',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'knife-glass',
                    'alt_text' => 'Glass Shiv',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'bill-spike',
                    'alt_text' => 'Bill Spike',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'morning-star',
                    'alt_text' => 'Morning Star',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'bong',
                    'alt_text' => 'Bong',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'plunger',
                    'alt_text' => 'Plunger',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'book',
                    'alt_text' => 'Book',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'power-cord',
                    'alt_text' => 'Power Cord',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'bottle',
                    'alt_text' => 'Bottle',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'toy-robot',
                    'alt_text' => 'Toy Robot',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'coffee-mug',
                    'alt_text' => 'Coffee Mug',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'vase',
                    'alt_text' => 'Vase',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
                [
                    'icon' => 'gas-can',
                    'alt_text' => 'Gasoline Can',
                    'group' => 'Weapons and Tools',
                    'order' => 1
                ],
            ])->save();
    }
}

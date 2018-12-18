<?php


use Phinx\Migration\AbstractMigration;

class UpdateSomeNodeIcons extends AbstractMigration {
    public function up() {
        foreach ($this->getItems() as $item) {
            $this->execute("UPDATE `nodes` SET `icon` = '{$item['icon']}' WHERE `name` = '{$item['name']}'");
        }
    }

    private function getItems() {
        return [
            [
                'name' => 'A Bag of Sugar',
                'icon' => 'bag-of-sugar',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Android Arm',
                'icon' => 'android-arm',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Bag of Sugar',
                'icon' => 'bag-of-sugar',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Baseball',
                'icon' => 'baseball',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Beak Axe',
                'icon' => 'beak-axe',
                'oldIcon' => 'lethal-melee',
            ],
            [
                'name' => 'Blueberry muffin',
                'icon' => 'blueberry-muffin',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Blueberry muffin (x2)',
                'icon' => 'blueberry-muffin',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Branding Iron',
                'icon' => 'branding-iron',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Broadsword',
                'icon' => 'broadsword',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Bust (Black)',
                'icon' => 'bust',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Car Battery',
                'icon' => 'car-battery',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Chennai Cricket Ball',
                'icon' => 'chennai-cricket-ball',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Cigar Box',
                'icon' => 'cigar-box',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Coconut',
                'icon' => 'coconut',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Collectors Baseball Bat',
                'icon' => 'baseball-bat',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Colored Smoke',
                'icon' => 'colored-smoke',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Cowboy Bust',
                'icon' => 'cowboy-bust',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Didgeridoo',
                'icon' => 'didgeridoo',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Driftwood Log',
                'icon' => 'driftwood-log',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Expired Can of Spaghetti Sauce',
                'icon' => 'expired-can-of-spaghetti-sauce',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Fish',
                'icon' => 'fish',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Fish (x2)',
                'icon' => 'fish',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Frying Pan',
                'icon' => 'frying-pan',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Iron',
                'icon' => 'iron',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Khatvanga',
                'icon' => 'khatvanga',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Lever',
                'icon' => 'lever',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Lever for Railway Switch',
                'icon' => 'lever',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Mace',
                'icon' => 'mace',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Machete',
                'icon' => 'machete',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Maori Paddle (x2)',
                'icon' => 'paddle-maori',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Mannequin Arm',
                'icon' => 'mannequin-arm',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Meaty Bone',
                'icon' => 'meaty-bone',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Measuring Tape',
                'icon' => 'measuring-tape',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Newspaper',
                'icon' => 'newspaper',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Pneumatic Wrench',
                'icon' => 'pneumatic-wrench',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Rake',
                'icon' => 'rake',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => "Sapper''s Axe",
                'icon' => 'sappers-axe',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Scalpel',
                'icon' => 'scalpel',
                'oldIcon' => 'lethal-melee',
            ],
            [
                'name' => 'Soda can (x2)',
                'icon' => 'soda-can',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Spaghetti Sauce Can',
                'icon' => 'expired-can-of-spaghetti-sauce',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Viking Axe',
                'icon' => 'viking-axe',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Cocaine Brick',
                'icon' => 'cocaine-brick',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Barber Razor',
                'icon' => 'barber-razor',
                'oldIcon' => 'lethal-melee',
            ],
        ];
    }

    public function down() {
    }
}

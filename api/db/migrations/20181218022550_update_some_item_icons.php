<?php


use Phinx\Migration\AbstractMigration;

class UpdateSomeItemIcons extends AbstractMigration {
    public function up() {
        foreach ($this->getItems() as $item) {
            $this->execute("UPDATE `items` SET `icon` = '{$item['icon']}' WHERE `name` = '{$item['name']}'");
        }
    }

    private function getItems() {
        return [
            [
                'name' => 'Android Arm',
                'icon' => 'android-arm',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Baseball',
                'icon' => 'baseball',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Branding Iron',
                'icon' => 'branding-iron',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Car Battery',
                'icon' => 'car-battery',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Coconut',
                'icon' => 'coconut',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Cowboy Bust',
                'icon' => 'cowboy-bust',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Mannequin Arm',
                'icon' => 'mannequin-arm',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Frying Pan',
                'icon' => 'frying-pan',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Meaty Bone',
                'icon' => 'meaty-bone',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Rake',
                'icon' => 'rake',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Iron',
                'icon' => 'iron',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Chennai Cricket Ball',
                'icon' => 'chennai-cricket-ball',
                'oldIcon' => 'non-lethal-melee',
            ],
            [
                'name' => 'Fish',
                'icon' => 'fish',
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
            [
                'name' => 'Scalpel',
                'icon' => 'scalpel',
                'oldIcon' => 'lethal-melee',
            ]
        ];
    }

    public function down() {
        foreach ($this->getItems() as $item) {
            $this->execute("UPDATE `items` SET `icon` = '{$item['oldIcon']}' WHERE `name` = '{$item['name']}'");
        }
    }
}

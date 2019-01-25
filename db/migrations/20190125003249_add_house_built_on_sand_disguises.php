<?php


use Phinx\Migration\AbstractMigration;

class AddHouseBuiltOnSandDisguises extends AbstractMigration {
    public function up() {
        $this->table('disguises')
            ->insert($this->rows())
            ->save();
    }

    public function down() {
        foreach ($this->rows() as $row) {
            $this->query("DELETE FROM `disguises` 
              WHERE `mission_id` = {$row['mission_id']}
              AND `name` = '{$row['name']}'
              AND `image` = '{$row['image']}'");
        }
    }

    private function rows() {
        return [
            [
                'mission_id' => 12,
                'name' => 'Summer Suit',
                'image' => 'disguises/house-built-on-sand/summer-suit',
            ],
            [
                'mission_id' => 12,
                'name' => 'Shopkeeper',
                'image' => 'disguises/house-built-on-sand/shopkeeper',
            ],
            [
                'mission_id' => 12,
                'name' => 'Food Vendor',
                'image' => 'disguises/house-built-on-sand/food-vendor',
            ],
            [
                'mission_id' => 12,
                'name' => 'Waiter',
                'image' => 'disguises/house-built-on-sand/waiter',
            ],
            [
                'mission_id' => 12,
                'name' => 'Handyman',
                'image' => 'disguises/house-built-on-sand/handyman',
            ],
            [
                'mission_id' => 12,
                'name' => 'Bodyguard',
                'image' => 'disguises/house-built-on-sand/bodyguard',
            ],
            [
                'mission_id' => 12,
                'name' => 'Military Soldier',
                'image' => 'disguises/house-built-on-sand/military-soldier',
            ],
            [
                'mission_id' => 12,
                'name' => 'Fortune Teller',
                'image' => 'disguises/house-built-on-sand/fortune-teller',
            ],
        ];
    }
}

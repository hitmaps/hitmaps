<?php


use Phinx\Migration\AbstractMigration;

class AddGildedCageDisguises extends AbstractMigration {public function up() {
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
                'mission_id' => 10,
                'name' => 'Summer Suit',
                'image' => 'disguises/gilded-cage/summer-suit',
            ],
            [
                'mission_id' => 10,
                'name' => 'Shopkeeper',
                'image' => 'disguises/gilded-cage/shopkeeper',
            ],
            [
                'mission_id' => 10,
                'name' => 'Food Vendor',
                'image' => 'disguises/gilded-cage/food-vendor',
            ],
            [
                'mission_id' => 10,
                'name' => 'Waiter',
                'image' => 'disguises/gilded-cage/waiter',
            ],
            [
                'mission_id' => 10,
                'name' => 'Handyman',
                'image' => 'disguises/gilded-cage/handyman',
            ],
            [
                'mission_id' => 10,
                'name' => 'Local Printing Crew',
                'image' => 'disguises/gilded-cage/local-printing-crew',
            ],
            [
                'mission_id' => 10,
                'name' => 'Bodyguard',
                'image' => 'disguises/gilded-cage/bodyguard',
            ],
            [
                'mission_id' => 10,
                'name' => 'Military Soldier',
                'image' => 'disguises/gilded-cage/military-soldier',
            ],
            [
                'mission_id' => 10,
                'name' => 'Elite Soldier',
                'image' => 'disguises/gilded-cage/elite-soldier',
            ],
            [
                'mission_id' => 10,
                'name' => 'Military Officer',
                'image' => 'disguises/gilded-cage/military-officer',
            ],
            [
                'mission_id' => 10,
                'name' => 'Consulate Janitor',
                'image' => 'disguises/gilded-cage/consulate-janitor',
            ],
            [
                'mission_id' => 10,
                'name' => 'Consulate Security',
                'image' => 'disguises/gilded-cage/consulate-security',
            ],
            [
                'mission_id' => 10,
                'name' => 'Cameraman',
                'image' => 'disguises/gilded-cage/cameraman',
            ],
            [
                'mission_id' => 10,
                'name' => 'Consulate Intern',
                'image' => 'disguises/gilded-cage/consulate-intern',
            ],
            [
                'mission_id' => 10,
                'name' => 'Headmaster',
                'image' => 'disguises/gilded-cage/headmaster',
            ],
            [
                'mission_id' => 10,
                'name' => 'Masseur',
                'image' => 'disguises/gilded-cage/masseur',
            ],
            [
                'mission_id' => 10,
                'name' => 'Prisoner',
                'image' => 'disguises/gilded-cage/prisoner',
            ],
            [
                'mission_id' => 10,
                'name' => 'Fortune Teller',
                'image' => 'disguises/gilded-cage/fortune-teller',
            ],
        ];
    }
}

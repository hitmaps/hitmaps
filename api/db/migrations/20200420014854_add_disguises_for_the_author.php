<?php


use Phinx\Migration\AbstractMigration;

class AddDisguisesForTheAuthor extends AbstractMigration {
    public function up() {
        $this->table('disguises')->insert([
            [
                'mission_id' => 9,
                'name' => 'Italian Suit',
                'image' => 'disguises/world-of-tomorrow/italian-suit'
            ],
            [
                'mission_id' => 9,
                'name' => 'Bodyguard',
                'image' => 'disguises/world-of-tomorrow/bodyguard'
            ],
            [
                'mission_id' => 9,
                'name' => 'Bohemian',
                'image' => 'disguises/world-of-tomorrow/bohemian'
            ],
            [
                'mission_id' => 9,
                'name' => 'Brother Akram',
                'image' => 'disguises/the-author/brother-akram'
            ],
            [
                'mission_id' => 9,
                'name' => 'Craig Black',
                'image' => 'disguises/the-author/craig-black'
            ],
            [
                'mission_id' => 9,
                'name' => 'Church Staff',
                'image' => 'disguises/world-of-tomorrow/church-staff'
            ],
            [
                'mission_id' => 9,
                'name' => 'Gardener',
                'image' => 'disguises/world-of-tomorrow/gardener'
            ],
            [
                'mission_id' => 9,
                'name' => 'Plumber',
                'image' => 'disguises/world-of-tomorrow/plumber'
            ],
            [
                'mission_id' => 9,
                'name' => 'Housekeeper',
                'image' => 'disguises/world-of-tomorrow/housekeeper'
            ],
            [
                'mission_id' => 9,
                'name' => 'Kitchen Assistant',
                'image' => 'disguises/world-of-tomorrow/kitchen-assistant'
            ],
            [
                'mission_id' => 9,
                'name' => 'Chef',
                'image' => 'disguises/world-of-tomorrow/chef'
            ],
            [
                'mission_id' => 9,
                'name' => 'Salvatore Bravuomo',
                'image' => 'disguises/landslide/salvatore-bravuomo'
            ],
            [
                'mission_id' => 9,
                'name' => 'Super Fan',
                'image' => 'disguises/the-author/super-fan'
            ],
            [
                'mission_id' => 9,
                'name' => 'Waiter',
                'image' => 'disguises/world-of-tomorrow/waiter'
            ]
        ])->save();
    }

    public function down() {
        $this->query("DELETE FROM `disguises` WHERE `mission_id` = 9");
    }
}

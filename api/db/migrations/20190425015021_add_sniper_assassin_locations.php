<?php


use Phinx\Migration\AbstractMigration;

class AddSniperAssassinLocations extends AbstractMigration {
    public function up() {
        $this->table('locations')
            ->insert([
                [
                    'game' => 'sniper-assassin',
                    'destination' => 'Himmelstein',
                    'destination_country' => 'Austria',
                    'order' => 1,
                    'slug' => 'himmelstein'
                ],
                [
                    'game' => 'sniper-assassin',
                    'destination' => 'Hantu Port',
                    'destination_country' => 'Singapore',
                    'order' => 2,
                    'slug' => 'hantu-port'
                ]
            ])
            ->save();
    }

    public function down() {
        $this->execute("DELETE FROM `locations` WHERE `game` = 'sniper-assassin'");
    }
}

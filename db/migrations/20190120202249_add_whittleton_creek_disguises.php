<?php


use Phinx\Migration\AbstractMigration;

class AddWhittletonCreekDisguises extends AbstractMigration {
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
                'mission_id' => 25,
                'name' => 'Suburban Suit',
                'image' => 'disguises/whittleton-creek/suburban-suit',
            ],
            [
                'mission_id' => 25,
                'name' => 'Garbage Man',
                'image' => 'disguises/whittleton-creek/garbage-man',
            ],
            [
                'mission_id' => 25,
                'name' => 'Mailman',
                'image' => 'disguises/whittleton-creek/mailman',
            ],
            [
                'mission_id' => 25,
                'name' => 'Construction Worker',
                'image' => 'disguises/whittleton-creek/construction-worker',
            ],
            [
                'mission_id' => 25,
                'name' => 'Plumber',
                'image' => 'disguises/whittleton-creek/plumber',
            ],
            [
                'mission_id' => 25,
                'name' => 'Sheriff Deputy',
                'image' => 'disguises/whittleton-creek/sheriff-deputy',
            ],
            [
                'mission_id' => 25,
                'name' => 'Server',
                'image' => 'disguises/whittleton-creek/server',
            ],
            [
                'mission_id' => 25,
                'name' => 'Janus Bodyguard',
                'image' => 'disguises/whittleton-creek/janus-bodyguard',
            ],
            [
                'mission_id' => 25,
                'name' => 'Cassidy Bodyguard',
                'image' => 'disguises/whittleton-creek/cassidy-bodyguard',
            ],
            [
                'mission_id' => 25,
                'name' => 'Gardener',
                'image' => 'disguises/whittleton-creek/gardener',
            ],
            [
                'mission_id' => 25,
                'name' => 'Exterminator',
                'image' => 'disguises/whittleton-creek/exterminator',
            ],
            [
                'mission_id' => 25,
                'name' => 'BBQ Owner',
                'image' => 'disguises/whittleton-creek/bbq-owner',
            ],
            [
                'mission_id' => 25,
                'name' => 'Real Estate Broker',
                'image' => 'disguises/whittleton-creek/real-estate-broker',
            ],
            [
                'mission_id' => 25,
                'name' => "Janus' Nurse",
                'image' => 'disguises/whittleton-creek/janus-nurse',
            ],
            [
                'mission_id' => 25,
                'name' => 'Sheriff Masterson',
                'image' => 'disguises/whittleton-creek/sheriff-masterson',
            ],
            [
                'mission_id' => 25,
                'name' => 'James Batty',
                'image' => 'disguises/whittleton-creek/james-batty',
            ],
            [
                'mission_id' => 25,
                'name' => 'Gunther Mueller',
                'image' => 'disguises/whittleton-creek/gunther-mueller',
            ],
            [
                'mission_id' => 25,
                'name' => "Politician's Assistant",
                'image' => 'disguises/whittleton-creek/politician-assistant',
            ],
            [
                'mission_id' => 25,
                'name' => 'Politician',
                'image' => 'disguises/whittleton-creek/politician',
            ],
            [
                'mission_id' => 25,
                'name' => 'Spencer "The Hammer" Green',
                'image' => 'disguises/whittleton-creek/spencer-green',
            ],
            [
                'mission_id' => 25,
                'name' => 'Arkian Robes',
                'image' => 'disguises/whittleton-creek/arkian-robes',
            ],
        ];
    }
}

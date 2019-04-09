<?php


use Phinx\Migration\AbstractMigration;

class AddHitman2Missions extends AbstractMigration {
    public function up() {
        $this->table('campaigns')
            ->insert([
                'name' => 'HITMAN 2'
            ])->update();

        $rows = [
            [
                'location_id' => 8,
                'campaign_id' => 4,
                'name' => 'Nightcall',
                'slug' => 'nightcall',
                'order' => 1
            ],
            [
                'location_id' => 9,
                'campaign_id' => 4,
                'name' => 'The Finish Line',
                'slug' => 'finish-line',
                'order' => 1
            ],
            [
                'location_id' => 10,
                'campaign_id' => 4,
                'name' => 'The Three-Headed Serpent',
                'slug' => 'three-headed-serpent',
                'order' => 1
            ],
            [
                'location_id' => 11,
                'campaign_id' => 4,
                'name' => 'Chasing a Ghost',
                'slug' => 'chasing-a-ghost',
                'order' => 1
            ],
            [
                'location_id' => 12,
                'campaign_id' => 4,
                'name' => 'Another Life',
                'slug' => 'another-life',
                'order' => 1
            ],
            [
                'location_id' => 13,
                'campaign_id' => 4,
                'name' => 'The Ark Society',
                'slug' => 'ark-society',
                'order' => 1
            ]
        ];

        $this->table('missions')->insert($rows)->update();
    }

    public function down() {
        $this->execute("DELETE FROM `campaigns` WHERE `name` = 'HITMAN 2'");
        $this->execute("DELETE FROM `missions` WHERE `location_id` IN (8,9,10,11,12,13)");
    }
}

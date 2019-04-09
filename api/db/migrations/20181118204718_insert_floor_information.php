<?php


use Phinx\Migration\AbstractMigration;

class InsertFloorInformation extends AbstractMigration {
    public function up() {
        $rows = [
            // Lowest, Highest, Starting, Slug
            // HITMAN + Bonus Missions + Patient Zero
            [0, 3, 0, 'freeform-training'],
            [0, 3, 0, 'the-final-test'],
            [0, 3, 1, 'the-showstopper'],
            [0, 7, 3, 'world-of-tomorrow'],
            [2, 7, 3, 'the-icon'],
            [0, 7, 1, 'landslide'],
            [0, 7, 0, 'the-author'],
            [0, 3, 1, 'a-gilded-cage'],
            [1, 3, 1, 'a-house-built-on-sand'],
            [0, 5, 1, 'club-27'],
            [0, 5, 1, 'the-source'],
            [0, 3, 1, 'freedom-fighters'],
            [0, 3, 0, 'situs-inversus'],
            [0, 3, 1, 'patient-zero'],

            // HITMAN 2
            [0, 2, 0, 'nightcall'],
            [-1, 3, 0, 'finish-line'],
            [-1, 2, 0, 'three-headed-serpent'],
            [-1, 7, 0, 'chasing-a-ghost'],
            [-1, 2, 0, 'another-life'],
            [0, 8, 0, 'ark-society']
        ];

        foreach ($rows as $row) {
            $this->execute("UPDATE `missions`
                SET `lowest_floor_number` = {$row[0]},
                    `highest_floor_number` = {$row[1]},
                    `starting_floor_number` = {$row[2]}
                WHERE `slug` = '{$row[3]}'");
        }
    }

    public function down() {
        $this->execute("UPDATE `missions`
                SET `lowest_floor_number` = 0,
                    `highest_floor_number` = 0,
                    `starting_floor_number` = 0");
    }
}

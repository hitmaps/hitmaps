<?php


use Phinx\Migration\AbstractMigration;

class AddHitman2Difficulties extends AbstractMigration {
    public function up() {
        $rows = [
            [
                'mission_id' => 21,
                'difficulty' => 'Casual'
            ],
            [
                'mission_id' => 21,
                'difficulty' => 'Professional'
            ],
            [
                'mission_id' => 21,
                'difficulty' => 'Master'
            ],
            [
                'mission_id' => 22,
                'difficulty' => 'Casual'
            ],
            [
                'mission_id' => 22,
                'difficulty' => 'Professional'
            ],
            [
                'mission_id' => 22,
                'difficulty' => 'Master'
            ],
            [
                'mission_id' => 23,
                'difficulty' => 'Casual'
            ],
            [
                'mission_id' => 23,
                'difficulty' => 'Professional'
            ],
            [
                'mission_id' => 23,
                'difficulty' => 'Master'
            ],
            [
                'mission_id' => 24,
                'difficulty' => 'Casual'
            ],
            [
                'mission_id' => 24,
                'difficulty' => 'Professional'
            ],
            [
                'mission_id' => 24,
                'difficulty' => 'Master'
            ],
            [
                'mission_id' => 25,
                'difficulty' => 'Casual'
            ],
            [
                'mission_id' => 25,
                'difficulty' => 'Professional'
            ],
            [
                'mission_id' => 25,
                'difficulty' => 'Master'
            ],
            [
                'mission_id' => 26,
                'difficulty' => 'Casual'
            ],
            [
                'mission_id' => 26,
                'difficulty' => 'Professional'
            ],
            [
                'mission_id' => 26,
                'difficulty' => 'Master'
            ]
        ];

        $this->table('mission_to_difficulties')->insert($rows)->update();
    }

    public function down() {
        $this->execute("DELETE FROM `mission_to_difficulties` WHERE `mission_id` IN (21,22,23,24,25,26)");
    }
}

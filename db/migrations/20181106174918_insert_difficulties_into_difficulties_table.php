<?php


use Phinx\Migration\AbstractMigration;

class InsertDifficultiesIntoDifficultiesTable extends AbstractMigration {
    public function up() {
        /*
         * 2 = Showstopper
         * 5 = World of Tomorrow
         * 10 = A Gilded Cage
         * 13 = Club 27
         * 16 = Freedom Fighters
         * 18 = Situs Inversus
         */
        $this->execute("INSERT INTO `mission_to_difficulties` (`mission_id`, `difficulty`) SELECT `id`, 'standard' FROM `missions`");
        $campaignsTable = $this->table('mission_to_difficulties');

        $rows = [
            [
                'mission_id' => 2,
                'difficulty' => 'professional',
            ],
            [
                'mission_id' => 5,
                'difficulty' => 'professional',
            ],
            [
                'mission_id' => 10,
                'difficulty' => 'professional',
            ],
            [
                'mission_id' => 13,
                'difficulty' => 'professional',
            ],
            [
                'mission_id' => 16,
                'difficulty' => 'professional',
            ],
            [
                'mission_id' => 18,
                'difficulty' => 'professional',
            ]
        ];

        $campaignsTable->insert($rows)->save();
    }

    public function down() {
        $this->execute("DELETE FROM `mission_to_difficulties`");
    }
}

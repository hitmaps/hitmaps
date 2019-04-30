<?php


use Phinx\Migration\AbstractMigration;

class AddSniperAssassinDifficulties extends AbstractMigration {
    public function up() {
        foreach ($this->getRows() as $row) {
            $this->execute("INSERT INTO `mission_to_difficulties` (mission_id, difficulty)
              SELECT `id`, '{$row['difficulty']}'
              FROM `missions`
              WHERE `slug` = '{$row['mission_slug']}'");
        }
    }

    private function getRows() {
        return [
            [
                'mission_slug' => 'the-last-yardbird',
                'difficulty' => 'Standard'
            ],
            [
                'mission_slug' => 'the-pen-and-the-sword',
                'difficulty' => 'Standard'
            ]
        ];
    }

    public function down() {
        foreach ($this->getRows() as $row) {
            $this->execute("DELETE FROM `mission_to_difficulties`
              WHERE `mission_id` = (SELECT `id`
              FROM `missions`
              WHERE `slug` = '{$row['mission_slug']}')");
        }
    }
}

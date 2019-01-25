<?php


use Phinx\Migration\AbstractMigration;

class AddTheIconDisguises extends AbstractMigration {
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
                'mission_id' => 7,
                'name' => 'Italian Suit',
                'image' => 'disguises/the-icon/italian-suit',
            ],
            [
                'mission_id' => 7,
                'name' => 'Kitchen Assistant',
                'image' => 'disguises/the-icon/kitchen-assistant',
            ],
            [
                'mission_id' => 7,
                'name' => 'Movie Crew',
                'image' => 'disguises/the-icon/movie-crew',
            ],
            [
                'mission_id' => 7,
                'name' => 'SFX Crew',
                'image' => 'disguises/the-icon/sfx-crew',
            ],
            [
                'mission_id' => 7,
                'name' => 'Security',
                'image' => 'disguises/the-icon/security',
            ],
        ];
    }
}

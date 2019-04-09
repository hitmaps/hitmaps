<?php


use Phinx\Migration\AbstractMigration;

class AddHawkesBayDisguises extends AbstractMigration {
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
                'mission_id' => 21,
                'name' => 'Tactical Wetsuit',
                'image' => 'disguises/hawkes-bay/wetsuit',
            ],
            [
                'mission_id' => 21,
                'name' => 'Bodyguard',
                'image' => 'disguises/hawkes-bay/bodyguard',
            ],
        ];
    }
}

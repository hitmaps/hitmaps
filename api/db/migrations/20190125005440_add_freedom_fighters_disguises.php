<?php


use Phinx\Migration\AbstractMigration;

class AddFreedomFightersDisguises extends AbstractMigration {
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
                'mission_id' => 16,
                'name' => 'Tactical Gear',
                'image' => 'disguises/freedom-fighters/tactical-gear',
            ],
            [
                'mission_id' => 16,
                'name' => 'Militia Cook',
                'image' => 'disguises/freedom-fighters/militia-cook',
            ],
            [
                'mission_id' => 16,
                'name' => 'Militia Technician',
                'image' => 'disguises/freedom-fighters/militia-technician',
            ],
            [
                'mission_id' => 16,
                'name' => 'Militia Soldier',
                'image' => 'disguises/freedom-fighters/militia-soldier',
            ],
            [
                'mission_id' => 16,
                'name' => 'Militia Elite',
                'image' => 'disguises/freedom-fighters/militia-elite',
            ],
            [
                'mission_id' => 16,
                'name' => 'Militia Spec Ops',
                'image' => 'disguises/freedom-fighters/militia-spec-ops',
            ],
            [
                'mission_id' => 16,
                'name' => 'Explosives Specialist',
                'image' => 'disguises/freedom-fighters/explosives-specialist',
            ],
            [
                'mission_id' => 16,
                'name' => 'Hacker',
                'image' => 'disguises/freedom-fighters/hacker',
            ],
            [
                'mission_id' => 16,
                'name' => 'Point Man',
                'image' => 'disguises/freedom-fighters/point-man',
            ],
            [
                'mission_id' => 16,
                'name' => 'Scarecrow',
                'image' => 'disguises/freedom-fighters/scarecrow',
            ],
        ];
    }
}

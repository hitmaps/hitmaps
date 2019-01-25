<?php


use Phinx\Migration\AbstractMigration;

class AddFinalTestDisguises extends AbstractMigration {
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
                'mission_id' => 1,
                'name' => 'Training Gear',
                'image' => 'disguises/final-test/training-gear',
            ],
            [
                'mission_id' => 1,
                'name' => 'Airplane Mechanic',
                'image' => 'disguises/final-test/airplane-mechanic',
            ],
            [
                'mission_id' => 1,
                'name' => 'Airfield Security',
                'image' => 'disguises/final-test/airfield-security',
            ],
            [
                'mission_id' => 1,
                'name' => 'Soviet Soldier',
                'image' => 'disguises/final-test/soviet-soldier',
            ],
            [
                'mission_id' => 1,
                'name' => 'KGB Officer',
                'image' => 'disguises/final-test/kgb-officer',
            ],
        ];
    }
}

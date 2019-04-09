<?php


use Phinx\Migration\AbstractMigration;

class AddFreeformTrainingDisguises extends AbstractMigration {
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
                'mission_id' => 27,
                'name' => 'Training Gear',
                'image' => 'disguises/freeform-training/training-gear',
            ],
            [
                'mission_id' => 27,
                'name' => 'Mechanic',
                'image' => 'disguises/freeform-training/mechanic',
            ],
            [
                'mission_id' => 27,
                'name' => 'Yacht Crew',
                'image' => 'disguises/freeform-training/yacht-crew',
            ],
            [
                'mission_id' => 27,
                'name' => 'Yacht Security',
                'image' => 'disguises/freeform-training/yacht-security',
            ],
            [
                'mission_id' => 27,
                'name' => 'Bodyguard',
                'image' => 'disguises/freeform-training/bodyguard',
            ],
            [
                'mission_id' => 27,
                'name' => 'Terry Norfolk',
                'image' => 'disguises/freeform-training/terry-norfolk',
            ],
        ];
    }
}

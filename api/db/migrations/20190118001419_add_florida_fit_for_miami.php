<?php


use Phinx\Migration\AbstractMigration;

class AddFloridaFitForMiami extends AbstractMigration {
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
                'mission_id' => 22,
                'name' => 'Florida Fit',
                'image' => 'disguises/miami/florida-fit',
            ],
        ];
    }
}

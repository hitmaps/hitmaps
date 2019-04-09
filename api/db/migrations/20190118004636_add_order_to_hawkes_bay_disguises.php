<?php


use Phinx\Migration\AbstractMigration;

class AddOrderToHawkesBayDisguises extends AbstractMigration {
    public function up() {
        foreach ($this->rows() as $row) {
            $this->execute("UPDATE `disguises` 
              SET `order` = {$row['order']}
              WHERE `mission_id` = {$row['mission_id']}
              AND `name` = '{$row['name']}'");
        }
    }

    public function down() {
        foreach ($this->rows() as $row) {
            $this->execute("UPDATE `disguises` 
              SET `order` = 0
              WHERE `mission_id` = {$row['mission_id']}
              AND `name` = '{$row['name']}'");
        }
    }

    private function rows() {
        return [
            [
                'mission_id' => 21,
                'name' => 'Tactical Wetsuit',
                'order' => 1
            ],
            [
                'mission_id' => 21,
                'name' => 'Bodyguard',
                'order' => 2
            ],
        ];
    }
}

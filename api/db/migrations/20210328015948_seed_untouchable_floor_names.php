<?php

use Phinx\Migration\AbstractMigration;

class SeedUntouchableFloorNames extends AbstractMigration {
    public function up() {
        $missionId = $this->fetchRow("SELECT `id` FROM `missions` WHERE `slug` = 'untouchable'");

        $this->table('map_floor_to_name')
            ->insert($this->getData($missionId['id']))
            ->save();
    }

    private function getData($missionId) {
        return [
            [
                'mission_id' => $missionId,
                'floor_number' => 0,
                'name_key' => 'hitman3.untouchable.lab'
            ],
            [
                'mission_id' => $missionId,
                'floor_number' => 1,
                'name_key' => 'hitman3.untouchable.pre-bar'
            ],
            [
                'mission_id' => $missionId,
                'floor_number' => 2,
                'name_key' => 'hitman3.untouchable.post-bar'
            ],
            [
                'mission_id' => $missionId,
                'floor_number' => 3,
                'name_key' => 'hitman3.untouchable.offices'
            ]
        ];
    }

    public function down() {
        $missionId = $this->fetchRow("SELECT `id` FROM `missions` WHERE `slug` = 'untouchable'");
        foreach ($this->getData($missionId['id']) as $floor) {
            $this->execute("DELETE FROM `map_floor_to_name` WHERE `mission_id` = {$floor['mission_id']}
              AND `floor_number` = {$floor['floor_number']}");
        }
    }
}

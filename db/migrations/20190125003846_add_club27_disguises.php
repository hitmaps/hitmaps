<?php


use Phinx\Migration\AbstractMigration;

class AddClub27Disguises extends AbstractMigration {
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
                'mission_id' => 13,
                'name' => 'Casual Suit',
                'image' => 'disguises/club-27/casual-suit',
            ],
            [
                'mission_id' => 13,
                'name' => 'Hotel Staff',
                'image' => 'disguises/club-27/hotel-staff',
            ],
            [
                'mission_id' => 13,
                'name' => 'Hotel Security',
                'image' => 'disguises/club-27/hotel-security',
            ],
            [
                'mission_id' => 13,
                'name' => 'Waiter',
                'image' => 'disguises/club-27/waiter',
            ],
            [
                'mission_id' => 13,
                'name' => 'Kitchen Staff',
                'image' => 'disguises/club-27/kitchen-staff',
            ],
            [
                'mission_id' => 13,
                'name' => 'Groundskeeper',
                'image' => 'disguises/club-27/groundskeeper',
            ],
            [
                'mission_id' => 13,
                'name' => 'Exterminator',
                'image' => 'disguises/club-27/exterminator',
            ],
            [
                'mission_id' => 13,
                'name' => 'Recording Crew',
                'image' => 'disguises/club-27/recording-crew',
            ],
            [
                'mission_id' => 13,
                'name' => "Jordan Cross' Bodyguard",
                'image' => 'disguises/club-27/jordan-cross-bodyguard',
            ],
            [
                'mission_id' => 13,
                'name' => "Morgan's Bodyguard",
                'image' => 'disguises/club-27/morgan-bodyguard',
            ],
            [
                'mission_id' => 13,
                'name' => 'Abel de Silva',
                'image' => 'disguises/club-27/abel-de-silva',
            ],
            [
                'mission_id' => 13,
                'name' => 'Stalker',
                'image' => 'disguises/club-27/stalker',
            ],
        ];
    }
}

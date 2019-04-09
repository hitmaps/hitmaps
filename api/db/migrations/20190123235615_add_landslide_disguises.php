<?php


use Phinx\Migration\AbstractMigration;

class AddLandslideDisguises extends AbstractMigration {
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
                'mission_id' => 8,
                'name' => 'Italian Suit',
                'image' => 'disguises/landslide/italian-suit',
            ],
            [
                'mission_id' => 8,
                'name' => 'Stage Crew',
                'image' => 'disguises/landslide/stage-crew',
            ],
            [
                'mission_id' => 8,
                'name' => 'Bodyguard',
                'image' => 'disguises/landslide/bodyguard',
            ],
            [
                'mission_id' => 8,
                'name' => 'Security',
                'image' => 'disguises/landslide/security',
            ],
            [
                'mission_id' => 8,
                'name' => 'Kitchen Assistant',
                'image' => 'disguises/landslide/kitchen-assistant',
            ],
            [
                'mission_id' => 8,
                'name' => 'Plumber',
                'image' => 'disguises/landslide/plumber',
            ],
            [
                'mission_id' => 8,
                'name' => 'Church Staff',
                'image' => 'disguises/landslide/church-staff',
            ],
            [
                'mission_id' => 8,
                'name' => 'Priest',
                'image' => 'disguises/landslide/priest',
            ],
            [
                'mission_id' => 8,
                'name' => 'Waiter',
                'image' => 'disguises/landslide/waiter',
            ],
            [
                'mission_id' => 8,
                'name' => 'Gardener',
                'image' => 'disguises/landslide/gardener',
            ],
            [
                'mission_id' => 8,
                'name' => 'Salvatore Bravuomo',
                'image' => 'disguises/landslide/salvatore-bravuomo',
            ],
            [
                'mission_id' => 8,
                'name' => 'Photographer',
                'image' => 'disguises/landslide/photographer',
            ],
        ];
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class AddMumbaiDisguises extends AbstractMigration {
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
                'mission_id' => 24,
                'name' => 'Imperial Classic',
                'image' => 'disguises/mumbai/imperial-classic',
            ],
            [
                'mission_id' => 24,
                'name' => 'Bollywood Bodyguard',
                'image' => 'disguises/mumbai/bollywood-bodyguard',
            ],
            [
                'mission_id' => 24,
                'name' => 'Elite Thug',
                'image' => 'disguises/mumbai/elite-thug',
            ],
            [
                'mission_id' => 24,
                'name' => 'Local Security',
                'image' => 'disguises/mumbai/local-security',
            ],
            [
                'mission_id' => 24,
                'name' => 'Queens Bodyguard',
                'image' => 'disguises/mumbai/queens-bodyguard',
            ],
            [
                'mission_id' => 24,
                'name' => 'Queens Guard',
                'image' => 'disguises/mumbai/queens-guard',
            ],
            [
                'mission_id' => 24,
                'name' => 'Thug',
                'image' => 'disguises/mumbai/thug',
            ],
            [
                'mission_id' => 24,
                'name' => 'Bollywood Crew',
                'image' => 'disguises/mumbai/bollywood-crew',
            ],
            [
                'mission_id' => 24,
                'name' => 'Dancer',
                'image' => 'disguises/mumbai/dancer',
            ],
            [
                'mission_id' => 24,
                'name' => 'Food Vendor',
                'image' => 'disguises/mumbai/food-vendor',
            ],
            [
                'mission_id' => 24,
                'name' => 'Laundry Worker',
                'image' => 'disguises/mumbai/laundry-worker',
            ],
            [
                'mission_id' => 24,
                'name' => 'Metal Worker',
                'image' => 'disguises/mumbai/metal-worker',
            ],
            [
                'mission_id' => 24,
                'name' => "Vanya's Servant",
                'image' => 'disguises/mumbai/vanya-servant',
            ],
            [
                'mission_id' => 24,
                'name' => 'Barber',
                'image' => 'disguises/mumbai/barber',
            ],
            [
                'mission_id' => 24,
                'name' => 'Holy Man',
                'image' => 'disguises/mumbai/holy-man',
            ],
            [
                'mission_id' => 24,
                'name' => 'Kashmirian',
                'image' => 'disguises/mumbai/kashmirian',
            ],
            [
                'mission_id' => 24,
                'name' => 'Laundry Foreman',
                'image' => 'disguises/mumbai/laundry-foreman',
            ],
            [
                'mission_id' => 24,
                'name' => 'Lead Actor',
                'image' => 'disguises/mumbai/lead-actor',
            ],
            [
                'mission_id' => 24,
                'name' => 'Painter',
                'image' => 'disguises/mumbai/painter',
            ],
            [
                'mission_id' => 24,
                'name' => 'Tailor',
                'image' => 'disguises/mumbai/tailor',
            ],
        ];
    }
}

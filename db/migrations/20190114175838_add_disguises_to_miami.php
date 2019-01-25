<?php


use Phinx\Migration\AbstractMigration;

class AddDisguisesToMiami extends AbstractMigration {
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
                'name' => 'Event Crew',
                'image' => 'disguises/miami/worker-event-staff',
            ],
            [
                'mission_id' => 22,
                'name' => 'Event Security',
                'image' => 'disguises/miami/guard-event-security',
            ],
            [
                'mission_id' => 22,
                'name' => 'Food Vendor',
                'image' => 'disguises/miami/worker-food-stand',
            ],
            [
                'mission_id' => 22,
                'name' => 'Kronstadt Engineer',
                'image' => 'disguises/miami/worker-kronstadt-engineer',
            ],
            [
                'mission_id' => 22,
                'name' => 'Kronstadt Security',
                'image' => 'disguises/miami/guard-kronstadt-security',
            ],
            [
                'mission_id' => 22,
                'name' => 'Medic',
                'image' => 'disguises/miami/worker-medic',
            ],
            [
                'mission_id' => 22,
                'name' => 'Race Marshall',
                'image' => 'disguises/miami/worker-race-marshall',
            ],
            [
                'mission_id' => 22,
                'name' => 'Waiter',
                'image' => 'disguises/miami/worker-waiter',
            ],
            [
                'mission_id' => 22,
                'name' => 'Journalist',
                'image' => 'disguises/miami/worker-journalist',
            ],
            [
                'mission_id' => 22,
                'name' => 'Kitchen Staff',
                'image' => 'disguises/miami/worker-kitchen-staff',
            ],
            [
                'mission_id' => 22,
                'name' => 'Kronstadt Researcher',
                'image' => 'disguises/miami/worker-kronstadt-researcher',
            ],
            [
                'mission_id' => 22,
                'name' => 'Mascot',
                'image' => 'disguises/miami/unique-flamingo',
            ],
            [
                'mission_id' => 22,
                'name' => 'Race Coordinator',
                'image' => 'disguises/miami/worker-race-coordinator',
            ],
            [
                'mission_id' => 22,
                'name' => 'Aeon Mechanic',
                'image' => 'disguises/miami/worker-aeon-mechanic',
            ],
            [
                'mission_id' => 22,
                'name' => 'Blue Seed Mechanic',
                'image' => 'disguises/miami/worker-blue-seed-mechanic',
            ],
            [
                'mission_id' => 22,
                'name' => 'Kowoon Mechanic',
                'image' => 'disguises/miami/worker-kowoon-mechanic',
            ],
            [
                'mission_id' => 22,
                'name' => 'Kronstadt Mechanic',
                'image' => 'disguises/miami/worker-kronstadt-mechanic',
            ],
            [
                'mission_id' => 22,
                'name' => 'Sotteraneo Mechanic',
                'image' => 'disguises/miami/worker-sotteraneo-mechanic',
            ],
            [
                'mission_id' => 22,
                'name' => 'Thwack Mechanic',
                'image' => 'disguises/miami/worker-thwack-mechanic',
            ],
            [
                'mission_id' => 22,
                'name' => 'Florida Man',
                'image' => 'disguises/miami/unique-florida-man',
            ],
            [
                'mission_id' => 22,
                'name' => 'Moses Lee',
                'image' => 'disguises/miami/unique-moses-lee',
            ],
            [
                'mission_id' => 22,
                'name' => 'Pale Rider',
                'image' => 'disguises/miami/unique-pale-rider',
            ],
            [
                'mission_id' => 22,
                'name' => 'Sheik',
                'image' => 'disguises/miami/unique-sheik',
            ],
            [
                'mission_id' => 22,
                'name' => 'Street Musician',
                'image' => 'disguises/miami/unique-street-musician',
            ],
            [
                'mission_id' => 22,
                'name' => 'Ted Mendez',
                'image' => 'disguises/miami/unique-ted-mendez',
            ],
            [
                'mission_id' => 22,
                'name' => 'Aeon Driver',
                'image' => 'disguises/miami/unique-driver-aeon',
            ],
            [
                'mission_id' => 22,
                'name' => 'Blue Seed Driver',
                'image' => 'disguises/miami/unique-driver-blue-seed',
            ],
            [
                'mission_id' => 22,
                'name' => 'Crashed Kronstadt Driver',
                'image' => 'disguises/miami/unique-crashed-kronstadt-driver',
            ],
            [
                'mission_id' => 22,
                'name' => 'Kowoon Driver',
                'image' => 'disguises/miami/unique-driver-kowoon',
            ],
            [
                'mission_id' => 22,
                'name' => 'Thwack Driver',
                'image' => 'disguises/miami/unique-driver-thwack',
            ],
        ];
    }
}

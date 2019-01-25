<?php


use Phinx\Migration\AbstractMigration;

class AddWorldOfTomorrowDisguises extends AbstractMigration {
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
                'mission_id' => 5,
                'name' => 'Italian Suit',
                'image' => 'disguises/world-of-tomorrow/italian-suit',
            ],
            [
                'mission_id' => 5,
                'name' => 'Delivery Man',
                'image' => 'disguises/world-of-tomorrow/delivery-man',
            ],
            [
                'mission_id' => 5,
                'name' => 'Gardener',
                'image' => 'disguises/world-of-tomorrow/gardener',
            ],
            [
                'mission_id' => 5,
                'name' => 'Plumber',
                'image' => 'disguises/world-of-tomorrow/plumber',
            ],
            [
                'mission_id' => 5,
                'name' => 'Store Clerk',
                'image' => 'disguises/world-of-tomorrow/store-clerk',
            ],
            [
                'mission_id' => 5,
                'name' => 'Bodyguard',
                'image' => 'disguises/world-of-tomorrow/bodyguard',
            ],
            [
                'mission_id' => 5,
                'name' => 'Church Staff',
                'image' => 'disguises/world-of-tomorrow/church-staff',
            ],
            [
                'mission_id' => 5,
                'name' => 'Priest',
                'image' => 'disguises/world-of-tomorrow/priest',
            ],
            [
                'mission_id' => 5,
                'name' => 'Waiter',
                'image' => 'disguises/world-of-tomorrow/waiter',
            ],
            [
                'mission_id' => 5,
                'name' => 'Kitchen Assistant',
                'image' => 'disguises/world-of-tomorrow/kitchen-assistant',
            ],
            [
                'mission_id' => 5,
                'name' => 'Chef',
                'image' => 'disguises/world-of-tomorrow/chef',
            ],
            [
                'mission_id' => 5,
                'name' => 'Housekeeper',
                'image' => 'disguises/world-of-tomorrow/housekeeper',
            ],
            [
                'mission_id' => 5,
                'name' => 'Mansion Staff',
                'image' => 'disguises/world-of-tomorrow/mansion-staff',
            ],
            [
                'mission_id' => 5,
                'name' => 'Mansion Security',
                'image' => 'disguises/world-of-tomorrow/mansion-security',
            ],
            [
                'mission_id' => 5,
                'name' => 'Butler',
                'image' => 'disguises/world-of-tomorrow/butler',
            ],
            [
                'mission_id' => 5,
                'name' => 'Lab Technician',
                'image' => 'disguises/world-of-tomorrow/lab-technician',
            ],
            [
                'mission_id' => 5,
                'name' => 'Biolab Security',
                'image' => 'disguises/world-of-tomorrow/biolab-security',
            ],
            [
                'mission_id' => 5,
                'name' => 'Hazmat Suit',
                'image' => 'disguises/world-of-tomorrow/hazmat-suit',
            ],
            [
                'mission_id' => 5,
                'name' => 'Private Detective',
                'image' => 'disguises/world-of-tomorrow/private-detective',
            ],
            [
                'mission_id' => 5,
                'name' => 'Dr. Oscar Lafayette',
                'image' => 'disguises/world-of-tomorrow/oscar-lafayette',
            ],
            [
                'mission_id' => 5,
                'name' => 'Roberto Vargas',
                'image' => 'disguises/world-of-tomorrow/roberto-vargas',
            ],
            [
                'mission_id' => 5,
                'name' => 'Cyclist',
                'image' => 'disguises/world-of-tomorrow/cyclist',
            ],
            [
                'mission_id' => 5,
                'name' => 'Bohemian',
                'image' => 'disguises/world-of-tomorrow/bohemian',
            ],
            [
                'mission_id' => 5,
                'name' => 'Street Performer',
                'image' => 'disguises/world-of-tomorrow/street-performer',
            ],
            [
                'mission_id' => 5,
                'name' => 'Plague Doctor',
                'image' => 'disguises/world-of-tomorrow/plague-doctor',
            ],
        ];
    }
}

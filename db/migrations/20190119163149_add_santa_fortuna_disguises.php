<?php


use Phinx\Migration\AbstractMigration;

class AddSantaFortunaDisguises extends AbstractMigration {
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
                'mission_id' => 23,
                'name' => 'Casual Tourist',
                'image' => 'disguises/santa-fortuna/casual-tourist',
            ],
            [
                'mission_id' => 23,
                'name' => 'Coca Field Guard',
                'image' => 'disguises/santa-fortuna/coca-field-guard',
            ],
            [
                'mission_id' => 23,
                'name' => 'Elite Guard',
                'image' => 'disguises/santa-fortuna/elite-guard',
            ],
            [
                'mission_id' => 23,
                'name' => 'Mansion Guard',
                'image' => 'disguises/santa-fortuna/mansion-guard',
            ],
            [
                'mission_id' => 23,
                'name' => 'Street Soldier',
                'image' => 'disguises/santa-fortuna/street-soldier',
            ],
            [
                'mission_id' => 23,
                'name' => 'Chef',
                'image' => 'disguises/santa-fortuna/chef',
            ],
            [
                'mission_id' => 23,
                'name' => 'Coca Field Worker',
                'image' => 'disguises/santa-fortuna/coca-field-worker',
            ],
            [
                'mission_id' => 23,
                'name' => 'Construction Worker',
                'image' => 'disguises/santa-fortuna/construction-worker',
            ],
            [
                'mission_id' => 23,
                'name' => 'Drug Lab Worker',
                'image' => 'disguises/santa-fortuna/drug-lab-worker',
            ],
            [
                'mission_id' => 23,
                'name' => 'Gardener',
                'image' => 'disguises/santa-fortuna/gardener',
            ],
            [
                'mission_id' => 23,
                'name' => 'Mansion Staff',
                'image' => 'disguises/santa-fortuna/mansion-staff',
            ],
            [
                'mission_id' => 23,
                'name' => 'Submarine Crew',
                'image' => 'disguises/santa-fortuna/submarine-crew',
            ],
            [
                'mission_id' => 23,
                'name' => 'Band Member',
                'image' => 'disguises/santa-fortuna/band-member',
            ],
            [
                'mission_id' => 23,
                'name' => 'Barman',
                'image' => 'disguises/santa-fortuna/barman',
            ],
            [
                'mission_id' => 23,
                'name' => 'Hippie',
                'image' => 'disguises/santa-fortuna/hippie',
            ],
            [
                'mission_id' => 23,
                'name' => 'Hippo Whisperer',
                'image' => 'disguises/santa-fortuna/hippo-whisperer',
            ],
            [
                'mission_id' => 23,
                'name' => 'Shaman',
                'image' => 'disguises/santa-fortuna/shaman',
            ],
            [
                'mission_id' => 23,
                'name' => 'Submarine Mechanic',
                'image' => 'disguises/santa-fortuna/submarine-mechanic',
            ],
            [
                'mission_id' => 23,
                'name' => 'Tattoo Artist',
                'image' => 'disguises/santa-fortuna/tattoo-artist',
            ],
        ];
    }
}

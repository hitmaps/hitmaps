<?php


use Phinx\Migration\AbstractMigration;

class AddSitusInversusDisguises extends AbstractMigration {
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
                'mission_id' => 18,
                'name' => 'VIP Patient',
                'image' => 'disguises/situs-inversus/vip-patient',
            ],
            [
                'mission_id' => 18,
                'name' => 'Patient',
                'image' => 'disguises/situs-inversus/patient',
            ],
            [
                'mission_id' => 18,
                'name' => 'Resort Staff',
                'image' => 'disguises/situs-inversus/resort-staff',
            ],
            [
                'mission_id' => 18,
                'name' => 'Chef',
                'image' => 'disguises/situs-inversus/chef',
            ],
            [
                'mission_id' => 18,
                'name' => 'Handyman',
                'image' => 'disguises/situs-inversus/handyman',
            ],
            [
                'mission_id' => 18,
                'name' => 'Resort Security',
                'image' => 'disguises/situs-inversus/resort-security',
            ],
            [
                'mission_id' => 18,
                'name' => 'Doctor',
                'image' => 'disguises/situs-inversus/doctor',
            ],
            [
                'mission_id' => 18,
                'name' => 'Morgue Doctor',
                'image' => 'disguises/situs-inversus/morgue-doctor',
            ],
            [
                'mission_id' => 18,
                'name' => 'Surgeon',
                'image' => 'disguises/situs-inversus/surgeon',
            ],
            [
                'mission_id' => 18,
                'name' => 'Bodyguard',
                'image' => 'disguises/situs-inversus/bodyguard',
            ],
            [
                'mission_id' => 18,
                'name' => 'Hospital Director',
                'image' => 'disguises/situs-inversus/hospital-director',
            ],
            [
                'mission_id' => 18,
                'name' => 'Chief Surgeon',
                'image' => 'disguises/situs-inversus/chief-surgeon',
            ],
            [
                'mission_id' => 18,
                'name' => 'VIP Patient (Jason Portman)',
                'image' => 'disguises/situs-inversus/jason-portman',
            ],
            [
                'mission_id' => 18,
                'name' => 'VIP Patient (Amos Dexter)',
                'image' => 'disguises/situs-inversus/amos-dexter',
            ],
            [
                'mission_id' => 18,
                'name' => 'Yoga Instructor',
                'image' => 'disguises/situs-inversus/yoga-instructor',
            ],
            [
                'mission_id' => 18,
                'name' => 'Helicopter Pilot',
                'image' => 'disguises/situs-inversus/helicopter-pilot',
            ],
            [
                'mission_id' => 18,
                'name' => 'Ninja',
                'image' => 'disguises/situs-inversus/ninja',
            ],
            [
                'mission_id' => 18,
                'name' => 'Motorcyclist',
                'image' => 'disguises/situs-inversus/motorcyclist',
            ],
            [
                'mission_id' => 18,
                'name' => 'Baseball Player',
                'image' => 'disguises/situs-inversus/baseball-player',
            ],
        ];
    }
}

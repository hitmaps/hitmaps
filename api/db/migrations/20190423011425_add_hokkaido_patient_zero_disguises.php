<?php


use Phinx\Migration\AbstractMigration;

class AddHokkaidoPatientZeroDisguises extends AbstractMigration {
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
                'mission_id' => 20,
                'name' => 'Recon Gear',
                'image' => 'disguises/patient-zero/recon-gear',
            ],
            [
                'mission_id' => 20,
                'name' => 'Patient',
                'image' => 'disguises/patient-zero/patient',
            ],
            [
                'mission_id' => 20,
                'name' => 'Resort Staff',
                'image' => 'disguises/patient-zero/resort-staff',
            ],
            [
                'mission_id' => 20,
                'name' => 'Chef',
                'image' => 'disguises/patient-zero/chef',
            ],
            [
                'mission_id' => 20,
                'name' => 'Handyman',
                'image' => 'disguises/patient-zero/handyman',
            ],
            [
                'mission_id' => 20,
                'name' => 'Resort Security',
                'image' => 'disguises/patient-zero/resort-security',
            ],
            [
                'mission_id' => 20,
                'name' => 'Doctor',
                'image' => 'disguises/patient-zero/doctor',
            ],
            [
                'mission_id' => 20,
                'name' => 'Morgue Doctor',
                'image' => 'disguises/patient-zero/morgue-doctor',
            ],
            [
                'mission_id' => 20,
                'name' => 'Surgeon',
                'image' => 'disguises/patient-zero/surgeon',
            ],
            [
                'mission_id' => 20,
                'name' => 'Bodyguard',
                'image' => 'disguises/patient-zero/bodyguard',
            ],
            [
                'mission_id' => 20,
                'name' => 'Hospital Director',
                'image' => 'disguises/patient-zero/hospital-director',
            ],
            [
                'mission_id' => 20,
                'name' => 'Chief Surgeon',
                'image' => 'disguises/patient-zero/chief-surgeon',
            ],
            [
                'mission_id' => 20,
                'name' => 'VIP Patient (Amos Dexter)',
                'image' => 'disguises/patient-zero/amos-dexter',
            ],
            [
                'mission_id' => 20,
                'name' => 'Yoga Instructor',
                'image' => 'disguises/patient-zero/yoga-instructor',
            ],
            [
                'mission_id' => 20,
                'name' => 'Helicopter Pilot',
                'image' => 'disguises/patient-zero/helicopter-pilot',
            ],
            [
                'mission_id' => 20,
                'name' => 'Motorcyclist',
                'image' => 'disguises/patient-zero/motorcyclist',
            ],
            [
                'mission_id' => 20,
                'name' => 'Bio Suit',
                'image' => 'disguises/patient-zero/bio-suit',
            ],
            [
                'mission_id' => 20,
                'name' => 'Head Researcher',
                'image' => 'disguises/patient-zero/head-researcher',
            ],
        ];
    }
}

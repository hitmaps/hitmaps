<?php


use Phinx\Migration\AbstractMigration;

class AddTheLastResortDisguises extends AbstractMigration {
    public function up() {
        $this->table('disguises')->insert([
            [
                'mission_id' => 48,
                'name' => 'The Tropical Islander',
                'image' => 'https://media.hitmaps.com/img/unlockables_override/47_outfits_stingray.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Boat Captain',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_2817afb5-6dff-4496-bf56-4cd59b9abc9b_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Bodyguard',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_95f2f02f-205b-422f-a315-875568f911da_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Butler',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_fd4c537a-226f-448d-9635-941c6f09d388_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Chef',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_cfc19dda-bff1-4bd1-9b0c-b1a799ee011f_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Dr. Singh',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_f108122d-5b31-487a-857b-d5f1badf2220_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Gas Suit',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_cbcfe485-f706-46a1-a14a-316f6dedf398_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Life Guard',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_53415cf7-8d62-45b9-943f-d1a50c7c6024_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Masseur',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_dec42c4a-3ff0-451f-80b0-a01e68310286_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Personal Trainer',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_49e70108-2c8d-4418-8e42-8f63d6ed43af_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Resort Guard',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_d4c9507a-b297-46ce-8e9c-4ec479da22a4_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Resort Staff',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_e9fa4892-fa2a-40a1-a51c-78d8561034f3_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Snorkel Instructor',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_30164cfe-a26b-4a72-8bc2-5bc99c0283c1_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Swimwear',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_ea4230f3-03f7-46f1-a3f4-be2ff383b417_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Tech Crew',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_f6e37038-98c1-4e58-bd85-c895f5c19d56_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Villa Guard',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_33e3a400-0bbc-4edd-b07f-056135329802_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Villa Staff',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_cda86b1b-63a4-4e3a-975e-d716685335a7_0.jpg'
            ],
            [
                'mission_id' => 48,
                'name' => 'Waiter',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_a260d9d6-a33c-499e-a6c5-698cfcc3de8f_0.jpg'
            ],
        ])->save();
    }

    public function down() {
        $this->execute('DELETE FROM `disguises` WHERE `mission_id` = 48');
    }
}

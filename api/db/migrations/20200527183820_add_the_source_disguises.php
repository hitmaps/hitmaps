<?php


use Phinx\Migration\AbstractMigration;

class AddTheSourceDisguises extends AbstractMigration {
    public function up() {
        $this->table('disguises')->insert([
            [
                'mission_id' => 9,
                'name' => 'SFX Crew',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_2fd2437d-a5eb-4bfd-bd2d-a4f240a8f0ce_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Casual Suit',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_c85c6e9c-0aee-43b8-b6e3-d70e76f1890e_0.jpg',
                'suit' => true
            ],
            [
                'mission_id' => 15,
                'name' => 'Cult Bodyguard',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_78fcc1c0-5612-4284-924f-c20d9e322c96_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Cult Initiate',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_54c5dce7-cfe4-43f9-8cee-8204e38c608d_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Exterminator',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_bf0bcc10-a335-4714-9dd2-69e7e96704b2_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Groundskeeper',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_7f6da010-1a96-4783-83e0-48c55a3e7103_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Hotel Security',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_07f3479a-29fc-45e0-bb80-e49a41c0c410_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Hotel Staff',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_c96f9796-0194-47c6-836c-102473cc6c3c_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => "Jordan Cross' Bodyguard",
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_d01c8adc-735c-44f0-9105-b28d85062def_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Kitchen Staff',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_85971c2e-34ae-423f-9653-bc32c5f3e4f7_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Militia Soldier',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_3019ccaf-8934-4358-993d-05e79fdc68df_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Recording Crew',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_ef704a8e-88b7-430a-a217-09bbeea7074f_0.jpg',
                'suit' => false
            ],
            [
                'mission_id' => 15,
                'name' => 'Waiter',
                'image' => 'https://media.hitmaps.com/img/unlockables/outfit_57669117-fbf3-4630-80e3-53e5420a8f30_0.jpg',
                'suit' => false
            ]
        ])->save();
    }

    public function down() {
        $this->execute("DELETE FROM `disguises` WHERE `mission_id` = 15 OR (`mission_id` = 9 AND `name` = 'SFX Crew')");
    }
}

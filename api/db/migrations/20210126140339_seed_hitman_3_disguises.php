<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class SeedHitman3Disguises extends AbstractMigration {
    public function up(): void {
        $rows = $this->fetchAll("SELECT `id`, `slug` FROM `missions` WHERE `campaign_id` = (SELECT `id` FROM `campaigns` WHERE `name` = 'HITMAN 3')");
        $slugToId = [];
        foreach ($rows as $row) {
            $slugToId[$row['slug']] = $row['id'];
        }

        $disguises = [
            //region On Top Of The World
            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Skydiving Suit',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_c4146f27-81a9-42ef-b3c7-87a9d60b87fe_0.jpg',
                'order' => 0,
                'suit' => 1
            ],
            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Ashen Suit',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_07ab08e1-013e-439d-a98b-3b7e8c9f13bc_0.jpg',
                'order' => 0,
                'suit' => 1
            ],
            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Art Crew',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_2c649c52-f85a-4b29-838a-31c2525cc862_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Event Security',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_eb12cc2b-6dcf-4831-ba4e-ef8e53180e2f_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Event Staff',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_77fb4c80-0b81-4672-be65-12c16c3ac7ac_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Famous Chef',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_6dcf16f6-6620-410f-b51c-179f75de938c_0.jpg',
                'order' => 0,
                'suit' => 0
            ],

            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Helicopter Pilot',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_ea5b1cea-c305-4f60-9512-78b2e6cd5030_0.jpg',
                'order' => 0,
                'suit' => 0
            ],

            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => "Ingram's Bodyguard",
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_bdbd806d-eb11-4167-bd2d-f5f015c3fe86_0.jpg',
                'order' => 0,
                'suit' => 0
            ],

            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Kitchen Staff',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_eb15e523-713f-41ba-ad67-d33b02de43c6_0.jpg',
                'order' => 0,
                'suit' => 0
            ],

            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Maintenance Staff',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_e65f04b2-47a6-4d3d-b36c-9fb7fa08a00b_0.jpg',
                'order' => 0,
                'suit' => 0
            ],

            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Penthouse Guard',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_f0a52fef-608a-4fa8-9fd6-bd5c15506188_0.jpg',
                'order' => 0,
                'suit' => 0
            ],

            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'Penthouse Staff',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_a745ca17-3a7e-4c15-8219-6a5d6245ac7f_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['on-top-of-the-world'],
                'name' => 'The Assassin',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_ef9dddc5-25c7-450f-afcb-ac1b8f9569c9_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            //endregion
            //region Death In The Family
            [
                'mission_id' => $slugToId['death-in-the-family'],
                'name' => 'Classic Cut Long Coat Suit',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_44a55c52-4207-4c69-b17f-554b3df962b9_0.jpg',
                'order' => 0,
                'suit' => 1
            ],
            [
                'mission_id' => $slugToId['death-in-the-family'],
                'name' => 'Bodyguard',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_29389af2-4fe4-4f72-917a-d9747adc0f3d_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['death-in-the-family'],
                'name' => 'Gardener',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_88246749-2118-2101-5575-991052571240_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['death-in-the-family'],
                'name' => 'Lawyer',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_ffb2e3a8-728b-4a54-95cb-55eaf616b422_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['death-in-the-family'],
                'name' => 'Mansion Guard',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_c3349736-91d1-48e3-bc62-fc16a7d8d6f1_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['death-in-the-family'],
                'name' => 'Mansion Staff',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_4115e440-fdf8-44d2-a3ba-a1bb2285e542_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['death-in-the-family'],
                'name' => 'Photographer',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_7062bd6b-4926-4ab3-932c-de7d63c095b7_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['death-in-the-family'],
                'name' => 'Private Investigator',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_12f5bdb5-7e71-4f48-9740-13d0211f48c6_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['death-in-the-family'],
                'name' => 'Undertaker',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_dc3c386d-52c2-4e17-855d-6c15e080ccf3_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            //endregion
            //region Apex Predator
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Number Six',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_19e3757f-01b5-4821-97c3-1a1045646531_0.jpg',
                'order' => 0,
                'suit' => 1
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Bartender',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_816cf012-ab64-48a0-b4cc-ff7470874007_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Biker',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_95918f14-fa9f-4315-be95-bf4b9efe6ee6_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Club Crew',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_6e84215c-28b7-44b2-9d15-83e9be490965_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Club Security',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_590629f7-19a3-4eb8-88a6-94e550cd1c07_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Dealer',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_4c379903-4cf2-49cf-953f-db7b31d2987d_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Delivery Guy',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_2e5bdc9b-822d-4f5f-bc16-bd99729ef4f5_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'DJ',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_ac636da9-fd3a-4019-816a-6333e0c4298e_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Florida Man',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_0e931214-6ba9-4763-b7e1-32ca64dd864a_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Rolf Hirschmüller',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_8e41db54-b097-4704-8a88-83043e6557f7_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['apex-predator'],
                'name' => 'Technician',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_f724d6b9-a45b-425f-84f1-c27dedd1fd07_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            //endregion
            //region End Of An Era
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Neon City Suit',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_90ad022f-0789-413f-bf3d-603c1237c9b1_0.jpg',
                'order' => 0,
                'suit' => 1
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Block Guard',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_4dd90d10-ac5f-404f-9c20-4428653ca7ba_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Dumpling Cook',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_c5f6dd2a-3600-40be-9a82-bbf5d360c379_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Facility Analyst',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_9c07a86c-2d03-417b-b46f-cb433481080e_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Facility Engineer',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_8fc343f2-6e9a-4e06-9342-705e5b171895_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Facility Guard',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_f5c73d58-a24f-4957-b80d-5efb6771ad9b_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Facility Security',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_b3515a1e-4a32-475c-bd61-4fdae243a7e5_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Street Guard',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_86bdb741-6810-4610-8e21-799c93c71849_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Perfect Test Subject',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_9cd5fbd7-903c-4ab7-afe8-01eb755ce9da_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Researcher',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_553bb399-2ee0-41bb-a76b-b7ec6d49f5a3_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'Homeless Person',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_ba4e595e-da3b-4902-8622-40889fc088db_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['end-of-an-era'],
                'name' => 'The Board Member',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_fd1d39d8-db06-47b3-8f4b-eb1febf5ccb7_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            //endregion
            //region The Farewell
            [
                'mission_id' => $slugToId['the-farewell'],
                'name' => 'Black & White Tuxedo',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_d5f19325-01e7-46f2-bf3b-7f4ad7c15b91_0.jpg',
                'order' => 0,
                'suit' => 1
            ],
            [
                'mission_id' => $slugToId['the-farewell'],
                'name' => 'Bodyguard',
                'image' => '',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['the-farewell'],
                'name' => 'Chief Winemaker',
                'image' => '',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['the-farewell'],
                'name' => 'Winery Worker',
                'image' => '',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['the-farewell'],
                'name' => 'Mercenary',
                'image' => '',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['the-farewell'],
                'name' => 'Lawyer',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_521ed265-2115-4977-8db0-45404b067102_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['the-farewell'],
                'name' => 'Gaucho',
                'image' => '',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['the-farewell'],
                'name' => 'Sommelier',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_7fed7c24-08b2-468b-8e49-22b5ad59b56b_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $slugToId['the-farewell'],
                'name' => 'Waiter',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_cac0081e-9eb0-4fbf-ba23-70c2815f0874_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
        ];
    }
}

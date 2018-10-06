<?php


use Phinx\Migration\AbstractMigration;

class InsertHitman2016Missions extends AbstractMigration {
    public function up() {
        $missionsTable = $this->table('missions');

        $rows = [
            // ICA Facility
            [
                'location_id' => 1,
                'campaign_id' => 1,
                'name' => 'The Final Test',
                'slug' => 'the-final-test',
                'order' => 1
            ],
            // Paris
            [
                'location_id' => 2,
                'campaign_id' => 1,
                'name' => 'The Showstopper',
                'slug' => 'the-showstopper',
                'order' => 1
            ],
            [
                'location_id' => 2,
                'campaign_id' => 2,
                'name' => 'The Director',
                'slug' => 'the-director',
                'order' => 2
            ],
            [
                'location_id' => 2,
                'name' => 'Holiday Hoarders',
                'slug' => 'holiday-hoarders',
                'order' => 3
            ],
            // Sapienza
            [
                'location_id' => 3,
                'campaign_id' => 1,
                'name' => 'World of Tomorrow',
                'slug' => 'world-of-tomorrow',
                'order' => 1
            ],
            [
                'location_id' => 3,
                'campaign_id' => 2,
                'name' => 'The Enforcer',
                'slug' => 'the-enforcer',
                'order' => 2
            ],
            [
                'location_id' => 3,
                'name' => 'The Icon',
                'slug' => 'the-icon',
                'order' => 3
            ],
            [
                'location_id' => 3,
                'name' => 'Landslide',
                'slug' => 'landslide',
                'order' => 4
            ],
            [
                'location_id' => 3,
                'campaign_id' => 3,
                'name' => 'The Author',
                'slug' => 'the-author',
                'order' => 5
            ],
            // Marrakesh
            [
                'location_id' => 4,
                'campaign_id' => 1,
                'name' => 'A Gilded Cage',
                'slug' => 'a-gilded-cage',
                'order' => 1
            ],
            [
                'location_id' => 4,
                'campaign_id' => 2,
                'name' => 'The Extractor',
                'slug' => 'the-extractor',
                'order' => 2
            ],
            [
                'location_id' => 4,
                'name' => 'A House Built on Sand',
                'slug' => 'a-house-built-on-sand',
                'order' => 3
            ],
            // Bangkok
            [
                'location_id' => 5,
                'campaign_id' => 1,
                'name' => 'Club 27',
                'slug' => 'club-27',
                'order' => 1
            ],
            [
                'location_id' => 5,
                'campaign_id' => 2,
                'name' => 'The Veteran',
                'slug' => 'the-veteran',
                'order' => 2
            ],
            [
                'location_id' => 5,
                'campaign_id' => 3,
                'name' => 'The Source',
                'slug' => 'the-source',
                'order' => 3
            ],
            // Colorado
            [
                'location_id' => 6,
                'campaign_id' => 1,
                'name' => 'Freedom Fighters',
                'slug' => 'freedom-fighters',
                'order' => 1
            ],
            [
                'location_id' => 6,
                'campaign_id' => 2,
                'name' => 'The Mercenary',
                'slug' => 'the-mercenary',
                'order' => 2
            ],
            // Hokkaido
            [
                'location_id' => 7,
                'campaign_id' => 1,
                'name' => 'Situs Inversus',
                'slug' => 'situs-inversus',
                'order' => 1
            ],
            [
                'location_id' => 7,
                'campaign_id' => 2,
                'name' => 'The Controller',
                'slug' => 'the-controller',
                'order' => 2
            ],
            [
                'location_id' => 7,
                'campaign_id' => 3,
                'name' => 'Patient Zero',
                'slug' => 'patient-zero',
                'order' => 3
            ],
        ];

        $missionsTable->insert($rows)->save();
    }

    public function down() {
        $this->execute("DELETE FROM `missions` WHERE `location_id` > 0 AND `location_id` < 8");
    }
}

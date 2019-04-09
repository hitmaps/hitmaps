<?php


use Phinx\Migration\AbstractMigration;

class InsertHitman2016Campaigns extends AbstractMigration {
    public function up() {
        $campaignsTable = $this->table('campaigns');

        $rows = [
            [
                'name' => 'Season One'
            ],
            [
                'name' => 'The Sarajevo Six'
            ],
            [
                'name' => 'Patient Zero'
            ]
        ];

        $campaignsTable->insert($rows)->save();
    }

    public function down() {
        $this->execute("DELETE FROM `campaigns` WHERE `name` IN ('Season One', 'The Sarajevo Six', 'Patient Zero')");    }
}

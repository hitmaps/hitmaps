<?php


use Phinx\Migration\AbstractMigration;

class AddFreeformTrainingAndUpdateFolderNames extends AbstractMigration {
    public function up() {
        $this->table('missions')
            ->insert([
                [
                    'location_id' => 1,
                    'campaign_id' => 1,
                    'name' => 'Freeform Training',
                    'slug' => 'freeform-training',
                    'order' => 1,
                    'map_folder_name' => 'freeform-training',
                    'map_center_latitude' => 0,
                    'map_center_longitude' => 0,
                ]
            ])->save();
        $id = $this->getAdapter()->getConnection()->lastInsertId();
        $this->table('mission_to_difficulties')
            ->insert([
                [
                    'mission_id' => $id,
                    'difficulty' => 'Standard'
                ]
            ])->save();
        $this->execute("UPDATE `missions` 
            SET `order` = 2, 
                `map_folder_name` = 'the-final-test' 
            WHERE `name` = 'The Final Test'");
    }

    public function down() {
        $this->execute("DELETE FROM `missions` WHERE `slug` = 'freeform-training'");
        $this->execute("UPDATE `missions` 
            SET `order` = 1, 
                `map_folder_name` = 'ica-facility' 
            WHERE `name` = 'The Final Test'");
    }
}

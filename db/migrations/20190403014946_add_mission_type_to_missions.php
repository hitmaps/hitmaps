<?php


use Phinx\Migration\AbstractMigration;

class AddMissionTypeToMissions extends AbstractMigration {
    public function up() {
        $this->table('missions')
            ->addColumn('mission_type', 'string')
            ->update();
        $this->execute("UPDATE `missions` SET `mission_type` = 'Mission'");
        $this->execute("UPDATE `missions` SET `mission_type` = 'Prologue' WHERE `slug` IN ('freeform-training', 'the-final-test')");
        $this->execute("UPDATE `missions` SET `mission_type` = 'Bonus Mission' WHERE `slug` IN ('the-icon', 'landslide', 'a-house-built-on-sand')");
        $this->execute("UPDATE `missions` SET `mission_type` = 'Patient Zero' WHERE `slug` IN ('the-source', 'the-author', 'patient-zero')");
    }

    public function down() {
        $this->table('missions')
            ->removeColumn('mission_type');
    }
}

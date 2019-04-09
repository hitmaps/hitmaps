<?php


use Phinx\Migration\AbstractMigration;

class AddSatelliteOptionToMissions extends AbstractMigration {
    public function change() {
        $this->table('missions')
            ->addColumn('satellite_view', 'boolean', ['default' => false])
            ->update();
    }
}

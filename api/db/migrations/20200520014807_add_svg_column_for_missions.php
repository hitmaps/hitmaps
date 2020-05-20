<?php


use Phinx\Migration\AbstractMigration;

class AddSvgColumnForMissions extends AbstractMigration {
    public function change() {
        $this->table('missions')
            ->addColumn('svg', 'boolean', ['default' => 0])
            ->update();
    }
}

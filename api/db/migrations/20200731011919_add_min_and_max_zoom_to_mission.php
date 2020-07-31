<?php


use Phinx\Migration\AbstractMigration;

class AddMinAndMaxZoomToMission extends AbstractMigration {
    public function change() {
        $this->table('missions')
            ->addColumn('min_zoom', 'integer', ['default' => 3])
            ->addColumn('max_zoom', 'integer', ['default' => 5])
            ->update();
    }
}

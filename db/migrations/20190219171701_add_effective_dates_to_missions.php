<?php


use Phinx\Migration\AbstractMigration;

class AddEffectiveDatesToMissions extends AbstractMigration {
    public function change() {
        $this->table('missions')
            ->addColumn('begin_effective_date', 'datetime', ['null' => true])
            ->addColumn('end_effective_date', 'datetime', ['null' => true])
            ->update();
    }
}

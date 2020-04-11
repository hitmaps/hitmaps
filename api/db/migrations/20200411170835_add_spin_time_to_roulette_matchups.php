<?php


use Phinx\Migration\AbstractMigration;

class AddSpinTimeToRouletteMatchups extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->addColumn('spin_time', 'datetime')
            ->update();
    }
}

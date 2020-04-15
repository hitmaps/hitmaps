<?php


use Phinx\Migration\AbstractMigration;

class AddSpinTimeToRouletteMatchups extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->addColumn('spin_time', 'datetime', ['default' => '2020-04-01 00:00:00.000'])
            ->update();
    }
}

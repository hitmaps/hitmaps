<?php


use Phinx\Migration\AbstractMigration;

class AddCompleteTimeToRouletteMatchups extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->addColumn('player_one_complete_time', 'datetime', ['null' => true])
            ->addColumn('player_two_complete_time', 'datetime', ['null' => true])
            ->update();
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class AddRouletteMatchupsTable extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->addColumn('tournament_id', 'string')
            ->addColumn('player_one_name', 'string')
            ->addColumn('player_two_name', 'string')
            ->addColumn('tournament_data', 'text')
            ->create();
    }
}

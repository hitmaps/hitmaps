<?php


use Phinx\Migration\AbstractMigration;

class AddTournamentTable extends AbstractMigration {
    public function change() {
        $this->table('tournaments')
            ->addColumn('tournament_id', 'string')
            ->addColumn('player_one_name', 'string')
            ->addColumn('player_two_name', 'string')
            ->addColumn('tournament_data', 'text')
            ->create();
    }
}

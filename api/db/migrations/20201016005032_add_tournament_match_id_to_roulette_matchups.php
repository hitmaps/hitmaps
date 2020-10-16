<?php


use Phinx\Migration\AbstractMigration;

class AddTournamentMatchIdToRouletteMatchups extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->addColumn('tournament_match_id', 'integer', ['null' => true])
            ->update();
    }
}

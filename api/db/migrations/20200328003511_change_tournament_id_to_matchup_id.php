<?php


use Phinx\Migration\AbstractMigration;

class ChangeTournamentIdToMatchupId extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->renameColumn('tournament_id', 'matchup_id')
            ->update();
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class ChangeTournamentDataToMatchupData extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->renameColumn('tournament_data', 'matchup_data')
            ->update();
    }
}

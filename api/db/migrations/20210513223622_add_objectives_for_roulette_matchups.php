<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddObjectivesForRouletteMatchups extends AbstractMigration {
    public function change(): void {
        $this->table('roulette_objectives')
            ->addColumn('matchup_id', 'string')
            ->addColumn('player_number', 'integer')
            ->addColumn('complete', 'boolean')
            ->create();
    }
}

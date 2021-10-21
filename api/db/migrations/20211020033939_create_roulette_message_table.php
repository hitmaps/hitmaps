<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateRouletteMessageTable extends AbstractMigration {
    public function change(): void {
        $this->table('roulette_messages')
            ->addColumn('matchup_id', 'integer')
            ->addColumn('participant_index', 'integer')
            ->addColumn('message', 'text', ['limit' => 'text_medium'])
            ->addColumn('received', 'boolean')
            ->addColumn('acknowledged', 'boolean')
            ->create();
    }
}

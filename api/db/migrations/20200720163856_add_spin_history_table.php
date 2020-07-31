<?php


use Phinx\Migration\AbstractMigration;

class AddSpinHistoryTable extends AbstractMigration {
    public function up() {
        $this->table('spin_history')
            ->addColumn('spin_data', 'text')
            ->create();

        $previousSpins = $this->fetchAll('SELECT matchup_data FROM roulette_matchups');
        foreach ($previousSpins as $previousSpin) {
            $decodedJson = json_decode($previousSpin['matchup_data'], true);
            if ($decodedJson === null) {
                continue;
            }

            $this->table('spin_history')->insert([
                [
                    'spin_data' => json_encode($decodedJson['spinResults'])
                ]
            ])->save();
        }
    }

    public function down() {
        $this->table('spin_history')->drop();
    }
}

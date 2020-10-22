<?php


use Phinx\Migration\AbstractMigration;

class AddVictorIndexToRouletteMatchups extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->addColumn('winner', 'integer', ['null' => true])
            ->update();
    }
}

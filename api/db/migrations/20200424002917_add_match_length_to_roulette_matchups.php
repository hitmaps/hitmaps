<?php


use Phinx\Migration\AbstractMigration;

class AddMatchLengthToRouletteMatchups extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->addColumn('match_length', 'string', ['default' => '60 minutes'])
            ->update();
    }
}

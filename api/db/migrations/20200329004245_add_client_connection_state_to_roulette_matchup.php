<?php


use Phinx\Migration\AbstractMigration;

class AddClientConnectionStateToRouletteMatchup extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->addColumn('player_one_last_ping', 'integer')
            ->addColumn('player_two_last_ping', 'integer')
            ->update();
    }
}

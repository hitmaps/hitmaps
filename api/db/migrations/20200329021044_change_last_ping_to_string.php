<?php


use Phinx\Migration\AbstractMigration;

class ChangeLastPingToString extends AbstractMigration {
    public function change() {
        $this->table('roulette_matchups')
            ->changeColumn('player_one_last_ping', 'string')
            ->changeColumn('player_two_last_ping', 'string')
            ->update();
    }
}

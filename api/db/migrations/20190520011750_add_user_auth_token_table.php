<?php


use Phinx\Migration\AbstractMigration;

class AddUserAuthTokenTable extends AbstractMigration {
    public function change() {
        $this->table('user_auth_tokens')
            ->addColumn('user_id', 'integer')
            ->addColumn('token', 'string')
            ->addColumn('expiration', 'datetime')
            ->create();
    }
}

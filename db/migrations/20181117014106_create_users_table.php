<?php


use Phinx\Migration\AbstractMigration;

class CreateUsersTable extends AbstractMigration {
    public function change() {
        $this->table('users')
            ->addColumn('name', 'string')
            ->addColumn('password', 'string')
            ->addColumn('email', 'string')
            ->addColumn('verification_token', 'string', ['null' => true])
            ->addColumn('password_reset_token', 'string', ['null' => true])
            ->addIndex(['email'], ['unique' => true])
            ->create();
    }
}

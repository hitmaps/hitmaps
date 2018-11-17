<?php


use Phinx\Migration\AbstractMigration;

class CreateUsersTable extends AbstractMigration {
    public function change() {
        $this->table('users')
            ->addColumn('name', 'string')
            ->addColumn('password', 'string')
            ->addColumn('verification_token', 'string')
            ->addColumn('password_reset_token', 'string')
            ->create();
    }
}

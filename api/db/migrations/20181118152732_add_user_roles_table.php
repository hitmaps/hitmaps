<?php


use Phinx\Migration\AbstractMigration;

class AddUserRolesTable extends AbstractMigration {
    public function change() {
        $this->table('user_roles')
            ->addColumn('role', 'string')
            ->addColumn('description', 'string')
            ->create();
    }
}

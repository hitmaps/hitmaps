<?php


use Phinx\Migration\AbstractMigration;

class UserToUserRolesTable extends AbstractMigration {
    public function change() {
        $this->table('user_to_user_roles')
            ->addColumn('user_id', 'integer')
            ->addColumn('role_id', 'integer')
            ->create();
    }
}

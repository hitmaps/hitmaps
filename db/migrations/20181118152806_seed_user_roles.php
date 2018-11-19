<?php


use Phinx\Migration\AbstractMigration;

class SeedUserRoles extends AbstractMigration {
    public function up() {
        $rows  = [
            [
                'role' => 'Administrator',
                'description' => 'Has the ability to do everything without approval'
            ],
            [
                'role' => 'Trusted Editor',
                'description' => 'Can edit maps without approval'
            ]
        ];

        $this->table('user_roles')->insert($rows)->update();
    }

    public function down() {
        $this->execute('DELETE FROM `user_roles`');
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class InsertGames extends AbstractMigration {
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    addCustomColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Any other destructive changes will result in an error when trying to
     * rollback the migration.
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function up() {
        $rows = [
            [
                'slug' => 'hitman',
                'full_name' => 'HITMAN Legacy Pack',
                'tagline' => 'Enter a World of Assassination'
            ],
            [
                'slug' => 'hitman2',
                'full_name' => 'HITMAN 2',
                'tagline' => 'Make the World Your Weapon'
            ]
        ];

        $this->table('games')->insert($rows)->save();
    }

    public function down() {
        $this->execute("DELETE FROM `games`");
    }
}

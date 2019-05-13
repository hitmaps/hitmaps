<?php


use Phinx\Migration\AbstractMigration;

class AddTypeToGames extends AbstractMigration {
    public function up() {
        $this->table('games')
            ->addColumn('type', 'string')
            ->addColumn('icon', 'string')
            ->update();
        $this->execute("UPDATE `games` SET `type` = 'Campaign', `icon` = 'campaign'");
    }

    public function down() {
        $this->table('games')
            ->removeColumn('type')
            ->removeColumn('icon')
            ->update();
    }
}

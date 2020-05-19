<?php


use Phinx\Migration\AbstractMigration;

class AddLogoToGames extends AbstractMigration {
    public function change() {
        $this->table('games')
            ->addColumn('logo_url', 'string')
            ->update();
    }
}

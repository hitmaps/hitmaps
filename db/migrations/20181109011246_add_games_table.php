<?php


use Phinx\Migration\AbstractMigration;

class AddGamesTable extends AbstractMigration {
    public function change() {
        $this->table('games')
            ->addColumn('slug', 'string')
            ->addColumn('full_name', 'string')
            ->addColumn('tagline', 'string')
            ->create();;
    }
}

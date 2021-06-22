<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateNodeToDifficultiesTable extends AbstractMigration {
    public function change() {
        $this->table('node_to_difficulties')
            ->addColumn('node_id', 'integer')
            ->addColumn('difficulty', 'string')
            ->create();
    }
}

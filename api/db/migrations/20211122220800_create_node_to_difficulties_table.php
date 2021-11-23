<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateNodeToDifficultiesTable extends AbstractMigration {
    public function change() {
        $this->table('node_to_difficulties')
            ->addColumn('node_id', 'integer')
            ->addColumn('difficulty', 'string')
            ->addIndex(['node_id', 'difficulty'], [
                'unique' => true,
                'name' => 'idx_node_id_difficulty'
            ])
            ->create();
    }
}

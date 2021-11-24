<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateNodeToDifficultiesTable extends AbstractMigration {
    public function change() {
        $this->table('node_to_difficulties')
            ->addColumn('node_id', 'integer')
            ->addColumn('difficulty_id', 'integer')
            ->addIndex(['node_id', 'difficulty_id'], [
                'unique' => true,
                'name' => 'idx_node_id_difficulty_id'
            ])
            ->create();
    }
}

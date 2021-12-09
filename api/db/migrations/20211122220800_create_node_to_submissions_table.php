<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateNodeToMissionVariantTable extends AbstractMigration {
    public function change() {
        $this->table('node_to_mission_variants')
            ->addColumn('node_id', 'integer')
            ->addColumn('variant_id', 'integer')
            ->addIndex(['node_id', 'variant_id'], [
                'unique' => true,
                'name' => 'idx_node_id_variant_id'
            ])
            ->create();
    }
}

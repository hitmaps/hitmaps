<?php


use Phinx\Migration\AbstractMigration;

class AddDisguiseAreasTable extends AbstractMigration {
    public function change() {
        $this->table('disguise_areas')
            ->addColumn('mission_id', 'integer')
            ->addColumn('disguise_id', 'integer')
            ->addColumn('vertices', 'text')
            ->addColumn('level', 'integer')
            ->addColumn('type', 'string')
            ->create();
        $this->execute("ALTER TABLE `disguise_areas` MODIFY `vertices` mediumtext NOT NULL");
    }
}

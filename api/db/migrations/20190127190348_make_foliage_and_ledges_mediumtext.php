<?php


use Phinx\Migration\AbstractMigration;

class MakeFoliageAndLedgesMediumtext extends AbstractMigration {
    public function up() {
        $this->table('foliage')
            ->changeColumn('vertices', 'text', ['limit' => 'text_medium'])
            ->save();
        $this->table('ledges')
            ->changeColumn('vertices', 'text', ['limit' => 'text_medium'])
            ->save();
    }

    public function down() {
        //-- no-op
    }
}

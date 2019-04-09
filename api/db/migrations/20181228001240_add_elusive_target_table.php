<?php


use Phinx\Migration\AbstractMigration;

class AddElusiveTargetTable extends AbstractMigration {
    public function change() {
        $this->table('elusive_targets')
            ->addColumn('name', 'string')
            ->addColumn('mission_url', 'string')
            ->addColumn('briefing', 'text', ['null' => true, 'limit' => 'text_medium'])
            ->addColumn('video_briefing_url', 'string', ['null' => true])
            ->addColumn('beginning_time', 'datetime')
            ->addColumn('ending_time', 'datetime')
            ->addColumn('image_url', 'string')
            ->create();
    }
}

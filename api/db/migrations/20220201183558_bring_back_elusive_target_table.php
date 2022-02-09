<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class BringBackElusiveTargetTable extends AbstractMigration {
    public function change(): void {
        $this->table('elusive_targets')
            ->addColumn('name', 'string')
            ->addColumn('mission_id', 'integer')
            ->addColumn('briefing', 'text', ['null' => true, 'limit' => 'text_medium'])
            ->addColumn('video_briefing_url', 'string', ['null' => true])
            ->addColumn('beginning_time', 'datetime')
            ->addColumn('ending_time', 'datetime')
            ->addColumn('image_url', 'string')
            ->addColumn('coming_notification_sent', 'boolean', ['default' => false])
            ->addColumn('playable_notification_sent', 'boolean', ['default' => false])
            ->addColumn('7_days_left_notification_sent', 'boolean', ['default' => false])
            ->addColumn('5_days_left_notification_sent', 'boolean', ['default' => false])
            ->addColumn('3_days_left_notification_sent', 'boolean', ['default' => false])
            ->addColumn('1_day_left_notification_sent', 'boolean', ['default' => false])
            ->addColumn('end_notification_sent', 'boolean', ['default' => false])
            ->addColumn('reactivated', 'boolean', ['default' => false])
            ->addColumn('game_id', 'integer')
            ->create();
    }
}

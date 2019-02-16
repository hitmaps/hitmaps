<?php


use Phinx\Migration\AbstractMigration;

class AddNotificationHistoryToElusiveTarget extends AbstractMigration {
    public function change() {
        $this->table('elusive_targets')
            ->addColumn('coming_notification_sent', 'boolean', ['default' => false])
            ->addColumn('playable_notification_sent', 'boolean', ['default' => false])
            ->addColumn('7_days_left_notification_sent', 'boolean', ['default' => false])
            ->addColumn('5_days_left_notification_sent', 'boolean', ['default' => false])
            ->addColumn('3_days_left_notification_sent', 'boolean', ['default' => false])
            ->addColumn('1_day_left_notification_sent', 'boolean', ['default' => false])
            ->addColumn('end_notification_sent', 'boolean', ['default' => false])
            ->update();
    }
}

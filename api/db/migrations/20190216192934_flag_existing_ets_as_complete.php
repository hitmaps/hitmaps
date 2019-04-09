<?php


use Phinx\Migration\AbstractMigration;

class FlagExistingEtsAsComplete extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `elusive_targets`
            SET `coming_notification_sent` = 1,
                `playable_notification_sent` = 1,
                `7_days_left_notification_sent` = 1,
                `5_days_left_notification_sent` = 1,
                `3_days_left_notification_sent` = 1,
                `1_day_left_notification_sent` = 1,
                `end_notification_sent` = 1");
    }

    public function down() {
    }
}

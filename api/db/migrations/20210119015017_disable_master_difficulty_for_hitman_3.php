<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class DisableMasterDifficultyForHitman3 extends AbstractMigration {
    public function up(): void {
        $this->execute("UPDATE `mission_to_difficulties` SET `visible` = 0 WHERE `mission_id` IN (
            SELECT `id` FROM `missions` WHERE `location_id` IN (
                SELECT `id` FROM `locations` WHERE `game` = 'hitman3')
            ) AND `difficulty` = 'Master'");
    }

    public function down() {
        $this->execute("UPDATE `mission_to_difficulties` SET `visible` = 1 WHERE `mission_id` IN (
            SELECT `id` FROM `missions` WHERE `location_id` IN (
                SELECT `id` FROM `locations` WHERE `game` = 'hitman3')
            ) AND `difficulty` = 'Master'");
    }
}

<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class SeedHitman3MissionDifficulties extends AbstractMigration {
    public function up(): void {
        $missions = $this->fetchAll("SELECT `id` FROM `missions` WHERE `location_id` IN (SELECT `id` FROM `locations` WHERE `game` = 'hitman3')");

        $insertRows = [];
        foreach ($missions as $mission) {
            $insertRows[] = [
                'mission_id' => $mission['id'],
                'difficulty' => 'Professional'
            ];
            $insertRows[] = [
                'mission_id' => $mission['id'],
                'difficulty' => 'Master'
            ];
        }

        $this->table('mission_to_difficulties')
            ->insert($insertRows)
            ->save();
    }

    public function down() {
        $this->execute("DELETE FROM `mission_to_difficulties` WHERE `mission_id` IN (
            SELECT `id` FROM `missions` WHERE `location_id` IN (
                SELECT `id` FROM `locations` WHERE `game` = 'hitman3')
            )");
    }
}

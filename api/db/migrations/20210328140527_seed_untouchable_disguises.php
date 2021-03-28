<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class SeedUntouchableDisguises extends AbstractMigration {
    public function up(): void {
        $missionId = $this->fetchRow("SELECT `id` FROM `missions` WHERE `slug` = 'untouchable'");

        $this->table('disguises')
            ->insert($this->getData($missionId['id']))
            ->save();
    }

    private function getData($missionId) {
        return [
            [
                'mission_id' => $missionId,
                'name' => 'Subject 47',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables_override/47_outfits_wolverine.jpg',
                'order' => 0,
                'suit' => 1
            ],
            [
                'mission_id' => $missionId,
                'name' => 'Providence Doctor',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_abe4b536-1f09-421e-916b-20af142c6adb_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $missionId,
                'name' => 'Providence Security Guard (Militia Zone)',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_c3239200-0f56-4b45-9be5-e514bdf59d26_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $missionId,
                'name' => 'Providence Elite Guard',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_68225457-66b3-457c-a6ec-065b001f5151_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $missionId,
                'name' => 'Providence Commando',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_e77b5340-41d3-448a-84d3-a4f7f6426634_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $missionId,
                'name' => 'Providence Commando Leader',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_36402728-1197-4a3c-a8ac-1fed399a2344_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $missionId,
                'name' => 'Office Staff',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_81fc37ca-e20b-495f-961f-d5be311a6e6d_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
            [
                'mission_id' => $missionId,
                'name' => 'Providence Security Guard (Office)',
                'image' => 'https://media.hitmaps.com/img/hitman3/unlockables/outfit_653ad7d6-7d5d-4554-9551-7573be7205be_0.jpg',
                'order' => 0,
                'suit' => 0
            ],
        ];
    }

    public function down(): void {
        $missionId = $this->fetchRow("SELECT `id` FROM `missions` WHERE `slug` = 'untouchable'");
        foreach ($this->getData($missionId['id']) as $disguise) {
            $this->execute("DELETE FROM `disguises` WHERE `mission_id` = {$disguise['mission_id']}
              AND `name` = {$disguise['name']}");
        }
    }
}

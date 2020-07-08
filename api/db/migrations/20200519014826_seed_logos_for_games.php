<?php


use Phinx\Migration\AbstractMigration;

class SeedLogosForGames extends AbstractMigration {
    public function up() {
        $gamesToLogoUrls = [
            'hitman' => 'https://media.hitmaps.com/img/hitmaps-custom/hitman-logo.png',
            'hitman2' => 'https://media.hitmaps.com/img/hitmaps-custom/hitman2-logo.png',
            'sniper-assassin' => 'https://media.hitmaps.com/img/hitmaps-custom/hitman2-logo.png',
            'absolution' => 'https://media.hitmaps.com/img/absolution/absolution-logo.png',
        ];

        foreach ($gamesToLogoUrls as $slug => $logoUrl) {
            $this->execute("UPDATE `games` SET `logo_url` = '{$logoUrl}' WHERE `slug` = '{$slug}'");
        }
    }

    public function down() {
        $this->execute("UPDATE `games` SET `logo_url` = NULL");
    }
}

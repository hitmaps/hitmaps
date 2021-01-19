<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class SeedHitman3Game extends AbstractMigration {
    public function up(): void {
        $this->table('games')
            ->insert([
                [
                    'slug' => 'hitman3',
                    'full_name' => 'HITMAN™ 3',
                    'tagline' => 'Death Awaits',
                    'type' => 'Campaign',
                    'icon' => 'campaign',
                    'tile_url' => 'https://media.hitmaps.com/img/ui/tiles/defaultmenutilelarge.jpg',
                    'logo_url' => 'https://media.hitmaps.com/img/hitmaps-custom/mk3.png'
                ]
            ])->save();
    }

    public function down() {
        $this->execute("DELETE FROM `games` WHERE `slug` = 'hitman3'");
    }
}

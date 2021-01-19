<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class SeedHitman3Locations extends AbstractMigration {
    public function up(): void {
        $this->table('locations')
            ->insert([
                [
                    'game' => 'hitman3',
                    'destination' => 'Dubai',
                    'destination_country' => 'United Arab Emirates',
                    'order' => 1,
                    'slug' => 'dubai',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg'
                ],
                [
                    'game' => 'hitman3',
                    'destination' => 'Dartmoor',
                    'destination_country' => 'England',
                    'order' => 2,
                    'slug' => 'dartmoor',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg'
                ],
                [
                    'game' => 'hitman3',
                    'destination' => 'Berlin',
                    'destination_country' => 'Germany',
                    'order' => 3,
                    'slug' => 'berlin',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg'
                ],
                [
                    'game' => 'hitman3',
                    'destination' => 'Chongqing',
                    'destination_country' => 'China',
                    'order' => 4,
                    'slug' => 'chongqing',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg'
                ],
                [
                    'game' => 'hitman3',
                    'destination' => 'Mendoza',
                    'destination_country' => 'Argentina',
                    'order' => 5,
                    'slug' => 'mendoza',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg'
                ],
                [
                    'game' => 'hitman3',
                    'destination' => 'Carpathian Mountains',
                    'destination_country' => 'Romania',
                    'order' => 6,
                    'slug' => 'carpathian-mountains',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg'
                ]
            ])->save();
    }

    public function down() {
        $this->execute("DELETE FROM `locations` WHERE `game` = 'hitman3'");
    }
}

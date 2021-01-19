<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class SeedHitman3Missions extends AbstractMigration {
    public function up(): void {
        $rows = $this->fetchAll("SELECT `id`, `slug` FROM `locations` WHERE `game` = 'hitman3'");
        $slugToId = [];
        foreach ($rows as $row) {
            $slugToId[$row['slug']] = $row['id'];
        }
        $campaignId = $this->fetchRow("SELECT `id` FROM `campaigns` WHERE `name` = 'HITMAN 3'");

        $this->table('missions')
            ->insert([
                [
                    'location_id' => $slugToId['dubai'],
                    'campaign_id' => $campaignId['id'],
                    'name' => 'On Top Of The World',
                    'slug' => 'on-top-of-the-world',
                    'order' => 1,
                    'map_folder_name' => 'on-top-of-the-world',
                    'map_center_latitude' => '0',
                    'map_center_longitude' => '0',
                    'lowest_floor_number' => 0,
                    'highest_floor_number' => 0,
                    'starting_floor_number' => 0,
                    'top_left_coordinate' => '-10000,10000',
                    'bottom_right_coordinate' => '10000,-10000',
                    'satellite_view' => false,
                    'begin_effective_date' => null,
                    'end_effective_date' => null,
                    'mission_type' => 'Mission',
                    'tile_url' => 'https://media.hitmaps.com/img/ui/tiles/defaultmenutilelarge.jpg',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg',
                    'svg' => true,
                    'min_zoom' => 3,
                    'max_zoom' => 6,
                    'bounding_box_top_left' => '0,0',
                    'bounding_box_bottom_right' => '100,100'
                ],
                [
                    'location_id' => $slugToId['dartmoor'],
                    'campaign_id' => $campaignId['id'],
                    'name' => 'Death In The Family',
                    'slug' => 'death-in-the-family',
                    'order' => 1,
                    'map_folder_name' => 'death-in-the-family',
                    'map_center_latitude' => '0',
                    'map_center_longitude' => '0',
                    'lowest_floor_number' => 0,
                    'highest_floor_number' => 0,
                    'starting_floor_number' => 0,
                    'top_left_coordinate' => '-10000,10000',
                    'bottom_right_coordinate' => '10000,-10000',
                    'satellite_view' => false,
                    'begin_effective_date' => null,
                    'end_effective_date' => null,
                    'mission_type' => 'Mission',
                    'tile_url' => 'https://media.hitmaps.com/img/ui/tiles/defaultmenutilelarge.jpg',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg',
                    'svg' => true,
                    'min_zoom' => 3,
                    'max_zoom' => 6,
                    'bounding_box_top_left' => '0,0',
                    'bounding_box_bottom_right' => '100,100'
                ],
                [
                    'location_id' => $slugToId['berlin'],
                    'campaign_id' => $campaignId['id'],
                    'name' => 'Apex Predator',
                    'slug' => 'apex-predator',
                    'order' => 1,
                    'map_folder_name' => 'apex-predator',
                    'map_center_latitude' => '0',
                    'map_center_longitude' => '0',
                    'lowest_floor_number' => 0,
                    'highest_floor_number' => 0,
                    'starting_floor_number' => 0,
                    'top_left_coordinate' => '-10000,10000',
                    'bottom_right_coordinate' => '10000,-10000',
                    'satellite_view' => false,
                    'begin_effective_date' => null,
                    'end_effective_date' => null,
                    'mission_type' => 'Mission',
                    'tile_url' => 'https://media.hitmaps.com/img/ui/tiles/defaultmenutilelarge.jpg',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg',
                    'svg' => true,
                    'min_zoom' => 3,
                    'max_zoom' => 6,
                    'bounding_box_top_left' => '0,0',
                    'bounding_box_bottom_right' => '100,100'
                ],
                [
                    'location_id' => $slugToId['chongqing'],
                    'campaign_id' => $campaignId['id'],
                    'name' => 'End of An Era',
                    'slug' => 'end-of-an-era',
                    'order' => 1,
                    'map_folder_name' => 'end-of-an-era',
                    'map_center_latitude' => '0',
                    'map_center_longitude' => '0',
                    'lowest_floor_number' => 0,
                    'highest_floor_number' => 0,
                    'starting_floor_number' => 0,
                    'top_left_coordinate' => '-10000,10000',
                    'bottom_right_coordinate' => '10000,-10000',
                    'satellite_view' => false,
                    'begin_effective_date' => null,
                    'end_effective_date' => null,
                    'mission_type' => 'Mission',
                    'tile_url' => 'https://media.hitmaps.com/img/ui/tiles/defaultmenutilelarge.jpg',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg',
                    'svg' => true,
                    'min_zoom' => 3,
                    'max_zoom' => 6,
                    'bounding_box_top_left' => '0,0',
                    'bounding_box_bottom_right' => '100,100'
                ],
                [
                    'location_id' => $slugToId['mendoza'],
                    'campaign_id' => $campaignId['id'],
                    'name' => 'The Farewell',
                    'slug' => 'the-farewell',
                    'order' => 1,
                    'map_folder_name' => 'the-farewell',
                    'map_center_latitude' => '0',
                    'map_center_longitude' => '0',
                    'lowest_floor_number' => 0,
                    'highest_floor_number' => 0,
                    'starting_floor_number' => 0,
                    'top_left_coordinate' => '-10000,10000',
                    'bottom_right_coordinate' => '10000,-10000',
                    'satellite_view' => false,
                    'begin_effective_date' => null,
                    'end_effective_date' => null,
                    'mission_type' => 'Mission',
                    'tile_url' => 'https://media.hitmaps.com/img/ui/tiles/defaultmenutilelarge.jpg',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg',
                    'svg' => true,
                    'min_zoom' => 3,
                    'max_zoom' => 6,
                    'bounding_box_top_left' => '0,0',
                    'bounding_box_bottom_right' => '100,100'
                ],
                [
                    'location_id' => $slugToId['carpathian-mountains'],
                    'campaign_id' => $campaignId['id'],
                    'name' => 'Untouchable',
                    'slug' => 'untouchable',
                    'order' => 1,
                    'map_folder_name' => 'carpathian-mountains',
                    'map_center_latitude' => '0',
                    'map_center_longitude' => '0',
                    'lowest_floor_number' => 0,
                    'highest_floor_number' => 0,
                    'starting_floor_number' => 0,
                    'top_left_coordinate' => '-10000,10000',
                    'bottom_right_coordinate' => '10000,-10000',
                    'satellite_view' => false,
                    'begin_effective_date' => null,
                    'end_effective_date' => null,
                    'mission_type' => 'Mission',
                    'tile_url' => 'https://media.hitmaps.com/img/ui/tiles/defaultmenutilelarge.jpg',
                    'background_url' => 'https://media.hitmaps.com/img/backgrounds/menu_bg.jpg',
                    'svg' => true,
                    'min_zoom' => 3,
                    'max_zoom' => 6,
                    'bounding_box_top_left' => '0,0',
                    'bounding_box_bottom_right' => '100,100'
                ],
            ])->save();
    }

    public function down() {
        $this->execute("DELETE FROM `missions` WHERE `location_id` IN (SELECT `id` FROM `locations` WHERE `game` = 'hitman3')");
    }
}

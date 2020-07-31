<?php


use Phinx\Migration\AbstractMigration;

class AddAbsolutionGame extends AbstractMigration {
    public function change() {
        $this->table('games')
            ->insert([
                [
                    'slug' => 'absolution',
                    'full_name' => 'Hitman: Absolution',
                    'type' => 'Legacy Game',
                    'icon' => 'campaign',
                    'tile_url' => 'https://media.hitmaps.com/img/hitmaps-custom/hitman-absolution.jpg',
                    'tagline' => ''
                ]
            ])->save();
    }
}

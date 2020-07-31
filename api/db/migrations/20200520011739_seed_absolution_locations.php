<?php


use Phinx\Migration\AbstractMigration;

class SeedAbsolutionLocations extends AbstractMigration {
    public function up() {
        $this->table('locations')
            ->insert($this->getItems())
            ->save();
    }

    private function getItems() {
        return [
            [
                'game' => 'absolution',
                'destination' => 'Chicago (Ch. 1 - 6)',
                'destination_country' => 'Illinois, USA',
                'order' => 1,
                'slug' => 'chicago1',
                'background_url' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            [
                'game' => 'absolution',
                'destination' => 'Hope (Ch. 7 - 16)',
                'destination_country' => 'South Dakota, USA',
                'order' => 2,
                'slug' => 'hope',
                'background_url' => 'https://media.hitmaps.com/img/absolution/absolution-hope.jpg'
            ],
            [
                'game' => 'absolution',
                'destination' => 'Chicago (Ch. 17 - 19)',
                'destination_country' => 'Illinois, USA',
                'order' => 3,
                'slug' => 'chicago2',
                'background_url' => 'https://media.hitmaps.com/img/absolution/absolution-chicago.jpg'
            ],
            [
                'game' => 'absolution',
                'destination' => 'Cornwall (Ch. 20)',
                'destination_country' => 'England, United Kingdom',
                'order' => 4,
                'slug' => 'cornwall',
                'background_url' => 'https://media.hitmaps.com/img/absolution/hitman-absolution.jpg'
            ]
        ];
    }

    public function down() {
        foreach ($this->getItems() as $item) {
            $this->execute("DELETE FROM `locations` WHERE `game` = 'absolution' AND `slug` = '{$item['slug']}'");
        }
    }
}

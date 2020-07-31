<?php


use Phinx\Migration\AbstractMigration;

class SetSomeSpecificMinMaxZooms extends AbstractMigration {
    public function up() {
        foreach ($this->getRows() as $row) {
            $this->execute("UPDATE `missions` SET `min_zoom` = {$row['minZoom']}, `max_zoom` = {$row['maxZoom']} WHERE `slug` = '{$row['slug']}'");
        }
    }

    private function getRows() {
        return [
            [
                'slug' => 'terminus',
                'minZoom' => 4,
                'maxZoom' => 11
            ],
            [
                'slug' => 'rosewood',
                'minZoom' => 4,
                'maxZoom' => 11
            ],
            [
                'slug' => 'shaving-lenny',
                'minZoom' => 4,
                'maxZoom' => 11
            ]
        ];
    }

    public function down() {
        foreach ($this->getRows() as $row) {
            $this->execute("UPDATE `missions` SET `min_zoom` = 3, `max_zoom` = 10 WHERE `slug` = '{$row['slug']}'");
        }
    }
}

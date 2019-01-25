<?php


use Phinx\Migration\AbstractMigration;

class AddShowstopperDisguises extends AbstractMigration {
    public function up() {
        $this->table('disguises')
            ->insert($this->rows())
            ->save();
    }

    public function down() {
        foreach ($this->rows() as $row) {
            $this->query("DELETE FROM `disguises` 
              WHERE `mission_id` = {$row['mission_id']}
              AND `name` = '{$row['name']}'
              AND `image` = '{$row['image']}'");
        }
    }

    private function rows() {
        return [
            [
                'mission_id' => 2,
                'name' => 'Tuxedo',
                'image' => 'disguises/the-showstopper/tuxedo',
            ],
            [
                'mission_id' => 2,
                'name' => 'Chef',
                'image' => 'disguises/the-showstopper/chef',
            ],
            [
                'mission_id' => 2,
                'name' => 'Palace Staff',
                'image' => 'disguises/the-showstopper/palace-staff',
            ],
            [
                'mission_id' => 2,
                'name' => 'Auction Staff',
                'image' => 'disguises/the-showstopper/auction-staff',
            ],
            [
                'mission_id' => 2,
                'name' => 'Stylist',
                'image' => 'disguises/the-showstopper/stylist',
            ],
            [
                'mission_id' => 2,
                'name' => 'Tech Crew',
                'image' => 'disguises/the-showstopper/tech-crew',
            ],
            [
                'mission_id' => 2,
                'name' => 'Security Guard',
                'image' => 'disguises/the-showstopper/security-guard',
            ],
            [
                'mission_id' => 2,
                'name' => 'Bodyguard',
                'image' => 'disguises/the-showstopper/bodyguard',
            ],
            [
                'mission_id' => 2,
                'name' => 'Helmut Kruger',
                'image' => 'disguises/the-showstopper/helmut-kruger',
            ],
            [
                'mission_id' => 2,
                'name' => 'Sheikh',
                'image' => 'disguises/the-showstopper/sheikh',
            ],
        ];
    }
}

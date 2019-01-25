<?php


use Phinx\Migration\AbstractMigration;

class AddIsleOfSgailDisguises extends AbstractMigration {
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
                'mission_id' => 26,
                'name' => 'Tuxedo and Mask',
                'image' => 'disguises/isle-of-sgail/tuxedo-and-mask',
            ],
            [
                'mission_id' => 26,
                'name' => 'Entertainer',
                'image' => 'disguises/isle-of-sgail/entertainer',
            ],
            [
                'mission_id' => 26,
                'name' => 'Blake Nathaniel',
                'image' => 'disguises/isle-of-sgail/blake-nathaniel',
            ],
            [
                'mission_id' => 26,
                'name' => 'Chef',
                'image' => 'disguises/isle-of-sgail/chef',
            ],
            [
                'mission_id' => 26,
                'name' => 'Master of Ceremonies',
                'image' => 'disguises/isle-of-sgail/master-of-ceremonies',
            ],
            [
                'mission_id' => 26,
                'name' => 'Custodian',
                'image' => 'disguises/isle-of-sgail/custodian',
            ],
            [
                'mission_id' => 26,
                'name' => 'Burial Robes',
                'image' => 'disguises/isle-of-sgail/burial-robes',
            ],
            [
                'mission_id' => 26,
                'name' => "Knight's Armor",
                'image' => 'disguises/isle-of-sgail/knight-armor',
            ],
            [
                'mission_id' => 26,
                'name' => 'Initiate',
                'image' => 'disguises/isle-of-sgail/initiate',
            ],
            [
                'mission_id' => 26,
                'name' => 'Ark Member',
                'image' => 'disguises/isle-of-sgail/ark-member',
            ],
            [
                'mission_id' => 26,
                'name' => 'Butler',
                'image' => 'disguises/isle-of-sgail/butler',
            ],
            [
                'mission_id' => 26,
                'name' => 'Guard',
                'image' => 'disguises/isle-of-sgail/guard',
            ],
            [
                'mission_id' => 26,
                'name' => 'Raider',
                'image' => 'disguises/isle-of-sgail/raider',
            ],
            [
                'mission_id' => 26,
                'name' => 'Event Staff',
                'image' => 'disguises/isle-of-sgail/event-staff',
            ],
            [
                'mission_id' => 26,
                'name' => 'Elite Guard',
                'image' => 'disguises/isle-of-sgail/elite-guard',
            ],
            [
                'mission_id' => 26,
                'name' => 'Castle Staff',
                'image' => 'disguises/isle-of-sgail/castle-staff',
            ],
            [
                'mission_id' => 26,
                'name' => 'Architect',
                'image' => 'disguises/isle-of-sgail/architect',
            ],
            [
                'mission_id' => 26,
                'name' => 'Jebediah Block',
                'image' => 'disguises/isle-of-sgail/jebediah-block',
            ],
        ];
    }
}

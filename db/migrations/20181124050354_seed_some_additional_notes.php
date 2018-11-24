<?php


use Phinx\Migration\AbstractMigration;

class SeedSomeAdditionalNotes extends AbstractMigration {
    public function up() {
        // Sabotages
        $this->execute("UPDATE `items`
            SET `requirement` = 'Requires Wrench',
                `warning` = 'Suspicious in any disguise'
            WHERE `name` IN ('Gas Canister', 'Gas Heater Lamp', 'Stove', 'Scooter', 'Gas Valve')");
        $this->execute("UPDATE `items`
            SET `requirement` = 'Requires Screwdriver',
                `warning` = 'Suspicious in any disguise'
            WHERE `name` IN ('Gasoline Drum')");
        $this->execute("UPDATE `items`
            SET `requirement` = 'Requires Screwdriver',
                `warning` = 'Suspicious unless disguised as Tech Member'
            WHERE `name` IN ('Wire Plug')");
        $this->execute("UPDATE `items`
            SET `requirement` = 'Requires Screwdriver',
                `warning` = 'Suspicious unless disguised as Handyman'
            WHERE `name` IN ('Phonebooth')");

        // Distraction
        $this->execute("UPDATE `items`
            SET  `warning` = 'Suspicious in any disguise'
            WHERE `name` IN ('Forklift', 'Generator', 'Vacuum Cleaner', 'Sink')");
        $this->execute("UPDATE `items`
            SET  `warning` = 'Suspicious unless diguised as main disguise in room'
            WHERE `name` IN ('Fusebox')");

        // Poison
        $this->table('items')->insert([
            [
                'name' => '<Item being poisoned>',
                'description' => '',
                'type' => 'Points of Interest',
                'icon' => 'poison',
                'group' => 'Poison',
                'requirement' => 'Requires Poison',
                'warning' => 'Suspicious unless disguised as a disguise that handles food/drink'
            ]
        ])->save();

        // Other PoIs
        $this->execute("UPDATE `items`
            SET  `warning` = 'Suspicious in any disguise'
            WHERE `name` IN ('Fire Alarm')");
        $this->table('items')->insert([
            [
                'name' => '',
                'description' => '',
                'type' => 'Points of Interest',
                'icon' => 'destroy-evidence',
                'group' => 'Destroy Evidence',
                'warning' => 'Suspicious in any disguise'
            ]
        ])->save();

        // Explosive
        $this->execute("UPDATE `items`
            SET  `information` = 'Can be used as non-lethal melee'
            WHERE `name` IN ('Propane Flask', 'Fire Extinguisher')");
    }

    public function down() {
    }
}

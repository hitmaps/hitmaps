<?php


use Phinx\Migration\AbstractMigration;

class MovePoisonWeaponToNewIcon extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'poison-weapon'
            WHERE `type` = 'Weapons and Tools'
              AND `icon` = 'poison'");
        $this->execute("UPDATE `nodes`
            SET `icon` = 'poison-weapon'
            WHERE `type` = 'Weapons and Tools'
              AND `icon` = 'poison'");
        $this->execute("UPDATE `items`
            SET `icon` = 'poison-weapon'
            WHERE `type` = 'Weapons and Tools'
              AND `icon` = 'poison'");
    }

    public function down() {
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'poison'
            WHERE `type` = 'Weapons and Tools'
              AND `icon` = 'poison-weapon'");
        $this->execute("UPDATE `nodes`
            SET `icon` = 'poison'
            WHERE `type` = 'Weapons and Tools'
              AND `icon` = 'poison-weapon'");
        $this->execute("UPDATE `items`
            SET `icon` = 'poison'
            WHERE `type` = 'Weapons and Tools'
              AND `icon` = 'poison-weapon'");
    }
}

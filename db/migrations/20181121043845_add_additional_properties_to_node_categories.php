<?php


use Phinx\Migration\AbstractMigration;

class AddAdditionalPropertiesToNodeCategories extends AbstractMigration {
    public function up() {
        $this->table('node_categories')
            ->addColumn('icon', 'string')
            ->addColumn('require_name', 'boolean')
            ->addColumn('require_action', 'boolean')
            ->addColumn('require_target', 'boolean')
            ->addColumn('note', 'string', ['null' => true])
            ->addColumn('require_pickup', 'boolean')
            ->addColumn('require_direction', 'boolean')
            ->update();
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'sabotage',
              `require_name` = 1,
              `require_action` = 1
            WHERE `group` = 'Sabotage'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'distraction',
              `require_name` = 1,
              `require_action` = 1
            WHERE `group` = 'Distraction'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'interaction',
              `require_name` = 1,
              `require_action` = 1
            WHERE `group` = 'Interaction'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'poison',
              `require_name` = 1,
              `require_target` = 1,
              `note` = 'This is for items you can poison, not for the weapon/tool itself!'
            WHERE `group` = 'Poison'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'misc-item',
              `require_name` = 1
            WHERE `group` = 'Misc Item'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'intel',
              `require_name` = 1,
              `note` = 'Please enter the intel description into the notes field (under the ''Description'' type)!'
            WHERE `group` = 'Intel'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'disguise',
              `require_name` = 1
            WHERE `group` = 'Disguise'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'blend-in',
              `require_name` = 1,
              `note` = 'Please enter the disguises this blend in spot applies to in the ''Name'' field. If it applies to all disguises, leave the ''Name'' field blank.'
            WHERE `group` = 'Blend In'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'conceal-item'
            WHERE `group` = 'Conceal Item'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'hiding-spot'
            WHERE `group` = 'Hiding Spot'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'weapon-crate'
            WHERE `group` = 'Weapon Crate'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'locked-door'
            WHERE `group` = 'Locked Door'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'destroy-evidence'
            WHERE `group` = 'Destroy Evidence'
              AND `type` = 'Points of Interest'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'lethal-melee',
              `require_name` = 1
            WHERE `group` = 'Lethal Melee'
              AND `type` = 'Weapons and Tools'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'non-lethal-melee',
              `require_name` = 1
            WHERE `group` = 'Non-Lethal Melee'
              AND `type` = 'Weapons and Tools'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'explosive',
              `require_name` = 1
            WHERE `group` = 'Explosive'
              AND `type` = 'Weapons and Tools'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'coin'
            WHERE `group` = 'Coin'
              AND `type` = 'Weapons and Tools'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'poison',
              `require_name` = 1,
              `note` = 'This is for the weapon/tool itself, not items you can poison!'
            WHERE `group` = 'Poison'
              AND `type` = 'Weapons and Tools'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'firearm',
              `require_name` = 1
            WHERE `group` = 'Firearm'
              AND `type` = 'Weapons and Tools'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'ammo',
              `require_name` = 1
            WHERE `group` = 'Ammo'
              AND `type` = 'Weapons and Tools'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'starting-location',
              `require_name` = 1
            WHERE `group` = 'Starting Location'
              AND `type` = 'Navigation'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'exit-location',
              `require_name` = 1
            WHERE `group` = 'Exit Location'
              AND `type` = 'Navigation'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'agency-pickup',
              `require_name` = 1,
              `require_pickup` = 1
            WHERE `group` = 'Agency Pickup'
              AND `type` = 'Navigation'");
        $this->execute("UPDATE `node_categories`
            SET `icon` = 'up-stair',
              `require_direction` = 1
            WHERE `group` = 'Stairwell'
              AND `type` = 'Navigation'");
    }

    public function down() {
        $this->table('node_categories')
            ->removeColumn('icon')
            ->removeColumn('require_name')
            ->removeColumn('require_action')
            ->removeColumn('require_target')
            ->removeColumn('require_note')
            ->removeColumn('require_pickup')
            ->removeColumn('require_direction')
            ->update();
    }
}

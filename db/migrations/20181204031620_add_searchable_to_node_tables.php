<?php


use Phinx\Migration\AbstractMigration;

class AddSearchableToNodeTables extends AbstractMigration {
    public function up() {
        $this->table('nodes')
            ->addColumn('searchable', 'boolean')
            ->update();
        $this->table('node_categories')
            ->addColumn('searchable', 'boolean')
            ->update();
        $this->table('items')
            ->addColumn('searchable', 'boolean')
            ->update();

        $this->execute("UPDATE `nodes`
            SET `searchable` = 1
            WHERE `group` IN ('Distraction', 'Non-Lethal Melee', 'Sabotage', 'Misc Item', 'Disguise', 'Interaction', 'Intel', 'Lethal Melee', 'Explosive', 'Agency Pickup', 'Poison', 'Starting Location', 'Firearm', 'Exit Location', 'Location', 'Ammo')");
        $this->execute("UPDATE `node_categories`
            SET `searchable` = 1
            WHERE `group` IN ('Distraction', 'Non-Lethal Melee', 'Sabotage', 'Misc Item', 'Disguise', 'Interaction', 'Intel', 'Lethal Melee', 'Explosive', 'Agency Pickup', 'Poison', 'Starting Location', 'Firearm', 'Exit Location', 'Location', 'Ammo')");
        $this->execute("UPDATE `items`
            SET `searchable` = 1
            WHERE `group` IN ('Distraction', 'Non-Lethal Melee', 'Sabotage', 'Misc Item', 'Disguise', 'Interaction', 'Intel', 'Lethal Melee', 'Explosive', 'Agency Pickup', 'Poison', 'Starting Location', 'Firearm', 'Exit Location', 'Location', 'Ammo')");
    }

    public function down() {
        $this->table('nodes')
            ->removeColumn('searchable')
            ->update();
        $this->table('node_categories')
            ->removeColumn('searchable')
            ->update();
        $this->table('items')
            ->removeColumn('searchable')
            ->update();
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class TweakNodeCategories extends AbstractMigration {
    public function up() {
        $this->execute("INSERT INTO `node_categories` (type, `group`, subgroup, require_name, require_action, require_target, note, require_pickup, require_direction, `order`, icon)
          VALUES ('Weapons and Tools', 'Distraction', 'distraction', 1, 0, 0, 'These are for items that can be thrown to cause a distraction, such as Apricots and Coins.', 0, 0, 2, 'distraction')");
        $this->execute("DELETE FROM `node_categories`
          WHERE `subgroup` = 'coin'");
        $this->execute("UPDATE `items`
            SET `group` = 'Distraction'
            WHERE `name` = 'Coin'");
        $this->execute("INSERT INTO `items` (`name`, `target`, `description`, `image`, `type`, `subgroup`, `group`, `requirement`, `warning`, `information`, `icon`)
          VALUES ('Apricot', '', 'A simple apricot. Big enough to cause an audible distraction when thrown.', NULL, 'Weapons and Tools', 'distraction', 'Distraction', '', '', '', 'apricot')");
        $this->execute("UPDATE `nodes`
            SET `subgroup` = 'distraction',
                `group` = 'Distraction',
                `name` = 'Coin'
            WHERE `icon` = 'coin'");
    }

    public function down() {
        $this->execute("DELETE FROM `node_categories` 
          WHERE `type` = 'Weapons and Tools' 
            AND `subgroup` = 'distraction'");
        $this->execute("INSERT INTO `node_categories` (type, `group`, subgroup, require_name, require_action, require_target, note, require_pickup, require_direction, `order`, icon)
          VALUES ('Weapons and Tools', 'Coin', 'coin', 0, 0, 0, null, 0, 0, 2, 'coin')");
        $this->execute("DELETE FROM `items` WHERE `name` = 'Apricot'");
        $this->execute("UPDATE `items`
            SET `group` = 'Coin',
            WHERE `name` = 'Coin'");
        $this->execute("UPDATE `nodes`
            SET `subgroup` = 'coin',
                `group` = 'Coin',
                `name` = ''
            WHERE `icon` = 'coin'");
    }
}

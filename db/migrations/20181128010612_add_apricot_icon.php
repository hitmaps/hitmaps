<?php


use Phinx\Migration\AbstractMigration;

class AddApricotIcon extends AbstractMigration {
    public function up() {
        $this->execute("INSERT INTO `icons` (icon, alt_text, `group`, `order`) VALUES ('apricot', 'Apricot', 'Weapons and Tools', 2)");
    }

    public function down() {
        $this->execute("DELETE FROM `icons` WHERE icon = 'apricot'");
    }
}

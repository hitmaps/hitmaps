<?php


use Phinx\Migration\AbstractMigration;

class AddAnyDisguiseToBlankBlendIns extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `nodes` SET `name` = 'Any Disguise' WHERE `group` = 'Blend In' AND `name` = ''");
    }

    public function down() {
        $this->execute("UPDATE `nodes` SET `name` = '' WHERE `group` = 'Blend In' AND `name` = 'Any Disguise'");
    }
}

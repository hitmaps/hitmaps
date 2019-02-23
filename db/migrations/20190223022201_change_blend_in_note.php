<?php


use Phinx\Migration\AbstractMigration;

class ChangeBlendInNote extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `node_categories` SET `note` = 'Please enter the disguises this blend in spot applies to in the ''Name'' field. If it applies to all disguises, set the ''Name'' field to ''Any Disguise''.' WHERE `group` = 'Blend In'");
    }

    public function down() {
        $this->execute("UPDATE `node_categories` SET `note` = 'Please enter the disguises this blend in spot applies to in the ''Name'' field. If it applies to all disguises, leave the ''Name'' field blank.' WHERE `group` = 'Blend In'");
    }
}

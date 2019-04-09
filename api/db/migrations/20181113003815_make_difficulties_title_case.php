<?php


use Phinx\Migration\AbstractMigration;

class MakeDifficultiesTitleCase extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `mission_to_difficulties` SET `difficulty` = 'Casual' WHERE `difficulty` = 'casual'");
        $this->execute("UPDATE `mission_to_difficulties` SET `difficulty` = 'Professional' WHERE `difficulty` = 'professional'");
        $this->execute("UPDATE `mission_to_difficulties` SET `difficulty` = 'Master' WHERE `difficulty` = 'master'");
    }

    public function down() {
        $this->execute("UPDATE `mission_to_difficulties` SET `difficulty` = 'casual' WHERE `difficulty` = 'Casual'");
        $this->execute("UPDATE `mission_to_difficulties` SET `difficulty` = 'professional' WHERE `difficulty` = 'Professional'");
        $this->execute("UPDATE `mission_to_difficulties` SET `difficulty` = 'master' WHERE `difficulty` = 'Master'");
    }
}

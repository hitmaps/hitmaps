<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class MigrateProfessionalAndStandardNodesToNewTable extends AbstractMigration {
    public function up() {
        $this->query("INSERT INTO `node_to_difficulties` (`node_id`, `difficulty`) SELECT id, difficulty FROM `nodes` WHERE `difficulty` IN ('professional', 'standard')");
    }

    public function down() {
        $this->query("DELETE FROM `node_to_difficulties` WHERE `difficulty` IN ('professional','standard')");
    }
}

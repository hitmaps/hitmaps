<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class MigrateProfessionalAndStandardNodesToNewTable extends AbstractMigration {
    public function up() {
        $this->query("INSERT INTO `node_to_mission_variants` (`node_id`, `variant_id`) 
            SELECT `nodes`.`id`, `mission_to_difficulties`.`id`
            FROM `nodes` 
            INNER JOIN `mission_to_difficulties`
                ON `nodes`.`mission_id` = `mission_to_difficulties`.`mission_id`    
                AND `nodes`.`difficulty` = LOWER(`mission_to_difficulties`.`difficulty`)
            WHERE `nodes`.`difficulty` IN ('professional', 'standard')");
    }

    public function down() {
        $this->query("DELETE FROM `node_to_mission_variants`");
    }
}

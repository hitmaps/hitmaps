<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class MigrateAreasToDifficultyTable extends AbstractMigration {
    public function up(): void {
        $this->query("INSERT INTO `node_to_difficulties` (`node_id`, `difficulty_id`) 
            SELECT `nodes`.`id`, `mission_to_difficulties`.`id`
            FROM `nodes` 
            INNER JOIN `mission_to_difficulties`
                ON `nodes`.`mission_id` = `mission_to_difficulties`.`mission_id`    
                AND `mission_to_difficulties`.`difficulty` IN ('professional','standard')
            WHERE `nodes`.`difficulty` IN ('ALL')");
    }

    public function down(): void {
        //-- no-op
    }
}

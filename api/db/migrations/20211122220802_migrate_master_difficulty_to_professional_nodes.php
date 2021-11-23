<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class MigrateMasterDifficultyToProfessionalNodes extends AbstractMigration {
    public function up(): void {
        $this->execute("
        INSERT INTO `node_to_difficulties` (`node_id`, `difficulty`)
        SELECT `prof`.`id`, 'master'
        FROM `nodes` `prof`
        INNER JOIN nodes master
            ON prof.mission_id = master.mission_id
            AND prof.difficulty = 'professional'
            AND master.difficulty = 'master'
            AND prof.latitude = master.latitude
            AND prof.longitude = master.longitude
            AND prof.level = master.level
            AND prof.name = master.name
        ");

        $this->execute("
        DELETE FROM `node_notes`
        WHERE `node_id` IN (SELECT `id` FROM `nodes` WHERE `difficulty` = 'master')
        ");

        $this->execute("
        DELETE FROM `nodes`
        WHERE `difficulty` = 'master'
        ");
    }

    public function down(): void {
        //-- no-op
    }
}

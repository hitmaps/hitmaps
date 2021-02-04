<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddGameToElusiveTargets extends AbstractMigration {
    public function up(): void {
        $this->table('elusive_targets')
            ->addColumn('game_id', 'integer')
            ->update();

        $this->execute("UPDATE `elusive_targets` SET `game_id` = (SELECT `id` FROM `games` WHERE `slug` = 'hitman2')");
    }

    public function down(): void {
        $this->table('elusive_targets')
            ->removeColumn('game_id')
            ->update();
    }
}

<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class RemoveDifficultyFromNodes extends AbstractMigration {
    public function change(): void {
        $this->table('nodes')
            ->removeColumn('difficulty')
            ->update();
    }
}

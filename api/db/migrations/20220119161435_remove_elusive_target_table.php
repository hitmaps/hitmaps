<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class RemoveElusiveTargetTable extends AbstractMigration {
    public function change(): void {
        $this->table('elusive_targets')->drop()->update();
    }
}

<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class RemoveTooltipsFromDatabase extends AbstractMigration {
    public function change(): void {
        $this->table('nodes')
            ->removeColumn('tooltip')
            ->update();
    }
}

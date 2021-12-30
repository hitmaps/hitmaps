<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class RemoveTooltipsFromItemTemplates extends AbstractMigration {
    public function change(): void {
        $this->table('items')
            ->removeColumn('tooltip')
            ->update();
    }
}

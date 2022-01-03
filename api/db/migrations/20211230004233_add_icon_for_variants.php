<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddIconForVariants extends AbstractMigration {
    public function change(): void {
        $this->table('mission_to_difficulties')
            ->addColumn('icon', 'string')
            ->update();
    }
}

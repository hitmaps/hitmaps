<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddDefaultColumnToVariants extends AbstractMigration {
    public function change(): void {
        $this->table('mission_to_difficulties')
            ->addColumn('default', 'boolean')
            ->update();

        $this->execute("UPDATE `mission_to_difficulties` SET `default` = 1 WHERE `slug` IN ('professional', 'standard')");
    }
}

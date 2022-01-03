<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddSlugForVariants extends AbstractMigration {
    public function change(): void {
        $this->table('mission_to_difficulties')
            ->addColumn('slug', 'string')
            ->update();

        $this->execute("UPDATE `mission_to_difficulties` SET `slug` = LOWER(difficulty)");
    }
}

<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddTargetToRouletteObjectives extends AbstractMigration {
    public function change(): void {
        $this->table('roulette_objectives')
            ->addColumn('target', 'integer')
            ->update();
    }
}

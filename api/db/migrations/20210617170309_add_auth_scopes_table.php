<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddAuthScopesTable extends AbstractMigration {
    public function change(): void {
        $this->table('auth_scopes')
            ->addColumn('name', 'string')
            ->addColumn('description', 'string')
            ->create();
    }
}

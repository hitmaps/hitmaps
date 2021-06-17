<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddAuthTokenToScopesTable extends AbstractMigration {
    public function change(): void {
        $this->table('auth_token_to_scopes')
            ->addColumn('token_id', 'integer')
            ->addColumn('scope_id', 'integer')
            ->create();
    }
}

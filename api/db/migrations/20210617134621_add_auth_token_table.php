<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddAuthTokenTable extends AbstractMigration {
    public function change(): void {
        $this->table('auth_tokens')
            ->addColumn('description', 'string')
            ->addColumn('token', 'string')
            ->addColumn('activated_at', 'timestamp')
            ->addColumn('deactivated_at', 'timestamp')
            ->create();
    }
}

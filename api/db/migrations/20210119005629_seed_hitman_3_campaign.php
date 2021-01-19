<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class SeedHitman3Campaign extends AbstractMigration {
    public function up(): void {
        $this->table('campaigns')
            ->insert([
                [
                    'name' => 'HITMAN 3'
                ]
            ])->save();
    }

    public function down() {
        $this->execute("DELETE FROM `campaigns` WHERE `name` = 'HITMAN 3'");
    }
}

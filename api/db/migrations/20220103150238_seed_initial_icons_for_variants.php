<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class SeedInitialIconsForVariants extends AbstractMigration {
    public function up(): void {
        $this->execute("UPDATE `mission_to_difficulties` SET `icon` = 'mission'");
    }

    public function down(): void {
        $this->execute("UPDATE `mission_to_difficulties` SET `icon` = ''");
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class AddSuitDesignationToDisguises extends AbstractMigration {
    public function up() {
        $this->table('disguises')
            ->addColumn('suit', 'boolean')
            ->update();

        $suitDisguises = implode(', ', []);

        $this->execute("UPDATE `disguises`
            SET `suit` = 1
            WHERE `name` IN (${suitDisguises})");
    }

    public function down() {
        $this->table('disguises')
            ->removeColumn('suit')
            ->update();
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class AddSlugToLocations extends AbstractMigration {
    public function up() {
        $this->table('locations')
            ->addColumn('slug', 'string')
            ->update();

        $this->execute("UPDATE `locations` SET `slug` = REPLACE(LOWER(destination), ' ', '-')");
        $this->execute("UPDATE `locations` SET `slug` = 'isle-of-sgail' WHERE `slug` = 'isle-of-sgàil'");
    }

    public function down() {
        $this->table('locations')
            ->removeColumn('slug')
            ->update();
    }
}

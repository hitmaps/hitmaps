<?php


use Phinx\Migration\AbstractMigration;

class InsertDifficultiesIntoDifficultiesTable extends AbstractMigration {
    public function up() {
        /*
         * 2 = Showstopper
         * 5 = World of Tomorrow
         * 10 = A Gilded Cage
         * 13 = Club 27
         * 16 = Freedom Fighters
         * 18 = Situs Inversus
         */
        $this->execute("INSERT INTO `mission_to_difficulties` (`mission_id`, `difficulty`) SELECT `id`, 'casual' FROM `missions`");
        $this->execute("INSERT INTO `mission_to_difficulties` (`mission_id`, `difficulty`) SELECT `id`, 'professional' FROM `missions`");
        $this->execute("INSERT INTO `mission_to_difficulties` (`mission_id`, `difficulty`) SELECT `id`, 'master' FROM `missions`");
    }

    public function down() {
        $this->execute("DELETE FROM `mission_to_difficulties`");
    }
}

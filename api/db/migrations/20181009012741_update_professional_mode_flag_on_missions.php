<?php


use Phinx\Migration\AbstractMigration;

class UpdateProfessionalModeFlagOnMissions extends AbstractMigration {
    public function up() {
        /*
         * 2 = Showstopper
         * 5 = World of Tomorrow
         * 10 = A Gilded Cage
         * 13 = Club 27
         * 16 = Freedom Fighters
         * 18 = Situs Inversus
         */
        $this->execute("UPDATE `missions` 
          SET `professional_mode` = 1
          WHERE `id` IN (2, 5, 10, 13, 16, 18)");
    }

    public function down() {
        $this->execute("UPDATE `missions` 
          SET `professional_mode` = 0
          WHERE `id` IN (2, 5, 10, 13, 16, 18)");
    }
}

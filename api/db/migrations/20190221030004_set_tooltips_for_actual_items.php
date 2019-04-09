<?php


use Phinx\Migration\AbstractMigration;

class SetTooltipsForActualItems extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `items` SET `tooltip` = 'Locked Door' WHERE `subgroup` = 'locked-door'");
        $this->execute("UPDATE `items` SET `tooltip` = 'Conceal Item' WHERE `subgroup` = 'conceal-item'");

        $this->execute("UPDATE `items` SET `tooltip` = CONCAT(REPLACE(REPLACE(`target`, 'Large', 'Agency Pickup'), 'Small', 'Hidden Stash'), ': ' , `name`) WHERE `subgroup` = 'agency-pickup'");
        $this->execute("UPDATE `items` SET `tooltip` = REPLACE(`tooltip`, ': ', '') WHERE `subgroup` = 'agency-pickup' AND `tooltip` IN ('Hidden Stash: ', 'Agency Pickup: ')");

        $this->execute("UPDATE `items` SET `tooltip` = 'Hiding Spot' WHERE `subgroup` = 'hiding-spot'");
        $this->execute("UPDATE `items` SET `tooltip` = 'Destroy Evidence' WHERE `subgroup` = 'destroy-evidence'");
        $this->execute("UPDATE `items` SET `tooltip` = 'Weapon Crate' WHERE `subgroup` = 'weapon-crate'");
        $this->execute("UPDATE `items` SET `tooltip` = 'Security Camera' WHERE `subgroup` = 'camera'");
        $this->execute("UPDATE `items` SET `tooltip` = 'Security Check' WHERE `subgroup` = 'frisk'");
    }

    public function down() {
        $this->execute("UPDATE `items` SET `tooltip` = `name` WHERE `group` IN ('Stairwell', 'Blend In', 
          'Locked Door', 'Conceal Item', 'Agency Pickup', 'Hiding Spot', 'Destroy Evidence', 'Weapon Crate', 'Camera',
          'Security Check')");
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class SetTooltipsForNontraditionalItems extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `nodes` SET `tooltip` = 'Stairwell' WHERE `group` = 'Stairwell'");

        // Blend In: Palace / Auction Staff
        $this->execute("UPDATE `nodes` SET `tooltip` = CONCAT(`group`, ' as ', `name`) WHERE `subgroup` = 'blend-in'");
        $this->execute("UPDATE `nodes` SET `tooltip` = 'Blend In' WHERE `subgroup` = 'blend-in' AND `tooltip` = 'Blend In as '");

        $this->execute("UPDATE `nodes` SET `tooltip` = 'Locked Door' WHERE `subgroup` = 'locked-door'");
        $this->execute("UPDATE `nodes` SET `tooltip` = 'Conceal Item' WHERE `subgroup` = 'conceal-item'");

        $this->execute("UPDATE `nodes` SET `tooltip` = CONCAT(REPLACE(REPLACE(`target`, 'Large', 'Agency Pickup'), 'Small', 'Hidden Stash'), ': ' , `name`) WHERE `subgroup` = 'agency-pickup'");
        $this->execute("UPDATE `nodes` SET `tooltip` = REPLACE(`tooltip`, ': ', '') WHERE `subgroup` = 'agency-pickup' AND `tooltip` IN ('Hidden Stash: ', 'Agency Pickup: ')");

        $this->execute("UPDATE `nodes` SET `tooltip` = 'Hiding Spot' WHERE `subgroup` = 'hiding-spot'");
        $this->execute("UPDATE `nodes` SET `tooltip` = 'Destroy Evidence' WHERE `subgroup` = 'destroy-evidence'");
        $this->execute("UPDATE `nodes` SET `tooltip` = 'Weapon Crate' WHERE `subgroup` = 'weapon-crate'");
        $this->execute("UPDATE `nodes` SET `tooltip` = 'Security Camera' WHERE `subgroup` = 'camera'");
        $this->execute("UPDATE `nodes` SET `tooltip` = 'Security Check' WHERE `subgroup` = 'frisk'");
    }

    public function down() {
        $this->execute("UPDATE `nodes` SET `tooltip` = `name` WHERE `group` IN ('Stairwell', 'Blend In',
          'Locked Door', 'Conceal Item', 'Agency Pickup', 'Hiding Spot', 'Destroy Evidence', 'Weapon Crate', 'Camera',
          'Security Check')");
    }
}

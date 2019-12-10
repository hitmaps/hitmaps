<?php


use Phinx\Migration\AbstractMigration;

class MigrateNodeImagesToMedia extends AbstractMigration {
    public function up() {
        foreach ($this->getReplacementMap() as $old => $new) {
            $this->execute("UPDATE `nodes` SET `image` = '{$new}' WHERE `image` = '{$old}'");
        }
    }

    private function getReplacementMap() {
        return [
            '/weapons/non-lethal-melee/shovel' => 'https://media.hitmaps.com/img/unlockables/item_perspective_1066917f-2e04-4c54-b8cb-55cb1dcc2f26_0.jpg',
            '/weapons/non-lethal-melee/crowbar' => 'https://media.hitmaps.com/img/unlockables/item_perspective_b48bc55e-aaf7-4c62-9fbd-07bae9b8e22b_0.jpg',
            '/weapons/non-lethal-melee/hammer' => 'https://media.hitmaps.com/img/unlockables/item_perspective_a5a561be-e832-4ac0-98c9-741f66bdeabd_0.jpg',
            '/weapons/lethal-melee/screwdriver' => 'https://media.hitmaps.com/img/unlockables/item_perspective_12cb6b51-a6dd-4bf5-9653-0ab727820cac_0.jpg',
            '/weapons/lethal-melee/fire-axe' => 'https://media.hitmaps.com/img/unlockables/item_perspective_a8bc4325-718e-45ba-b0e4-000729c70ce4_0.jpg',
            '/weapons/distractions/radio' => '',
            '/weapons/explosives/octane-booster' => '',
            '/weapons/non-lethal-melee/soda-can' => 'https://media.hitmaps.com/img/unlockables/item_perspective_004ecac9-6aee-4b30-a073-4399a94535d8_0.jpg',
            '/weapons/distractions/coin' => 'https://media.hitmaps.com/img/unlockables/item_perspective_dda002e9-02b1-4208-82a5-cf059f3c79cf_0.jpg',
            '/weapons/non-lethal-melee/lead-pipe' => 'https://media.hitmaps.com/img/unlockables/item_perspective_7aeb740f-3d60-4e49-8d27-15a98067ce9f_0.jpg',
            '/weapons/explosives/fire-extinguisher' => '',
            '/weapons/non-lethal-melee/android-arm' => 'https://media.hitmaps.com/img/unlockables/item_perspective_d1f29c76-5751-4e06-b534-e6eb7522b128_0.jpg',
            '/weapons/non-lethal-melee/wrench' => 'https://media.hitmaps.com/img/unlockables/item_perspective_6adddf7e-6879-4d51-a7e2-6a25ffdca6ae_0.jpg',
            '/weapons/poisons/rat-poison' => '',
            '/weapons/lethal-melee/scissors' => '',
            '/weapons/explosives/propane-flask' => '',
            '/weapons/distractions/apricot' => 'https://media.hitmaps.com/img/unlockables/item_perspective_e755471f-e6fd-438f-b343-7c98fbb50107_0.jpg',
            '/weapons/smgs/dak-x2-covert' => '',
            '/weapons/pistols/bartoli-75r' => '',
            '/weapons/lethal-melee/kitchen-knife' => 'https://media.hitmaps.com/img/unlockables/item_perspective_e17172cc-bf70-4df6-9828-d9856b1a24fd_0.jpg',
            '/weapons/non-lethal-melee/baseball' => '',
            '/weapons/non-lethal-melee/police-baton' => '',
            '/weapons/non-lethal-melee/golf-club' => 'https://media.hitmaps.com/img/unlockables/item_perspective_17615866-32e7-4e1e-951d-7ef2ada796e9_0.jpg',
            '/weapons/poisons/lethal-poisonous-frog' => '',
            '/weapons/shotguns/tactical-bartoli-12g' => '',
            '/weapons/lethal-melee/battle-axe' => 'https://media.hitmaps.com/img/unlockables/item_perspective_58dceb1c-d7db-41dc-9750-55e3ab87fdf0_0.jpg',
            '/weapons/lethal-melee/old-axe' => '',
            '/weapons/non-lethal-melee/bust' => '',
            '/weapons/lethal-melee/saber' => '',
            '/weapons/lethal-melee/cleaver' => '',
            '/weapons/non-lethal-melee/fire-poker' => '',
            '/weapons/non-lethal-melee/baseball-bat' => 'https://media.hitmaps.com/img/unlockables/item_perspective_248cbd89-9923-452a-8cda-a5f76d8930dc_0.jpg',
            '/weapons/lethal-melee/hatchet' => 'https://media.hitmaps.com/img/unlockables/item_perspective_3a8207bb-84f5-438f-8f30-5c83aef2af80_0.jpg',
            '/weapons/non-lethal-melee/car-battery' => '',
            '/weapons/lethal-melee/scalpel' => 'https://media.hitmaps.com/img/unlockables/item_perspective_5d8ca32a-fe4c-4597-b074-51e36c3de898_0.jpg',
            '/weapons/poisons/lethal-poison-pill-jar' => 'https://media.hitmaps.com/img/unlockables/item_perspective_ecf7f361-c2aa-4d96-b66d-e973c3e87154_0.jpg',
            '/weapons/lethal-melee/letter-opener' => 'https://media.hitmaps.com/img/unlockables/item_perspective_f1f89faf-a441-4492-b442-9a923b5ecfd1_0.jpg',
            '/weapons/pistols/rude-ruby' => 'https://media.hitmaps.com/img/unlockables/item_perspective_092f6514-c34e-4d04-8d28-7ebbe14230d1_0.jpg',
            '/weapons/rifles/fusil-g2' => '',
            '/weapons/explosives/remote-explosive' => '',
            '/weapons/non-lethal-melee/coconut' => 'https://media.hitmaps.com/img/unlockables/item_perspective_22183fd3-d837-47c6-9c44-05637300af93_0.jpg',
            '/weapons/lethal-melee/amputation-knife' => '',
            '/weapons/non-lethal-melee/brick' => '',
            '/weapons/smgs/dak-x2' => '',
            '/weapons/pistols/hackl-9s-covert' => '',
            '/weapons/rifles/rs-15' => '',
            '/weapons/rifles/tac-4-ar-auto' => '',
            '/weapons/rifles/fusil-g1-4c' => '',
            '/weapons/shotguns/bartoli-12g' => '',
            '/weapons/rifles/shashka-a33' => '',
            '/weapons/non-lethal-melee/pool-ball' => '',
            '/weapons/lethal-melee/folding-knife' => '',
            '/weapons/lethal-melee/circumcision-knife' => '',
            '/weapons/non-lethal-melee/toy-tank' => '',
            '/weapons/lethal-melee/combat-knife' => 'https://media.hitmaps.com/img/unlockables/item_perspective_2c037ef5-a01b-4532-8216-1d535193a837_0.jpg',
            '/weapons/non-lethal-melee/cowboy-bust' => '',
            '/weapons/lethal-melee/katana' => '',
            '/weapons/rifles/hx-7' => '',
            '/weapons/rifles/shashka-a33-gold' => '',
            '/weapons/rifles/fusil-g1-4' => '',
            '/weapons/rifles/hx-10' => '',
            '/weapons/non-lethal-melee/branding-iron' => 'https://media.hitmaps.com/img/unlockables/item_perspective_51f6ed96-4985-4d09-8218-e3b912d025b9_0.jpg',
            '/weapons/non-lethal-melee/mannequin-arm' => 'https://media.hitmaps.com/img/unlockables/item_perspective_8d937ed4-dc85-476b-8048-e96a8900e7bf_0.jpg',
            '/weapons/rifles/hx-7-covert' => '',
            '/weapons/poisons/lethal-poison' => 'https://media.hitmaps.com/img/unlockables/item_perspective_cbf40151-cb96-435a-b683-6430370a07f2_0.jpg',
            '/weapons/pistols/striker' => '',
            '/weapons/shotguns/bartoli-12g-short-h' => '',
            '/weapons/shotguns/enram-hv-covert' => '',
            '/weapons/pistols/concept-5' => '',
            '/weapons/pistols/hwk-21-covert' => '',
            '/weapons/pistols/hackl-9s' => '',
            '/weapons/pistols/el-matador' => 'https://media.hitmaps.com/img/unlockables/item_perspective_c44d3dc4-5e2f-403d-9f69-40111f3643db_0.jpg',
            '/weapons/pistols/kalmer-1' => 'https://media.hitmaps.com/img/unlockables/item_perspective_d0438077-24eb-4c1d-a0f3-abd53d18fc27_0.jpg',
        ];
    }

    public function down() {
        foreach ($this->getReplacementMap() as $old => $new) {
            $this->execute("UPDATE `nodes` SET `image` = '{$old}' WHERE `image` = '{$new}'");
        }
    }
}

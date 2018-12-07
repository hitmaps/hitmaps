<?php


use Phinx\Migration\AbstractMigration;

class UpdateImagesInItems extends AbstractMigration {
    public function up() {
        foreach ($this->getRows() as $row) {
            $this->execute("UPDATE `items` 
              SET `image` = '{$row['image']}'
              WHERE `name` = '{$row['name']}'");
        }
    }

    private function getRows() {
        return [
            [
                'name' => 'Apricot',
                'image' => '/weapons/distractions/apricot',
            ],
            [
                'name' => 'Coin',
                'image' => '/weapons/distractions/coin',
            ],
            [
                'name' => 'Radio',
                'image' => '/weapons/distractions/radio',
            ],
            [
                'name' => 'Fire Extinguisher',
                'image' => '/weapons/explosives/fire-extinguisher',
            ],
            [
                'name' => 'Kronstadt Octane Booster',
                'image' => '/weapons/explosives/octane-booster',
            ],
            [
                'name' => 'Propane Flask',
                'image' => '/weapons/explosives/propane-flask',
            ],
            [
                'name' => 'Remote Explosive',
                'image' => '/weapons/explosives/remote-explosive',
            ],
            [
                'name' => '"El Matador"',
                'image' => '/weapons/pistols/el-matador',
            ],
            [
                'name' => '"Rude Ruby"',
                'image' => '/weapons/pistols/rude-ruby',
            ],
            [
                'name' => 'Bartoli 12G',
                'image' => '/weapons/shotguns/bartoli-12g',
            ],
            [
                'name' => 'Bartoli 12G Short H',
                'image' => '/weapons/shotguns/bartoli-12g-short-h',
            ],
            [
                'name' => 'Bartoli 75R',
                'image' => '/weapons/pistols/bartoli-75r',
            ],
            [
                'name' => 'Concept 5',
                'image' => '/weapons/pistols/concept-5',
            ],
            [
                'name' => 'Custom 5mm',
                'image' => '/weapons/pistols/custom-5mm',
            ],
            [
                'name' => 'DAK X2',
                'image' => '/weapons/smgs/dak-x2',
            ],
            [
                'name' => 'DAK X2 Covert',
                'image' => '/weapons/smgs/dak-x2-covert',
            ],
            [
                'name' => 'Enram HV',
                'image' => '/weapons/shotguns/enram-hv',
            ],
            [
                'name' => 'Enram HV CM',
                'image' => '/weapons/shotguns/enram-hv-cm',
            ],
            [
                'name' => 'Enram HV Covert',
                'image' => '/weapons/shotguns/enram-hv-covert',
            ],
            [
                'name' => 'Enram HV Covert Mk II',
                'image' => '/weapons/shotguns/enram-hv-covert-2',
            ],
            [
                'name' => 'Fusil G1-4',
                'image' => '/weapons/rifles/fusil-g1-4',
            ],
            [
                'name' => 'Fusil G1-4/C',
                'image' => '/weapons/rifles/fusil-g1-4c',
            ],
            [
                'name' => 'Fusil G2',
                'image' => '/weapons/rifles/fusil-g2',
            ],
            [
                'name' => 'Hackl 9R',
                'image' => '/weapons/pistols/hackl-9r',
            ],
            [
                'name' => 'Hackl 9S',
                'image' => '/weapons/pistols/hackl-9s',
            ],
            [
                'name' => 'Hackl 9S Covert',
                'image' => '/weapons/pistols/hackl-9s-covert',
            ],
            [
                'name' => 'HWK 21',
                'image' => '/weapons/pistols/hwk-21',
            ],
            [
                'name' => 'HWK 21 Covert',
                'image' => '/weapons/pistols/hwk-21-covert',
            ],
            [
                'name' => 'HWK 21 Mk II',
                'image' => '/weapons/pistols/hwk-21-2',
            ],
            [
                'name' => 'HX-10',
                'image' => '/weapons/smgs/hx-10',
            ],
            [
                'name' => 'HX-7',
                'image' => '/weapons/smgs/hx-7',
            ],
            [
                'name' => 'HX-7 Covert',
                'image' => '/weapons/smgs/hx-7-covert',
            ],
            [
                'name' => 'ICA19',
                'image' => '/weapons/pistols/ica-19',
            ],
            [
                'name' => 'ICA19 Black Lilly',
                'image' => '/weapons/pistols/ica-19-black-lilly',
            ],
            [
                'name' => 'ICA19 Chrome',
                'image' => '/weapons/pistols/ica-19-chrome',
            ],
            [
                'name' => 'ICA19 F/A',
                'image' => '/weapons/pistols/ica-19-fa',
            ],
            [
                'name' => 'ICA19 F/A Stealth',
                'image' => '/weapons/pistols/ica-19-fa-stealth',
            ],
            [
                'name' => 'ICA19 Silverballer',
                'image' => '/weapons/pistols/ica-19-silverballer',
            ],
            [
                'name' => 'ICA19 Silverballer Mk II',
                'image' => '/weapons/pistols/ica-19-silverballer-2',
            ],
            [
                'name' => 'Kalmer 1 - Tranquilizer',
                'image' => '/weapons/pistols/kalmer-1',
            ],
            [
                'name' => 'Krugermeier 2-2',
                'image' => '/weapons/pistols/krugermeier-2-2',
            ],
            [
                'name' => 'RS-15',
                'image' => '/weapons/rifles/rs-15',
            ],
            [
                'name' => 'Shashka A33',
                'image' => '/weapons/rifles/shashka-a33',
            ],
            [
                'name' => 'Shashka A33 Gold',
                'image' => '/weapons/rifles/shashka-a33-gold',
            ],
            [
                'name' => 'Shashka A33 H',
                'image' => '/weapons/rifles/shashka-a33-h',
            ],
            [
                'name' => 'Striker',
                'image' => '/weapons/pistols/striker',
            ],
            [
                'name' => 'TAC-4 AR Auto',
                'image' => '/weapons/rifles/tac-4-ar-auto',
            ],
            [
                'name' => 'TAC-4 AR Auto Mk II',
                'image' => '/weapons/rifles/tac-4-ar-auto-2',
            ],
            [
                'name' => 'TAC-4 AR Stealth',
                'image' => '/weapons/rifles/tac-4-ar-stealth',
            ],
            [
                'name' => 'TAC-4 S/A',
                'image' => '/weapons/rifles/tac-4-sa',
            ],
            [
                'name' => 'TAC-SMG',
                'image' => '/weapons/smgs/tac-smg',
            ],
            [
                'name' => 'TAC-SMG S',
                'image' => '/weapons/smgs/tac-smg-s',
            ],
            [
                'name' => 'TAC-SMG Mk II',
                'image' => '/weapons/smgs/tac-smg-2',
            ],
            [
                'name' => 'TAC-SMG Covert',
                'image' => '/weapons/smgs/tac-smg-covert',
            ],
            [
                'name' => 'Tactical Bartoli 12G',
                'image' => '/weapons/shotguns/tactical-bartoli-12g',
            ],
            [
                'name' => 'Amputation Knife',
                'image' => '/weapons/melee/amputation-knife',
            ],
            [
                'name' => 'Battle Axe',
                'image' => '/weapons/melee/battle-axe',
            ],
            [
                'name' => 'Circumcision Knife',
                'image' => '/weapons/melee/circumcision-knife',
            ],
            [
                'name' => 'Cleaver',
                'image' => '/weapons/melee/cleaver',
            ],
            [
                'name' => 'Combat Knife',
                'image' => '/weapons/melee/combat-knife',
            ],
            [
                'name' => 'Fire Axe',
                'image' => '/weapons/melee/fire-axe',
            ],
            [
                'name' => 'Folding Knife',
                'image' => '/weapons/melee/folding-knife',
            ],
            [
                'name' => 'Hatchet',
                'image' => '/weapons/melee/hatchet',
            ],
            [
                'name' => 'Katana',
                'image' => '/weapons/melee/katana',
            ],
            [
                'name' => 'Kitchen Knife',
                'image' => '/weapons/melee/kitchen-knife',
            ],
            [
                'name' => 'Letter Opener',
                'image' => '/weapons/melee/letter-opener',
            ],
            [
                'name' => 'Old Axe',
                'image' => '/weapons/melee/old-axe',
            ],
            [
                'name' => 'Saber',
                'image' => '/weapons/melee/saber',
            ],
            [
                'name' => 'Scalpel',
                'image' => '/weapons/melee/scalpel',
            ],
            [
                'name' => 'Scissors',
                'image' => '/weapons/melee/scissors',
            ],
            [
                'name' => 'Screwdriver',
                'image' => '/weapons/melee/screwdriver',
            ],
        ];
    }

    public function down() {
        foreach ($this->getRows() as $row) {
            $this->execute("UPDATE `items` 
              SET `image` = null
              WHERE `name` = '{$row['name']}'");
        }
    }
}

<?php


use Phinx\Migration\AbstractMigration;

class UpdateSomeMoreIcons extends AbstractMigration {
    public function up() {
        foreach ($this->getRows() as $row) {
            $this->execute("UPDATE `items` SET `icon` = '{$row['icon']}' WHERE `name` = '{$row['name']}'");
            $this->execute("UPDATE `nodes` SET `icon` = '{$row['icon']}' WHERE `name` = '{$row['name']}'");
        }
    }

    private function getRows() {
        return [
            [
                'name' => 'Car bomb',
                'icon' => 'explosive-remote',
            ],
            [
                'name' => 'Explosive Golf Ball',
                'icon' => 'explosive-golf-ball',
            ],
            [
                'name' => 'Flash Grenade',
                'icon' => 'explosive-weapon-illegal',
            ],
            [
                'name' => 'Flash grenade (x2)',
                'icon' => 'explosive-weapon-illegal',
            ],
            [
                'name' => 'ICA Remote Explosive',
                'icon' => 'explosive-remote',
            ],
            [
                'name' => 'Kronstadt Octane Booster',
                'icon' => 'kronstadt-octane-booster',
            ],
            [
                'name' => 'Letterbomb Parcel',
                'icon' => 'explosive-weapon-legal',
            ],
            [
                'name' => 'Propane Flask',
                'icon' => 'propane-flask',
            ],
            [
                'name' => 'Propane Flask (x2)',
                'icon' => 'propane-flask',
            ],
            [
                'name' => 'Propane tank',
                'icon' => 'propane-flask',
            ],
            [
                'name' => 'Remote CX demo block',
                'icon' => 'explosive-remote',
            ],
            [
                'name' => 'Remote Explosive',
                'icon' => 'explosive-remote',
            ],
            [
                'name' => 'Cannabis Joint',
                'icon' => 'cannabis-joint',
            ],
            [
                'name' => 'Chloroform Flask',
                'icon' => 'poison-sedative',
            ],
            [
                'name' => 'Emetic pills',
                'icon' => 'poison-emetic',
            ],
            [
                'name' => 'Emetic Rat Poison',
                'icon' => 'poison-emetic',
            ],
            [
                'name' => 'Lethal pills',
                'icon' => 'poison-lethal',
            ],
            [
                'name' => 'Lethal Poison Pill Jar',
                'icon' => 'poison-lethal',
            ],
            [
                'name' => 'Lethal Poison Syringe',
                'icon' => 'poison-lethal',
            ],
            [
                'name' => 'Lethal Poisonous Frog',
                'icon' => 'poison-lethal',
            ],
            [
                'name' => 'PICKEREL FROG',
                'icon' => 'poison-lethal',
            ],
            [
                'name' => 'Poisonous Flower (Emetic)',
                'icon' => 'poison-emetic',
            ],
            [
                'name' => 'Poisonous Flower (Lethal)',
                'icon' => 'poison-lethal',
            ],
            [
                'name' => 'Virus Prototype',
                'icon' => 'poison-lethal',
            ],
        ];
    }

    public function down() {
    }
}

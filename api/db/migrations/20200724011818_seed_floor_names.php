<?php


use Phinx\Migration\AbstractMigration;

class SeedFloorNames extends AbstractMigration {
    public function up() {
        /*
         * $this->table('map_floor_to_name')
            ->addColumn('mission_id', 'integer')
            ->addColumn('floor_number', 'integer')
            ->addColumn('name_key', 'string')
         */
        foreach ($this->getRows() as $row) {
            $firstFloor = true;
            $highestFloorNumber = 0;
            foreach ($row['floors'] as $number => $key) {
                if ($firstFloor) {
                    $this->execute("UPDATE `missions` SET `lowest_floor_number` = {$number} WHERE `slug` = '{$row['slug']}'");
                    $firstFloor = false;
                }

                $this->execute("INSERT INTO `map_floor_to_name` (`mission_id`, `floor_number`, `name_key`)
                    SELECT `id`, {$number}, '{$key}' FROM `missions` WHERE `slug` = '{$row['slug']}'");
                $highestFloorNumber = $number;
            }

            $this->execute("UPDATE `missions` SET `highest_floor_number` = {$highestFloorNumber} WHERE `slug` = '{$row['slug']}'");
        }
    }

    private function getRows() {
        return [
            [
                'slug' => 'a-personal-contract',
                'floors' => [
                    '0' => 'absolution.a-personal-contract.gardens',
                    '1' => 'absolution.a-personal-contract.greenhouse',
                    '2' => 'absolution.a-personal-contract.mansion-ground-floor',
                    '3' => 'absolution.a-personal-contract.mansion-second-floor',
                    '4' => 'absolution.a-personal-contract.diana'
                ]
            ],
            [
                'slug' => 'the-king-of-chinatown',
                'floors' => [
                    '0' => 'absolution.the-king-of-chinatown.ground',
                    '1' => 'absolution.the-king-of-chinatown.second-floor'
                ]
            ],
            [
                'slug' => 'terminus',
                'floors' => [
                    '0' => 'absolution.terminus.sewers',
                    '1' => 'absolution.terminus.basement',
                    '2' => 'absolution.terminus.ground',
                    '3' => 'absolution.terminus.7-floor',
                    '4' => 'absolution.terminus.8-floor',
                ]
            ],
            [
                'slug' => 'run-for-your-life',
                'floors' => [
                    '0' => 'absolution.run-for-your-life.hotel-room',
                    '1' => 'absolution.run-for-your-life.hotel-roof',
                    '2' => 'absolution.run-for-your-life.library-first-floor',
                    '3' => 'absolution.run-for-your-life.library-second-floor',
                    '4' => 'absolution.run-for-your-life.library-third-floor',
                    '5' => 'absolution.run-for-your-life.library-fourth-floor',
                    '6' => 'absolution.run-for-your-life.pigeon-coop',
                    '7' => 'absolution.run-for-your-life.shangri-la',
                    '8' => 'absolution.run-for-your-life.train-first-floor',
                    '9' => 'absolution.run-for-your-life.train-second-floor',
                ]
            ],
            [
                'slug' => 'hunter-and-hunted',
                'floors' => [
                    '0' => 'absolution.hunter-and-hunted.courtyard-tunnels',
                    '1' => 'absolution.hunter-and-hunted.courtyard-ground',
                    '2' => 'absolution.hunter-and-hunted.club-first-floor',
                    '3' => 'absolution.hunter-and-hunted.club-second-floor',
                    '4' => 'absolution.hunter-and-hunted.club-third-floor',
                    '5' => 'absolution.hunter-and-hunted.dressing-room-first-floor',
                    '6' => 'absolution.hunter-and-hunted.dressing-room-second-floor',
                    '7' => 'absolution.hunter-and-hunted.derelict-first-floor',
                    '8' => 'absolution.hunter-and-hunted.derelict-second-floor',
                    '9' => 'absolution.hunter-and-hunted.store-first-floor',
                    '10' => 'absolution.hunter-and-hunted.store-second-floor',
                    '11' => 'absolution.hunter-and-hunted.store-third-floor',
                    '12' => 'absolution.hunter-and-hunted.chinese-new-year-first-floor',
                    '13' => 'absolution.hunter-and-hunted.chinese-new-year-second-floor',
                    '14' => 'absolution.hunter-and-hunted.loading-area',
                ]
            ],
            [
                'slug' => 'rosewood',
                'floors' => [
                    '0' => 'absolution.rosewood.victorias-ward',
                    '1' => 'absolution.rosewood.hallways-first-floor',
                    '2' => 'absolution.rosewood.hallways-second-floor',
                    '3' => 'absolution.rosewood.central-heating'
                ]
            ],
            [
                'slug' => 'welcome-to-hope',
                'floors' => [
                    '0' => 'absolution.welcome-to-hope.great-balls-of-fire'
                ]
            ],
            [
                'slug' => 'birdies-gift',
                'floors' => [
                    '0' => 'absolution.birdies-gift.gun-shop-ground-floor',
                    '1' => 'absolution.birdies-gift.gun-shop-second-floor'
                ]
            ],
            [
                'slug' => 'shaving-lenny',
                'floors' => [
                    '0' => 'absolution.shaving-lenny.streets-of-hope-first-floor',
                    '1' => 'absolution.shaving-lenny.streets-of-hope-second-floor',
                    '2' => 'absolution.shaving-lenny.barbershop-first-floor',
                    '3' => 'absolution.shaving-lenny.barbershop-second-floor'
                ]
            ],
            [
                'slug' => 'end-of-the-road',
                'floors' => [
                    '0' => 'absolution.end-of-the-road.the-desert'
                ]
            ],
            [
                'slug' => 'dexter-industries',
                'floors' => [
                    '0' => 'absolution.dexter-industries.dead-end',
                    '1' => 'absolution.dexter-industries.old-mill-first-floor',
                    '2' => 'absolution.dexter-industries.old-mill-second-floor',
                    '3' => 'absolution.dexter-industries.descent-floor-1',
                    '4' => 'absolution.dexter-industries.descent-floor-2',
                    '5' => 'absolution.dexter-industries.descent-floor-3',
                    '6' => 'absolution.dexter-industries.descent-floor-4',
                    '7' => 'absolution.dexter-industries.descent-floor-5',
                    '8' => 'absolution.dexter-industries.descent-floor-6',
                    '9' => 'absolution.dexter-industries.factory-floor-1',
                    '10' => 'absolution.dexter-industries.factory-floor-2',
                    '11' => 'absolution.dexter-industries.factory-floor-3',
                ]
            ],
            [
                'slug' => 'death-factory',
                'floors' => [
                    '0' => 'absolution.death-factory.test-facility-floor-1',
                    '1' => 'absolution.death-factory.test-facility-floor-2',
                    '2' => 'absolution.death-factory.test-facility-floor-3',
                    '3' => 'absolution.death-factory.test-facility-top',
                    '4' => 'absolution.death-factory.decontamination',
                    '5' => 'absolution.death-factory.rnd-b3',
                    '6' => 'absolution.death-factory.rnd-b1',
                    '7' => 'absolution.death-factory.rnd-floor-1',
                ]
            ],
            [
                'slug' => 'fight-night',
                'floors' => [
                    '0' => 'absolution.fight-night.arena-floor-1',
                    '1' => 'absolution.fight-night.arena-floor-2',
                    '2' => 'absolution.fight-night.arena-floor-3',
                    '3' => 'absolution.fight-night.backstage',
                ]
            ],
            [
                'slug' => 'attack-of-the-saints',
                'floors' => [
                    '0' => 'absolution.attack-of-the-saints.parking-floor-1',
                    '1' => 'absolution.attack-of-the-saints.parking-floor-2',
                    '2' => 'absolution.attack-of-the-saints.reception',
                    '3' => 'absolution.attack-of-the-saints.cornfield',
                ]
            ],
            [
                'slug' => 'skurkys-law',
                'floors' => [
                    '0' => 'absolution.skurkys-law.courthouse-floor-1',
                    '1' => 'absolution.skurkys-law.courthouse-floor-2',
                    '2' => 'absolution.skurkys-law.holding-cells',
                    '3' => 'absolution.skurkys-law.prison-floor-1',
                    '4' => 'absolution.skurkys-law.prison-floor-2',
                ]
            ],
            [
                'slug' => 'operation-sledgehammer',
                'floors' => [
                    '0' => 'absolution.operation-sledgehammer.county-jail',
                    '1' => 'absolution.operation-sledgehammer.outgunned',
                    '2' => 'absolution.operation-sledgehammer.burn',
                    '3' => 'absolution.operation-sledgehammer.hope-fair-floor-1',
                    '4' => 'absolution.operation-sledgehammer.hope-fair-floor-2',
                ]
            ],
            [
                'slug' => 'one-of-a-kind',
                'floors' => [
                    '0' => 'absolution.one-of-a-kind.floor-1',
                    '1' => 'absolution.one-of-a-kind.floor-2',
                ]
            ],
            [
                'slug' => 'blackwater-park',
                'floors' => [
                    '0' => 'absolution.blackwater-park.blackwater-park',
                    '1' => 'absolution.blackwater-park.penthouse-floor-1',
                    '2' => 'absolution.blackwater-park.penthouse-floor-2',
                ]
            ],
            [
                'slug' => 'countdown',
                'floors' => [
                    '0' => 'absolution.countdown.roof-floor-1',
                    '1' => 'absolution.countdown.roof-floor-2',
                    '2' => 'absolution.countdown.roof-floor-3',
                ]
            ],
            [
                'slug' => 'absolution',
                'floors' => [
                    '0' => 'absolution.absolution.cemetery-entrance',
                    '1' => 'absolution.absolution.burnwood-family-tomb',
                    '2' => 'absolution.absolution.crematorium',
                ]
            ]
        ];
    }

    public function down() {

    }
}

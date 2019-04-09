<?php


use Phinx\Migration\AbstractMigration;

class MigrateMissionUrlToMissionId extends AbstractMigration {
    private $urlToMissionSlug = [
        [
            'url' => '/games/hitman2/santa-fortuna/three-headed-serpent/professional',
            'slug' => 'three-headed-serpent'
        ],
        [
            'url' => '/games/hitman2/isle-of-sgail/ark-society/professional',
            'slug' => 'ark-society'
        ],
        [
            'url' => '/games/hitman/hokkaido/situs-inversus/professional',
            'slug' => 'situs-inversus'
        ],
        [
            'url' => '/games/hitman2/hawkes-bay/nightcall/professional',
            'slug' => 'nightcall'
        ],
    ];

    public function up() {
        $this->table('elusive_targets')
            ->addColumn('mission_id', 'integer')
            ->update();

        foreach ($this->urlToMissionSlug as $recordToUpdate) {
            $this->execute("UPDATE `elusive_targets` SET `mission_id` = (SELECT `id` FROM `missions` WHERE `slug` = '{$recordToUpdate['slug']}')
              WHERE `mission_url` = '{$recordToUpdate['url']}'");
        }

        $this->table('elusive_targets')
            ->removeColumn('mission_url')
            ->update();
    }

    public function down() {
        $this->table('elusive_targets')
            ->addColumn('mission_url', 'string')
            ->update();

        foreach ($this->urlToMissionSlug as $recordToUpdate) {
            $this->execute("UPDATE `elusive_targets` SET `mission_url` = '{$recordToUpdate['url']}'
              WHERE `mission_id` = (SELECT `id` FROM `missions` WHERE `slug` = '{$recordToUpdate['slug']}')");
        }

        $this->table('elusive_targets')
            ->removeColumn('mission_id')
            ->update();
    }
}

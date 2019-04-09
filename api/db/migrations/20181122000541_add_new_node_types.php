<?php


use Phinx\Migration\AbstractMigration;

class AddNewNodeTypes extends AbstractMigration {
    public function change() {
        $rows = [
            [
                'type' => 'Points of Interest',
                'group' => 'Interaction',
                'icon' => 'interaction',
                'require_name' => 1,
                'require_action' => 1,
                'require_target' => 0,
                'require_pickup' => 0,
                'require_direction' => 0,
                'order' => 1
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Alarm',
                'icon' => 'alarm',
                'require_name' => 1,
                'require_action' => 1,
                'require_target' => 0,
                'require_pickup' => 0,
                'require_direction' => 0,
                'order' => 1
            ],
            [
                'type' => 'Navigation',
                'group' => 'Passage',
                'icon' => 'passage',
                'require_name' => 1,
                'require_action' => 0,
                'require_target' => 0,
                'require_pickup' => 0,
                'require_direction' => 0,
                'order' => 3
            ],
            [
                'type' => 'Navigation',
                'group' => 'Ways Up/Down',
                'icon' => 'up-pipe',
                'require_name' => 1,
                'require_action' => 0,
                'require_target' => 0,
                'require_pickup' => 0,
                'require_direction' => 1,
                'note' => "Please state the type of way up/down (ladder, pipe, etc.) in the 'Name' field. Please also provide the number of levels you can travel up/down.",
                'order' => 3
            ]
        ];

        $this->table('node_categories')
            ->insert($rows)
            ->save();
    }
}

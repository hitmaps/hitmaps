<?php


use Phinx\Migration\AbstractMigration;

class AddFriskAndCameraCategories extends AbstractMigration {
    public function change() {
        $rows = [
            [
                'type' => 'Points of Interest',
                'group' => 'Security Check',
                'icon' => 'frisk',
                'require_name' => 0,
                'require_action' => 0,
                'require_target' => 0,
                'require_pickup' => 0,
                'require_direction' => 0,
                'order' => 1
            ],
            [
                'type' => 'Points of Interest',
                'group' => 'Camera',
                'icon' => 'camera',
                'require_name' => 0,
                'require_action' => 0,
                'require_target' => 0,
                'require_pickup' => 0,
                'require_direction' => 0,
                'order' => 1
            ]
        ];

        $this->table('node_categories')
            ->insert($rows)
            ->save();
    }
}

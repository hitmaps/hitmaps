<?php

namespace Controllers\ViewModels\Sidebar;


class TopLevelCategoryViewModel {
    public $name;
    public $items = [];

    public function __construct(string $name) {
        $this->name = $name;
    }
}
<?php

namespace Config;


class Constants {
    public $siteDomain = 'https://www.hitman2maps.com';
    public $currentYear;

    public function __construct() {
        $this->currentYear = date('Y');
    }
}
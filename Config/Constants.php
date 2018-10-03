<?php

namespace Config;


class Constants {
    public $siteDomain = 'https://www.mikekoch.me/hitman-maps';
    public $currentYear;

    public function __construct() {
        $this->currentYear = date('Y');
    }
}
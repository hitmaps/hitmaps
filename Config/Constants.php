<?php

namespace Config;


class Constants {
    public $siteDomain = 'http://localhost:8000';
    public $currentYear;

    public function __construct() {
        $this->currentYear = date('Y');
    }
}
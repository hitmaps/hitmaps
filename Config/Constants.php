<?php

namespace Config;


class Constants {
    public $siteDomain = 'https://www.hitman2maps.com';
    public $currentYear;
    public $cacheHash;

    public function __construct() {
        $this->currentYear = date('Y');
        $this->cacheHash = file_get_contents(__DIR__ . '/cachehash.txt');
    }
}
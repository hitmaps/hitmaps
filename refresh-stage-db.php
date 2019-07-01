<?php
require __DIR__ . '/api/Config/Settings.php';

$settings = new \Config\Settings();

if (!isset($_GET['access-key']) || $_GET['access-key'] !== $settings->accessKey) {
    return http_response_code(404);
}

shell_exec('cd /usr/local/bin');
shell_exec('./refresh_stage_db.sh');

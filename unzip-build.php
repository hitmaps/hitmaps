<?php
require __DIR__ . '/api/Config/Settings.php';

$settings = new \Config\Settings();

if (!isset($_GET['access-key']) || $_GET['access-key'] !== $settings->accessKey) {
    return http_response_code(404);
}


shell_exec('unzip -o latest_build.zip');
shell_exec('rm latest_build.zip');
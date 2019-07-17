<?php
require __DIR__ . '/api/Config/Settings.php';

$settings = new \Config\Settings();

if (!isset($_GET['access-key']) || $_GET['access-key'] !== $settings->accessKey) {
    return http_response_code(404);
}

if ($_GET['zip'] !== 'frontend' && $_GET['zip'] !== 'backend') {
    return http_response_code(404);
}

$zip = $_GET['zip'];

shell_exec("unzip -o {$zip}.zip");
shell_exec("rm {$zip}.zip");
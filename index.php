<?php

require __DIR__ . '/autoload.php';

$loader = new Twig_Loader_Filesystem(__DIR__ . '/resources/views');
$twig = new Twig_Environment($loader);

$klein = new \Klein\Klein();

$klein->respond('GET', '/', function() use ($twig, $applicationContext) {
    return \Controllers\Renderer::render('game-select.twig', $twig);
});

$klein->dispatch();
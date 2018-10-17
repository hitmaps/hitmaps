<?php

require __DIR__ . '/autoload.php';

$loader = new Twig_Loader_Filesystem(__DIR__ . '/resources/views');
$twig = new Twig_Environment($loader);

$klein = new \Klein\Klein();

$klein->respond('GET', '/', function() use ($twig, $applicationContext) {
    return \Controllers\Renderer::render('game-select.twig', $twig);
});

$klein->respond('GET', '/[:game]', function(\Klein\Request $request) use ($twig, $applicationContext) {
    if (!in_array($request->game, [\BusinessLogic\Game::HITMAN, \BusinessLogic\Game::HITMAN2])) {
        return http_response_code(404);
    }

    $gameViewModel = $applicationContext->get(\Controllers\LocationsController::class)->getLocationsAndMissionsForGame($request->game);

    return \Controllers\Renderer::render("game/{$request->game}.twig", $twig, $gameViewModel);
});

$klein->respond('GET', '/[:game]/[:location]/[:missionSlug]/[:difficulty]', function(\Klein\Request $request) use ($twig, $applicationContext) {
    $viewModel = new \ViewModels\GameMapViewModel();
    $viewModel->difficulty = $request->difficulty;
    $viewModel->game = $request->game;
    // TODO Get real mission name
    $viewModel->missionId = 2;
    $viewModel->mission = $request->missionSlug;
    // TODO Get real location information
    $viewModel->locationNameOne = $request->location;
    $viewModel->mapFolderName = $request->location;
    $viewModel->mapCenterLatitude = -102.3125;
    $viewModel->mapCenterLongitude = 104.25;

    return \Controllers\Renderer::render('map.twig', $twig, $viewModel);
});

$klein->respond('POST', '/api/nodes', function(\Klein\Request $request, \Klein\Response $response) use ($twig, $applicationContext) {

    // TODO Add node

    return $response->code(204);
});

$klein->respond('GET', '/api/nodes', function() use ($applicationContext) {
    return json_encode($applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($_GET['missionId'], $_GET['difficulty']));
});

$klein->dispatch();
<?php

require __DIR__ . '/autoload.php';

$loader = new Twig_Loader_Filesystem(__DIR__ . '/resources/views');
$twig = new Twig_Environment($loader);

$klein = new \Klein\Klein();

$klein->respond('GET', '/', function() use ($twig, $applicationContext) {
    return \Controllers\Renderer::render('game-select.twig', $twig);
});

$klein->respond('GET', '/[:game]', function(\Klein\Request $request) use ($twig, $applicationContext) {
    if (!in_array($request->game, ['hitman', 'hitman2'])) {
        return http_response_code(404);
    }

    /* @var $locationRepository \DataAccess\Repositories\LocationRepository */
    $locationRepository = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Location::class);
    $locations = $locationRepository->findByGame($request->game);

    $model = new stdClass();
    $model->locations = $locations;

    return \Controllers\Renderer::render("game/{$request->game}.twig", $twig, $model);
});

$klein->respond('GET', '/[:game]/[:location]/[:missionSlug]/[:difficulty]', function(\Klein\Request $request) use ($twig, $applicationContext) {
    $viewModel = new \ViewModels\GameMapViewModel();
    $viewModel->difficulty = $request->difficulty;
    $viewModel->game = $request->game;
    // TODO Get real mission name
    $viewModel->mission = $request->missionSlug;
    // TODO Get real location information
    $viewModel->locationNameOne = $request->location;
    $viewModel->mapFolderName = $request->location;
    $viewModel->mapCenterLatitude = -102.3125;
    $viewModel->mapCenterLongitude = 104.25;

    return \Controllers\Renderer::render('map.twig', $twig, $viewModel);
});

$klein->dispatch();
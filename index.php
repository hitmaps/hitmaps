<?php

require __DIR__ . '/autoload.php';

SassCompiler::run("scss/", "css/", "scss_formatter_compressed");

$loader = new Twig_Loader_Filesystem(__DIR__ . '/resources/views');
$twig = new Twig_Environment($loader);

$klein = new \Klein\Klein();

$klein->respond('GET', '/', function () use ($twig, $applicationContext) {
    /* @var $locations \DataAccess\Models\Location[] */
    $locations = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Location::class)->findBy([], ['order' => 'ASC']);

    /* @var $games \ViewModels\GameViewModel[] */
    $games = [];

    foreach ($locations as $location) {
        if (!isset($games[$location->getGame()])) {
            $gameViewModel = new \ViewModels\GameViewModel();
            $gameViewModel->game = $location->getGame();
            $gameViewModel->locations = [];
            $games[$location->getGame()] = $gameViewModel;
        }

        $locationViewModel = new \ViewModels\LocationViewModel();
        $locationViewModel->country = $location->getDestinationCountry();
        $locationViewModel->name = $location->getDestination();
        $games[$location->getGame()]->locations[] = $locationViewModel;
    }

    return \Controllers\Renderer::render('location-select.twig', $twig, $games);
});

$klein->respond('GET', '/games/[:game]', function(\Klein\Request $request) use ($twig, $applicationContext) {
    /* @var $locations \DataAccess\Models\Location[] */
    $locations = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Location::class)
        ->findBy(['game' => $request->game], ['order' => 'ASC']);
    /* @var $game \DataAccess\Models\Game */
    $game = $applicationContext->get(\Doctrine\ORM\EntityManager::class)
        ->getRepository(\DataAccess\Models\Game::class)
        ->findOneBy(['slug' => $request->game]);

    /* @var $gameViewModel \ViewModels\GameViewModel */
    $gameViewModel = new \ViewModels\GameViewModel();
    $gameViewModel->game = $request->game;
    $gameViewModel->fullName = $game->getFullName();
    $gameViewModel->tagline = $game->getTagline();

    foreach ($locations as $location) {
        $locationViewModel = new \ViewModels\LocationViewModel();
        $locationViewModel->country = $location->getDestinationCountry();
        $locationViewModel->name = $location->getDestination();
        $gameViewModel->locations[] = $locationViewModel;
    }

    return \Controllers\Renderer::render('location-select.twig', $twig, $gameViewModel);
});

$klein->respond('GET', '/games/[:game]/[:location]/[:missionSlug]/[:difficulty]', function (\Klein\Request $request) use ($twig, $applicationContext) {
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

    $viewModel->nodes = $applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($viewModel->missionId, $request->difficulty, true);

    return \Controllers\Renderer::render('map.twig', $twig, $viewModel);
});

$klein->respond('POST', '/api/nodes', function (\Klein\Request $request, \Klein\Response $response) use ($twig, $applicationContext) {
    /*
     * array (size=11)
     * 'type' => string 'sabotage' (length=8)
     * 'icon' => string 'explosion' (length=9)
     * 'name' => string 'test' (length=4)
     * 'target' => string 'test' (length=4)
     * 'note-type' =>
     *   array (size=2)
     *     0 => string 'requirement' (length=11)
     *     1 => string 'requirement' (length=11)
     * 'note-text' =>
     *   array (size=2)
     *     0 => string '' (length=0)
     *     1 => string '' (length=0)
     * 'mission-id' => string '2' (length=1)
     * 'level' => string '0' (length=1)
     * 'latitude' => string '-95.375' (length=7)
     * 'longitude' => string '113.5' (length=5)
     * 'difficulty' => string 'standard' (length=8)
     */

    $applicationContext->get(\Controllers\NodeController::class)->createNode(intval($_POST['mission-id']), $_POST['difficulty'], $_POST);

    $response->code(204);
    return;
});

$klein->respond('GET', '/api/nodes', function () use ($applicationContext) {
    return json_encode($applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($_GET['missionId'], $_GET['difficulty']));
});

$klein->dispatch();
<?php

require __DIR__ . '/autoload.php';

SassCompiler::run("scss/", "css/", "scss_formatter_compressed");

$loader = new Twig_Loader_Filesystem(__DIR__ . '/resources/views');
$twig = new Twig_Environment($loader);

$klein = new \Klein\Klein();

$klein->respond('GET', '/', function () use ($twig, $applicationContext) {
    /* @var $games \DataAccess\Models\Game[] */
    $games = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Game::class)->findAll();

    $viewModel = new \ViewModels\HomeViewModel();
    foreach ($games as $game) {
        $gameViewModel = new \ViewModels\GameViewModel();
        $gameViewModel->tagline = $game->getTagline();
        $gameViewModel->fullName = $game->getFullName();
        $gameViewModel->slug = $game->getSlug();

        $viewModel->games[] = $gameViewModel;
    }

    /* @var $elusiveTargetRepository \DataAccess\Repositories\ElusiveTargetRepository */
    $elusiveTargetRepository = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\ElusiveTarget::class);

    $viewModel->elusiveTarget = $elusiveTargetRepository->getActiveElusiveTarget();

    /* @var $missionRepository \DataAccess\Repositories\MissionRepository */
    $missionRepository = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Mission::class);
	
    if ($viewModel->elusiveTarget !== null) {
        $viewModel->elusiveTargetUrl = $missionRepository->buildUrlForMissionAndDifficulty($viewModel->elusiveTarget->getMissionId(), 'professional');
    }

    return \Controllers\Renderer::render('game-select.twig', $twig, $viewModel);
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
        $locationViewModel->slug = $location->getSlug();
        $locationViewModel->country = $location->getDestinationCountry();
        $locationViewModel->name = $location->getDestination();
        $gameViewModel->locations[] = $locationViewModel;
    }

    return \Controllers\Renderer::render('location-select.twig', $twig, $gameViewModel);
});

$klein->respond('GET', '/games/[:game]/[:location]', function(\Klein\Request $request) use ($twig, $applicationContext) {
    /* @var $location \DataAccess\Models\Location */
    $location = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Location::class)
        ->findOneBy(['slug' => $request->location, 'game' => $request->game]);
    /* @var $game \DataAccess\Models\Game */
    $game = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Game::class)
        ->findOneBy(['slug' => $request->game]);
    /* @var $missionRepository \DataAccess\Repositories\MissionRepository */
    $missionRepository = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Mission::class);
    /* @var $missions \DataAccess\Models\Mission[] */
    $missions = $missionRepository->findActiveMissionsByLocation($location->getId());

    $locationViewModel = new \ViewModels\LocationViewModel();
    $locationViewModel->name = $location->getDestination();
    $locationViewModel->game = $game->getSlug();
    $locationViewModel->gameName = $game->getFullName();
    $locationViewModel->country = $location->getDestinationCountry();
    $locationViewModel->slug = $location->getSlug();
    $locationViewModel->missions = [];
    foreach ($missions as $mission) {
        $missionViewModel = new \ViewModels\MissionViewModel();
        $missionViewModel->slug = $mission->getSlug();
        $missionViewModel->name = $mission->getName();
        $missionViewModel->difficulties = [];

        /* @var $difficulties \DataAccess\Models\MissionDifficulty[] */
        $difficulties = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\MissionDifficulty::class)
            ->findBy(['missionId' => $mission->getId()]);

        foreach ($difficulties as $difficulty) {
            $missionViewModel->difficulties[] = $difficulty->getDifficulty();
        }
        $locationViewModel->missions[] = $missionViewModel;
    }

    return \Controllers\Renderer::render('mission-select.twig', $twig, $locationViewModel);
});

$klein->respond('GET', '/games/[:game]/[:location]/[:missionSlug]/[:difficulty]', function (\Klein\Request $request) use ($twig, $applicationContext) {
    $viewModel = new \ViewModels\GameMapViewModel();
    $viewModel->difficulty = $request->difficulty;
    $viewModel->game = $request->game;

    /* @var $mission \DataAccess\Models\Mission|null */
    $mission = $applicationContext->get(\Doctrine\ORM\EntityManager::class)
        ->getRepository(\DataAccess\Models\Mission::class)
        ->findOneBy(['slug' => $request->missionSlug]);
    if ($mission === null) {
        bounceTo404($twig);
    }

    $viewModel->missionId = $mission->getId();
    $viewModel->mission = $mission->getName();
    $viewModel->missionSlug = $mission->getSlug();

    /* @var $location \DataAccess\Models\Location */
    $location = $applicationContext->get(\Doctrine\ORM\EntityManager::class)
        ->getRepository(\DataAccess\Models\Location::class)
        ->findOneBy(['id' => $mission->getLocationId()]);

    $viewModel->locationSlug = $location->getSlug();
    $viewModel->locationNameOne = $location->getDestination();
    $viewModel->mapFolderName = $mission->getMapFolderName();
    $viewModel->mapCenterLatitude = $mission->getMapCenterLatitude();
    $viewModel->mapCenterLongitude = $mission->getMapCenterLongitude();
    $viewModel->topLeftCoordinate = $mission->getTopLeftCoordinate();
    $viewModel->bottomRightCoordinate = $mission->getBottomRightCoordinate();
    $viewModel->lowestFloor = $mission->getLowestFloorNumber();
    $viewModel->highestFloor = $mission->getHighestFloorNumber();
    $viewModel->startingFloor = $mission->getStartingFloorNumber();
    $viewModel->satelliteView = $mission->getSatelliteView() ? 1 : 0;
    $viewModel->disguises = $applicationContext->get(\Doctrine\ORM\EntityManager::class)
        ->getRepository(\DataAccess\Models\Disguise::class)
        ->findBy(['missionId' => $mission->getId()], ['name' => 'ASC']);

    if (userIsLoggedIn()) {
        /* @var $user \DataAccess\Models\User */
        $user = \BusinessLogic\Session\Session::read('userContext');
        $roles = $user->getRolesAsInts();

        if (\BusinessLogic\UserRole::hasAccess($roles, [\BusinessLogic\UserRole::TRUSTED_EDITOR])) {
            $viewModel->editorTitle = 'Add Change';
            $viewModel->canDeleteNodes = true;
        } else {
            $viewModel->editorTitle = 'Suggest Edit';
            $viewModel->canDeleteNodes = false;
        }
    }

    $nodeCategories = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\NodeCategory::class)->findBy([], ['order' => 'ASC', 'group' => 'ASC']);
    $sortedNodeCategories = [];

    /* @var $nodeCategory \DataAccess\Models\NodeCategory */
    foreach ($nodeCategories as $nodeCategory) {
        if (!key_exists($nodeCategory->getType(), $sortedNodeCategories)) {
            $sortedNodeCategories[$nodeCategory->getType()] = [];
        }

        $sortedNodeCategories[$nodeCategory->getType()][] = $nodeCategory;
    }

    $predeterminedItems = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Item::class)->findBy([], ['name' => 'ASC']);
    $sortedPredeterminedItems = [];

    /* @var $predeterminedItem \DataAccess\Models\Item */
    foreach ($predeterminedItems as $predeterminedItem) {
        if (!key_exists($predeterminedItem->getType(), $sortedPredeterminedItems)) {
            $sortedPredeterminedItems[$predeterminedItem->getType()] = [];
        }

        $sortedPredeterminedItems[$predeterminedItem->getType()][] = $predeterminedItem;
    }

    $icons = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Icon::class)->findBy([], ['order' => 'ASC', 'icon' => 'ASC']);
    $sortedIcons = [];

    /* @var $icon \DataAccess\Models\Icon */
    foreach ($icons as $icon) {
        if (!key_exists($icon->getGroup(), $sortedIcons)) {
            $sortedIcons[$icon->getGroup()] = [];
        }

        $sortedIcons[$icon->getGroup()][] = $icon;
    }

    $viewModel->predeterminedItems = $sortedPredeterminedItems;
    $viewModel->nodeCategories = $sortedNodeCategories;
    $viewModel->icons = $sortedIcons;
    $viewModel->nodes = $applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($viewModel->missionId, $request->difficulty, true);
    $viewModel->searchableNodes = $applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($viewModel->missionId, $request->difficulty, true, true);

    return \Controllers\Renderer::render('map.twig', $twig, $viewModel);
});

$klein->respond('POST', '/api/nodes', function (\Klein\Request $request, \Klein\Response $response) use ($twig, $applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }


    $user = \BusinessLogic\Session\Session::read('userContext');
    $node = $applicationContext->get(\Controllers\NodeController::class)->createNode(intval($_POST['mission-id']), $_POST['difficulty'], $_POST, $user);

    $response->code(201);
    return json_encode(transformNode($node, $applicationContext));
});

function transformNode(\DataAccess\Models\Node $node, \DI\Container $applicationContext): \Controllers\ViewModels\NodeWithNotesViewModel {
    $nodeViewModel = new \Controllers\ViewModels\NodeWithNotesViewModel();
    $nodeViewModel->id = $node->getId();
    $nodeViewModel->missionId = $node->getMissionId();
    $nodeViewModel->type = $node->getType();
    $nodeViewModel->icon = $node->getIcon();
    $nodeViewModel->subgroup = $node->getSubgroup();
    $nodeViewModel->name = $node->getName();
    $nodeViewModel->target = $node->getTarget();
    $nodeViewModel->level = $node->getLevel();
    $nodeViewModel->latitude = $node->getLatitude();
    $nodeViewModel->longitude = $node->getLongitude();
    $nodeViewModel->difficulty = $node->getDifficulty();
    $nodeViewModel->group = $node->getGroup();
    $nodeViewModel->approved = $node->getApproved();
    $nodeViewModel->image = $node->getImage();
    $nodeViewModel->searchable = $node->isSearchable();
    $nodeViewModel->tooltip = $node->getTooltip();
    switch ($nodeViewModel->icon) {
        case 'poison':
            $nodeViewModel->targetIcon = 'fa-user';
            break;
        case 'interaction':
        case 'sabotage':
        case 'distraction':
            $nodeViewModel->targetIcon = 'fa-cog';
            break;
        default:
            $nodeViewModel->targetIcon = '';
            break;
    }
    $nodeViewModel->notes = [];
    $notes = $applicationContext->get(\Doctrine\ORM\EntityManager::class)
        ->getRepository(\DataAccess\Models\NodeNote::class)
        ->findBy(['nodeId' => $node->getId()]);
    foreach ($notes as $note) {
        /* @var $note \DataAccess\Models\NodeNote */
        $innerViewModel = new \Controllers\ViewModels\NodeNoteViewModel();
        $innerViewModel->id = $note->getId();
        $innerViewModel->type = $note->getType();
        $innerViewModel->text = $note->getText();

        $nodeViewModel->notes[] = $innerViewModel;
    }

    return $nodeViewModel;
}

$klein->respond('POST', '/api/ledges', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    $ledge = $applicationContext->get(\Controllers\LedgeController::class)->createLedge($_POST['missionId'], $_POST['level'], $_POST['vertices']);

    $explodedVertices = explode('|', $ledge->getVertices());

    $viewModel = new \Controllers\ViewModels\LedgeViewModel();
    $viewModel->id = $ledge->getId();
    $viewModel->missionId = $ledge->getMissionId();
    $viewModel->level = $ledge->getLevel();
    $viewModel->vertices = $explodedVertices;

    $response->code(201);
    return json_encode($viewModel);
});

$klein->respond('GET', '/api/ledges/delete/[:ledgeId]', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to delete ledges!']);
        return $response->code(401);
    }

    $ledge = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Ledge::class)->findOneBy(['id' => $request->ledgeId]);
    $entityManager = $applicationContext->get(\Doctrine\ORM\EntityManager::class);
    $entityManager->remove($ledge);
    $entityManager->flush();

    $response->code(200);
    return json_encode(['message' => 'Ledge deleted!']);
});

$klein->respond('POST', '/api/foliage', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    $ledge = $applicationContext->get(\Controllers\FoliageController::class)->createFoliage($_POST['missionId'], $_POST['level'], $_POST['vertices']);

    $explodedVertices = explode('|', $ledge->getVertices());

    $viewModel = new \Controllers\ViewModels\LedgeViewModel();
    $viewModel->id = $ledge->getId();
    $viewModel->missionId = $ledge->getMissionId();
    $viewModel->level = $ledge->getLevel();
    $viewModel->vertices = $explodedVertices;

    $response->code(201);
    return json_encode($viewModel);
});

$klein->respond('GET', '/api/foliage/delete/[:foliageId]', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to delete foliage!']);
        return $response->code(401);
    }

    $foliage = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Foliage::class)->findOneBy(['id' => $request->foliageId]);
    $entityManager = $applicationContext->get(\Doctrine\ORM\EntityManager::class);
    $entityManager->remove($foliage);
    $entityManager->flush();

    $response->code(200);
    return json_encode(['message' => 'Foliage deleted!']);
});

$klein->respond('POST', '/api/disguise-areas', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    $disguiseArea = $applicationContext->get(\Controllers\DisguiseAreasController::class)->createDisguiseArea(intval($_POST['missionId']),
        intval($_POST['disguiseId']),
        intval($_POST['level']),
        $_POST['type'],
        $_POST['vertices']);

    $explodedVertices = explode('|', $disguiseArea->getVertices());

    $viewModel = new \Controllers\ViewModels\DisguiseAreaViewModel();
    $viewModel->id = $disguiseArea->getId();
    $viewModel->missionId = $disguiseArea->getMissionId();
    $viewModel->level = $disguiseArea->getLevel();
    $viewModel->disguiseId = $disguiseArea->getDisguiseId();
    $viewModel->type = $disguiseArea->getType();
    $viewModel->vertices = $explodedVertices;

    $response->code(201);
    return json_encode($viewModel);
});

$klein->respond('GET', '/api/disguise-areas/delete/[:areaId]', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to delete disguise areas!']);
        return $response->code(401);
    }

    $disguiseArea = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\DisguiseArea::class)->findOneBy(['id' => $request->areaId]);
    $entityManager = $applicationContext->get(\Doctrine\ORM\EntityManager::class);
    $entityManager->remove($disguiseArea);
    $entityManager->flush();

    $response->code(200);
    return json_encode(['message' => 'Disguise area deleted!']);
});

$klein->respond('POST', '/api/nodes/move', function (\Klein\Request $request, \Klein\Response $response) use ($twig, $applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }


    $user = \BusinessLogic\Session\Session::read('userContext');
    $applicationContext->get(\Controllers\NodeController::class)->moveNode(intval($_POST['node-id']), $_POST['latitude'], $_POST['longitude']);

    return json_encode(['message' => 'OK']);
});

$klein->respond('POST', '/api/nodes/edit/[:nodeId]', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to modify nodes!']);
        return $response->code(401);
    }

    /* @var $user \DataAccess\Models\User */
    $user = \BusinessLogic\Session\Session::read('userContext');
    $roles = $user->getRolesAsInts();
    if (!\BusinessLogic\UserRole::hasAccess($roles, [\BusinessLogic\UserRole::TRUSTED_EDITOR])) {
        print json_encode(['message' => 'You do not have permission to delete nodes!']);
        return $response->code(403);
    }

    $node = $applicationContext->get(\Controllers\NodeController::class)->editNode(intval($request->nodeId), intval($_POST['mission-id']), $_POST['difficulty'], $_POST, $user);

    $response->code(200);
    return json_encode(transformNode($node, $applicationContext));
});

$klein->respond('GET', '/api/nodes/delete/[:nodeId]', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to modify nodes!']);
        return $response->code(401);
    }

    /* @var $user \DataAccess\Models\User */
    $user = \BusinessLogic\Session\Session::read('userContext');
    $roles = $user->getRolesAsInts();
    if (!\BusinessLogic\UserRole::hasAccess($roles, [\BusinessLogic\UserRole::TRUSTED_EDITOR])) {
        print json_encode(['message' => 'You do not have permission to delete nodes!']);
        return $response->code(403);
    }

    $node = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Node::class)->findOneBy(['id' => $request->nodeId]);
    if ($node === null) {
        print json_encode(['message' => 'Could not find the node to delete!']);
        return $response->code(404);
    }
    $notes = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\NodeNote::class)->findBy(['nodeId' => $request->nodeId]);
    foreach ($notes as $note) {
        $applicationContext->get(\Doctrine\ORM\EntityManager::class)->remove($note);
    }
    $applicationContext->get(\Doctrine\ORM\EntityManager::class)->remove($node);
    $applicationContext->get(\Doctrine\ORM\EntityManager::class)->flush();

    print json_encode(['message' => 'Node deleted!']);
    return $response->code(200);
});

$klein->respond('GET', '/api/nodes', function () use ($applicationContext) {
    $nodes = $applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($_GET['missionId'], $_GET['difficulty']);
    $nodeCategories = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\NodeCategory::class)->findAll();

    /* @var $ledges \DataAccess\Models\Ledge[] */
    $ledges = $applicationContext->get(\Controllers\LedgeController::class)->getLedgesForMission($_GET['missionId']);
    $formattedLedges = [];
    foreach ($ledges as $ledge) {
        $viewModel = new \Controllers\ViewModels\LedgeViewModel();
        $viewModel->id = $ledge->getId();
        $viewModel->missionId = $ledge->getMissionId();
        $viewModel->level = $ledge->getLevel();
        $viewModel->vertices = explode('|', $ledge->getVertices());
        $formattedLedges[] = $viewModel;
    }

    /* @var $foliage \DataAccess\Models\Foliage[] */
    $foliage = $applicationContext->get(\Controllers\FoliageController::class)->getFoliageForMission($_GET['missionId']);
    $formattedFoliage = [];
    foreach ($foliage as $innerFoliage) {
        $viewModel = new \Controllers\ViewModels\LedgeViewModel();
        $viewModel->id = $innerFoliage->getId();
        $viewModel->missionId = $innerFoliage->getMissionId();
        $viewModel->level = $innerFoliage->getLevel();
        $viewModel->vertices = explode('|', $innerFoliage->getVertices());
        $formattedFoliage[] = $viewModel;
    }

    /* @var $disguiseRepository \DataAccess\Repositories\DisguiseRepository */
    $disguiseRepository = $applicationContext->get(\Doctrine\ORM\EntityManager::class)
        ->getRepository(\DataAccess\Models\Disguise::class);

    /* @var $disguises \DataAccess\Models\Disguise[] */
    $disguisesWithAreas = $disguiseRepository->findByMission($_GET['missionId']);
    $formattedDisguises = [];

    /* @var $formattedDisguise \Controllers\ViewModels\DisguiseViewModel */
    $formattedDisguise = null;
    foreach ($disguisesWithAreas as $disguiseOrArea) {
        if ($disguiseOrArea === null) {
            continue;
        }

        if ($disguiseOrArea instanceof \DataAccess\Models\DisguiseArea) {
            /* @var $area \DataAccess\Models\DisguiseArea */
            $area = $disguiseOrArea;
            $areaViewModel = new \Controllers\ViewModels\DisguiseAreaViewModel();
            $areaViewModel->id = $area->getId();
            $areaViewModel->missionId = $area->getMissionId();
            $areaViewModel->disguiseId = $area->getDisguiseId();
            $areaViewModel->level = $area->getLevel();
            $areaViewModel->type = $area->getType();
            $areaViewModel->vertices = explode('|', $area->getVertices());
            $formattedDisguise->areas[] = $areaViewModel;
            continue;
        }

        /* @var $disguise \DataAccess\Models\Disguise */
        $disguise = $disguiseOrArea;
        $formattedDisguise = new \Controllers\ViewModels\DisguiseViewModel();
        $formattedDisguise->id = $disguise->getId();
        $formattedDisguise->name = $disguise->getName();
        $formattedDisguise->image = $disguise->getImage();
        $formattedDisguises[] = $formattedDisguise;
    }

    return json_encode([
        'nodes' => $nodes,
        'categories' => $nodeCategories,
        'ledges' => $formattedLedges,
        'foliage' => $formattedFoliage,
        'disguises' => $formattedDisguises]);
});

$klein->respond('POST', '/api/notifications', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $client = $applicationContext->get(\BusinessLogic\FirebaseClient::class);

    try {
        if ($_POST['state'] === 'SUBSCRIBING') {
            $client->subscribeToTopic($_POST['topic'], $_POST['token']);
        } elseif ($_POST['state'] === 'UNSUBSCRIBING') {
            $client->unsubscribeFromTopic($_POST['topic'], $_POST['token']);
        } else {
            print json_encode(['message' => 'Invalid state provided.']);
            return $response->code(400);
        }
    } catch (\Kreait\Firebase\Exception\Messaging\InvalidArgument $exception) {
        print json_encode(['message' => $exception->getMessage()]);
        return $response->code(400);
    } catch (\Kreait\Firebase\Exception\MessagingException $exception) {
        print json_encode(['message' => $exception->getMessage()]);
        return $response->code(500);
    }

    return $response->code(204);
});

$klein->respond('GET', '/api/push-elusive-target-status', function() use ($applicationContext) {
    $config = new Config\Settings();
    if ($config->accessKey !== $_GET['access-key']) {
        return http_response_code(404);
    }

    $applicationContext->get(\BusinessLogic\ElusiveTargetNotificationSender::class)->sendElusiveTargetNotification();

    return http_response_code(204);
});

$klein->respond('GET', '/api/ioi/status', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $config = new \Config\Settings();
    if ($config->accessKey !== $_GET['access-key']) {
        return $response->code(404);
    }

    $applicationContext->get(\BusinessLogic\IOIServices\ElusiveTargetUpdater::class)->retrieveLatestElusiveTargetFromIOI();
});

/* Auth Endpoints */
$klein->respond('GET', '/user/login', function(\Klein\Request $request, \Klein\Response $response) use ($twig, $applicationContext, $klein) {
    $flashes = $klein->service()->flashes();
    $model = new \Controllers\ViewModels\BaseModel();
    if (count($flashes) > 0) {
        foreach ($flashes as $type => $messages) {
            foreach ($messages as $msg) {
                $model->messages[] = new \Controllers\ViewModels\AlertMessage($type, $msg, $type === 'success' ? 'check-circle' : 'times-circle');
            }
        }
    }

    return $applicationContext->get(\Controllers\AuthenticationController::class)->viewSignInPage($twig, $model);
});

$klein->respond('POST', '/user/login', function(\Klein\Request $request, \Klein\Response $response) use ($twig, $applicationContext, $klein) {
    $controller = $applicationContext->get(\Controllers\AuthenticationController::class);

    $redirect = '/';
    if (isset($_POST['redirect-location'])) {
        $redirect = $_POST['redirect-location'];
    }

    try {
        $controller->loginUser($_POST['email'], $_POST['password'], $_POST['g-recaptcha-response']);

        return $response->redirect($redirect);
    } catch (\BusinessLogic\Authentication\LoginFailedException | \Controllers\RecaptchaFailedException $e) {
        $viewModel = new \Controllers\ViewModels\LoginViewModel();
        $viewModel->redirectLocation = $redirect === '/' ? null : $redirect;
        if ($e instanceof \BusinessLogic\Authentication\LoginFailedException) {
            $viewModel->messages[] = new \Controllers\ViewModels\AlertMessage('danger', 'The username or password entered is incorrect.', 'times-circle');
        } else {
            $viewModel->messages[] = new \Controllers\ViewModels\AlertMessage('danger', 'You must complete the captcha in order to log in.', 'times-circle');
        }

        return \Controllers\Renderer::render('user/login.twig', $twig, $viewModel);
    }
});

$klein->respond('GET', '/user/register', function() use ($twig, $klein) {
    $model = new \Controllers\ViewModels\BaseModel();
    $flashes = $klein->service()->flashes();
    if (count($flashes) > 0) {
        foreach ($flashes as $type => $messages) {
            foreach ($messages as $msg) {
                $model->messages[] = new \Controllers\ViewModels\AlertMessage($type, $msg, $type === 'success' ? 'check-circle' : 'times-circle');
            }
        }
    }

    return \Controllers\Renderer::render('user/register.twig', $twig, $model);
});

$klein->respond('POST', '/user/register', function(\Klein\Request $request, \Klein\Response $response) use ($twig, $applicationContext, $klein) {
    $settings = new \Config\Settings();
    if ($_POST['super-secret-code'] !== $settings->superSecretPublicCode) {
        return "The registration code you entered was not correct. An account was not created.";
    }

    $controller = $applicationContext->get(\Controllers\AuthenticationController::class);

    try {
        $controller->registerUser($_POST['name'], $_POST['email'], $_POST['password'], $_POST['confirm-password'], $_POST['g-recaptcha-response'], $twig);
    } catch (\Controllers\RecaptchaFailedException $e) {
        $klein->service()->flash('You must complete the captcha in order to create an account.', 'danger');
        return $response->redirect('/user/register');
    }

    $klein->service()->flash('Account created. Check your email to validate your account!', 'success');
    return $response->redirect('/user/login?redirectLocation=/');
});

$klein->respond('GET', '/user/verify', function(\Klein\Request $request, \Klein\Response $response) use ($twig, $applicationContext, $klein) {
    $controller = $applicationContext->get(\Controllers\AuthenticationController::class);
    $success = $controller->verifyUser($_GET['token']);

    if ($success) {
        $klein->service()->flash('Account verified! You may now log in.', 'success');
    } else {
        $klein->service()->flash('We were not able to verify your account. Make sure you clicked the activation link ' .
            'from the most recent email you received, and that the link did not expire.', 'danger');
    }

    $response->redirect('/user/login?redirectLocation=/');
});

$klein->respond('GET', '/user/logout', function() use ($twig) {
    \BusinessLogic\Session\Session::start();
    \BusinessLogic\Session\Session::destroy();
    \BusinessLogic\Session\Session::close();

    $viewModel = new \Controllers\ViewModels\BaseModel();
    $viewModel->messages[] = new \Controllers\ViewModels\AlertMessage('success', 'You have been logged out!', 'check-circle');

    return \Controllers\Renderer::render('user/login.twig', $twig, $viewModel);
});

$klein->respond('GET', '/user/profile', function(\Klein\Request $request, \Klein\Response $response) use ($klein, $twig, $applicationContext) {
    if (!userIsLoggedIn()) {
        return bounceToLogin($klein, $response, '/user/profile');
    }

    $viewModel = new \Controllers\ViewModels\UpdateProfileViewModel();
    $viewModel->user = \BusinessLogic\Session\Session::read('userContext');

    return \Controllers\Renderer::render('user/profile.twig', $twig, $viewModel);
});

// AJAX endpoint
$klein->respond('POST', '/user/edit/basic-info', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to make changes to your profile!']);
        return $response->code(401);
    }

    /* @var $user \DataAccess\Models\User */
    $user = \BusinessLogic\Session\Session::read('userContext');

    $command = $applicationContext->get(\BusinessLogic\Authentication\UpdateProfileCommand::class);
    $user = $command->execute($user->getEmail(), $_POST['name']);

    \BusinessLogic\Session\Session::write($user, 'userContext');

    print json_encode(['message' => 'Changes have been saved!']);
    return $response->code(200);
});

$klein->respond('POST', '/user/edit/password', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if (!userIsLoggedIn()) {
        print json_encode(['message' => 'You must be logged in to change your password!']);
        return $response->code(401);
    }

    if (trim($_POST['current-password']) === '' || trim($_POST['password']) === '' || trim($_POST['confirm-password']) === '') {
        print json_encode(['message' => 'Please fill out all the required fields.']);
        return $response->code(400);
    }

    if ($_POST['password'] !== $_POST['confirm-password']) {
        print json_encode(['message' => 'New passwords must match.']);
        return $response->code(400);
    }

    /* @var $user \DataAccess\Models\User */
    $user = \BusinessLogic\Session\Session::read('userContext');

    try {
        $command = $applicationContext->get(\BusinessLogic\Authentication\UpdateUserPasswordCommand::class);
        $command->execute($user->getEmail(), $_POST['current-password'], $_POST['password']);
    } catch (Exception $e) {
        print json_encode(['message' => $e->getMessage()]);
        return $response->code(400);
    }

    print json_encode(['message' => "Your password has been changed!"]);
    return $response->code(200);
});

$klein->respond('GET', '/user/register/verify-email', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $entityManager = $applicationContext->get(\Doctrine\ORM\EntityManager::class);

    $user = $entityManager->getRepository(\DataAccess\Models\User::class)->findOneBy(['email' => $_GET['email']]);

    if ($user === null) {
        return $response->code(200);
    } else {
        return $response->code(400);
    }
});

$klein->respond('POST', '/user/forgot-password', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext, $twig) {
    $command = $applicationContext->get(\BusinessLogic\Authentication\GeneratePasswordResetCommand::class);
    $command->execute($_POST['email'], $twig);

    print json_encode(['message' => 'Password reset request sent. If you have an account registered under that email address, you will receive a link to reset your password shortly.']);
    return $response->code(200);
});

$klein->respond('GET', '/user/reset-password', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext, $twig, $klein) {
    $command = $applicationContext->get(\BusinessLogic\Authentication\VerifyPasswordResetTokenCommand::class);
    $result = $command->execute($_GET['email'], $_GET['token']);

    $model = new \Controllers\ViewModels\ResetPasswordViewModel();
    $model->email = $_GET['email'];
    $model->token = $_GET['token'];

    if ($result) {
        return \Controllers\Renderer::render('user/reset-password.twig', $twig, $model);
    } else {
        $klein->service()->flash("We were not able to verify your password reset request. Make sure you clicked the activation 
            link from the most recent email that you received, and that the link did not expire.", 'danger');
        return $response->redirect('/user/login?redirectLocation=/');
    }
});

$klein->respond('POST', '/user/reset-password', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext, $twig, $klein) {
    $verifyTokenCommand = $applicationContext->get(\BusinessLogic\Authentication\VerifyPasswordResetTokenCommand::class);

    if (!$verifyTokenCommand->execute($_POST['email'], $_POST['token'])) {
        $klein->service()->flash("We were not able to verify your password reset request. Make sure you clicked the activation 
            link from the most recent email that you received, and that the link did not expire.", 'danger');
        return $response->redirect('/user/login?redirectLocation=/');
    }

    $applicationContext->get(\BusinessLogic\Authentication\UpdateUserPasswordCommand::class)->execute($_POST['email'], null, $_POST['password']);

    $klein->service()->flash('Your password has been reset. You may now log in.', 'success');
    return $response->redirect('/user/login?redirectLocation=/');
});

$klein->respond('GET', '/terms-of-use', function() use ($twig) {
    return \Controllers\Renderer::render('terms-of-use.twig', $twig);
});

$klein->respond('GET', '/privacy-policy', function() use ($twig) {
    return \Controllers\Renderer::render('privacy-policy.twig', $twig);
});

$klein->respond('GET', '/500', function() use ($twig) {
    return \Controllers\Renderer::render('500.twig', $twig);
});

$klein->respond('GET', '/sitemap.txt', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext, $twig) {
    $constants = new \Config\Constants();
    $pages = [];
    // Static Pages
    $pages[] = $constants->siteDomain;
    $pages[] = "{$constants->siteDomain}/terms-of-use";
    $pages[] = "{$constants->siteDomain}/privacy-policy";
    $pages[] = "{$constants->siteDomain}/user/forgot-password";
    $pages[] = "{$constants->siteDomain}/user/register";
    $pages[] = "{$constants->siteDomain}/user/login";
    // Location Select
    /* @var $locationRepository \DataAccess\Repositories\LocationRepository */
    /* @var $missionRepository \DataAccess\Repositories\MissionRepository */
    $entityManager = $applicationContext->get(\Doctrine\ORM\EntityManager::class);
    $locationRepository = $entityManager->getRepository(\DataAccess\Models\Location::class);
    $missionRepository = $entityManager->getRepository(\DataAccess\Models\Mission::class);
    /* @var $games \DataAccess\Models\Game[] */
    $games = $entityManager->getRepository(\DataAccess\Models\Game::class)->findAll();
    foreach ($games as $game) {
        $pages[] = "{$constants->siteDomain}/games/{$game->getSlug()}";

        // Get locations
        /* @var $locations \DataAccess\Models\Location[] */
        $locations = $locationRepository->findByGame($game->getSlug());
        foreach ($locations as $location) {
            $pages[] = "{$constants->siteDomain}/games/{$game->getSlug()}/{$location->getSlug()}";

            /* @var $missions \DataAccess\Models\Mission[] */
            $missions = $missionRepository->findActiveMissionsByLocation($location->getId());
            foreach ($missions as $mission) {
                /* @var $difficulties \DataAccess\Models\MissionDifficulty[] */
                $difficulties = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\MissionDifficulty::class)
                    ->findBy(['missionId' => $mission->getId()]);

                foreach ($difficulties as $difficulty) {
                    $formattedDifficulty = strtolower($difficulty->getDifficulty());
                    $pages[] = "{$constants->siteDomain}/games/{$game->getSlug()}/{$location->getSlug()}/{$formattedDifficulty}";
                }
            }
        }
    }

    $response->header('Content-Type', 'text/plain');
    return \Controllers\Renderer::render('sitemap.twig', $twig, $pages);
});

/* Admin Endpoints */
$klein->respond('GET', '/admin/migrate', function() {
    $config = new Config\Settings();
    if ($config->accessKey !== $_GET['access-key']) {
        return http_response_code(404);
    }

    $wrapper = new \Phinx\Wrapper\TextWrapper(new \Phinx\Console\PhinxApplication(), array('configuration' => __DIR__ . '/phinx.yml'));

    $output = $wrapper->getMigrate();

    if ($wrapper->getExitCode() > 0) {
        http_response_code(500);
    } else {
        http_response_code(200);
    }

    return '<pre>' . $output . '</pre>';
});

$klein->onHttpError(function (int $code, \Klein\Klein $router) use ($twig) {
    $router->response()->code($code);
    switch ($code) {
        case 403:
            $router->response()->body(\Controllers\Renderer::render('403.twig', $twig, new \Controllers\ViewModels\BaseModel()));
            break;
        case 404:
            $router->response()->body(\Controllers\Renderer::render('404.twig', $twig, new \Controllers\ViewModels\BaseModel()));
            break;
        case 500:
            $router->response()->body(\Controllers\Renderer::render('500.twig', $twig, new \Controllers\ViewModels\BaseModel()));
            break;
        default:
            $router->response()->body("Welp, something unexpected happened with error code: {$code}");
    }
});

$klein->onError(function (\Klein\Klein $klein, $msg, $type, Throwable $err) use ($twig) {
    error_log($err);
    \Rollbar\Rollbar::log(\Rollbar\Payload\Level::ERROR, $err);
    $klein->response()->code(500);
    $klein->response()->body(\Controllers\Renderer::render('500.twig', $twig));
});

$klein->dispatch();

function userIsLoggedIn() {
    \BusinessLogic\Session\Session::start();

    try {
        \BusinessLogic\Session\Session::read('userContext');

        return true;
    } catch (\BusinessLogic\Session\SessionException $e) {
        return false;
    }
}

function bounceTo404(Twig_Environment $twig) {
    return \Controllers\Renderer::render('404.twig', $twig);
}


function bounceToLogin(\Klein\Klein $klein, \Klein\Response $response, string $redirectLocation = '') {
    $klein->service()->flash("An account is required to view this page.", 'danger');
    $redirectLocation = $redirectLocation === '' ? '' : '?redirectLocation=' . $redirectLocation;
    return $response->redirect('/user/login' . $redirectLocation);
}
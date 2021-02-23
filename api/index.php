<?php

use BusinessLogic\Caching\CacheClient;
use DataAccess\Models\RouletteMatchup;
use Doctrine\ORM\EntityManager;
use Predis\Client;

require __DIR__ . '/autoload.php';

$klein = new \Klein\Klein();

$klein->respond(function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if(isset($_SERVER['HTTP_ORIGIN'])) $response->header('Access-Control-Allow-Origin', $_SERVER['HTTP_ORIGIN']);
    $response->header('Access-Control-Allow-Headers', 'content-type,Authorization');
    $response->header('Access-Control-Allow-Credentials', 'true');
    $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
});

// Public API calls
$klein->respond('GET', '/api/v1/games/[:game]?', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    if ($request->game === null) {
        $games = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Game::class)->findAll();
    } else {
        $games = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Game::class)->findBy(['slug' => $request->game]);
    }

    return $response->json($games);
});

$klein->respond('GET', '/api/v1/games/[:game]/locations/[:location]?', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $game = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Game::class)->findOneBy(['slug' => $request->game]);

    if ($game === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find game '{$request->game}'"
        ]);
    }

    if ($request->location === null) {
        $locations = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Location::class)->findBy(['game' => $request->game], ['order' => 'ASC']);
        foreach ($locations as $location) {
            $missions = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Mission::class)->findActiveMissionsByLocation($location->getId());
            /* @var $mission \DataAccess\Models\Mission */
            foreach ($missions as $mission) {
                $mission->floorNames = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\MapFloorToName::class)->findBy(['missionId' => $mission->getId()], ['floorNumber' => 'ASC']);

                $missionDifficulties = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\MissionDifficulty::class)->findBy(['missionId' => $mission->getId()]);

                /* @var $missionDifficulty \DataAccess\Models\MissionDifficulty */
                foreach ($missionDifficulties as $missionDifficulty) {
                    if ($missionDifficulty->isVisible()) {
                        $mission->difficulties[] = $missionDifficulty->getDifficulty();
                    }
                }
            }
            $location->missions = $missions;
        }

    } else {
        $locations = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Location::class)->findBy(['game' => $request->game, 'slug' => $request->location]);
    }

    return $response->json($locations);
});

$klein->respond('GET', '/api/v1/games/[:game]/locations/[:location]/missions/[:mission]?', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    /* @var $location \DataAccess\Models\Location */
    $location = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Location::class)->findOneBy(['game' => $request->game, 'slug' => $request->location]);

    if ($location === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find location with game '{$request->game}' and location slug '{$request->location}'"
        ]);
    }

    if ($request->mission === null) {
        $missions = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Mission::class)->findBy(['locationId' => $location->getId()], ['order' => 'ASC']);
    } else {
        $missions = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Mission::class)->findBy(['locationId' => $location->getId(), 'slug' => $request->mission], ['order' => 'ASC']);
    }

    /* @var $mission \DataAccess\Models\Mission */
    foreach ($missions as $mission) {
        $missionDifficulties = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\MissionDifficulty::class)->findBy(['missionId' => $mission->getId()]);

        /* @var $missionDifficulty \DataAccess\Models\MissionDifficulty */
        foreach ($missionDifficulties as $missionDifficulty) {
            if ($missionDifficulty->isVisible()) {
                $mission->difficulties[] = $missionDifficulty->getDifficulty();
            }
        }

        $mission->floorNames = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\MapFloorToName::class)->findBy(['missionId' => $mission->getId()], ['floorNumber' => 'ASC']);
    }

    return $response->json($missions);
});

$klein->respond('GET', '/api/v1/games/[:game]/locations/[:location]/missions/[:mission]/[:difficulty]/map-metadata', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    /* @var $location \DataAccess\Models\Location */
    $location = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Location::class)->findOneBy(['game' => $request->game, 'slug' => $request->location]);

    if ($location === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find location with game '{$request->game}' and location slug '{$request->location}'"
        ]);
    }

    /* @var $mission \DataAccess\Models\Mission */
    $mission = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Mission::class)->findOneBy(['locationId' => $location->getId(), 'slug' => $request->mission]);

    if ($mission === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find mission with game '{$request->game}', location '{$request->location}', and mission slug '{$request->mission}'"
        ]);
    }

    $metadata = new \Controllers\ViewModels\MapMetadataViewModel();
    $metadata->name = $mission->getName();
    $metadata->type = $mission->getMissionType();
    $metadata->background = $mission->getBackgroundUrl();
    $metadata->tileLocation = buildTileUrlForMission($mission, $location->getGame(), $applicationContext);

    return $response->json($metadata);
});

function buildTileUrlForMission(\DataAccess\Models\Mission $mission, string $game, \DI\Container $applicationContext): string {
    $constants = new \Config\Constants();

    if ($mission->getMissionType() === \BusinessLogic\MissionType::ELUSIVE_TARGET) {
        /* @var $elusiveTarget \DataAccess\Models\ElusiveTarget */
        $elusiveTarget = $applicationContext->get(EntityManager::class)
            ->getRepository(\DataAccess\Models\ElusiveTarget::class)
            ->findOneBy(['missionId' => $mission->getId()]);

        if ($elusiveTarget === null) {
            throw new Exception("Could not find ET for an Elusive Target mission!");
        }

        return "{$constants->siteDomain}/img/jpg{$elusiveTarget->getImageUrl()}.jpg";
    } else {
        return "{$constants->siteDomain}/img/png/mission-thumbnails/{$game}/{$mission->getSlug()}.png";
    }
}

$klein->respond('GET', '/api/v1/games/[:game]/locations/[:location]/missions/[:mission]/[:difficulty]/map', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $cacheClient = $applicationContext->get(CacheClient::class);

    /* @var $game \DataAccess\Models\Game */
    $entityManager = $applicationContext->get(EntityManager::class);
    $game = $entityManager->getRepository(\DataAccess\Models\Game::class)->findOneBy(['slug' => $request->game]);

    /* @var $location \DataAccess\Models\Location */
    $location = $entityManager->getRepository(\DataAccess\Models\Location::class)->findOneBy(['game' => $request->game, 'slug' => $request->location]);

    /* @var $mission \DataAccess\Models\Mission */
    $mission = $entityManager->getRepository(\DataAccess\Models\Mission::class)->findOneBy(['locationId' => $location->getId(), 'slug' => $request->mission]);
    $mission->floorNames = $entityManager->getRepository(\DataAccess\Models\MapFloorToName::class)->findBy(['missionId' => $mission->getId()], ['floorNumber' => 'ASC']);

    if ($mission === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find mission with game '{$request->game}', location '{$request->location}', and mission slug '{$request->mission}'"
        ]);
    }

    if ($location === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find location with game '{$request->game}' and location slug '{$request->location}'"
        ]);
    }

    if ($game === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find game with slug '{$request->game}'"
        ]);
    }

    $cacheKey = \BusinessLogic\Caching\KeyBuilder::buildKey(['map', $mission->getId(), $request->difficulty]);

    return $response->json($cacheClient->retrieve($cacheKey, function() use ($applicationContext, $request, $response, $location, $mission, $game) {


        $nodes = $applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($mission->getId(), $request->difficulty);
        $forSniperAssassin = $mission->getMissionType() === \BusinessLogic\MissionType::SNIPER_ASSASSIN;
        $nodeCategories = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\NodeCategory::class)->findBy(['forMission' => !$forSniperAssassin, 'forSniperAssassin' => $forSniperAssassin], ['order' => 'ASC', 'group' => 'ASC']);

        /* @var $ledges \DataAccess\Models\Ledge[] */
        $ledges = $applicationContext->get(\Controllers\LedgeController::class)->getLedgesForMission($mission->getId());
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
        $foliage = $applicationContext->get(\Controllers\FoliageController::class)->getFoliageForMission($mission->getId());
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
        $disguiseRepository = $applicationContext->get(EntityManager::class)
            ->getRepository(\DataAccess\Models\Disguise::class);

        /* @var $disguises \DataAccess\Models\Disguise[] */
        $disguisesWithAreas = $disguiseRepository->findByMission($mission->getId());
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
            $formattedDisguise->order = $disguise->getOrder();
            $formattedDisguise->suit = $disguise->getSuit();
            $formattedDisguises[] = $formattedDisguise;
        }

        return [
            'game' => $game,
            'mission' => $mission,
            'nodes' => $nodes,
            'searchableNodes' => $applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($mission->getId(), $request->difficulty, true, true),
            'categories' => $nodeCategories,
            'ledges' => $formattedLedges,
            'foliage' => $formattedFoliage,
            'disguises' => $formattedDisguises];
    }));
});

$klein->respond('GET', '/api/v1/editor/templates', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $templates = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Item::class)->findBy([], ['name' => 'ASC']);
    $sortedTemplates = [];

    /* @var $template \DataAccess\Models\Item */
    foreach ($templates as $template) {
        if (!key_exists($template->getType(), $sortedTemplates)) {
            $sortedTemplates[$template->getType()] = [];
        }

        $sortedTemplates[$template->getType()][] = $template;
    }

    return $response->json($sortedTemplates);
});

$klein->respond('GET', '/api/v1/editor/icons', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $icons = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Icon::class)->findBy([], ['order' => 'ASC', 'icon' => 'ASC']);
    $sortedIcons = [];

    /* @var $icon \DataAccess\Models\Icon */
    foreach ($icons as $icon) {
        if (!key_exists($icon->getGroup(), $sortedIcons)) {
            $sortedIcons[$icon->getGroup()] = [];
        }

        $sortedIcons[$icon->getGroup()][] = $icon;
    }

    return $response->json($sortedIcons);
});

$klein->respond('GET', '/api/v1/elusive-targets', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $constants = new \Config\Constants();
    $settings = new \Config\Settings();
    /* @var $missionRepository \DataAccess\Repositories\MissionRepository */
    $missionRepository = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Mission::class);
    $elusiveTargets = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\ElusiveTarget::class)->findBy([], ['beginningTime' => 'DESC']);

    $viewModels = [];
    foreach ($elusiveTargets as $elusiveTarget) {
        /* @var $elusiveTarget \DataAccess\Models\ElusiveTarget */
        $viewModel = new \Controllers\ViewModels\ElusiveTargetViewModel();
        $viewModel->id = $elusiveTarget->getId();
        $viewModel->beginningTime = $elusiveTarget->getBeginningTime()->format(DateTime::ATOM);
        $viewModel->name = $elusiveTarget->getName();
        $viewModel->briefing = $elusiveTarget->getBriefing();
        $viewModel->endingTime = $elusiveTarget->getEndingTime()->format(DateTime::ATOM);
        $viewModel->tileUrl = $elusiveTarget->getImageUrl();
        $viewModel->videoBriefingUrl = $elusiveTarget->getVideoBriefingUrl();
        $viewModel->missionUrl = "{$missionRepository->buildUrlForMissionAndDifficulty($elusiveTarget->getMissionId(), 'standard')}";
        $viewModel->reactivated = $elusiveTarget->getReactivated();

        $viewModels[] = $viewModel;
    }

    return $response->json($viewModels);
});

// Web APIs
$klein->respond('GET', '/api/web/home', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $constants = new \Config\Constants();
    $games = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Game::class)->findAll();

    /* @var $missionRepository \DataAccess\Repositories\MissionRepository */
    /* @var $elusiveTargetRepository \DataAccess\Repositories\ElusiveTargetRepository */
    $missionRepository = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Mission::class);
    $elusiveTargetRepository = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\ElusiveTarget::class);
    $elusiveTargets = $elusiveTargetRepository->getActiveElusiveTargets();

    $elusiveTargetViewModels = [];
    foreach ($elusiveTargets as $elusiveTarget) {
        /* @var $elusiveTarget \DataAccess\Models\ElusiveTarget */
        $viewModel = new \Controllers\ViewModels\ElusiveTargetViewModel();
        $viewModel->id = $elusiveTarget->getId();
        $viewModel->beginningTime = $elusiveTarget->getBeginningTime()->format(DateTime::ATOM);
        $viewModel->name = $elusiveTarget->getName();
        $viewModel->briefing = $elusiveTarget->getBriefing();
        $viewModel->endingTime = $elusiveTarget->getEndingTime()->format(DateTime::ATOM);
        $viewModel->tileUrl = $elusiveTarget->getImageUrl();
        $viewModel->videoBriefingUrl = $elusiveTarget->getVideoBriefingUrl();
        $viewModel->missionUrl = "{$missionRepository->buildUrlForMissionAndDifficulty($elusiveTarget->getMissionId(), 'standard')}";
        $viewModel->reactivated = $elusiveTarget->getReactivated();

        $elusiveTargetViewModels[] = $viewModel;
    }
    $settings = new \Config\Settings();

    return $response->json([
        'games' => $games,
        'elusiveTargets' => $elusiveTargetViewModels,
        'environment' => $settings->loggingEnvironment
    ]);
});

$klein->respond('POST', '/api/web/user/login', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext, $klein) {
    $controller = $applicationContext->get(\Controllers\AuthenticationController::class);

    try {
        $token = $controller->loginUser($_POST['tokenType'], $_POST['accessToken']);

        $responseModel = new \Controllers\ViewModels\ApiResponseModel();
        $responseModel->token = $token;
        return $response->json($responseModel);
    } catch (\BusinessLogic\Authentication\Discord\DiscordAuthenticationException | \BusinessLogic\Authentication\Discord\UserNotInServerException $e) {
        $viewModel = new \Controllers\ViewModels\LoginViewModel();
        if ($e instanceof \BusinessLogic\Authentication\Discord\DiscordAuthenticationException) {
            $viewModel->messages[] = new \Controllers\ViewModels\AlertMessage('danger', $e->getMessage(), 'error-discord-auth');
        } else {
            $viewModel->messages[] = new \Controllers\ViewModels\AlertMessage('danger', $e->getMessage(), 'error-not-in-server');
        }

        $responseModel = new \Controllers\ViewModels\ApiResponseModel();
        $responseModel->token = null;
        $responseModel->data = $viewModel;
        return $response->json($responseModel);
    }
});

$klein->respond('POST', '/api/nodes', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }


    $user = getUserContextForToken($newToken, $applicationContext);
    /* @var $node \DataAccess\Models\Node */
    $node = $applicationContext->get(\Controllers\NodeController::class)->createNode(intval($_POST['mission-id']), $_POST['difficulty'], $_POST, $user);
    clearAllMapCaches($node->getMissionId(), $applicationContext);

    $response->code(201);

    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = transformNode($node, $applicationContext);
    return json_encode($responseModel);
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
    $nodeViewModel->quantity = $node->getQuantity();
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
    $notes = $applicationContext->get(EntityManager::class)
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
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
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
    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = $viewModel;

    clearAllMapCaches($ledge->getMissionId(), $applicationContext);

    return json_encode($responseModel);
});

function clearAllMapCaches(int $missionId, \DI\Container $applicationContext) {
    $cacheClient = $applicationContext->get(CacheClient::class);
    $cacheClient->delete([\BusinessLogic\Caching\KeyBuilder::buildKey(['map', $missionId, 'standard']),
        \BusinessLogic\Caching\KeyBuilder::buildKey(['map', $missionId, 'professional']),
        \BusinessLogic\Caching\KeyBuilder::buildKey(['map', $missionId, 'master'])]);
}

$klein->respond('GET', '/api/ledges/delete/[:ledgeId]', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to delete ledges!']);
        return $response->code(401);
    }

    /* @var $ledge \DataAccess\Models\Ledge */
    $ledge = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Ledge::class)->findOneBy(['id' => $request->ledgeId]);
    $entityManager = $applicationContext->get(EntityManager::class);
    $entityManager->remove($ledge);
    $entityManager->flush();

    clearAllMapCaches($ledge->getMissionId(), $applicationContext);

    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'Ledge deleted!'];
    return $response->json($responseModel);
});

$klein->respond('POST', '/api/foliage', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
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

    clearAllMapCaches($ledge->getMissionId(), $applicationContext);

    $response->code(201);

    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = $viewModel;
    return json_encode($responseModel);
});

$klein->respond('GET', '/api/foliage/delete/[:foliageId]', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to delete foliage!']);
        return $response->code(401);
    }

    /* @var $foliage \DataAccess\Models\Foliage */
    $foliage = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Foliage::class)->findOneBy(['id' => $request->foliageId]);
    $entityManager = $applicationContext->get(EntityManager::class);
    $entityManager->remove($foliage);
    $entityManager->flush();

    clearAllMapCaches($foliage->getMissionId(), $applicationContext);

    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'Foliage deleted!'];
    return $response->json($responseModel);
});

$klein->respond('POST', '/api/disguise-areas', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
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

    clearAllMapCaches($disguiseArea->getMissionId(), $applicationContext);

    $response->code(201);

    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = $viewModel;
    return json_encode($responseModel);
});

$klein->respond('POST', '/api/disguise-areas/copy', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    if (!isset($_POST['original-disguise']) || !isset($_POST['target-disguise'])) {
        $response->code(400);
        return $response->body(json_encode(['message' => 'You must select a source and target disguise!']));
    }

    $originalDisguiseId = intval($_POST['original-disguise']);
    $targetDisguiseId = intval($_POST['target-disguise']);

    if ($originalDisguiseId === $targetDisguiseId) {
        $response->code(400);
        return $response->body(json_encode(['message' => 'Original and Target Disguises cannot be the same!']));
    }

    /* @var $disguiseAreas \DataAccess\Models\DisguiseArea[] */
    $entityManager = $applicationContext->get(EntityManager::class);
    $entityManager->getConnection()->exec('DELETE FROM `disguise_areas` WHERE `disguise_id` = ' . intval($targetDisguiseId));
    $disguiseAreas = $entityManager->getRepository(\DataAccess\Models\DisguiseArea::class)->findBy(['disguiseId' => $originalDisguiseId]);
    $missionId = -1;
    foreach ($disguiseAreas as $disguiseArea) {
        $newDisguiseArea = new \DataAccess\Models\DisguiseArea();
        $newDisguiseArea->setMissionId($disguiseArea->getMissionId());
        $newDisguiseArea->setType($disguiseArea->getType());
        $newDisguiseArea->setDisguiseId($targetDisguiseId);
        $newDisguiseArea->setLevel($disguiseArea->getLevel());
        $newDisguiseArea->setVertices($disguiseArea->getVertices());
        $entityManager->persist($newDisguiseArea);

        $missionId = $disguiseArea->getMissionId();
    }
    $entityManager->flush();

    clearAllMapCaches($missionId, $applicationContext);

    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    return json_encode($responseModel);
});

$klein->respond('GET', '/api/disguise-areas/delete/[:areaId]', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to delete disguise areas!']);
        return $response->code(401);
    }

    /* @var $disguiseArea \DataAccess\Models\DisguiseArea */
    $disguiseArea = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\DisguiseArea::class)->findOneBy(['id' => $request->areaId]);
    $entityManager = $applicationContext->get(EntityManager::class);
    $entityManager->remove($disguiseArea);
    $entityManager->flush();

    clearAllMapCaches($disguiseArea->getMissionId(), $applicationContext);

    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'Disguise area deleted!'];
    return $response->json($responseModel);
});

$klein->respond('POST', '/api/nodes/move', function (\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    $applicationContext->get(\Controllers\NodeController::class)->moveNode(intval($_POST['node-id']), $_POST['latitude'], $_POST['longitude']);
    /* @var $node \DataAccess\Models\Node */
    $node = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Node::class)->find($_POST['node-id']);
    clearAllMapCaches($node->getMissionId(), $applicationContext);


    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'OK'];
    return json_encode($responseModel);
});

$klein->respond('POST', '/api/nodes/edit/[:nodeId]', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to modify nodes!']);
        return $response->code(401);
    }

    /* @var $user \DataAccess\Models\User */
    $user = getUserContextForToken($newToken, $applicationContext);
    $roles = $user->getRolesAsInts();
    if (!\BusinessLogic\UserRole::hasAccess($roles, [\BusinessLogic\UserRole::TRUSTED_EDITOR])) {
        print json_encode(['message' => 'You do not have permission to delete nodes!']);
        return $response->code(403);
    }

    /* @var $node \DataAccess\Models\Node */
    $node = $applicationContext->get(\Controllers\NodeController::class)->editNode(intval($request->nodeId), intval($_POST['mission-id']), $_POST['difficulty'], $_POST, $user);
    clearAllMapCaches($node->getMissionId(), $applicationContext);

    $response->code(200);

    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = transformNode($node, $applicationContext);
    return json_encode($responseModel);
});

$klein->respond('GET', '/api/nodes/delete/[:nodeId]', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to modify nodes!']);
        return $response->code(401);
    }

    /* @var $user \DataAccess\Models\User */
    $user = getUserContextForToken($newToken, $applicationContext);
    $roles = $user->getRolesAsInts();
    if (!\BusinessLogic\UserRole::hasAccess($roles, [\BusinessLogic\UserRole::TRUSTED_EDITOR])) {
        $response->code(403);
        return $response->json(['message' => 'You do not have permission to delete nodes!']);
    }

    /* @var $node \DataAccess\Models\Node */
    $node = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\Node::class)->findOneBy(['id' => $request->nodeId]);
    if ($node === null) {
        $response->code(404);
        return $response->json(['message' => 'Could not find the node to delete!']);
    }
    $notes = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\NodeNote::class)->findBy(['nodeId' => $request->nodeId]);
    foreach ($notes as $note) {
        $applicationContext->get(EntityManager::class)->remove($note);
    }
    $applicationContext->get(EntityManager::class)->remove($node);
    $applicationContext->get(EntityManager::class)->flush();
    clearAllMapCaches($node->getMissionId(), $applicationContext);

    $responseModel = new \Controllers\ViewModels\ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'Node deleted!'];

    return $response->json($responseModel);
});

/**
 * @deprecated Should use /api/games/[:game]/locations/[:location]/missions/[:mission]/[:difficulty]/map instead
 */
$klein->respond('GET', '/api/nodes', function () use ($applicationContext) {
    $nodes = $applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($_GET['missionId'], $_GET['difficulty']);
    $nodeCategories = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\NodeCategory::class)->findAll();

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
    $disguiseRepository = $applicationContext->get(EntityManager::class)
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

$klein->respond('GET', '/api/twitch/current-streams', function() use ($applicationContext) {
    return $applicationContext->get(\Controllers\TwitchController::class)->getCurrentStreams();
});

// Backend processes
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

$klein->respond('GET', '/api/sitemap.txt', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $constants = new \Config\Constants();
    $pages = [];
    // Static Pages
    $pages[] = $constants->siteDomain;
    $pages[] = "{$constants->siteDomain}/terms-of-use";
    $pages[] = "{$constants->siteDomain}/privacy-policy";
    // Location Select
    /* @var $locationRepository \DataAccess\Repositories\LocationRepository */
    /* @var $missionRepository \DataAccess\Repositories\MissionRepository */
    $entityManager = $applicationContext->get(EntityManager::class);
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
            $pages[] = "{$constants->siteDomain}/games/{$game->getSlug()}#{$location->getSlug()}";

            /* @var $missions \DataAccess\Models\Mission[] */
            $missions = $missionRepository->findActiveMissionsByLocation($location->getId());
            foreach ($missions as $mission) {
                /* @var $difficulties \DataAccess\Models\MissionDifficulty[] */
                $difficulties = $applicationContext->get(EntityManager::class)->getRepository(\DataAccess\Models\MissionDifficulty::class)
                    ->findBy(['missionId' => $mission->getId()]);

                foreach ($difficulties as $difficulty) {
                    if (!$difficulty->isVisible()) {
                        continue;
                    }

                    $formattedDifficulty = strtolower($difficulty->getDifficulty());
                    $pages[] = "{$constants->siteDomain}/games/{$game->getSlug()}/{$location->getSlug()}/{$mission->getSlug()}/{$formattedDifficulty}";
                }
            }
        }
    }

    $response->header('Content-Type', 'text/plain');
    $pagesTxt = implode("\n", $pages);

    return $response->body($pagesTxt);
});

/* Admin Endpoints */
$klein->respond('GET', '/api/admin/migrate', function() {
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

$klein->respond('DELETE', '/api/admin/cache', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $config = new Config\Settings();
    if ($config->accessKey !== $_GET['access-key']) {
        return http_response_code(404);
    }

    $cacheClient = $applicationContext->get(CacheClient::class);
    $cacheClient->delete($cacheClient->keys('hitman2maps:map*'));

    return $response->code(204);
});

$klein->onHttpError(function (int $code, \Klein\Klein $router) {
    $router->response()->code($code);
    switch ($code) {
        case 403:
            $router->response()->json([
                'message' => 'Forbidden',
                'uri' => $router->request()->uri()
            ]);
            break;
        case 404:
            $router->response()->json([
                'message' => "Could not find route with URI {$router->request()->uri()}",
                'uri' => $router->request()->uri()
            ]);
            break;
        case 500:
            $router->response()->json([
                'message' => 'It appears that something went horribly wrong, and we are unable to handle your request at this time. Please try again in a few moments.',
                'uri' => $router->request()->uri()
            ]);
            break;
        default:
            $router->response()->json([
                'message' => "Welp, something unexpected happened with error code: {$code}",
                'uri' => $router->request()->uri()
            ]);
    }
});

$klein->onError(function (\Klein\Klein $klein, $msg, $type, Throwable $err) {
    error_log($err);
    \Rollbar\Rollbar::log(\Rollbar\Payload\Level::ERROR, $err);
    $klein->response()->code(500);

    $klein->response()->json([
        'message' => 'It appears that something went horribly wrong, and we are unable to handle your request at this time. Please try again in a few moments.',
        'uri' => $klein->request()->uri()
    ]);
});

//--> Roulette
$klein->respond('GET', '/api/roulette/spins', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $spinId = $_GET['spinId'];

    return $applicationContext->get(Client::class)->get("hitmaps-roulette:{$spinId}");
});

$klein->respond('POST', '/api/roulette/spins', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $requestBody = json_decode($request->body(), true);

    if ($requestBody === null) {
        return $response->code(400);
    }

    $spinId = uniqid('', true);
    $applicationContext->get(Client::class)->set("hitmaps-roulette:{$spinId}", $request->body());

    return $response->code(200)->body([
        'id' => $spinId
    ]);
});

$klein->respond('GET', '/api/roulette/matchups/[:matchupId]', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $matchupId = $request->matchupId;

    $playerName = isset($_GET['name']) ? $_GET['name'] : '';
    $matchup = getMatchupInformation($matchupId, $applicationContext, $playerName);

    if ($matchup !== null) {
        return $response->json($matchup);
    }

    return $response->code(404);
});

function getMatchupInformation($matchupId, \DI\Container $applicationContext, $playerName = '') {
    /* @var $matchup RouletteMatchup */
    $entityManager = $applicationContext->get(EntityManager::class);
    $matchup = $entityManager
        ->getRepository(RouletteMatchup::class)
        ->findOneBy(['matchupId' => $matchupId]);

    if ($playerName !== '') {
        $currentMillisecond = microtime(true) * 1000;
        if ($matchup->getPlayerOneName() === $playerName) {
            $matchup->setPlayerOneLastPing($currentMillisecond);
        } elseif ($matchup->getPlayerTwoName() === $playerName) {
            $matchup->setPlayerTwoLastPing($currentMillisecond);
        }
        $entityManager->persist($matchup);
        $entityManager->flush();
    }

    $matchup->currentTime = new DateTime('now', new DateTimeZone('UTC'));
    $matchup->remainingTimeInSeconds = calculateRemainingMatchTime($matchup);
    $matchup->pretime = $matchup->currentTime < $matchup->getSpinTime();
    $matchup->remainingPretimeInSeconds = calculatePretimeRemaining($matchup);
    $matchup->showTimer = $matchup->getMatchLength() !== 'NO TIME LIMIT';

    // Formatting
    $matchup->formattedCurrentTime = $matchup->currentTime->format(DATE_ISO8601);
    $matchup->formattedSpinTime = $matchup->getSpinTime()->format(DATE_ISO8601);
    $matchup->formattedPlayerOneCompleteTime = $matchup->getPlayerOneCompleteTime() ? $matchup->getPlayerOneCompleteTime()->format(DATE_ISO8601) : null;
    $matchup->formattedPlayerTwoCompleteTime = $matchup->getPlayerTwoCompleteTime() ? $matchup->getPlayerTwoCompleteTime()->format(DATE_ISO8601) : null;

    return $matchup;
}

function calculateRemainingMatchTime(RouletteMatchup $matchup): int {
    if ($matchup->getMatchLength() === 'NO TIME LIMIT') {
        return -1;
    }

    $matchEndTime = (clone $matchup->getSpinTime())->modify($matchup->getMatchLength());
    $difference = $matchEndTime->diff($matchup->currentTime);

    if ($difference->invert === 0) {
        return 0;
    }

    return ($difference->h * 60 * 60) + ($difference->i * 60) + $difference->s;
}

function calculatePretimeRemaining(RouletteMatchup $matchup) {
    $difference = $matchup->getSpinTime()->diff($matchup->currentTime);

    if ($difference->invert === 0) {
        return 0;
    }

    return ($difference->h * 60 * 60) + ($difference->i * 60) + $difference->s;
}

$klein->respond('POST', '/api/roulette/matchups', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $requestBody = json_decode($request->body(), true);

    if ($requestBody === null) {
        return $response->json(['message' => 'Could not decode JSON'])->code(400);
    }

    $matchupId = '';
    $attempt = 0;
    while ($attempt < 20) {
        $matchupId = preg_replace("/[^A-Za-z0-9 ]/", '', uniqid('', true));

        $existingMatchup = $applicationContext->get(EntityManager::class)
            ->getRepository(RouletteMatchup::class)
            ->findOneBy(['matchupId' => $matchupId]);

        if ($existingMatchup === null) {
            break;
        }

        $attempt++;
    }

    $rouletteMatchup = new RouletteMatchup();
    $rouletteMatchup->setMatchupData('');
    $rouletteMatchup->setMatchupId($matchupId);
    $rouletteMatchup->setPlayerOneName($requestBody['playerOneName']);
    $rouletteMatchup->setPlayerTwoName($requestBody['playerTwoName']);
    $rouletteMatchup->setPlayerOneLastPing(0);
    $rouletteMatchup->setPlayerTwoLastPing(0);
    $rouletteMatchup->setTournamentMatchId($requestBody['tournamentMatchId']);
    $spinTime = new DateTime('now', new DateTimeZone('UTC'));
    $spinTime->modify('-1 day');
    $rouletteMatchup->setSpinTime($spinTime);
    $rouletteMatchup->setMatchLength('60 minutes');

    $applicationContext->get(EntityManager::class)->persist($rouletteMatchup);
    $applicationContext->get(EntityManager::class)->flush();

    return $response->json(['matchupId' => $matchupId]);
});

$klein->respond('PATCH', '/api/roulette/matchups/[:matchupId]', function(\Klein\Request $request, \Klein\Response $response) use ($applicationContext) {
    $requestBody = json_decode($request->body(), true);

    if ($requestBody === null) {
        $response->code(400);
        return $response->json(['message' => 'Could not decode JSON']);
    }

    /* @var $matchup RouletteMatchup|null */
    $matchup = $applicationContext->get(EntityManager::class)->getRepository(RouletteMatchup::class)->findOneBy(['matchupId' => $request->matchupId]);
    if ($matchup === null) {
        return $response->code(404);
    }

    /** @noinspection PhpUnusedLocalVariableInspection */
    $responseProperty = '';
    $decodedMatchupData = json_decode($requestBody['matchupData'], true);
    if (isset($requestBody['matchupData']) && $decodedMatchupData !== null) {
        $matchup->setMatchupData($requestBody['matchupData']);

        if ($requestBody['clearWinner']) {
            $matchup->setWinner(null);
        }

        $matchup->setPlayerOneCompleteTime(null);
        $matchup->setPlayerTwoCompleteTime(null);
        if ($decodedMatchupData['show']) {
            $spinTime = new DateTime('now', new DateTimeZone('UTC'));
            if ($decodedMatchupData['matchTime'] && $spinTime < new DateTime($decodedMatchupData['matchTime'])) {
                $spinTime = new DateTime($decodedMatchupData['matchTime']);
            }
            $matchup->setSpinTime($spinTime);

            if (intval($decodedMatchupData['matchDuration']) !== -1) {
                $matchup->setMatchLength("{$decodedMatchupData['matchDuration']} minutes");
            } else {
                $matchup->setMatchLength('NO TIME LIMIT');
            }
        } else {
            $now = new DateTime('now', new DateTimeZone('UTC'));
            $now->modify('-2 hours');
            $matchup->setSpinTime($now);
        }

        $responseProperty = 'matchupData';
    } elseif (isset($requestBody['lastPing']) && isset($requestBody['playerName'])) {
        if ($requestBody['playerName'] === $matchup->getPlayerOneName()) {
            $matchup->setPlayerOneLastPing($requestBody['lastPing']);
        } elseif ($requestBody['playerName'] === $matchup->getPlayerTwoName()) {
            $matchup->setPlayerTwoLastPing($requestBody['lastPing']);
        } else {
            $response->code(400);
            return $response->json(['message' => 'Could not find player!']);
        }
        $responseProperty = 'lastPing';
    } elseif (isset($requestBody['action'])) {
        $responseProperty = 'action';

        switch ($requestBody['action']) {
            case 'complete':
                $now = new DateTimeImmutable('now', new DateTimeZone('UTC'));
                if ($requestBody['player'] === $matchup->getPlayerOneName()) {
                    $matchup->setPlayerOneCompleteTime($now);
                } elseif ($requestBody['player'] === $matchup->getPlayerTwoName()) {
                    $matchup->setPlayerTwoCompleteTime($now);
                } else {
                    $response->code(400);
                    return $response->json(['message' => 'Malformed request']);
                }
                break;
            case 'verify':
                if ($requestBody['player'] === $matchup->getPlayerOneName()) {
                    $winner = 1;
                } elseif ($requestBody['player'] === $matchup->getPlayerTwoName()) {
                    $winner = 2;
                } else {
                    $response->code(400);
                    return $response->json(['message' => 'Malformed request']);
                }
                $matchup->setWinner($winner);
                $matchup->setPlayerOneCompleteTime(null);
                $matchup->setPlayerTwoCompleteTime(null);
                break;
            case 'reject':
                if ($requestBody['player'] === $matchup->getPlayerOneName()) {
                    $matchup->setPlayerOneCompleteTime(null);
                } elseif ($requestBody['player'] === $matchup->getPlayerTwoName()) {
                    $matchup->setPlayerTwoCompleteTime(null);
                } else {
                    $response->code(400);
                    return $response->json(['message' => 'Malformed request']);
                }
                break;
        }
    } else {
        $response->code(400);
        return $response->json(['message' => 'Request JSON not supported.']);
    }

    $applicationContext->get(EntityManager::class)->persist($matchup);
    $applicationContext->get(EntityManager::class)->flush();

    switch ($responseProperty) {
        case 'matchupData':
            $pushBody = getMatchupInformation($matchup->getMatchupId(), $applicationContext);
            $matchupData = json_decode($pushBody->matchupData, true);
            if ($matchupData !== null) {
                $spinResults = json_encode($matchupData['spinResults']);
                $spinHistory = new \DataAccess\Models\SpinHistory();
                $spinHistory->setSpinData($spinResults);
                $applicationContext->get(EntityManager::class)->persist($spinHistory);
                $applicationContext->get(EntityManager::class)->flush();
            }
            break;
        default:
            $pushBody = null;
            break;
    }

    if ($pushBody !== null) {
        try {
            $applicationContext->get(Client::class)->publish('ws', json_encode([
                'type' => 'matchupData',
                'key' => $matchup->getMatchupId(),
                'data' => $pushBody
            ]));
        } catch (Exception $e) {
            //-- Nothing for now. Just don't want to break anything :P
        }
    }

    return $response->json($requestBody[$responseProperty]);
});

$klein->dispatch();

function userIsLoggedIn(\Klein\Request $request, \DI\Container $applicationContext, ?string &$outToken): bool {
    $outToken = null;

    /* @var $authorizationHeader string */
    $authorizationHeader = $request->headers()->get('Authorization');

    if ($authorizationHeader === null) {
        return false;
    }

    $tokenGenerator = $applicationContext->get(\BusinessLogic\Authentication\TokenGenerator::class);

    try {
        list($token) = sscanf($authorizationHeader, 'Bearer %s');
        $outToken = $tokenGenerator->validateAndRenewToken($token);

        return true;
    } catch (\BusinessLogic\Session\SessionException $e) {
        return false;
    }
}

function getUserContextForToken(string $token, \DI\Container $applicationContext): \DataAccess\Models\User {
    $tokenGenerator = $applicationContext->get(\BusinessLogic\Authentication\TokenGenerator::class);

    try {
        return $tokenGenerator->validate($token);
    } catch (\BusinessLogic\Session\SessionException $e) {
        return null;
    }
}


function bounceToLogin(\Klein\Klein $klein, \Klein\Response $response, string $redirectLocation = '') {
    $klein->service()->flash("An account is required to view this page.", 'danger');
    $redirectLocation = $redirectLocation === '' ? '' : '?redirectLocation=' . $redirectLocation;
    return $response->redirect('/user/login' . $redirectLocation);
}

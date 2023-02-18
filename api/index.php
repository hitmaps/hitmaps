<?php

use BusinessLogic\Authentication\Discord\DiscordAuthenticationException;
use BusinessLogic\Authentication\Discord\UserNotInServerException;
use BusinessLogic\Caching\CacheClient;
use BusinessLogic\Caching\KeyBuilder;
use BusinessLogic\MissionType;
use Config\Constants;
use Config\Settings;
use Controllers\DisguiseAreasController;
use Controllers\FoliageController;
use Controllers\LedgeController;
use Controllers\NodeController;
use Controllers\ViewModels\AlertMessage;
use Controllers\ViewModels\ApiResponseModel;
use Controllers\ViewModels\DisguiseAreaViewModel;
use Controllers\ViewModels\DisguiseViewModel;
use Controllers\ViewModels\LedgeViewModel;
use Controllers\ViewModels\LoginViewModel;
use Controllers\ViewModels\MissionViewModel;
use Controllers\ViewModels\NodeNoteViewModel;
use Controllers\ViewModels\NodeWithNotesViewModel;
use DataAccess\Models\Disguise;
use DataAccess\Models\DisguiseArea;
use DataAccess\Models\Game;
use DataAccess\Models\Location;
use DataAccess\Models\MapFloorToName;
use DataAccess\Models\Mission;
use DataAccess\Models\MissionVariant;
use DataAccess\Models\Node;
use DataAccess\Models\NodeCategory;
use DataAccess\Models\NodeDifficulty;
use DataAccess\Models\NodeNote;
use DataAccess\Models\RouletteMatchup;
use DI\Container;
use Doctrine\ORM\EntityManager;
use Klein\Request;
use Klein\Response;
use Predis\Client;

require __DIR__ . '/autoload.php';

$klein = new \Klein\Klein();

$klein->respond(function(Request $request, Response $response) use ($applicationContext) {
    if(isset($_SERVER['HTTP_ORIGIN'])) {
        $response->header('Access-Control-Allow-Origin', $_SERVER['HTTP_ORIGIN']);
    }
    $response->header('Access-Control-Allow-Headers', 'content-type,Authorization,x-readme-api-explorer,x-api-version');
    $response->header('Access-Control-Allow-Credentials', 'true');
    $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
});

// Public API calls
$klein->respond('GET', '/api/v1/games/[:game]?', function(Request $request, Response $response) use ($applicationContext) {
    if ($request->game === null) {
        $games = $applicationContext->get(EntityManager::class)->getRepository(Game::class)->findAll();
    } else {
        $games = $applicationContext->get(EntityManager::class)->getRepository(Game::class)->findBy(['slug' => $request->game]);
    }

    return $response->json($games);
});

$klein->respond('GET', '/api/v1/games/[:game]/locations/[:location]?', function (Request $request, Response $response) use ($applicationContext) {
    $game = $applicationContext->get(EntityManager::class)->getRepository(Game::class)->findOneBy(['slug' => $request->game]);

    if ($game === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find game '{$request->game}'"
        ]);
    }

    if ($request->location === null) {
        $locations = $applicationContext->get(EntityManager::class)->getRepository(Location::class)->findBy(['game' => $request->game], ['order' => 'ASC']);
        foreach ($locations as $location) {
            $missions = $applicationContext->get(EntityManager::class)->getRepository(Mission::class)->findActiveMissionsByLocation($location->getId());
            /* @var $mission Mission */
            foreach ($missions as $mission) {
                $mission->setIcon();
                $mission->difficulties = array_map(fn(MissionVariant $mv) => $mv->getVariant(), $mission->getVariants()->toArray());
                $mission->supportsFreelancer = false;

                foreach ($mission->getVariants()->toArray() as $variant) {
                    /* @var $variant MissionVariant */
                    if ($variant->isVisible() && str_contains($variant->getSlug(), 'freelancer')) {
                        $mission->supportsFreelancer = true;
                        break;
                    }
                }
                unset($mission->floorNames);
            }
            $location->missions = $missions;
        }

    } else {
        $locations = $applicationContext->get(EntityManager::class)->getRepository(Location::class)->findBy(['game' => $request->game, 'slug' => $request->location]);
    }

    return $response->json($locations);
});

$klein->respond('GET', '/api/v1/games/[:game]/locations/[:location]/missions/[:mission]?', function(Request $request, Response $response) use ($applicationContext) {
    /* @var $location Location */
    $location = $applicationContext->get(EntityManager::class)->getRepository(Location::class)->findOneBy(['game' => $request->game, 'slug' => $request->location]);

    if ($location === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find location with game '{$request->game}' and location slug '{$request->location}'"
        ]);
    }

    if ($request->mission === null) {
        $missions = $applicationContext->get(EntityManager::class)->getRepository(Mission::class)->findBy(['locationId' => $location->getId()], ['order' => 'ASC']);
    } else {
        $missions = $applicationContext->get(EntityManager::class)->getRepository(Mission::class)->findBy(['locationId' => $location->getId(), 'slug' => $request->mission], ['order' => 'ASC']);
    }

    return $response->json(array_map(fn(Mission $x) => new MissionViewModel($x), $missions));
});

function userIsAdmin(Request $request, Container $applicationContext, ?string &$newToken): bool {
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        return false;
    }

    $token = str_replace('Bearer ', '', $request->headers()->get('Authorization'));
    $userContext = getUserContextForToken($token, $applicationContext);

    return in_array(1, $userContext->getRolesAsInts());
}

//region Mission Variants
$klein->respond('POST', '/api/v1/mission-variants', function(Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsAdmin($request, $applicationContext, $newToken)) {
        return $response->code(401)->json(['message' => 'You must be logged in to make make edits to maps!']);
    }

    $body = json_decode($request->body(), true);
    $entityManager = $applicationContext->get(EntityManager::class);
    $mission = $entityManager->getRepository(Mission::class)->findOneBy(['id' => intval($body['missionId'])]);
    if ($mission === null) {
        return $response->code(404)->json(['message' => 'Mission not found.']);
    }

    $missionVariant = new MissionVariant();
    $missionVariant->setVariant($body['name']);
    $missionVariant->setMission($mission);
    $missionVariant->setIcon($body['icon']);
    $missionVariant->setSlug($body['slug']);
    $missionVariant->setDefault(false);
    $missionVariant->setVisible($body['visible']);
    $entityManager->persist($missionVariant);
    $entityManager->flush();

    $entityManager->getConnection()->executeQuery("INSERT INTO `node_to_mission_variants` (`node_id`, `variant_id`)
        SELECT `node_id`, {$missionVariant->getId()}
        FROM `node_to_mission_variants`
        WHERE `variant_id` = ".intval($body['sourceVariant']));

    $resp = new ApiResponseModel();
    $resp->token = $newToken;
    $resp->body = [];
    return $response->code(200)->json($resp);
});

$klein->respond('PUT', '/api/v1/mission-variants/[:id]', function(Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsAdmin($request, $applicationContext, $newToken)) {
        return $response->code(401)->json(['message' => 'You must be logged in to make make edits to maps!']);
    }

    $body = json_decode($request->body(), true);
    $entityManager = $applicationContext->get(EntityManager::class);
    $sql = "UPDATE `mission_to_difficulties`
        SET `difficulty` = ?,
            `visible` = ?,
            `icon` = ?,
            `slug` = ?
        WHERE `id` = ?";
    $stmt = $entityManager->getConnection()->prepare($sql);
    $stmt->bindParam(1, $body['name']);
    $stmt->bindParam(2, $body['visible']);
    $stmt->bindParam(3, $body['icon']);
    $stmt->bindParam(4, $body['slug']);
    $stmt->bindValue(5, intval($request->id));
    $stmt->execute();

    return $response->code(204);
});
//endregion

//region Map Data
$klein->respond('GET', '/api/v1/games/[:game]/locations/[:location]/missions/[:mission]/[:difficulty]/map', function(Request $request, Response $response) use ($applicationContext) {
    $cacheClient = $applicationContext->get(CacheClient::class);

    /* @var $game Game */
    $entityManager = $applicationContext->get(EntityManager::class);
    $game = $entityManager->getRepository(Game::class)->findOneBy(['slug' => $request->game]);

    /* @var $location Location */
    $location = $entityManager->getRepository(Location::class)->findOneBy(['game' => $request->game, 'slug' => $request->location]);

    /* @var $mission Mission */
    $mission = $entityManager->getRepository(Mission::class)->findOneBy(['locationId' => $location->getId(), 'slug' => $request->mission]);

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

    $cacheKey = KeyBuilder::buildKey(['map', $mission->getId(), $request->difficulty]);

    return $response->json($cacheClient->retrieve($cacheKey, function() use ($applicationContext, $request, $response, $location, $mission, $game) {
        $nodes = $applicationContext->get(NodeController::class)->getNodesForMissionV1($mission->getId(), $request->difficulty);
        $forSniperAssassin = $mission->getMissionType() === MissionType::SNIPER_ASSASSIN;
        $nodeCategories = $applicationContext->get(EntityManager::class)->getRepository(NodeCategory::class)->findBy(
            ['forMission' => !$forSniperAssassin, 'forSniperAssassin' => $forSniperAssassin],
            ['order' => 'ASC', 'group' => 'ASC']);

        /* @var $ledges \DataAccess\Models\Ledge[] */
        $ledges = $applicationContext->get(LedgeController::class)->getLedgesForMission($mission->getId());
        $formattedLedges = [];
        foreach ($ledges as $ledge) {
            $viewModel = new LedgeViewModel();
            $viewModel->id = $ledge->getId();
            $viewModel->missionId = $ledge->getMissionId();
            $viewModel->level = $ledge->getLevel();
            $viewModel->vertices = explode('|', $ledge->getVertices());
            $formattedLedges[] = $viewModel;
        }

        /* @var $foliage \DataAccess\Models\Foliage[] */
        $foliage = $applicationContext->get(FoliageController::class)->getFoliageForMission($mission->getId());
        $formattedFoliage = [];
        foreach ($foliage as $innerFoliage) {
            $viewModel = new LedgeViewModel();
            $viewModel->id = $innerFoliage->getId();
            $viewModel->missionId = $innerFoliage->getMissionId();
            $viewModel->level = $innerFoliage->getLevel();
            $viewModel->vertices = explode('|', $innerFoliage->getVertices());
            $formattedFoliage[] = $viewModel;
        }

        /* @var $disguiseRepository \DataAccess\Repositories\DisguiseRepository */
        $disguiseRepository = $applicationContext->get(EntityManager::class)
            ->getRepository(Disguise::class);

        /* @var $disguises Disguise[] */
        $disguisesWithAreas = $disguiseRepository->findByMission($mission->getId());
        $formattedDisguises = [];

        /* @var $formattedDisguise DisguiseViewModel */
        $formattedDisguise = null;
        foreach ($disguisesWithAreas as $disguiseOrArea) {
            if ($disguiseOrArea === null) {
                continue;
            }

            if ($disguiseOrArea instanceof DisguiseArea) {
                /* @var $area DisguiseArea */
                $area = $disguiseOrArea;
                $areaViewModel = new DisguiseAreaViewModel();
                $areaViewModel->id = $area->getId();
                $areaViewModel->missionId = $area->getMissionId();
                $areaViewModel->disguiseId = $area->getDisguiseId();
                $areaViewModel->level = $area->getLevel();
                $areaViewModel->type = $area->getType();
                $areaViewModel->vertices = explode('|', $area->getVertices());
                $formattedDisguise->areas[] = $areaViewModel;
                continue;
            }

            /* @var $disguise Disguise */
            $disguise = $disguiseOrArea;
            $formattedDisguise = new DisguiseViewModel();
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
            'searchableNodes' => $applicationContext->get(NodeController::class)->getNodesForMissionV1($mission->getId(), $request->difficulty, true, true),
            'categories' => $nodeCategories,
            'ledges' => $formattedLedges,
            'foliage' => $formattedFoliage,
            'disguises' => $formattedDisguises];
    }));
});

$klein->respond('GET', '/api/v2/games/[:game]/locations/[:location]/missions/[:mission]/nodes', function(Request $request, Response $response) use ($applicationContext) {
    $mission = getMissionFromRequest($applicationContext, $request);
    if ($mission === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find mission with game '{$request->game}', location '{$request->location}', and mission slug '{$request->mission}'"
        ]);
    }

    $nodes = $applicationContext->get(NodeController::class)->getNodesForMissionV2($mission->getId());
    $forSniperAssassin = $mission->getMissionType() === MissionType::SNIPER_ASSASSIN;
    $nodeCategories = $applicationContext->get(EntityManager::class)->getRepository(NodeCategory::class)->findBy(
        ['forMission' => !$forSniperAssassin, 'forSniperAssassin' => $forSniperAssassin],
        ['order' => 'ASC', 'group' => 'ASC']);

    return $response->json([
        'topLevelCategories' => [
            'Points of Interest',
            'Weapons and Tools',
            'Navigation'
        ],
        'nodes' => $nodes,
        'categories' => $nodeCategories
    ]);
});

function getMissionFromRequest(Container $applicationContext, Request $request): ?Mission {
    /* @var $game Game */
    $entityManager = $applicationContext->get(EntityManager::class);
    $game = $entityManager->getRepository(Game::class)->findOneBy(['slug' => $request->game]);

    /* @var $location Location */
    $location = $entityManager->getRepository(Location::class)->findOneBy(['game' => $request->game, 'slug' => $request->location]);

    return $location === null ?
        null :
        $entityManager->getRepository(Mission::class)->findOneBy(['locationId' => $location->getId(), 'slug' => $request->mission]);
}

$klein->respond('GET', '/api/v2/games/[:game]/locations/[:location]/missions/[:mission]/disguises', function(Request $request, Response $response) use ($applicationContext) {
    $mission = getMissionFromRequest($applicationContext, $request);

    if ($mission === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find mission with game '{$request->game}', location '{$request->location}', and mission slug '{$request->mission}'"
        ]);
    }

    /* @var $disguiseRepository \DataAccess\Repositories\DisguiseRepository */
    $disguiseRepository = $applicationContext->get(EntityManager::class)
        ->getRepository(Disguise::class);

    /* @var $disguises Disguise[] */
    $disguisesWithAreas = $disguiseRepository->findByMission($mission->getId());
    $formattedDisguises = [];

    /* @var $formattedDisguise DisguiseViewModel */
    foreach ($disguisesWithAreas as $disguiseOrArea) {
        if ($disguiseOrArea === null) {
            continue;
        }

        // We're not returning disguise areas unless the user asks for them
        if ($disguiseOrArea instanceof DisguiseArea) {
            continue;
        }

        /* @var $disguise Disguise */
        $disguise = $disguiseOrArea;
        $formattedDisguise = new DisguiseViewModel();
        $formattedDisguise->id = $disguise->getId();
        $formattedDisguise->name = $disguise->getName();
        $formattedDisguise->image = $disguise->getImage();
        $formattedDisguise->order = $disguise->getOrder();
        $formattedDisguise->suit = $disguise->getSuit();
        unset($formattedDisguise->areas);
        $formattedDisguises[] = $formattedDisguise;
    }

    return $response->json([
        'disguises' => $formattedDisguises
    ]);
});

$klein->respond('GET', '/api/v2/games/[:game]/locations/[:location]/missions/[:mission]/disguise-areas/[:id]', function(Request $request, Response $response) use ($applicationContext) {
    $mission = getMissionFromRequest($applicationContext, $request);

    if ($mission === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find mission with game '{$request->game}', location '{$request->location}', and mission slug '{$request->mission}'"
        ]);
    }

    /* @var $disguiseRepository \DataAccess\Repositories\DisguiseRepository */
    $disguiseRepository = $applicationContext->get(EntityManager::class)->getRepository(Disguise::class);

    /* @var $disguise Disguise|null */
    $disguise = $disguiseRepository->findOneBy(['id' => $request->id, 'missionId' => $mission->getId()]);

    if ($disguise === null) {
        return $response->code(404);
    }

    $disguiseAreas = $applicationContext->get(EntityManager::class)->getRepository(DisguiseArea::class)->findBy(['disguiseId' => $disguise->getId()]);

    return $response->code(200)->json([
        'disguiseAreas' => array_map(fn(DisguiseArea $da) => new DisguiseAreaViewModel($da), $disguiseAreas)
    ]);
});

$klein->respond('GET', '/api/v2/games/[:game]/locations/[:location]/missions/[:mission]/ledges', function(Request $request, Response $response) use ($applicationContext) {
    $mission = getMissionFromRequest($applicationContext, $request);
    if ($mission === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find mission with game '{$request->game}', location '{$request->location}', and mission slug '{$request->mission}'"
        ]);
    }

    /* @var $ledges \DataAccess\Models\Ledge[] */
    $ledges = $applicationContext->get(LedgeController::class)->getLedgesForMission($mission->getId());
    $formattedLedges = [];
    foreach ($ledges as $ledge) {
        $viewModel = new LedgeViewModel();
        $viewModel->id = $ledge->getId();
        $viewModel->missionId = $ledge->getMissionId();
        $viewModel->level = $ledge->getLevel();
        $viewModel->vertices = explode('|', $ledge->getVertices());
        $formattedLedges[] = $viewModel;
    }

    return $response->json([
        'ledges' => $formattedLedges
    ]);
});

$klein->respond('GET', '/api/v2/games/[:game]/locations/[:location]/missions/[:mission]/foliage', function(Request $request, Response $response) use ($applicationContext) {
    $mission = getMissionFromRequest($applicationContext, $request);
    if ($mission === null) {
        $response->code(400);
        return $response->json([
            'message' => "Could not find mission with game '{$request->game}', location '{$request->location}', and mission slug '{$request->mission}'"
        ]);
    }

    /* @var $foliage \DataAccess\Models\Foliage[] */
    $foliage = $applicationContext->get(FoliageController::class)->getFoliageForMission($mission->getId());
    $formattedFoliage = [];
    foreach ($foliage as $innerFoliage) {
        $viewModel = new LedgeViewModel();
        $viewModel->id = $innerFoliage->getId();
        $viewModel->missionId = $innerFoliage->getMissionId();
        $viewModel->level = $innerFoliage->getLevel();
        $viewModel->vertices = explode('|', $innerFoliage->getVertices());
        $formattedFoliage[] = $viewModel;
    }

    return $response->json([
        'foliage' => $formattedFoliage
    ]);
});
//endregion

$klein->respond('GET', '/api/v1/editor/templates', function(Request $request, Response $response) use ($applicationContext) {
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

$klein->respond('GET', '/api/v1/editor/icons', function(Request $request, Response $response) use ($applicationContext) {
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

// Web APIs
$klein->respond('GET', '/api/web/home', function(Request $request, Response $response) use ($applicationContext) {
    $games = $applicationContext->get(EntityManager::class)->getRepository(Game::class)->findAll();

    /* @var $missionRepository \DataAccess\Repositories\MissionRepository */
    /* @var $elusiveTargetRepository \DataAccess\Repositories\ElusiveTargetRepository */
    $missionRepository = $applicationContext->get(EntityManager::class)->getRepository(Mission::class);
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
        $viewModel->missionUrl = "{$missionRepository->buildUrlForMissionAndDifficulty($elusiveTarget->getMissionId(), 'professional')}";
        $viewModel->reactivated = $elusiveTarget->getReactivated();

        $elusiveTargetViewModels[] = $viewModel;
    }

    $settings = new Settings();

    return $response->json([
        'games' => $games,
        'elusiveTargets' => $elusiveTargetViewModels,
        'environment' => $settings->loggingEnvironment
    ]);
});

$klein->respond('POST', '/api/web/user/login', function(Request $request, Response $response) use ($applicationContext, $klein) {
    $controller = $applicationContext->get(\Controllers\AuthenticationController::class);

    try {
        $token = $controller->loginUser($_POST['tokenType'], $_POST['accessToken']);

        $responseModel = new ApiResponseModel();
        $responseModel->token = $token;
        return $response->json($responseModel);
    } catch (DiscordAuthenticationException | UserNotInServerException $e) {
        $viewModel = new LoginViewModel();
        if ($e instanceof DiscordAuthenticationException) {
            $viewModel->messages[] = new AlertMessage('danger', $e->getMessage(), 'error-discord-auth');
        } else {
            $viewModel->messages[] = new AlertMessage('danger', $e->getMessage(), 'error-not-in-server');
        }

        $responseModel = new ApiResponseModel();
        $responseModel->token = null;
        $responseModel->data = $viewModel;
        return $response->json($responseModel);
    }
});

$klein->respond('POST', '/api/nodes', function (Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make edits to maps!']);
        return $response->code(401);
    }


    $user = getUserContextForToken($newToken, $applicationContext);
    /* @var $node Node */
    $body = json_decode($request->body(), true);
    $node = $applicationContext->get(NodeController::class)->createNode($body, $user);

    $response->code(201);

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = transformNode($node);
    return json_encode($responseModel);
});

$klein->respond('PUT', '/api/nodes/[:nodeId]', function(Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make edits to maps!']);
        return $response->code(401);
    }


    $user = getUserContextForToken($newToken, $applicationContext);
    /* @var $node Node */
    $body = json_decode($request->body(), true);
    $node = $applicationContext->get(NodeController::class)->editNode($request->nodeId, $body, $user);

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = transformNode($node);
    return $response->json($responseModel);
});

function transformNode(Node $node): NodeWithNotesViewModel {
    $nodeViewModel = new NodeWithNotesViewModel();

    /* @var $note NodeNote */
    foreach ($node->getNotes()->toArray() as $note) {
        $innerViewModel = new NodeNoteViewModel();
        $innerViewModel->id = $note->getId();
        $innerViewModel->type = $note->getType();
        $innerViewModel->text = $note->getText();

        $nodeViewModel->notes[] = $innerViewModel;
    }

    $nodeViewModel->id = $node->getId();
    $nodeViewModel->missionId = $node->getMissionId();
    $nodeViewModel->type = $node->getType();
    $nodeViewModel->icon = $node->getIcon();
    $nodeViewModel->subgroup = $node->getSubgroup();
    $nodeViewModel->name = $node->getName();
    $nodeViewModel->target = $node->getTarget();
    $nodeViewModel->searchable = $node->isSearchable();
    unset($nodeViewModel->targetIcon);
    unset($nodeViewModel->difficulty);
    unset($nodeViewModel->approved);

    $nodeViewModel->level = $node->getLevel();
    $nodeViewModel->latitude = $node->getLatitude();
    $nodeViewModel->longitude = $node->getLongitude();
    $nodeViewModel->group = $node->getGroup();
    $nodeViewModel->image = $node->getImage();
    unset($nodeViewModel->tooltip);
    $nodeViewModel->quantity = $node->getQuantity();

    /* @var $missionVariant MissionVariant */
    foreach ($node->getVariants()->toArray() as $missionVariant) {
        $nodeViewModel->variants[] = $missionVariant->getId();
    }

    return $nodeViewModel;
}

$klein->respond('DELETE', '/api/nodes/[:nodeId]', function(Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to modify nodes!']);
        return $response->code(401);
    }

    /* @var $node Node */
    $node = $applicationContext->get(EntityManager::class)->getRepository(Node::class)->findOneBy(['id' => $request->nodeId]);
    if ($node === null) {
        $response->code(404);
        return $response->json(['message' => 'Could not find the node to delete!']);
    }
    $applicationContext->get(EntityManager::class)->remove($node);
    $applicationContext->get(EntityManager::class)->flush();

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'Node deleted!'];

    return $response->json($responseModel);
});

$klein->respond('POST', '/api/ledges', function (Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    $body = json_decode($request->body(), true);
    $ledge = $applicationContext->get(LedgeController::class)->createLedge($body['missionId'], $body['level'], $body['vertices']);

    $explodedVertices = explode('|', $ledge->getVertices());

    $viewModel = new LedgeViewModel();
    $viewModel->id = $ledge->getId();
    $viewModel->missionId = $ledge->getMissionId();
    $viewModel->level = $ledge->getLevel();
    $viewModel->vertices = $explodedVertices;

    $response->code(201);
    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = $viewModel;

    clearAllMapCaches($ledge->getMissionId(), $applicationContext);

    return json_encode($responseModel);
});

function clearAllMapCaches(int $missionId, Container $applicationContext) {
    $cacheClient = $applicationContext->get(CacheClient::class);
    $cacheClient->delete([KeyBuilder::buildKey(['map', $missionId, 'standard']),
        KeyBuilder::buildKey(['map', $missionId, 'professional']),
        KeyBuilder::buildKey(['map', $missionId, 'master'])]);
}

$klein->respond('DELETE', '/api/ledges/[:ledgeId]', function (Request $request, Response $response) use ($applicationContext) {
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

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'Ledge deleted!'];
    return $response->json($responseModel);
});

$klein->respond('POST', '/api/foliage', function (Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    $body = json_decode($request->body(), true);
    $ledge = $applicationContext->get(FoliageController::class)->createFoliage($body['missionId'], $body['level'], $body['vertices']);

    $explodedVertices = explode('|', $ledge->getVertices());

    $viewModel = new LedgeViewModel();
    $viewModel->id = $ledge->getId();
    $viewModel->missionId = $ledge->getMissionId();
    $viewModel->level = $ledge->getLevel();
    $viewModel->vertices = $explodedVertices;

    clearAllMapCaches($ledge->getMissionId(), $applicationContext);

    $response->code(201);

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = $viewModel;
    return json_encode($responseModel);
});

$klein->respond('DELETE', '/api/foliage/[:foliageId]', function (Request $request, Response $response) use ($applicationContext) {
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

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'Foliage deleted!'];
    return $response->json($responseModel);
});

$klein->respond('POST', '/api/disguise-areas', function (Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    $body = json_decode($request->body(), true);
    $disguiseArea = $applicationContext->get(DisguiseAreasController::class)->createDisguiseArea(intval($body['missionId']),
        intval($body['disguiseId']),
        intval($body['level']),
        $body['type'],
        $body['vertices']);

    $viewModel = new DisguiseAreaViewModel($disguiseArea);

    $response->code(201);

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = $viewModel;
    return json_encode($responseModel);
});

$klein->respond('POST', '/api/disguise-areas/copy', function (Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    $body = json_decode($request->body(), true);
    if (!isset($body['originalDisguise']) || !isset($body['targetDisguise'])) {
        $response->code(400);
        return $response->body(json_encode(['message' => 'You must select a source and target disguise!']));
    }

    $originalDisguiseId = intval($body['originalDisguise']);
    $targetDisguiseId = intval($body['targetDisguise']);

    if ($originalDisguiseId === $targetDisguiseId) {
        $response->code(400);
        return $response->body(json_encode(['message' => 'Original and Target Disguises cannot be the same!']));
    }

    /* @var $disguiseAreas DisguiseArea[] */
    $entityManager = $applicationContext->get(EntityManager::class);
    $entityManager->getConnection()->executeStatement("DELETE FROM `disguise_areas` WHERE `disguise_id` = {$targetDisguiseId}");
    $disguiseAreas = $entityManager->getRepository(DisguiseArea::class)->findBy(['disguiseId' => $originalDisguiseId]);
    foreach ($disguiseAreas as $disguiseArea) {
        $newDisguiseArea = new DisguiseArea();
        $newDisguiseArea->setMissionId($disguiseArea->getMissionId());
        $newDisguiseArea->setType($disguiseArea->getType());
        $newDisguiseArea->setDisguiseId($targetDisguiseId);
        $newDisguiseArea->setLevel($disguiseArea->getLevel());
        $newDisguiseArea->setVertices($disguiseArea->getVertices());
        $entityManager->persist($newDisguiseArea);
    }
    $entityManager->flush();

    $disguiseAreas = $applicationContext->get(EntityManager::class)->getRepository(DisguiseArea::class)->findBy(['disguiseId' => $targetDisguiseId]);

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = array_map(fn(DisguiseArea $da) => new DisguiseAreaViewModel($da), $disguiseAreas);
    return $response->json($responseModel);
});

$klein->respond('DELETE', '/api/disguise-areas/[:areaId]', function (Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to delete disguise areas!']);
        return $response->code(401);
    }

    /* @var $disguiseArea DisguiseArea */
    $disguiseArea = $applicationContext->get(EntityManager::class)->getRepository(DisguiseArea::class)->findOneBy(['id' => $request->areaId]);
    $entityManager = $applicationContext->get(EntityManager::class);
    $entityManager->remove($disguiseArea);
    $entityManager->flush();

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'Disguise area deleted!'];
    return $response->json($responseModel);
});

$klein->respond('PATCH', '/api/disguise-areas/[:areaId]/convert', function (Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to convert disguise areas!']);
        return $response->code(401);
    }

    /* @var $disguiseArea DisguiseArea */
    $disguiseArea = $applicationContext->get(EntityManager::class)->getRepository(DisguiseArea::class)->findOneBy(['id' => $request->areaId]);
    $entityManager = $applicationContext->get(EntityManager::class);
    $disguiseArea->setType($disguiseArea->getType() === 'trespassing' ? 'hostile' : 'trespassing');
    $entityManager->persist($disguiseArea);
    $entityManager->flush();

    $viewModel = new DisguiseAreaViewModel($disguiseArea);

    $response->code(200);

    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = $viewModel;

    return json_encode($responseModel);
});

$klein->respond('PATCH', '/api/nodes/[:nodeId]', function (Request $request, Response $response) use ($applicationContext) {
    $newToken = null;
    if (!userIsLoggedIn($request, $applicationContext, $newToken)) {
        print json_encode(['message' => 'You must be logged in to make make/suggest edits to maps!']);
        return $response->code(401);
    }

    $body = json_decode($request->body(), true);
    $applicationContext->get(NodeController::class)->moveNode(intval($request->nodeId), $body['latitude'], $body['longitude']);


    $responseModel = new ApiResponseModel();
    $responseModel->token = $newToken;
    $responseModel->data = ['message' => 'OK'];
    return $response->json($responseModel);
});

/**
 * @deprecated Should use /api/games/[:game]/locations/[:location]/missions/[:mission]/[:difficulty]/map instead
 */
$klein->respond('GET', '/api/nodes', function () use ($applicationContext) {
    $nodes = $applicationContext->get(NodeController::class)->getNodesForMissionV1($_GET['missionId'], $_GET['difficulty']);
    $nodeCategories = $applicationContext->get(EntityManager::class)->getRepository(NodeCategory::class)->findAll();

    /* @var $ledges \DataAccess\Models\Ledge[] */
    $ledges = $applicationContext->get(LedgeController::class)->getLedgesForMission($_GET['missionId']);
    $formattedLedges = [];
    foreach ($ledges as $ledge) {
        $viewModel = new LedgeViewModel();
        $viewModel->id = $ledge->getId();
        $viewModel->missionId = $ledge->getMissionId();
        $viewModel->level = $ledge->getLevel();
        $viewModel->vertices = explode('|', $ledge->getVertices());
        $formattedLedges[] = $viewModel;
    }

    /* @var $foliage \DataAccess\Models\Foliage[] */
    $foliage = $applicationContext->get(FoliageController::class)->getFoliageForMission($_GET['missionId']);
    $formattedFoliage = [];
    foreach ($foliage as $innerFoliage) {
        $viewModel = new LedgeViewModel();
        $viewModel->id = $innerFoliage->getId();
        $viewModel->missionId = $innerFoliage->getMissionId();
        $viewModel->level = $innerFoliage->getLevel();
        $viewModel->vertices = explode('|', $innerFoliage->getVertices());
        $formattedFoliage[] = $viewModel;
    }

    /* @var $disguiseRepository \DataAccess\Repositories\DisguiseRepository */
    $disguiseRepository = $applicationContext->get(EntityManager::class)
        ->getRepository(Disguise::class);

    /* @var $disguises Disguise[] */
    $disguisesWithAreas = $disguiseRepository->findByMission($_GET['missionId']);
    $formattedDisguises = [];

    /* @var $formattedDisguise DisguiseViewModel */
    $formattedDisguise = null;
    foreach ($disguisesWithAreas as $disguiseOrArea) {
        if ($disguiseOrArea === null) {
            continue;
        }

        if ($disguiseOrArea instanceof DisguiseArea) {
            /* @var $area DisguiseArea */
            $area = $disguiseOrArea;
            $areaViewModel = new DisguiseAreaViewModel();
            $areaViewModel->id = $area->getId();
            $areaViewModel->missionId = $area->getMissionId();
            $areaViewModel->disguiseId = $area->getDisguiseId();
            $areaViewModel->level = $area->getLevel();
            $areaViewModel->type = $area->getType();
            $areaViewModel->vertices = explode('|', $area->getVertices());
            $formattedDisguise->areas[] = $areaViewModel;
            continue;
        }

        /* @var $disguise Disguise */
        $disguise = $disguiseOrArea;
        $formattedDisguise = new DisguiseViewModel();
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

$klein->respond('POST', '/api/notifications', function(Request $request, Response $response) use ($applicationContext) {
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

// Backend processes
$klein->respond('GET', '/api/push-elusive-target-status', function() use ($applicationContext) {
    $config = new Config\Settings();
    if ($config->accessKey !== $_GET['access-key']) {
        return http_response_code(404);
    }

    $applicationContext->get(\BusinessLogic\ElusiveTargetNotificationSender::class)->sendElusiveTargetNotification();

    return http_response_code(204);
});

$klein->respond('GET', '/api/ioi/status', function(Request $request, Response $response) use ($applicationContext) {
    $config = new \Config\Settings();
    if ($config->accessKey !== $_GET['access-key']) {
        return $response->code(404);
    }

    $applicationContext->get(\BusinessLogic\IOIServices\ElusiveTargetUpdater::class)->retrieveLatestElusiveTargetFromIOI();
});

$klein->respond('GET', '/api/sitemap.txt', function(Request $request, Response $response) use ($applicationContext) {
    $constants = new Constants();
    $pages = [];
    // Static Pages
    $pages[] = $constants->siteDomain;
    $pages[] = "{$constants->siteDomain}/terms-of-use";
    $pages[] = "{$constants->siteDomain}/privacy-policy";
    // Location Select
    /* @var $locationRepository \DataAccess\Repositories\LocationRepository */
    /* @var $missionRepository \DataAccess\Repositories\MissionRepository */
    $entityManager = $applicationContext->get(EntityManager::class);
    $locationRepository = $entityManager->getRepository(Location::class);
    $missionRepository = $entityManager->getRepository(Mission::class);
    /* @var $games Game[] */
    $games = $entityManager->getRepository(Game::class)->findAll();
    foreach ($games as $game) {
        $pages[] = "{$constants->siteDomain}/games/{$game->getSlug()}";

        // Get locations
        /* @var $locations Location[] */
        $locations = $locationRepository->findByGame($game->getSlug());
        foreach ($locations as $location) {
            $pages[] = "{$constants->siteDomain}/games/{$game->getSlug()}#{$location->getSlug()}";

            /* @var $missions Mission[] */
            $missions = $missionRepository->findActiveMissionsByLocation($location->getId());
            foreach ($missions as $mission) {
                $pages[] = "{$constants->siteDomain}/games/{$game->getSlug()}/{$location->getSlug()}/{$mission->getSlug()}";
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

$klein->respond('DELETE', '/api/admin/cache', function(Request $request, Response $response) use ($applicationContext) {
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
$klein->respond('GET', '/api/roulette/spins', function(Request $request, Response $response) use ($applicationContext) {
    $spinId = $_GET['spinId'];

    return $applicationContext->get(Client::class)->get("hitmaps-roulette:{$spinId}");
});

$klein->respond('POST', '/api/roulette/spins', function(Request $request, Response $response) use ($applicationContext) {
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

$klein->respond('GET', '/api/roulette/matchups/[:matchupId]', function(Request $request, Response $response) use ($applicationContext) {
    $matchupId = $request->matchupId;

    $playerName = isset($_GET['name']) ? $_GET['name'] : '';
    $matchup = getMatchupInformation($matchupId, $applicationContext, $playerName);

    if ($matchup !== null) {
        return $response->json($matchup);
    }

    return $response->code(404);
});

function getMatchupInformation($matchupId, Container $applicationContext, $playerName = '') {
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

$klein->respond('POST', '/api/roulette/matchups', function(Request $request, Response $response) use ($applicationContext) {
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

$klein->respond('PATCH', '/api/roulette/matchups/[:matchupId]', function(Request $request, Response $response) use ($applicationContext) {
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

function userIsLoggedIn(Request $request, Container $applicationContext, ?string &$outToken): bool {
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

function getUserContextForToken(string $token, Container $applicationContext): ?\DataAccess\Models\User {
    $tokenGenerator = $applicationContext->get(\BusinessLogic\Authentication\TokenGenerator::class);

    try {
        return $tokenGenerator->validate($token);
    } catch (\BusinessLogic\Session\SessionException $e) {
        return null;
    }
}

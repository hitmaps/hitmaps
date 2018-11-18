<?php

require __DIR__ . '/autoload.php';

SassCompiler::run("scss/", "css/", "scss_formatter_compressed");

$loader = new Twig_Loader_Filesystem(__DIR__ . '/resources/views');
$twig = new Twig_Environment($loader);

$klein = new \Klein\Klein();

$klein->respond('GET', '/', function () use ($twig, $applicationContext) {
    /* @var $games \DataAccess\Models\Game[] */
    $games = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Game::class)->findAll();

    $viewModels = [];
    foreach ($games as $game) {
        $gameViewModel = new \ViewModels\GameViewModel();
        $gameViewModel->tagline = $game->getTagline();
        $gameViewModel->fullName = $game->getFullName();
        $gameViewModel->slug = $game->getSlug();

        $viewModels[] = $gameViewModel;
    }

    return \Controllers\Renderer::render('game-select.twig', $twig, $viewModels);
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
    /* @var $missions \DataAccess\Models\Mission[] */
    $missions = $applicationContext->get(\Doctrine\ORM\EntityManager::class)->getRepository(\DataAccess\Models\Mission::class)
        ->findBy(['locationId' => $location->getId()]);

    $locationViewModel = new \ViewModels\LocationViewModel();
    $locationViewModel->name = $location->getDestination();
    $locationViewModel->game = $request->game;
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

    /* @var $location \DataAccess\Models\Location */
    $location = $applicationContext->get(\Doctrine\ORM\EntityManager::class)
        ->getRepository(\DataAccess\Models\Location::class)
        ->findOneBy(['id' => $mission->getLocationId()]);

    $viewModel->locationNameOne = $location->getDestination();
    $viewModel->mapFolderName = $location->getMapFolderName();
    $viewModel->mapCenterLatitude = $location->getMapCenterLatitude();
    $viewModel->mapCenterLongitude = $location->getMapCenterLongitude();

    if (userIsLoggedIn()) {
        /* @var $user \DataAccess\Models\User */
        $user = \BusinessLogic\Session\Session::read('userContext');
        $roles = $user->getRolesAsInts();

        if (\BusinessLogic\UserRole::hasAccess($roles, [\BusinessLogic\UserRole::TRUSTED_EDITOR])) {
            $viewModel->editorTitle = 'Add Change';
        } else {
            $viewModel->editorTitle = 'Suggest Edit';
        }
    }

    $viewModel->nodes = $applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($viewModel->missionId, $request->difficulty, true);

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
    return json_encode($node);
});

$klein->respond('GET', '/api/nodes', function () use ($applicationContext) {
    return json_encode($applicationContext->get(\Controllers\NodeController::class)->getNodesForMission($_GET['missionId'], $_GET['difficulty']));
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
    switch ($code) {
        case 403:
            $router->response()->body(\Controllers\Renderer::render('403.twig', $twig));
            break;
        case 404:
            $router->response()->body(\Controllers\Renderer::render('404.twig', $twig));
            break;
        case 500:
            $router->response()->body(\Controllers\Renderer::render('500.twig', $twig));
            break;
        default:
            $router->response()->body("Welp, something unexpected happened with error code: {$code}");
    }
});

$klein->onError(function (\Klein\Klein $klein, $msg, $type, Throwable $err) use ($twig) {
    error_log($err);
    \Rollbar\Rollbar::log(\Rollbar\Payload\Level::ERROR, $err);
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
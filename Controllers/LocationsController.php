<?php

namespace Controllers;


use BusinessLogic\Game;
use DataAccess\Models\Campaign;
use DataAccess\Models\Location;
use DataAccess\Models\Mission;
use DataAccess\Repositories\LocationRepository;
use DataAccess\Repositories\MissionRepository;
use Doctrine\ORM\EntityManager;
use ViewModels\GameViewModel;
use ViewModels\LocationViewModel;
use ViewModels\MissionViewModel;

class LocationsController {
    /* @var $locationRepository LocationRepository */
    private $locationRepository;

    /* @var $missionRepository MissionRepository */
    private $missionRepository;

    private $campaignRepository;

    public function __construct(EntityManager $entityManager) {
        $this->locationRepository = $entityManager->getRepository(Location::class);
        $this->missionRepository = $entityManager->getRepository(Mission::class);
        $this->campaignRepository = $entityManager->getRepository(Campaign::class);
    }

    public function getLocationsAndMissionsForGame(string $game) {
        /* @var $campaigns Campaign[] */
        $campaigns = $this->campaignRepository->findAll();
        $keyValueCampaigns = [];

        /* @var $campaign Campaign */
        foreach ($campaigns as $campaign) {
            $keyValueCampaigns[$campaign->getId()] = $campaign->getName();
        }

        $locations = $this->locationRepository->findByGame($game);

        $viewModel = new GameViewModel();
        $viewModel->game = $game === Game::HITMAN ? 'HITMAN™' : 'HITMAN™ 2';
        $viewModel->locations = [];

        /* @var $location Location */
        foreach ($locations as $location) {
            $locationViewModel = new LocationViewModel();
            $locationViewModel->name = $location->getDestination();
            $locationViewModel->country = $location->getDestinationCountry();
            $locationViewModel->missions = [];

            $missions = $this->missionRepository->findActiveMissionsByLocation($location->getId());

            /* @var $mission Mission */
            foreach ($missions as $mission) {
                $missionViewModel = new MissionViewModel();
                $missionViewModel->name = $mission->getName();
                $missionViewModel->hasProfessionalMode = $mission->isProfessionalMode();

                if ($mission->getCampaignId() !== null) {
                    $missionViewModel->campaign = $keyValueCampaigns[$mission->getCampaignId()];
                }
                $locationViewModel->missions[] = $missionViewModel;
            }

            $viewModel->locations[] = $locationViewModel;
        }

        return $viewModel;
    }
}
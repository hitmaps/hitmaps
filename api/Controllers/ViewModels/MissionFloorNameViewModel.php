<?php

namespace Controllers\ViewModels;

use DataAccess\Models\MapFloorToName;

class MissionFloorNameViewModel {
    public int $id;
    public int $missionId;
    public int $floorNumber;
    public string $nameKey;

    public function __construct(MapFloorToName $floorName) {
        $this->id = $floorName->getId();
        $this->missionId = $floorName->getMission()->getId();
        $this->floorNumber = $floorName->getFloorNumber();
        $this->nameKey = $floorName->getNameKey();
    }
}
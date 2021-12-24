<?php


namespace Controllers\ViewModels;


use DataAccess\Models\MissionVariant;

class MissionVariantViewModel {
    public int $id;
    public int $missionId;
    public string $name;
    public bool $visible;

    public function __construct(MissionVariant $variant) {
        $this->id = $variant->getId();
        $this->missionId = $variant->getMission()->getId();
        $this->name = $variant->getVariant();
        $this->visible = $variant->isVisible();
    }
}
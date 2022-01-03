<?php


namespace Controllers\ViewModels;


use DataAccess\Models\MissionVariant;

class MissionVariantViewModel {
    public int $id;
    public int $missionId;
    public string $name;
    public bool $visible;
    public string $icon;
    public string $slug;
    public bool $default;

    public function __construct(MissionVariant $variant) {
        $this->id = $variant->getId();
        $this->missionId = $variant->getMission()->getId();
        $this->name = $variant->getVariant();
        $this->visible = $variant->isVisible();
        $this->icon = $variant->getIcon();
        $this->slug = $variant->getSlug();
        $this->default = $variant->isDefault();
    }
}
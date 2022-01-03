<?php


namespace Controllers\ViewModels;


use DataAccess\Models\DisguiseArea;

class DisguiseAreaViewModel {
    public ?int $id;
    public ?int $missionId;
    public ?int $disguiseId;
    public ?int $level;
    public ?array $vertices;
    public ?string $type;

    public function __construct(DisguiseArea $disguiseArea = null) {
        if ($disguiseArea === null) {
            return;
        }

        $this->id = $disguiseArea->getId();
        $this->missionId = $disguiseArea->getMissionId();
        $this->disguiseId = $disguiseArea->getDisguiseId();
        $this->level = $disguiseArea->getLevel();
        $this->vertices = explode('|', $disguiseArea->getVertices());
        $this->type = $disguiseArea->getType();
    }


}
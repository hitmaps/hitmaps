<?php
namespace BusinessLogic;


use Config\Settings;
use DataAccess\Models\ElusiveTarget;
use DataAccess\Models\Mission;
use Doctrine\ORM\EntityManager;

class MissionOgImageComposer {
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function composeMissionImage(string $missionSlug): \Imagick {
        $mission = $this->entityManager->getRepository(Mission::class)->findOneBy(['slug' => $missionSlug]);

        $overlayImage = file_get_contents('https://media.hitmaps.com/img/hitmaps-custom/ogimage-overlay.png');
        $uniqidOverlay = uniqid('ogimage-overlay', true);
        file_put_contents($uniqidOverlay, $overlayImage);
        $overlay = new \Imagick($uniqidOverlay);

        $imageContents = file_get_contents($mission->getBackgroundUrl());
        $uniqid = uniqid('mission-overlay', true);
        file_put_contents($uniqid, $imageContents);
        $originalImage = new \Imagick($uniqid);

        $originalImage->compositeImage($overlay, \Imagick::COMPOSITE_DEFAULT, 0, 0);

        $overlay->destroy();
        @unlink($uniqidOverlay);
        @unlink($uniqid);

        return $originalImage;
    }
}

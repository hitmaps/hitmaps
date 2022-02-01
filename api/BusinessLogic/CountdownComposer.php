<?php
namespace BusinessLogic;


use Config\Settings;
use DataAccess\Models\ElusiveTarget;

class CountdownComposer {
    public function composeElusiveTargetImage(ElusiveTarget $elusiveTarget, int $numberOfDays): string {
        $dayOrDays = $numberOfDays === 1 ? 'day' : 'days';
        $overlay = new \Imagick(__DIR__ . "/../../img/png/elusive-target-overlays/countdown/{$numberOfDays}-{$dayOrDays}-remaining.png");

        $imageContents = file_get_contents($elusiveTarget->getImageUrl());
        $uniqid = uniqid('et-composed', true);
        file_put_contents($uniqid, $imageContents);
        $originalImage = new \Imagick($uniqid);

        $originalImage->compositeImage($overlay, \Imagick::COMPOSITE_DEFAULT, 0, 0);
        $compositeUrl = "/img/jpg/elusive-targets/countdowns/{$elusiveTarget->getId()}-{$numberOfDays}.jpg";
        $originalImage->setImageFilename(__DIR__ . "/../..{$compositeUrl}");
        $originalImage->writeImage();

        $overlay->destroy();
        $originalImage->destroy();

        @unlink($uniqid);

        return $compositeUrl;
    }

    public function composeElusiveTargetActiveImage(ElusiveTarget $elusiveTarget): string {
        $overlay = new \Imagick(__DIR__ . "/../../img/png/elusive-target-overlays/countdown/mission-active.png");

        $imageContents = file_get_contents($elusiveTarget->getImageUrl());
        $uniqid = uniqid('et-composed', true);
        file_put_contents($uniqid, $imageContents);
        $originalImage = new \Imagick($uniqid);

        $originalImage->compositeImage($overlay, \Imagick::COMPOSITE_DEFAULT, 0, 0);
        $compositeUrl = "/img/jpg/elusive-targets/countdowns/{$elusiveTarget->getId()}-active.jpg";
        $originalImage->setImageFilename(__DIR__ . "/../..{$compositeUrl}");
        $originalImage->writeImage();

        $overlay->destroy();
        $originalImage->destroy();

        @unlink($uniqid);

        return $compositeUrl;
    }

    public function deleteAllCompositeImages(ElusiveTarget $elusiveTarget): void {
        $compositeDirectory = __DIR__ . '/../../../img/jpg/elusive-targets/countdowns';
        @unlink("{$compositeDirectory}/{$elusiveTarget->getId()}-active.jpg");
        @unlink("{$compositeDirectory}/{$elusiveTarget->getId()}-7.jpg");
        @unlink("{$compositeDirectory}/{$elusiveTarget->getId()}-5.jpg");
        @unlink("{$compositeDirectory}/{$elusiveTarget->getId()}-3.jpg");
        @unlink("{$compositeDirectory}/{$elusiveTarget->getId()}-1.jpg");
    }
}

<?php
namespace BusinessLogic;


use DataAccess\Models\ElusiveTarget;

class CountdownComposer {
    public function composeElusiveTargetImage(ElusiveTarget $elusiveTarget, int $numberOfDays): string {
        $dayOrDays = $numberOfDays === 1 ? 'day' : 'days';
        $overlay = new \Imagick(__DIR__ . "/../cdn/png/elusive-target-overlays/countdown/{$numberOfDays}-{$dayOrDays}-remaining.png");
        $originalImage = new \Imagick(__DIR__ . "/../cdn/jpg{$elusiveTarget->getImageUrl()}.jpg");

        $originalImage->compositeImage($overlay, \Imagick::COMPOSITE_DEFAULT, 0, 0);
        $compositeUrl = "/cdn/jpg/elusive-targets/countdowns/{$elusiveTarget->getId()}-{$numberOfDays}.jpg";
        $originalImage->setImageFilename(__DIR__ . "/..{$compositeUrl}");
        $originalImage->writeImage();

        $overlay->destroy();
        $originalImage->destroy();

        return $compositeUrl;
    }

    public function deleteAllCompositeImages(ElusiveTarget $elusiveTarget): void {
        $compositeDirectory = __DIR__ . '/../cdn/jpg/elusive-targets/countdowns';
        @unlink("{$compositeDirectory}/{$elusiveTarget->getId()}-7.jpg");
        @unlink("{$compositeDirectory}/{$elusiveTarget->getId()}-5.jpg");
        @unlink("{$compositeDirectory}/{$elusiveTarget->getId()}-3.jpg");
        @unlink("{$compositeDirectory}/{$elusiveTarget->getId()}-1.jpg");
    }
}
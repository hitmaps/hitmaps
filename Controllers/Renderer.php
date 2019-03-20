<?php

namespace Controllers;


use Config\Constants;
use Config\Settings;
use Controllers\ViewModels\BaseModel;

class Renderer {
    static function render($view, \Twig_Environment $twig, $model = null) {
        if ($model === null) {
            $model = new BaseModel();
        }

        return $twig->render($view, ['model' => $model, 'constants' => new Constants(), 'settings' => new Settings()]);
    }
}
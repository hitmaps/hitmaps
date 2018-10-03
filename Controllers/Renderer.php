<?php

namespace Controllers;


use Config\Constants;

class Renderer {
    static function render($view, \Twig_Environment $twig, $model = null) {
        return $twig->render($view, ['model' => $model, 'constants' => new Constants()]);
    }
}
<?php


namespace Controllers\ViewModels;


class AlertMessage {
    public $type;
    public $messageHtml;
    public $icon;

    public function __construct(string $type = '', string $messageHtml = '', string $icon = '') {
        $this->type = $type;
        $this->messageHtml = $messageHtml;
        $this->icon = $icon;
    }
}
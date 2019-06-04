<?php


namespace Controllers\ViewModels;


class UpdateProfileViewModel extends BaseModel {
    public $email;
    public $name;

    public function __construct($email, $name) {
        parent::__construct();
        $this->email = $email;
        $this->name = $name;
    }
}
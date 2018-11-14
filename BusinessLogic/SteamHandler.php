<?php

namespace BusinessLogic;


class SteamHandler {
    static function generateLoginLink() {
        $openId = new \LightOpenID("http://localhost:8000");
        $openId->identity = 'https://steamcommunity.com/openid';

        return $openId->authUrl();
    }

    static function getSteam64Id() {
        $openId = new \LightOpenID('http://localhost:8000');

        if ($openId->validate()) {
            $id = $openId->identity;
            $ptn = "/^https?:\/\/steamcommunity\.com\/openid\/id\/(7[0-9]{15,25}+)$/";
            preg_match($ptn, $id, $matches);

            return $matches[1];
        } else {
            throw new \Exception("User is not logged in");
        }
    }

    static function loginUser() {
        $openId = new \LightOpenID("localhost");

        if (!$openId->mode) {
            $openId->identity = 'https://steamcommunity.com/openid';
            header('Location: ' . $openId->authUrl());
        } elseif ($openId->mode === 'cancel') {
            return 'User has canceled authentication!';
        } else {
            if($openId->validate()) {
                $id = $openId->identity;
                $ptn = "/^https?:\/\/steamcommunity\.com\/openid\/id\/(7[0-9]{15,25}+)$/";
                preg_match($ptn, $id, $matches);

                $_SESSION['steamid'] = $matches[1];
                if (!headers_sent()) {
                    header('Location: /user/login');
                    exit;
                } else {
                    $something = '<script type="text/javascript">
                        window.location.href="/users/login";
                    </script>
                    <noscript>
                        <meta http-equiv="refresh" content="0;url=/users/login" />
                    </noscript>';
                }
            } else {
                return "User is not logged in.";
            }
        }

        return null;
    }
}
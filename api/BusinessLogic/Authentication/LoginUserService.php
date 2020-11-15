<?php

namespace BusinessLogic\Authentication;


use BusinessLogic\AuthTokenWithExpiration;
use DataAccess\Models\User;
use DataAccess\Models\UserAuthToken;
use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

class LoginUserService {
    private $entityManager;
    private $tokenGenerator;
    private $httpClient;

    public function __construct(EntityManager $entityManager,
                                TokenGenerator $tokenGenerator,
                                Client $httpClient) {
        $this->entityManager = $entityManager;
        $this->tokenGenerator = $tokenGenerator;
        $this->httpClient = $httpClient;
    }

    public function loginWithUserAndPassword(string $email, string $password): string {
        /* @var $user User|null */
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email, 'verificationToken' => null]);

        if ($user === null || !password_verify($password, $user->getPassword())) {
            throw new LoginFailedException();
        }

        return $this->tokenGenerator->generateToken($user);
    }

    public function loginWithDiscordToken(string $tokenType, string $accessToken) {
        /*
         * this.$http.get('https://discordapp.com/api/users/@me', {
                headers: {
                    Authorization: `${hashParameters['token_type']} ${hashParameters['access_token']}`
                }
            })
         */
        $resp = $this->httpClient->get("https://discordapp.com/api/users/@me", [
            RequestOptions::HEADERS => [
                'Authorization' => "{$tokenType} {$accessToken}"
            ]
        ]);
    }
}

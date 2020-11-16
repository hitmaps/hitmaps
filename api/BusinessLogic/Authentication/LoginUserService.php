<?php

namespace BusinessLogic\Authentication;


use BusinessLogic\Authentication\Discord\DiscordAuthenticationException;
use BusinessLogic\Authentication\Discord\UserNotInServerException;
use BusinessLogic\AuthTokenWithExpiration;
use DataAccess\Models\User;
use DataAccess\Models\UserAuthToken;
use DataAccess\Models\UserRole;
use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

class LoginUserService {
    private $entityManager;
    private $tokenGenerator;
    private $httpClient;
    private const HITMAPS_SERVER_ID = '514289597652402187';

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
        // 1. Check actual token and get id
        $resp = $this->httpClient->get('https://discordapp.com/api/users/@me', [
            RequestOptions::HEADERS => [
                'Authorization' => "{$tokenType} {$accessToken}"
            ]
        ]);

        if ($resp->getStatusCode() !== 200) {
            throw new DiscordAuthenticationException('/api/users/@me', $resp->getStatusCode());
        }
        $profileData = json_decode($resp->getBody(), true);

        // 2. Ensure they're in the HITMAPS discord
        $resp = $this->httpClient->get('https://discordapp.com/api/users/@me/guilds', [
            RequestOptions::HEADERS => [
                'Authorization' => "{$tokenType} {$accessToken}"
            ]
        ]);

        if ($resp->getStatusCode() !== 200) {
            throw new DiscordAuthenticationException('/api/users/@me/guilds', $resp->getStatusCode());
        }
        $guildsData = \GuzzleHttp\json_decode($resp->getBody(), true);

        $inServer = false;
        foreach ($guildsData as $guild) {
            if ($guild['id'] === self::HITMAPS_SERVER_ID) {
                $inServer = true;
                break;
            }
        }
        if (!$inServer) {
            throw new UserNotInServerException();
        }

        $user = $this->entityManager->getRepository(User::class)->findOneBy(['password' => "DISCORD|{$profileData['id']}"]);

        if ($user === null) {
            // Check for a legacy account
            $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $profileData['email']]);

            // Completely new user. Set basic info
            if ($user === null) {
                $user = new User();
                $user->setEmail($profileData['email']);
                $role = $this->entityManager->getRepository(UserRole::class)->findOneBy(['id' => 2]);
                $user->getRoles()->add($role);
            }
            $user->setName("{$profileData['username']}#{$profileData['discriminator']}");
            $user->setPassword("DISCORD|{$profileData['id']}");
            $this->entityManager->persist($user);
            $this->entityManager->flush();
        }

        return $this->tokenGenerator->generateToken($user);
    }
}

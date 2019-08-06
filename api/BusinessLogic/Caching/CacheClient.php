<?php

namespace BusinessLogic\Caching;


use Predis\Client;

class CacheClient {
    private $client;

    public function __construct(?Client $client) {
        $this->client = $client;
    }

    public function get(string $key) {
        if ($this->client === null) {
            return null;
        }

        $cached = $this->client->get($key);

        return $cached !== null ?
            json_decode($cached) :
            null;
    }

    public function set(string $key, $value) {
        if ($this->client === null) {
            return;
        }

        $this->client->set($key, json_encode($value));
    }

    // region All-in-ones
    public function retrieve(string $key, callable $getFromSource) {
        $cached = $this->get($key);

        if ($cached !== null) {
            return $cached;
        }

        $result = $getFromSource();

        $this->set($key, $result);

        return $result;
    }
    // endregion
}
<?php

namespace BusinessLogic\Caching;


class KeyBuilder {
    static function buildKey(array $parts) {
        return 'hitmaps:' . implode(':', $parts);
    }
}
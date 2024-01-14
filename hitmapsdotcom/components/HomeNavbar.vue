<script setup lang="ts">

</script>

<template>
    <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar-content" aria-controls="navbar-content"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-content">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#games">
                            <icon name="fa6-solid:gamepad"/>
                            {{ $t('navbar.games') }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#game-modes">
                            <icon name="fa6-solid:dice"/>
                            {{ $t('custom-game-modes.header') }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#partners">
                            <icon name="fa6-solid:handshake"/>
                            {{ $t('partnership.header') }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#kofi">
                            <icon name="cib:ko-fi"/>
                            {{ $t('ko-fi.ko-fi-supporters') }}
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="https://hitmaps.readme.io/reference">
                            <icon name="fa:code"/>
                            API
                        </a>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/support-the-site">
                            <icon name="fa6-solid:money-bill"/>
                            {{ $t('footer.support-the-site') }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.container-fluid {
    max-width: 1920px;
}

.navbar {
    z-index: 1030;
    top: 0;
    background-color: $content-background;

    a {
        color: $content-text;

        i {
            font-size: 20px;
            padding: 4px;
        }
    }
}
</style>
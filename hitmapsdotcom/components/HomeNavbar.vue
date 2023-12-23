<script setup lang="ts">

</script>

<template>
    <nav class="navbar" style="">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="#games">
                    <icon name="fa6-solid:gamepad"/>
                    {{ $t('navbar.games') }}
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#community-server">
                    <icon name="fa6-solid:server"/>
                    {{ $t('community-server.header') }}
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#partners">
                    <icon name="fa6-solid:handshake"/>
                    {{ $t('partnership.header') }}
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#patreon">
                    <icon name="fa6-brands:patreon"/>
                    {{ $t('patreon.patreon-supporters') }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    z-index: 1030;
    position: sticky;
    top: 0;
    background-color: $content-background;
    /*background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') center center / cover no-repeat fixed;*/

    a {
        color: $content-text;

        i {
            font-size: 20px;
            padding: 4px;
        }
    }
}
</style>
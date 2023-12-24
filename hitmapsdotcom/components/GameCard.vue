<script setup>
const props = defineProps({
    game: Object
});

const cssVars = reactive({
    '--game-tile-url': props.game.tileUrl
});
const { t } = useI18n();
</script>

<template>
    <nuxt-link v-bind="$attrs" :to="`/games/${game.slug}`">
        <div class="row game-card" :style="cssVars">
            <div class="col-xl-4 d-none d-xl-block" :style="`background: url(${game.tileUrl}) no-repeat center center; background-size: cover`"></div>
            <div class="col-xl-8 game-info" :style="`background: rgba(0, 0, 0, .3) url(${game.tileUrl}) no-repeat center center; background-size: cover`">
                <div class="image">
                    <game-icon :icon="game.icon" font-style="normal" />
                </div>
                <div class="text">
                    <h4>{{ t("game-type." + game.type) }}</h4>
                    <h3>{{ game.fullName }}</h3>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<style scoped lang="scss">
a {
    display: flex;
    text-decoration: none;
    flex-grow: 1;

    &:hover {
        .game-card .game-info {
            background: $game-button-background-hover !important;

            i {
                background: $game-button-text;
                color: $card-footer-background-hover;
            }
        }
    }

    .game-card {
        margin: 0;
        flex-grow: 1;

        .game-info {
            @media (min-width: 1200px) {
                background: $game-button-background !important;
            }

            @media (max-width: 1199px) {
                background-blend-mode: darken;
            }

            color: $game-button-text;
            display: flex;
            align-items: center;
            min-height: 70px;


            .text {
                text-transform: uppercase;
                flex-grow: 1;
                align-self: center;
                margin-left: 5px;

                h4 {
                    font-size: 1rem;
                    font-weight: 400;
                    margin-bottom: 0;
                }

                h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>
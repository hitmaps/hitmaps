<script setup>
const props = defineProps({
    link: String,
    tileUrl: String,
    gameIcon: {
        type: String,
        required: false,
        default: null
    },
    icon: {
        type: String,
        required: false,
        default: null
    },
    subheading: String,
    heading: String
});
const { t } = useI18n();
</script>

<template>
    <a v-bind="$attrs" :href="link">
        <div class="row game-card">
            <div class="col-xl-4" :style="`background: url(${tileUrl}) no-repeat center center; background-size: cover`"></div>
            <div class="col-xl-8 game-info">
                <div class="image">
                    <game-icon v-if="gameIcon" :icon="gameIcon" font-style="normal" />
                    <icon v-if="icon" :name="icon"/>
                </div>
                <div class="text">
                    <h4>{{ subheading }}</h4>
                    <h3>{{ heading }}</h3>
                </div>
            </div>
        </div>
    </a>
</template>

<style scoped lang="scss">
a {
    display: flex;
    text-decoration: none;
    flex-grow: 1;

    &:hover {
        .game-card .game-info {
            background: $game-button-background-hover;

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
            background: $game-button-background;
            color: $game-button-text;
            display: flex;
            align-items: center;

            .image svg {
                width: 48px;
                height: 48px;
            }

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
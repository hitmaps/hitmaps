<script setup>
const props = defineProps({
    elusiveTarget: Object
});
const { t } = useI18n();
</script>

<template>
    <a v-bind="$attrs" href="#">
        <div class="row game-card">
            <div class="col-md-4" :style="`background: url(${elusiveTarget.tileUrl}) no-repeat center center; background-size: cover`"></div>
            <div class="col-md-8 game-info">
                <div class="image">
                    <game-icon icon="elusive" font-style="normal" />
                </div>
                <div class="text">
                    <h4>{{ t("game-type.Elusive Target") }}</h4>
                    <h3>{{ elusiveTarget.name }}
                        <span class="mkii" v-if="elusiveTarget.reactivated"
                              v-tooltip:left="$t('elusive-target.reactivated-target')">2</span></h3>
                </div>
                <div
                    onclick="return false;"
                    class="image float-right notification-icon"
                    @click="$emit('notification-modal')"
                    v-tooltip:left="$t('elusive-target.notifications.manage-notifications')"
                >
                    <game-icon icon="audio" font-style="normal" />
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

                    .mkii {
                        background: #ff003c;
                        color: #fff;
                        margin: 0;
                        width: 32px;
                        height: 32px;
                        display: inline-block;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
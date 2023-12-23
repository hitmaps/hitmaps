<script setup>
const props = defineProps({
    elusiveTarget: Object
});
const { t } = useI18n();
</script>

<template>
    <div class="single-game d-none d-lg-flex">
        <a href="#">
            <div class="card game" :style="`background: url('${elusiveTarget.tileUrl}') center center / cover no-repeat`">
                <div style="position: relative; flex-grow: 1">
                    <div class="card-img-overlay d-flex flex-column justify-content-end"
                         style="padding: 0"></div>
                </div>
                <div>
                    <div class="card-footer">
                        <div class="image">
                            <game-icon icon="elusive" font-style="normal" />
                        </div>
                        <div class="text">
                            <h4>{{ $t("game-type.Elusive Target") }}</h4>
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
            </div>
        </a>
    </div>
    <elusive-target-card class="d-flex d-lg-none" :elusive-target="elusiveTarget" @notification-modal="$emit('notification-modal')" />
</template>

<style scoped lang="scss">
.single-game {
    display: flex;
    flex-grow: 1;

    a {
        display: flex;
        text-decoration: none;
        flex-grow: 1;

        &:hover {
            .game .card-footer {
                background: $game-button-background-hover;

                i {
                    background: $game-button-text;
                    color: $card-footer-background-hover;
                }
            }
        }

        .game {
            margin-bottom: 0;
            border: none;
            border-radius: 0;
            flex-grow: 1;

            .card-img-top {
                visibility: hidden;
                border-radius: 0;
            }

            .card-img-overlay {
                padding: 0;
            }

            .card-footer {
                padding: 15px;
                background: rgba(29, 40, 52, .7);
                color: #fff;
                text-shadow: none;
                border-radius: 0;
                display: flex;

                .image {
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 5px;
                }

                .text {
                    display: inline-block;
                    text-transform: uppercase;
                    flex-grow: 1;

                    h4 {
                        font-size: 1rem;
                        color: #fff;
                        margin-bottom: 0;
                        font-weight: 400;
                    }

                    h3 {
                        font-size: 1.5rem;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
/*.single-game {
    display: flex;
    flex-direction: column;
    color: white;

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
            display: flex;
            flex-direction: column;
            height: 100%;
            margin-left: -15px;
            margin-right: -15px;
            text-decoration: none;

            > p:first-child {
                flex-grow: 1;
            }

            .game-info {
                padding: 15px;
                background: rgba(29, 40, 52, .7);
                color: #fff;
                text-shadow: none;
                display: flex;

                .image {
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 5px;
                }

                .text {
                    display: inline-block;
                    text-transform: uppercase;
                    flex-grow: 1;

                    h2 {
                        font-size: 1rem;
                        margin-bottom: 0;
                    }

                    h1 {
                        font-size: 1.5rem;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}*/
</style>
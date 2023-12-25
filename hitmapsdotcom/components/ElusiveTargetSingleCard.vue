<script setup>
import {v4 as uuidv4} from "uuid";

const props = defineProps({
    elusiveTargets: Array
});
const { t } = useI18n();
const selectedElusiveTarget = ref({
    name: '',
    videoBriefingUrl: null,
    briefing: ''
});

const uuid = uuidv4();

const briefingModal = ref(null);

function showBriefingModal(elusive) {
    selectedElusiveTarget.value = elusive;
    briefingModal.value.showModal();
}

function hideBriefingModal() {
    briefingModal.value.hideModal();
}
</script>

<template>
    <div v-for="elusiveTarget in elusiveTargets" class="single-game d-none d-lg-flex">
        <a href="#">
            <div class="card game" :style="`background: url('${elusiveTarget.tileUrl}') center center / cover no-repeat`">
                <div style="position: relative; flex-grow: 1">
                    <div class="card-img-overlay d-flex flex-column justify-content-end"
                         style="padding: 0"></div>
                </div>
                <div>
                    <div class="card-footer">
                        <div class="countdown">
                            <div class="image">
                                <game-icon icon="timed" font-style="normal" />
                            </div>
                            <div class="text timer" :class="{ 'not-playable': new Date(elusiveTarget.beginningTime) > new Date() }">
                                <div class="target-arrives">{{ $t('elusive-target.target-arrives') }}</div>
                                <countdown class="elusive-countdown" :date="new Date(elusiveTarget.beginningTime) >
                                    new Date()
                                        ? elusiveTarget.beginningTime
                                        : elusiveTarget.endingTime"
                                />

                            </div>
                            <game-icon @click="showBriefingModal(elusiveTarget)"
                                       icon="background"
                                       font-style="normal"
                                       extra-classes="normal briefing-icon float-right"
                                       v-tooltip:left="$t('elusive-target.mission-briefing')" />

                        </div>
                        <div class="lower">
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
            </div>
        </a>
    </div>
    <client-only>
        <modal :id="`briefing-modal-${uuid}`"
               :modal-title="selectedElusiveTarget.name"
               ref="briefingModal">
            <div class="row">
                <div v-if="selectedElusiveTarget.videoBriefingUrl != null" class="col-xl">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe :src="selectedElusiveTarget.videoBriefingUrl"
                                class="embed-responsive-item"
                                frameborder="0"
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <div class="col-xl">
                    <p v-html="selectedElusiveTarget.briefing"></p>
                </div>
            </div>
            <template v-slot:modal-footer>
                <game-button data-dismiss="modal" @click="hideBriefingModal">
                    <game-icon icon="failed" font-style="normal"/>
                    {{ $t('form.close') }}
                </game-button>
            </template>
        </modal>
    </client-only>
    <elusive-target-card class="d-flex d-lg-none" :elusive-targets="elusiveTargets" @notification-modal="$emit('notification-modal')" />
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
                flex-direction: column;
                gap: 10px;

                .countdown {
                    display: flex;

                    .timer {
                        .target-arrives {
                            line-height: 0;
                            display: none;
                        }

                        .elusive-countdown {
                            font-size: 2rem;
                            vertical-align: middle;
                            font-weight: 600;
                            text-transform: uppercase;
                        }

                        &.not-playable {
                            vertical-align: bottom;

                            .target-arrives {
                                display: block;
                                text-transform: uppercase;
                            }

                            .elusive-countdown {
                                line-height: 33px;
                                margin-top: 7px;
                            }
                        }
                    }
                }

                .lower {
                    display: flex;
                }

                .image {
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 5px;

                    &.notification-icon {
                        margin-right: 0;
                    }
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
                        @media (min-width: 1206px) {
                            font-size: 1.5rem;
                        }
                        font-size: 1rem;
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
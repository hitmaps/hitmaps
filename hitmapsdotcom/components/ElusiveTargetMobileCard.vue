<script setup>
import {v4 as uuidv4} from "uuid";

const props = defineProps({
    elusiveTargets: Array
});
const elusiveTarget = ref(props.elusiveTargets[0]);
const { t } = useI18n();
const uuid = uuidv4();

const briefingModal = ref(null);

function showBriefingModal() {
    briefingModal.value.showModal();
}

function hideBriefingModal() {
    briefingModal.value.hideModal();
}
</script>

<template>
    <a v-bind="$attrs" href="#">
        <div class="row game-card">
            <div class="col-xl-4 d-none d-xl-block" :style="`background: url(${elusiveTarget.tileUrl}) no-repeat center center; background-size: cover`"></div>
            <div class="col-xl-8 game-info" :style="`background: rgba(0, 0, 0, .3) url(${elusiveTarget.tileUrl}) no-repeat center center; background-size: cover`">
                <div class="upper">
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
                        v-tooltip:left="$t('elusive-target.notifications.manage-notifications')">
                        <game-icon icon="audio" font-style="normal" />
                    </div>
                </div>
                <div class="countdown" v-if="elusiveTarget.beginningTime">
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
                    <game-icon @click="showBriefingModal"
                               icon="background"
                               font-style="normal"
                               extra-classes="normal briefing-icon float-right"
                               v-tooltip:left="$t('elusive-target.mission-briefing')" />

                </div>
            </div>
        </div>
        <client-only>
            <modal :id="`briefing-modal-${uuid}`"
                   :modal-title="elusiveTarget.name"
                   ref="briefingModal">
                <div class="row">
                    <div v-if="elusiveTarget.videoBriefingUrl != null" class="col-xl">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe :src="elusiveTarget.videoBriefingUrl"
                                    class="embed-responsive-item"
                                    frameborder="0"
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    <div class="col-xl">
                        <p v-html="elusiveTarget.briefing"></p>
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
    </a>
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
            flex-direction: column;
            justify-content: center;
            /*min-height: 70px;*/
            padding-top: 10px;
            padding-bottom: 10px;

            .upper {
                display: flex;
            }

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
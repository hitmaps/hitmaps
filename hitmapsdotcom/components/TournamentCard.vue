<script setup>
import {v4 as uuidv4} from "uuid";

const props = defineProps({
    eventInfo: Object,
    upcomingMatchCount: {
        type: Number,
        default: -1,
        required: false
    }
});
const { t } = useI18n();
const uuid = uuidv4();

const modalContent = ref(null);

function showModal() {
    modalContent.value.showModal();
}

function hideBriefingModal() {
    modalContent.value.hideModal();
}
</script>

<template>
    <a v-bind="$attrs" href="#" @click="showModal">
        <div class="row game-card">
            <div class="col-xl-4 d-none d-xl-block" :style="`background: url(${eventInfo.tileUrl}) no-repeat center center; background-size: cover`"></div>
            <div class="col-xl-8 game-info" :style="`background: rgba(0, 0, 0, .3) url(${eventInfo.tileUrl}) no-repeat center center; background-size: cover`">
                <div class="upper">
                    <div class="image">
                        <game-icon icon="challenge" font-style="normal" />
                    </div>
                    <div class="text">
                        <h4>{{ t('community-event.title') }}</h4>
                        <h3>{{ eventInfo.name }}</h3>
                    </div>
                </div>
                <div class="countdown" v-if="new Date(eventInfo.isoRegistrationEndDate) > new Date()">
                    <div class="image">
                        <game-icon icon="timed" font-style="normal" />
                    </div>
                    <div class="text timer">
                        <div class="signups-close-in">{{ t('community-event.signups-close-in') }}</div>
                        <countdown class="elusive-countdown" :date="eventInfo.isoRegistrationEndDate" />
                    </div>
                    <game-icon @click="showModal"
                               icon="background"
                               font-style="normal"
                               extra-classes="normal briefing-icon float-right"
                               v-tooltip:left="t('community-event.more-info')" />
                </div>
                <div class="countdown" v-else-if="upcomingMatchCount > -1">
                    <div class="text timer">
                        <div class="match-count">
                            {{ t('community-event.upcoming-matches-colon') }}
                            {{ upcomingMatchCount }}
                        </div>
                    </div>
                    <game-icon @click="showModal"
                               icon="background"
                               font-style="normal"
                               extra-classes="normal briefing-icon float-right"
                               v-tooltip:left="t('community-event.more-info')" />
                </div>
            </div>
        </div>
        <client-only>
            <modal :id="`briefing-modal-${uuid}`"
                   :modal-title="eventInfo.name"
                   ref="modalContent">
                <div class="row">
                    <div class="col-sm-12">
                        <p>
                            In Roulette Rivals you go head-to-head against another player in main missions. Once a mission is selected,
                            an admin will spin the roulette.
                        </p>
                        <p>
                            The admin will give the roulette restrictions info to both players and give the sign to officially
                            start the match. Players are allowed to use every item and spawn location they want.
                        </p>
                        <p>
                            Whoever finishes the mission with a 5 star SA rating first in real time wins the map. Repeat: This
                            is NOT about the fastest time, but about who ever finishes the mission first with a 5 star SA rating.
                        </p>
                        <p>
                            Do you play it safe? Takes longer, but you wouldn't have to restart. Or do you play it risky to get
                            that awesome time, with the potential of a lot of restarts?
                        </p>
                        <alert type="info">
                            <ul style="list-style: none">
                                <li>Registration ends at <b>{{ $dayjs(eventInfo.isoRegistrationEndDate).format('ddd, D MMM h:mm A ') + Utils.getTimeZoneAbbreviation() }}</b></li>
                                <li>Matches run until <b>{{ $dayjs(eventInfo.isoEventEndDate).format('ddd, D MMM') }}</b></li>
                            </ul>
                        </alert>
                    </div>
                </div>
                <template v-slot:modal-footer>
                    <a href="https://discord.gg/FVxTKdU"
                       target="_blank"
                       style="display: none"
                       ref="discordLink"></a>
                    <game-button @click="$refs.discordLink.click()">
                        <game-icon icon="arrow-right" font-style="normal"/>
                        {{ $t('partnership.f7sc.call-to-action') }}
                    </game-button>
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

            .match-count {
                line-height: 33px;
                margin-top: 7px;
                font-size: 1.3rem;
                vertical-align: middle;
                font-weight: 600;
                text-transform: uppercase;
            }

            @media(min-width: 510px) {
                .match-count {
                    font-size: 1.5rem;
                }
            }

            .countdown {
                display: flex;
                margin-top: 10px;

                .timer {
                    vertical-align: bottom;

                    .signups-close-in {
                        line-height: 0;
                        display: block;
                        text-transform: uppercase;
                    }

                    .elusive-countdown {
                        line-height: 33px;
                        margin-top: 7px;
                        font-size: 2rem;
                        vertical-align: middle;
                        font-weight: 600;
                        text-transform: uppercase;
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
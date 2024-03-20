<script setup>
import {v4 as uuidv4} from "uuid";

const props = defineProps({
    elusiveTargets: Array,
    forceSmallCards: {
        type: Boolean,
        default: false,
        required: false
    }
});
defineEmits(['notificationModal']);

const { t } = useI18n();
const selectedElusiveTarget = ref(props.elusiveTargets.length ? props.elusiveTargets[0] : getComingSoonElusive());
const mobileElusiveTarget = computed(() => [selectedElusiveTarget]);
const selectedElusiveTargetIndex = ref(0);
const briefingElusiveTarget = ref({
    name: '',
    videoBriefingUrl: '',
    briefing: ''
});

const uuid = uuidv4();

const briefingModal = ref(null);

let carouselInterval;
onMounted(() => {
    if (props.elusiveTargets.length) {
        carouselInterval = initCarouselInterval();
    }
});

function showBriefingModal(elusive) {
    briefingElusiveTarget.value = elusive;
    briefingModal.value.showModal();
}

function hideBriefingModal() {
    briefingModal.value.hideModal();
}

function initCarouselInterval() {
    return setInterval(() => {
        forceIndex(selectedElusiveTargetIndex.value + 1, false)
    }, 5000);
}

function forceIndex(index, resetCarousel = true) {
    if (resetCarousel) {
        clearInterval(carouselInterval);
        carouselInterval = initCarouselInterval();
    }

    selectedElusiveTargetIndex.value = index % props.elusiveTargets.length;
    selectedElusiveTarget.value = props.elusiveTargets[selectedElusiveTargetIndex.value];
}

function getComingSoonElusive() {
    return {
        comingSoon: true,
        name: t('elusive-target.coming-soon'),
        missionUrl: null,
        briefing: null,
        videoBriefingUrl: null,
        beginningTime: null,
        endingTime: null,
        tileUrl: 'https://media.hitmaps.com/img/hitman3/actors/elusive-targets/coming-soon.jpg',
        reactivated: false
    }
}


</script>

<template>
    <div class="single-game d-none d-lg-flex" v-if="!forceSmallCards">
        <a :href="selectedElusiveTarget.missionUrl ?? '#'">
            <div class="card game" :style="`background: url('${selectedElusiveTarget.tileUrl}') center center / cover no-repeat`">
                <div style="position: relative; flex-grow: 1">
                    <div class="card-img-overlay d-flex flex-column justify-content-end"
                         style="padding: 0"></div>
                </div>
                <div>
                    <div class="card-footer">
                        <div class="countdown" v-if="selectedElusiveTarget.beginningTime">
                            <div class="image">
                                <game-icon icon="timed" font-style="normal" />
                            </div>
                            <div class="text timer" :class="{ 'not-playable': new Date(selectedElusiveTarget.beginningTime) > new Date() }">
                                <div class="target-arrives">{{ $t('elusive-target.target-arrives') }}</div>
                                <countdown text-class="elusive-countdown" :date="new Date(selectedElusiveTarget.beginningTime) >
                                    new Date()
                                        ? selectedElusiveTarget.beginningTime
                                        : selectedElusiveTarget.endingTime"
                                />

                            </div>
                            <game-icon v-if="selectedElusiveTarget.briefing"
                                       @click="showBriefingModal(selectedElusiveTarget)"
                                       onclick="return false"
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
                                <h3>{{ selectedElusiveTarget.name }}
                                    <span class="mkii" v-if="selectedElusiveTarget.reactivated"
                                          v-tooltip:left="$t('elusive-target.reactivated-target')">2</span></h3>
                            </div>
                            <div
                                onclick="return false;"
                                class="image float-right notification-icon"
                                @click="$emit('notificationModal')"
                                v-tooltip:left="$t('elusive-target.notifications.manage-notifications')"
                            >
                                <game-icon icon="audio" font-style="normal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <carousel-selector v-if="elusiveTargets.length > 1"
                           :elements="elusiveTargets"
                           :selected-index="selectedElusiveTargetIndex"
                           @index-selected="forceIndex" />
    </div>
    <client-only>
        <modal :id="`briefing-modal-${uuid}`"
               :modal-title="briefingElusiveTarget.name"
               ref="briefingModal">
            <div class="row">
                <div v-if="briefingElusiveTarget.videoBriefingUrl != null" class="col-xl">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe :src="briefingElusiveTarget.videoBriefingUrl"
                                class="embed-responsive-item"
                                frameborder="0"
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <div class="col-xl">
                    <p v-html="briefingElusiveTarget.briefing"></p>
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
    <div class="mobile-et" :class="forceSmallCards ? '' : 'd-flex d-lg-none'">
        <elusive-target-mobile-card :elusive-targets="mobileElusiveTarget" @notification-modal="$emit('notificationModal')" />
        <carousel-selector v-if="elusiveTargets.length > 1"
                           :elements="elusiveTargets"
                           :selected-index="selectedElusiveTargetIndex"
                           @index-selected="forceIndex" />
    </div>
</template>

<style scoped lang="scss">
.single-game {
    display: flex;
    flex-direction: column;
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
                            line-height: 15px;
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
                                font-size: 1.5rem;
                                line-height: 33px;
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

.mobile-et {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
</style>
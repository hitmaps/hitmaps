<template>
    <Head>
        <Title>{{ $t('home') }}</Title>
    </Head>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <home-navbar/>
        <header class="container-fluid">
            <div class="text-center site-header">
                <img src="/img/png/logos/hitmaps.png" class="img-fluid" alt="HITMAPS Logo">
                <h1>{{ $t('interactive-maps-for-hitman') }}</h1>
            </div>
        </header>
        <div class="container-fluid" v-if="!gamesPending">
            <div class="row dashboard" id="games">
                <div class="col-lg-4 section">
                    <div class="heading">
                        <hr class="bar">
                        <h2>{{ $t('world-of-assassination') }}</h2>
                        <hr class="bar">
                    </div>
                    <div class="game-cards">
                        <game-card v-for="game in games.filter(x => ['hitman','hitman2','hitman3'].includes(x.slug))"
                                   :game="game" />
                        <game-card v-for="game in games.filter(x => ['sniper-assassin'].includes(x.slug))"
                                   :game="game" />
                    </div>
                </div>
                <div class="col-lg-4 section">
                    <div class="heading">
                        <hr class="bar">
                        <h2>{{ $t('legacy-hitman') }}</h2>
                        <hr class="bar">
                    </div>
                    <div class="game-cards">
                        <single-game-card
                            v-for="game in games.filter(x => ['absolution'].includes(x.slug))"
                            :game="game" />
                    </div>
                </div>
                <div class="col-lg-4 section">
                    <div class="heading">
                        <hr class="bar">
                        <h2>{{ $t('live-community-events') }}</h2>
                        <hr class="bar">
                    </div>
                    <loader v-if="tournamentPending"/>
                    <div class="game-cards" v-else>
                        <elusive-target-card :elusive-targets="elusiveTargets"
                                             :force-small-cards="!tournamentPending && tournamentsInfo.hasEvents()"
                                             @notification-modal="showNotificationModal" />
                        <client-only v-if="!tournamentPending && tournamentsInfo.hasEvents()">
                            <tournament-card v-for="eventInfo in tournamentsInfo.registerableEvents"
                                             :event-info="eventInfo" />
                            <tournament-card v-for="eventInfo in tournamentsInfo.upcomingMatchEvents"
                                             :event-info="eventInfo.event"
                                             :upcoming-match-count="eventInfo.upcomingMatches.length" />
                        </client-only>
                    </div>
                </div>
            </div>
            <client-only>
                <elusive-target-notifications-modal ref="notificationModal" />
            </client-only>
        </div>
        <tournament-upcoming-matches :upcoming-match-info="tournamentsInfo.upcomingMatchEvents" />
        <div class="patreon community-server" id="game-modes">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>{{ $t('custom-game-modes.header') }}</h1>
                    <p>{{ $t('custom-game-modes.intro') }}</p>
                    <p>
                        <i18n-t keypath="custom-game-modes.download-instructions">
                            <template v-slot:serverPatcher>
                                <a href="https://gitlab.com/grappigegovert/localghost/-/jobs/artifacts/master/download?job=build_patcher" target="_blank">{{ $t('custom-game-modes.server-patcher') }}</a>
                            </template>
                            <template v-slot:serverUrl>
                                <code>gm.hitmaps.com</code>
                            </template>
                        </i18n-t>
                    </p>
                    <p>{{ $t('custom-game-modes.disclaimer') }}</p>
                </div>
            </div>
        </div>
        <div class="patreon game-mode community-server" id="game-modes-roulette">
            <div class="row roulette">
                <div class="col-lg-4">
                    <img src="https://media.hitmaps.com/img/hitmaps-custom/roulette-logo.png" class="img-fluid" alt="HITMAPS Roulette Logo">
                    <div class="row">
                        <div class="col-xs-12 available-on">
                            <span class="badge bg-success">
                                <icon name="fa6-solid:check"/>
                                {{ $t('custom-game-modes.web') }}
                            </span>
                                <span class="badge bg-success">
                                <icon name="fa6-solid:check"/>
                                HITMAN&trade;
                            </span>
                                <span class="badge bg-success">
                                <icon name="fa6-solid:check"/>
                                HITMAN&trade; 2
                            </span>
                                <span class="badge bg-success">
                                <icon name="fa6-solid:check"/>
                                HITMAN&trade; World of Assassination
                            </span>
                        </div>
                        <div class="col-xs-12">
                            <img src="https://media.hitmaps.com/img/hitmaps-custom/sample-website-spin.png?w=500" class="img-fluid" alt="Screenshot of Website Spin">
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <p>
                        <i18n-t keypath="custom-game-modes.roulette.intro">
                            <template v-slot:hitmanRoulette>
                                <a href="https://thekotti.github.io/hitman.html">{{ $t('custom-game-modes.roulette.hitman-roulette') }}</a>
                            </template>
                        </i18n-t>
                    </p>
                    <ul>
                        <li><b>{{ $t('custom-game-modes.roulette.list-item-tournament-mode.header') }}</b> {{ $t('custom-game-modes.roulette.list-item-tournament-mode.details') }}</li>
                        <li><b>{{ $t('custom-game-modes.roulette.list-item-control.header') }}</b> {{ $t('custom-game-modes.roulette.list-item-control.details') }}</li>
                        <li><b>{{ $t('custom-game-modes.roulette.list-item-overlay.header') }}</b> {{ $t('custom-game-modes.roulette.list-item-overlay.details') }}</li>
                    </ul>
                    <p>{{ $t('custom-game-modes.roulette.in-game-intro') }}</p>
                    <p><i>{{ $t('custom-game-modes.roulette.footer') }}</i></p>
                    <a class="btn square-button white" target="_blank" href="https://roulette.hitmaps.com">
                        {{ $t('custom-game-modes.roulette.visit-button') }}
                        <icon name="fa6-solid:arrow-up-right-from-square"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="patreon game-mode community-server" id="game-modes-ghost-mode">
            <div class="row game-mode ghost-mode">
                <div class="col-lg-4">
                    <h2>
                        <game-icon icon="versus" font-style="solid"></game-icon>
                        {{ $t('mission-types.ghost mode') }}
                    </h2>
                    <div class="row">
                        <div class="col-xs-12 available-on">
                            <span class="badge bg-danger">
                                <icon name="fa6-solid:xmark"/>
                                {{ $t('custom-game-modes.web') }}
                            </span>
                            <span class="badge bg-danger">
                                <icon name="fa6-solid:xmark"/>
                                HITMAN&trade;
                            </span>
                            <span class="badge bg-success">
                                <icon name="fa6-solid:check"/>
                                HITMAN&trade; 2
                            </span>
                            <span class="badge bg-success">
                                <icon name="fa6-solid:check"/>
                                HITMAN&trade; World of Assassination
                            </span>
                        </div>
                        <div class="col-xs-12">
                            <img src="https://media.hitmaps.com/img/hitman3/gamemodes/briefing_ghostmode.jpg?w=500" alt="Ghost Mode Image" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <p>{{ $t('custom-game-modes.ghost-mode.intro') }}</p>
                    <alert type="info" :alert-heading="$t('custom-game-modes.ghost-mode.mod-note-header')">
                        <p>{{ $t('custom-game-modes.ghost-mode.mod-note-content') }}</p>
                        <a class="btn square-button white" target="_blank" href="https://www.nexusmods.com/hitman3/mods/260">
                            {{ $t('custom-game-modes.ghost-mode.mod-note-cta') }}
                            <icon name="fa6-solid:arrow-up-right-from-square"/>
                        </a>
                    </alert>
                    <p>{{ $t('custom-game-modes.ghost-mode.maps') }}</p>
                    <div class="row">
                        <div class="col">
                            <p><b>HITMAN™ 2</b></p>
                            <ul>
                                <li>Miami</li>
                                <li>Santa Fortuna</li>
                            </ul>
                        </div>
                        <div class="col">
                            <p><b>HITMAN™ World of Assassination</b></p>
                            <ul>
                                <li>Hawke's Bay (<a href="https://www.nexusmods.com/hitman3/mods/303" target="_blank">via mod<icon name="fa6-solid:arrow-up-right-from-square"/></a>)</li>
                                <li>Miami</li>
                                <li>Santa Fortuna</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="patreon game-mode community-server" id="game-modes-taskmaster">
            <div class="row taskmaster">
                <div class="col-lg-4">
                    <h2>
                        <game-icon icon="completion-list" font-style="solid"></game-icon>
                        {{ $t('custom-game-modes.taskmaster.header') }}
                    </h2>
                    <div class="row">
                        <div class="col-xs-12 available-on">
                            <span class="badge bg-danger">
                                <icon name="fa6-solid:xmark"/>
                                {{ $t('custom-game-modes.web') }}
                            </span>
                            <span class="badge bg-danger">
                                <icon name="fa6-solid:xmark"/>
                                HITMAN&trade;
                            </span>
                            <span class="badge bg-danger">
                                <icon name="fa6-solid:xmark"/>
                                HITMAN&trade; 2
                            </span>
                            <span class="badge bg-success">
                                <icon name="fa6-solid:check"/>
                                HITMAN&trade; World of Assassination
                            </span>
                        </div>
                        <div class="col-xs-12">
                            <img src="https://media.hitmaps.com/img/hitmaps-custom/taskmaster-screenshot.jpg?w=500" alt="Ghost Mode Image" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <p>{{ $t('custom-game-modes.taskmaster.intro') }}</p>
                    <p>{{ $t('custom-game-modes.taskmaster.inspired-by') }}</p>
                    <p>{{ $t('custom-game-modes.taskmaster.missions') }}</p>
                    <div class="row">
                        <div class="col">
                            <ul>
                                <li>The Showstopper (Paris)</li>
                                <li>World of Tomorrow (Sapienza)</li>
                                <li>A Gilded Cage (Marrakesh)</li>
                                <li>Club 27 (Bangkok)</li>
                                <li>Freedom Fighters (Colorado)</li>
                                <li>Situs Inversus (Hokkaido)</li>
                            </ul>
                        </div>
                        <div class="col">
                            <ul>
                                <li>The Finish Line (Miami)</li>
                                <li>Three-Headed Serpent (Santa Fortuna)</li>
                                <li>Chasing A Ghost (Mumbai)</li>
                                <li>Another Life (Whittleton Creek)</li>
                                <li>The Ark Society (Isle of Sgail)</li>
                                <li>Golden Handshake (New York)</li>
                                <li>The Last Resort (Haven Island)</li>
                            </ul>
                        </div>
                        <div class="col">
                            <ul>
                                <li>On Top Of The World (Dubai)</li>
                                <li>Death In The Family (Dartmoor)</li>
                                <li>Apex Predator (Berlin)</li>
                                <li>End of an Era (Chongqing)</li>
                                <li>The Farewell (Mendoza)</li>
                                <li>Shadows in the Water (Ambrose Island)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="patreon" id="partners">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>{{ $t('partnership.header') }}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 partner">
                    <div class="image">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/f7sc-logo.png" style="width: 128px; height: 128px;" alt="F7SC Logo">
                    </div>
                    <div class="text">
                        <h3>{{ $t('partnership.f7sc.header') }}</h3>
                        <p>{{ $t('partnership.f7sc.paragraph')}}</p>
                        <a href="https://discord.gg/FVxTKdU" target="_blank" class="btn square-button blurple">
                            <icon name="fa6-brands:discord"/>
                            {{ $t('partnership.f7sc.call-to-action') }}
                        </a>
                    </div>
                </div>
                <div class="col-md-6 partner">
                    <div class="image">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/rrstats-logo.png" style="width: 128px; height: 128px;" alt="RRStats Logo">
                    </div>
                    <div class="text">
                        <h3>{{ $t('partnership.rr-stats.header') }}</h3>
                        <p>{{ $t('partnership.rr-stats.paragraph')}}</p>
                        <a href="https://rrstats.currymaker.net" target="_blank" class="btn btn-dark square-button">
                            <icon name="fa-solid:arrow-right"/>
                            {{ $t('partnership.rr-stats.call-to-action') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="patreon community-server" id="kofi">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>
                        {{ $t('ko-fi.ko-fi-supporters') }}
                    </h1>
                    <p>{{ $t('ko-fi.ko-fi-supporters-description') }}</p>
                    <div class="row">
                        <div class="col-sm-3">
                            <patron name="Ashton" tier="Silent Assassin"/>
                        </div>
                        <div class="col-sm-1"></div>
                        <div class="col-sm-3">
                            <patron name="Sailor Assassin" tier="Silent Assassin" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a href="https://ko-fi.com/mrmike227" class="btn patreon-button">
                        <icon name="cib:ko-fi"/>
                        {{ $t('ko-fi.become-a-supporter') }}
                    </a>
                    <nuxt-link to="/support-the-site" class="btn square-button white">
                        <icon name="fa6-solid:arrow-right"/>
                        {{ $t('ko-fi.view-all-supporters') }}
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TournamentsInfo from "~/components/TournamentsInfo";
import {useLazyFetch} from "#app";

const config = useRuntimeConfig();
const { t } = useI18n();
const { data, pending: gamesPending } = await useFetch(`${config.public.apiDomain}/api/web/home`);
const games = data.value.games;
const elusiveTargets = data.value.elusiveTargets;

const tournamentsInfo = ref(new TournamentsInfo());
const { pending: tournamentPending, data: tournamentData } = await useLazyFetch(`${config.public.tournamentsDomain}/api/hitmaps-homepage-info`, {
    server: false
});
watch(tournamentData, (newData) => {
    tournamentsInfo.value = new TournamentsInfo(newData);
});

const notificationModal = ref(null);
function showNotificationModal() {
    notificationModal.value.showModal();
}

//region SEO
useSeoMeta({
    ogTitle: () => Utils.siteTitle(t('home'))
})
//endregion
</script>

<style lang="scss" scoped>
.embed-responsive-16by9::before {
    padding-top: 21.25%;
}

.container-fluid {
    max-width: 1920px;
}

header {
    .site-header {
        h1 {
            margin-top: 20px;
        }

        img {
            max-height: 100px;
        }
    }
}

@media (min-width: 992px) {
    .game,
    .elusive-target {
        height: 500px;
    }
}

@media (max-width: 991px) {
    .game,
    .elusive-target {
        height: 300px;
        margin-bottom: 20px;
    }
}

.loading {
    .loader {
        margin: 100px auto 0;
    }
}

.dashboard {
    margin: 40px;

    .section {
        padding: 0 15px;
        display: flex;
        flex-direction: column;

        .heading {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            color: $content-text;
            min-height: 80px;

            @media (min-width: 1130px) {
                white-space: pre-line;
            }

            .bar {
                flex-grow: 1;
                opacity: .5;
            }

            h2 {
                text-transform: uppercase;
                margin: 0 10px;
                text-align: center;
            }
        }

        .game-cards {
            display: flex;
            flex-direction: column;
            flex-grow: 1;

            > * + * {
                margin-top: 10px;
            }
        }
    }

    .tournament {
        display: flex;
        flex-direction: column;
        color: white;
        background: $content-background;

        .tournament-info {
            padding: 15px 0;
            color: $content-text;
            text-shadow: none;

            h2 {
                color: $content-text;
            }

            .text {
                display: inline-block;
                text-transform: uppercase;

                h1 {
                    font-size: 1.5rem;
                    margin-bottom: 0;
                }

                h2 {
                    font-size: 1rem;
                    margin-bottom: 0;
                }
            }
        }

        a {
            color: $content-text;

            &:hover {
                color: #ddd;
            }
        }
    }

    .game,
    .elusive-target {
        display: flex;
        flex-direction: column;
        color: white;
        margin-left: 3px;
        margin-right: 3px;
        padding-right: 15px;
        padding-left: 15px;

        &:hover {
            .game-info,
            .elusive-target-info {
                color: $card-footer-text;
                background: $card-footer-background-hover;

                h2 {
                    color: $card-footer-text;
                }

                .image {
                    i {
                        color: $card-footer-background-hover;
                        background: $card-footer-text;

                        &.fa-discord {
                            background: inherit;
                            color: $card-footer-text;
                        }
                    }

                    img {
                        &.normal {
                            display: none;
                        }

                        &.inverted {
                            display: block;

                        }
                    }
                }
            }
        }

        .game-info,
        .elusive-target-info {
            padding: 15px;
            background: $card-footer-background;
            color: $card-footer-text;
            text-shadow: none;
            display: flex;

            h2 {
                color: $card-footer-text;
                font-weight: 400;
            }

            .image {
                display: inline-block;
                vertical-align: top;
                margin-right: 5px;

                &.elusive-notification {
                    margin-right: 0;
                }

                img {
                    height: 48px;
                    width: 48px;

                    &.normal {
                        display: block;
                    }

                    &.inverted {
                        display: none;
                    }
                }


                i {
                }
            }

            .text {
                display: inline-block;
                text-transform: uppercase;
                flex-grow: 1;

                h1 {
                    font-size: 1.5rem;
                    margin-bottom: 0;
                }

                h2 {
                    font-size: 1rem;
                    margin-bottom: 0;
                }
            }
        }
    }

    .game > a,
    .elusive-target > a {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-left: -15px;
        margin-right: -15px;
        text-decoration: none;

        > p:first-child {
            flex-grow: 1;
        }
    }

    .elusive-target {
        .countdown {
            padding: 15px 15px 0;
            padding-bottom: 1rem;
            background: rgba(0,0,0,.4);

            i.game-icon {
                color: $elusive-countdown;
                border-color: $elusive-countdown;
                margin-right: 5px;

                &.briefing-icon {
                    color: white;
                    border-color: white;
                    margin-right: 0;
                }
            }

            .timer {
                display: inline-block;
                vertical-align: middle;

                .target-arrives {
                    color: $elusive-countdown-header;
                    line-height: 0;
                    display: none;
                }

                .elusive-countdown {
                    color: $elusive-countdown;
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
    }
}

#notification-settings {
    td {
        text-align: center;

        .form-check-input {
            margin-left: 0;
        }

        &:first-child {
            text-align: left;
        }
    }
}

.patreon {
    background: #fff;
    padding: 40px;

    .intro {
        margin-bottom: 30px;

        h1 {
            font-family: 'nimbus_sans_lbold', sans-serif;
            text-transform: uppercase;
        }

        i.fa-square {
            color: #e7705c;
        }
    }

    .patron {
        text-align: center;

        img {
            max-height: 128px;
            max-width: 128px;
        }

        p {
            margin-bottom: 0;
        }
    }

    .square-button {
        border-radius: 0;

        &.blurple {
            background: #7289DA;
            color: #fff;

            &:hover {
                background: #6073bf;
            }
        }

        &.white {
            background: #fff;
            color: #000;

            &:hover {
                background: #eee;
            }
        }
    }

    .patreon-button {
        border-radius: 0;
        background: $support-the-site;
        color: #fff;

        &:hover {
            background: $support-the-site-hover;
        }
    }

    &.community-server, &.roulette {
        background: black;
        color: white;

        hr {
            color: white;
            background: white;
        }

        &.game-mode:nth-child(odd) {
            background: rgb(25, 25, 25);
        }

        .available-on {
            margin-top: 10px;
            margin-bottom: 10px;

            .badge {
                background: $game-button-background;

                &:not(:first-child) {
                    margin-left: 5px;
                }

                &.bg-warning {
                    color: #000;
                }
            }
        }

        .ghost-mode, .taskmaster {
            margin-top: 20px;

            h2 {
                text-transform: uppercase;
                margin-bottom: 0;

                i {
                    vertical-align: middle;
                }
            }

            ul.two-columns {
                columns: 2;
            }

            .ghost-mode-image {
                text-align: center;
            }
        }
    }
}

.mkii {
    background: #ff003c;
    color: #fff;
    margin: 0;
    width: 32px;
    height: 32px;
    display: inline-block;
    text-align: center;
}

.flag {
    vertical-align: text-top;
}

.partner {
    display: flex;

    .image {
        margin-right: 10px;
    }
}
</style>
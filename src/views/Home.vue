<template>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <header class="row">
            <div class="col text-center site-header">
                <img v-webp src="/img/png/logos/hitmaps.png" class="img-fluid">
                <h1>{{ $t('interactive-maps-for-hitman') }}</h1>
            </div>
        </header>
        <div class="row loading" v-if="games.length === 0">
            <div class="loader">
                <loader></loader>
            </div>
        </div>
        <template v-if="games.length > 0">
            <div class="row dashboard">
                <div
                    class="game col-lg"
                    v-for="game in games.filter(x => ['hitman', 'hitman2', 'hitman3'].includes(x.slug))"
                    :key="game.id"
                    v-bind:style="{
                        backgroundImage:
                            'url(' + game.tileUrl + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }"
                >
                    <router-link
                        :to="{ name: 'level-select', params: { slug: game.slug } }"
                    >
                        <p>&nbsp;</p>
                        <div class="game-info">
                            <div class="image">
                                <game-icon :icon="game.icon" font-style="normal" />
                            </div>
                            <div class="text">
                                <h2>{{ $t("game-type." + game.type) }}</h2>
                                <h1>{{ game.fullName }}</h1>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="row dashboard">
                <div class="game col-lg"
                     v-for="game in games.filter(x => ['absolution', 'sniper-assassin'].includes(x.slug))"
                     :key="game.id"
                     :style="{
                        backgroundImage: 'url(' + game.tileUrl + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }">
                    <router-link :to="{ name: 'level-select', params: { slug: game.slug } }">
                        <p>&nbsp;</p>
                        <div class="game-info">
                            <div class="image">
                                <game-icon :icon="game.icon" font-style="normal" />
                            </div>
                            <div class="text">
                                <h2>{{ $t("game-type." + game.type) }}</h2>
                                <h1>{{ game.fullName }}</h1>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <!--<div class="row dashboard" v-if="(new Date(promos[0].promoStartDate) < new Date())">
                <div class="tournament col-lg">
                    <div class="tournament-info">
                        <div class="text">
                            <h1>Roulette Rivals World Championship (Presented by Frote's Speedrun Community)</h1>
                            <h2>Upcoming Matches</h2>
                        </div>
                    </div>
                    <template v-if="tournamentMatches.length">
                        <div class="row dashboard" style="margin: 0; margin-bottom: 40px;">
                            <div class="col-lg" :style="{
                                backgroundImage:
                                    'url(https://media.hitmaps.com/img/hitmaps-tournaments/rrwc-2021-tile.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                paddingLeft: 0,
                                paddingRight: 0
                            }">
                                <div style="flex-grow: 1">&nbsp;</div>
                                <template v-if="new Date(tournamentMatches[0].matchTime) - new Date() < (10*60*1000)">
                                    <iframe
                                            :src="`https://player.twitch.tv/?autoplay=false&channel=${getTwitchNameFromUrl(tournamentMatches[0].shoutcastStream)}&parent=${$hostname}`"
                                            height="100%"
                                            width="100%"
                                            frameborder="0"
                                            scrolling="no"
                                            autoplay="false"
                                            allowfullscreen="true">
                                    </iframe>
                                </template>
                                <template v-else>
                                    <div v-if="tournamentMatches[0].shoutcastStream" class="countdown">
                                        <game-icon font-style="normal" icon="timed" />
                                        <div class="timer not-playable">
                                            <div class="target-arrives">Next Match Begins in</div>
                                            <countdown :date="tournamentMatches[0].matchTime"/>
                                        </div>
                                    </div>
                                </template>
                                <div class="game-info">
                                    <div class="image">
                                        <game-icon font-style="normal" icon="versus" />
                                    </div>
                                    <div class="text">
                                        <h2>
                                            {{ tournamentMatches[0].mapSelections.filter(x => x.selectionType === 'PICK').map(x => x.mapInfo.location).join(' / ') }}
                                        </h2>
                                        <h1>
                                            <country-flag :country="tournamentMatches[0].participants[0].country" /> {{ tournamentMatches[0].participants[0].name }} vs
                                            {{ tournamentMatches[0].participants[1].name }} <country-flag :country="tournamentMatches[0].participants[1].country" />
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div class="row d-none d-lg-flex d-xl-flex" style="border-bottom: 2px solid #dee2e6; border-top: 1px solid #dee2e6; padding: .75rem;">
                        <div class="col-lg-3">
                            <b><i class="fas fa-fw fa-swords"></i> Competitors</b>
                        </div>
                        <div class="col-lg-3">
                            <b><i class="far fa-fw fa-map"></i> Maps</b>
                        </div>
                        <div class="col-lg-3">
                            <b><i class="far fa-fw fa-calendar-alt"></i> Date | <i class="far fa-fw fa-clock"></i> Time ({{ new Date() | moment('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone, 'z') }})</b>
                        </div>
                        <div class="col-lg-3">
                            <b><i class="fab fa-fw fa-twitch"></i> Shoutcaster(s)</b>
                        </div>
                    </div>
                    <div class="row" v-if="!this.tournamentMatches.length" style="border-top: 1px solid #dee2e6; padding: .75rem;">
                        <div class="col">
                            <i>No upcoming matches</i>
                        </div>
                    </div>
                    <template v-for="matchup in this.tournamentMatches">
                        <div class="row" :key="`${matchup.participants[0].name}|${matchup.participants[1].name}|${matchup.platform}`"
                             style="border-top: 1px solid #dee2e6; padding: .75rem;">
                            <div class="col-lg-3 col-12">
                                <span>
                                    <country-flag :country="matchup.participants[0].country" /> {{ matchup.participants[0].name }} vs
                                    {{ matchup.participants[1].name }} <country-flag :country="matchup.participants[1].country" />
                                </span>
                            </div>
                            <div class="col-lg-3 col-12">
                                {{ matchup.mapSelections.filter(x => x.selectionType === 'PICK').map(x => x.mapInfo.location).join(', ') }}
                            </div>
                            <div class="col-lg-3 col-12">
                                <i class="far fa-fw fa-calendar-alt d-lg-none"></i>{{ matchup.matchTime | moment('ddd, D MMM') }} | <i class="far fa-fw fa-clock d-lg-none"></i> {{ matchup.matchTime | moment('h:mm A') }}
                                <span class="d-lg-none">{{ new Date() | moment('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone, 'z') }}</span>
                            </div>
                            <div class="col-lg-3 col-12">
                                <i class="fab fa-fw fa-twitch d-lg-none" v-if="matchup.shoutcasters"></i>
                                <a :href="matchup.shoutcastStream" target="_blank">{{ matchup.shoutcasters }}</a>
                            </div>
                        </div>
                    </template>
                </div>
            </div>-->
        </template>
        <modal modal-title="Roulette Rivals World Championship"
               id="roulette-rivals-modal"
               tabindex="-1"
               dismissable>
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="embed-responsive embed-responsive-16by9"
                         style="min-height: 310px">
                        <iframe src="https://www.youtube.com/embed/k9t7PPLEZp8"
                                class="embed-responsive-item"
                                frameborder="0"
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <alert type="info">
                        <ul>
                            <li><b>Signups Open</b>: Oct 3 - Oct 17</li>
                            <li><b>Group Stage</b>: Oct 22 - Nov 14</li>
                            <li><b>KO Stages</b>: Nov 15 - Dec 11</li>
                            <li><b>Grand Finals</b>: December 12</li>
                        </ul>
                    </alert>
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
                </div>
            </div>
            <template v-slot:modal-footer>
                <game-button data-dismiss="modal">
                    <game-icon icon="failed" font-style="normal"/>
                    {{ $t('form.close') }}
                </game-button>
            </template>
        </modal>
        <div class="patreon community-server">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>{{ $t('community-server.header') }}</h1>
                    <p>{{ $t('community-server.intro') }}</p>
                    <p>
                        <i18n path="community-server.download-instructions">
                            <span slot="serverPatcher">
                                <a href="https://gitlab.com/grappigegovert/localghost/-/jobs/artifacts/master/download?job=build_patcher" target="_blank">{{ $t('community-server.server-patcher') }}</a>
                            </span>
                            <span slot="serverUrl">
                                <code>gm.hitmaps.com</code>
                            </span>
                        </i18n>
                    </p>
                    <p>{{ $t('community-server.disclaimer') }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 roulette">
                    <p>
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/roulette-logo.png" class="img-fluid">
                    </p>
                    <div class="row">
                        <div class="col-lg-7 col-xs-12">
                            <p>{{ $t('community-server.roulette.in-game-intro') }}</p>
                            <p>{{ $t('community-server.roulette.available-for-h3-users') }}</p>
                        </div>
                        <div class="col-lg-5 col-xs-12">
                            <img src="https://media.hitmaps.com/img/hitmaps-custom/sample-in-game-spin.png" class="img-fluid" alt="Screenshot of In-Game Spin">
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-lg-7 col-xs-12">
                            <p>
                                <i18n path="roulette.introduction">
                                    <span slot="hitmanRoulette">
                                        <a href="https://thekotti.github.io/hitman.html" target="_blank">{{ $t('roulette.hitman-roulette') }}</a>
                                    </span>
                                </i18n>
                            </p>
                            <ul>
                                <li><b>{{ $t('roulette.list-item-tournament-mode.header') }}</b> {{ $t('roulette.list-item-tournament-mode.details') }}</li>
                                <li><b>{{ $t('roulette.list-item-control.header') }}</b> {{ $t('roulette.list-item-control.details') }}</li>
                                <li><b>{{ $t('roulette.list-item-overlay.header') }}</b> {{ $t('roulette.list-item-overlay.details') }}</li>
                            </ul>
                            <a href="https://roulette.hitmaps.com" target="_blank" class="btn square-button white">
                                <i class="fas fa-arrow-right"></i>
                                {{ $t('roulette.visit-button') }}
                            </a>
                            <p><i>{{ $t('roulette.footer') }}</i></p>
                        </div>
                        <div class="col-lg-5 col-xs-12">
                            <img src="https://media.hitmaps.com/img/hitmaps-custom/sample-website-spin.png" class="img-fluid" alt="Screenshot of Website Spin">
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 ghost-mode">
                    <h2>
                        <game-icon icon="versus" font-style="solid"></game-icon>
                        {{ $t('mission-types.ghost mode') }}
                    </h2>
                    <p>{{ $t('community-server.ghost-mode.intro') }}</p>
                    <p>{{ $t('community-server.ghost-mode.available-for-h2-users') }}</p>
                    <div class="ghost-mode-image">
                        <img src="https://media.hitmaps.com/img/hitman3/gamemodes/briefing_ghostmode.jpg" alt="Ghost Mode Image" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="patreon">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>{{ $t('partnership.header') }}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-xs-12">
                    <p>{{ $t('partnership.paragraph-1') }}</p>
                    <p>{{ $t('partnership.paragraph-2') }}</p>
                    <p>{{ $t('partnership.paragraph-3') }}</p>
                    <a href="https://discord.gg/FVxTKdU" target="_blank" class="btn square-button blurple">
                        <i class="fab fa-discord"></i>
                        {{ $t('partnership.join-the-discord') }}
                    </a>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li v-for="(image, index) in froteImages" data-target="#carouselExampleIndicators"
                                :data-slide-to="index" :class="index === 0 ? 'active' : ''"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div v-for="(image, index) in froteImages" class="carousel-item" :class="index === 0 ? 'active' : ''">
                                <img :src="image.url" class="d-block w-100" :alt="image.caption">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="patreon community-server">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>
                    <span class="fa-stack">
                        <i class="fas fa-square fa-stack-2x"></i>
                        <i class="fab fa-patreon fa-stack-1x fa-inverse"></i>
                    </span>
                        {{ $t('patreon.patreon-supporters') }}
                    </h1>
                    {{ $t('patreon.patreon-supporters-description') }}
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <patron image="https://media.hitmaps.com/patrons/kobalt.png" name="Kobalt" tier="Silent Assassin"/>
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <patron image="https://media.hitmaps.com/patrons/barbegue.png" link="https://twitch.tv/barbegue" name="Barbegue" tier="Master Assassin"/>
                </div>
            </div>
            <div class="row">
                <div class="col" style="text-align: right">
                    <a href="https://www.patreon.com/mrmike227" class="btn patreon-button">
                        <i class="fab fa-patreon"></i>
                        Become a Patron
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Countdown from '../components/Countdown.vue'
import Loader from '../components/Loader.vue'
import CxltToaster from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import Vue from 'vue'
import Modal from "../components/Modal";
import Alert from "../components/Alert";
import MetaHandler from "../components/MetaHandler";
import GameIcon from "../components/GameIcon";
import GameButton from "../components/GameButton";
import TournamentPlatformIcon from "../components/TournamentPlatformIcon";
import Patron from "../components/Patron";

Vue.use(CxltToaster)
export default {
    name: 'home',
    pageTitle: 'Home',
    components: {
        Patron,
        TournamentPlatformIcon,
        GameButton,
        GameIcon,
        Alert,
        Modal,
        Countdown,
        Loader
    },
    metaInfo: {
        meta: [
            {
                name: 'description',
                content: 'HITMAPS™ provides interactive maps for the Hitman series since 2018'
            },
            {
                property: 'og:description',
                content: 'HITMAPS™ provides interactive maps for the Hitman series since 2018'
            },
            {
                property: 'twitter:description',
                content: 'HITMAPS™ provides interactive maps for the Hitman series since 2018'
            }
        ]
    },
    data() {
        return {
            tournamentMatches: [],
            promos: [],
            games: [],
            token: null,
            froteImages: [
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/rr6.png',
                    caption: 'Roulette Rivals 6'
                },
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/promo/sc8.png',
                    caption: 'Speedrun Competition 8'
                },
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/promo/rr5.png',
                    caption: 'Roulette Rivals 5'
                },
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/promo/sc7.jpg',
                    caption: 'Speedrun Competition 7 - Artwork by BigDave'
                },
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/fuzk3.png',
                    caption: "Fuzk's Photo Contest 3"
                },
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/rr4.png',
                    caption: 'Roulette Rivals 4'
                },
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/rrwc.png',
                    caption: 'Roulette Rivals World Championship'
                },
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/promo/sc6.png',
                    caption: 'Speedrun Competition 6'
                },
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/promo/fuzk2.png',
                    caption: "Fuzk's Photo Contest 2"
                },
                {
                    url: 'https://media.hitmaps.com/img/hitmaps-tournaments/promo/gm4.png',
                    caption: 'Ghost Mode Tournament 4'
                }
            ]
        }
    },
    methods: {
        getTwitchNameFromUrl(url) {
            return url.replace(/(.*\/)*/,"")
        }
    },
    created: function() {
        MetaHandler.setOpengraphTag('image', 'https://media.hitmaps.com/img/hitmaps-custom/promo1.png');

        this.$http.get(this.$domain + '/api/web/home').then(resp => {
            this.games = resp.data.games;
        }).catch(err => {
            console.error(err);
            this.$router.push({ name: '500' });
        });
    }
}
</script>
<style lang="scss" scoped>
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
    .game {
        height: 500px;
    }
}

@media (max-width: 991px) {
    .game {
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

    .game {
        display: flex;
        flex-direction: column;
        color: white;
        margin-left: 3px;
        margin-right: 3px;

        &:hover {
            .game-info {
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

        .game-info {
            padding: 15px;
            background: $card-footer-background;
            color: $card-footer-text;
            text-shadow: none;

            h2 {
                color: $card-footer-text;
                font-weight: 400;
            }

            .image {
                display: inline-block;
                vertical-align: top;
                margin-right: 5px;

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

    .game > a {
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
        margin-top: 30px;
        border-radius: 0;
        background: #e7705c;
        color: #fff;

        &:hover {
            background: #cd685c;
        }
    }

    &.community-server, &.roulette {
        background: black;
        color: white;

        hr {
            color: white;
            background: white;
        }

        .ghost-mode {
            h2 {
                text-transform: uppercase;

                i {
                    vertical-align: middle;
                }
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
</style>

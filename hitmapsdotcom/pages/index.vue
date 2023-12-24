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
                        <h2>{{ $t('live-community-content') }}</h2>
                        <hr class="bar">
                    </div>
                    <div class="game-cards">
                        <elusive-target-single-card :elusive-target="elusiveTarget" @notification-modal="showNotificationModal" />
                    </div>
                </div>
            </div>
            <client-only>
                <modal v-if="elusiveTarget.briefing"
                       id="briefing-modal"
                       :modal-title="elusiveTarget.name">
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
                        <game-button data-dismiss="modal">
                            <game-icon icon="failed" font-style="normal"/>
                            {{ $t('form.close') }}
                        </game-button>
                    </template>
                </modal>
                <elusive-target-notifications-modal ref="notificationModal" />
            </client-only>
        </div>
        <div class="patreon community-server" id="community-server">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>{{ $t('community-server.header') }}</h1>
                    <p>{{ $t('community-server.intro') }}</p>
                    <p>
                        <i18n-t keypath="community-server.download-instructions">
                            <template v-slot:serverPatcher>
                                <a href="https://gitlab.com/grappigegovert/localghost/-/jobs/artifacts/master/download?job=build_patcher" target="_blank">{{ $t('community-server.server-patcher') }}</a>
                            </template>
                            <template v-slot:serverUrl>
                                <code>gm.hitmaps.com</code>
                            </template>
                        </i18n-t>
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
                                <i18n-t keypath="roulette.introduction">
                                    <template v-slot:hitmanRoulette>
                                        <a href="https://thekotti.github.io/hitman.html" target="_blank">{{ $t('roulette.hitman-roulette') }}</a>
                                    </template>
                                </i18n-t>
                            </p>
                            <ul>
                                <li><b>{{ $t('roulette.list-item-tournament-mode.header') }}</b> {{ $t('roulette.list-item-tournament-mode.details') }}</li>
                                <li><b>{{ $t('roulette.list-item-control.header') }}</b> {{ $t('roulette.list-item-control.details') }}</li>
                                <li><b>{{ $t('roulette.list-item-overlay.header') }}</b> {{ $t('roulette.list-item-overlay.details') }}</li>
                            </ul>
                            <a href="https://roulette.hitmaps.com" target="_blank" class="btn square-button white">
                                <icon name="fa-solid:arrow-right"/>
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
        <div class="patreon" id="partners">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>{{ $t('partnership.header') }}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 partner">
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
                <div class="col-sm-6 partner">
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
        <div class="patreon community-server" id="patreon">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>
                        {{ $t('patreon.patreon-supporters') }}
                    </h1>
                    {{ $t('patreon.patreon-supporters-description') }}
                </div>
            </div>
            <div class="row">
                <div class="col" style="text-align: right">
                    <a href="https://www.patreon.com/mrmike227" class="btn patreon-button">
                        <icon name="fa6-brands:patreon"/>
                        Become a Patron
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import GameButton from "@/components/GameButton.vue";
import ElusiveTargetCard from "~/components/ElusiveTargetCard.vue";
import ElusiveTargetSingleCard from "~/components/ElusiveTargetSingleCard.vue";

const config = useRuntimeConfig();
const { t } = useI18n();

const { data, pending: gamesPending } = await useFetch(`${config.public.apiDomain}/api/web/home`);
const games = data.value.games;
const elusiveTarget = data.value.elusiveTargets.length ? data.value.elusiveTargets[0] : null;

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

.partner {
    display: flex;

    .image {
        margin-right: 10px;
    }
}
</style>
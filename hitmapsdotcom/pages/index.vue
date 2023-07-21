<template>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <header class="row">
            <div class="col text-center site-header">
                <img src="/img/png/logos/hitmaps.png" class="img-fluid">
                <h1>{{ 'interactive-maps-for-hitman' }}</h1>
            </div>
        </header>
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
                    <a href="#">
                        <p>&nbsp;</p>
                        <div class="game-info">
                            <div class="image">
                                <game-icon :icon="game.icon" font-style="normal" />
                            </div>
                            <div class="text">
                                <h2>{{ ("game-type." + game.type) }}</h2>
                                <h1>{{ game.fullName }}</h1>
                            </div>
                        </div>
                    </a>
                </div>
                <div
                    class="game col-lg"
                    v-for="game in games.filter(x => ['hitman3'].includes(x.slug))"
                    :key="game.id"
                    v-bind:style="{
                        backgroundImage:
                            'url(' + game.tileUrl + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }"
                >
                    <a href="#">
                        <p>&nbsp;</p>
                        <div class="game-info">
                            <div class="image">
                                <game-icon :icon="game.icon" font-style="normal" />
                            </div>
                            <div class="text">
                                <h2>{{ ("game-type." + game.type) }}</h2>
                                <h1>{{ game.fullName }}</h1>
                            </div>
                        </div>
                    </a>
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
                    <a href="#">
                        <p>&nbsp;</p>
                        <div class="game-info">
                            <div class="image">
                                <game-icon :icon="game.icon" font-style="normal" />
                            </div>
                            <div class="text">
                                <h2>{{ "game-type." + game.type }}</h2>
                                <h1>{{ game.fullName }}</h1>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>

const games = (await useFetch('https://www.hitmaps.com/api/web/home')).data.value.games;
</script>

<style lang="scss" scoped>
.embed-responsive-16by9::before {
    padding-top: 21.25%;
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
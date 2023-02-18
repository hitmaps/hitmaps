<template>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <div class="site-container" v-if="game != null">
            <script type="application/ld+json">
                {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "{{ $domain }}"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "{{ game.fullName }}",
                            "item": "{{ $domain }}/{{ game.slug }}"
                        }
                    ]
                }
            </script>
            <div class="text-center logo">
                <img
                    :src="game.logoUrl"
                    class="img-fluid"
                />
                <h2>{{ game.tagline }}</h2>
            </div>
            <div class="row loading" v-if="locations.length === 0">
                <div class="loader">
                    <loader />
                </div>
            </div>
            <nav
                id="scrollspy"
                class="navbar locations"
                style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
            >
                <ul class="nav">
                    <li v-if="locations.length > 0" class="nav-item">
                        <router-link
                            :to="{ name: 'home' }"
                            class="nav-link"
                            data-target="#"
                        >
                            <game-icon icon="story" font-style="normal" />
                            {{ $t('home') }}
                        </router-link>
                    </li>
                    <li
                        v-for="location in locations"
                        :key="location.id"
                        class="nav-item"
                    >
                        <a
                            class="nav-link"
                            :href="'#' + location.slug"
                            :data-target="'#' + location.slug"
                        >
                            <game-icon icon="location" font-style="normal" />
                            {{ lang('locations.destinations.' + location.slug, location.destination) }}
                        </a>
                    </li>
                </ul>
            </nav>
            <div
                v-for="location in locations"
                :key="location.id"
                class="location"
                v-bind:style="{
                    background:
                        'url(' + location.backgroundUrl + ') no-repeat center center fixed',
                    backgroundSize: 'cover'
                }"
            >
                <div class="header">
                    <a class="anchor" :id="location.slug"></a>
                    <h2>
                        <game-icon icon="location" font-style="solid" />
                        <p>
                            <span class="name">{{ lang('locations.destinations.' + location.slug, location.destination) }}</span>
                            <br />
                            <span class="country">
                                {{ lang('locations.countries.' + location.slug, location.destinationCountry) }}
                            </span>
                        </p>
                    </h2>
                </div>
                <div class="missions">
                    <div
                        class="row"
                        style="margin-left: 15px; margin-right: 15px;"
                    >
                        <div
                            v-for="mission in location.missions"
                            :key="mission.id"
                            class="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                        >
                            <router-link
                                :to="{
                                    name: 'map-view',
                                    params: {
                                        game: location.game,
                                        location: location.slug,
                                        mission: mission.slug
                                    }
                                }"
                            >
                                <div class="card mission" :style="`background: url('${mission.tileUrl}') center center / cover no-repeat`">
                                    <div style="position: relative">
                                        <img
                                            :src="mission.tileUrl"
                                            class="card-img-top"
                                            :alt="$t('mission-image')"
                                        />
                                        <div
                                            class="card-img-overlay d-flex flex-column justify-content-end"
                                            style="padding: 0"
                                        ></div>
                                    </div>
                                    <div>
                                        <div class="card-footer">
                                            <div class="image">
                                                <game-icon :icon="mission.icon" font-style="normal" />
                                            </div>
                                            <div class="text">
                                                <h2>{{ lang('mission-types.' + mission.missionType.toLowerCase(), mission.missionType) }}</h2>
                                                <h1>{{ lang('missions.' + mission.slug, mission.name) }}</h1>
                                            </div>
                                        </div>
                                        <div class="freelancer-note" v-if="mission.supportsFreelancer">
                                            <game-icon icon="freelancer" font-style="solid" />
                                            {{ $t('map.includes-freelancer') }}
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue'
import Alert from "../components/Alert";
import MetaHandler from "../components/MetaHandler";
import GameIcon from "../components/GameIcon";

export default {
    name: 'level-select',
    components: {
        GameIcon,
        Alert,
        Loader
    },
    title() {
        return this.game !== null
            ? this.game.fullName
            : 'Loading'
    },
    data() {
        return {
            locations: [],
            game: null
        }
    },
    created: function() {
        this.$http.get(this.$domain + '/api/v1/games/' + this.$route.params.slug)
            .then(resp => {
                this.game = resp.data[0];
                MetaHandler.setOpengraphTag('description', `View interactive maps for all locations in ${this.game.fullName}`);
                MetaHandler.setOpengraphTag('image', this.game.tileUrl);
            });

        this.$http
            .get(
                this.$domain +
                    '/api/v1/games/' +
                    this.$route.params.slug +
                    '/locations'
            )
            .then(resp => (this.locations = resp.data))
    }
}
</script>

<style lang="scss" scoped>
a:hover {
    text-decoration: none;
}

.content {
    > a {
        text-decoration: none;
        display: block;
        margin: 20px;
    }
    .logo {
        margin-top: 20px;
    }

    /* Locations page */
    .site-container {
        padding-right: 50px;
        padding-left: 50px;
        margin-right: auto;
        margin-left: auto;

        .loader {
            margin: 100px auto 0;
        }
    }

    .location {
        margin-left: -50px;
        margin-right: -50px;
        padding-top: 20px;
        padding-bottom: 20px;

        .anchor {
            display: block;

            @media (min-width: 992px) {
                position: relative;
                top: -70px;
                visibility: hidden;
            }
        }

        .header {
            margin-left: 30px;
            text-shadow: 2px 2px 2px #000;

            h2 {
                font-size: 1.5rem;

                i.game-icon {
                    font-size: 63px;
                    margin-right: 8px;
                    vertical-align: text-bottom;
                }

                p {
                    display: inline-block;
                    text-align: left;

                    .name {
                        font-size: 2rem;
                    }
                }
            }
        }
    }
    .navbar.locations {
        z-index: 1030;
        background: gray;
        text-transform: uppercase;
        text-shadow: 2px 2px 2px #000;
        margin-left: -50px;
        margin-right: -50px;
        padding: 0;

        @media (min-width: 992px) {
            position: sticky;
            top: 0;
        }

        a {
            color: white;
            padding: 20px;

            i.game-icon {
                font-size: 20px;
                padding: 4px;
                border: solid 1px #fff;
                border-radius: 3px;
            }

            &:hover,
            &:active,
            &.active {
                background: $card-footer-background-hover;

                i {
                    color: $card-footer-background-hover;
                    background: $card-footer-text;
                    text-shadow: none;
                }
            }
        }
    }

    .missions {
        .card {
            border: none;
            border-radius: 0;

            .card-img-top {
                border-radius: 0;
            }
        }

        header {
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
                1px 1px 0 #000;
        }

        .mission {
            margin-bottom: 10px;

            .card-img-top {
                visibility: hidden;
            }

            .difficulties {
                margin: 0;
                background-color: rgba(0, 0, 0, 0.2);

                i.game-icon {
                    vertical-align: middle;
                }

                a {
                    color: white;
                    text-decoration: none;
                    opacity: 0.85;

                    &:hover {
                        background-color: $card-footer-background-hover;
                        opacity: 1;
                    }
                }
            }

            .card-footer {
                padding: 15px;
                background: $card-footer-background;
                color: $card-footer-text;
                text-shadow: none;
                border-radius: 0;

                .image {
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 5px;
                }

                .text {
                    display: inline-block;

                    h2 {
                        font-size: 16px;
                        margin-bottom: 0;
                        color: $card-footer-text;
                        font-weight: 400;
                    }

                    h1 {
                        font-size: 21px;
                        margin-bottom: 0;
                        text-transform: uppercase;
                    }
                }
            }

            .freelancer-note {
                background: $content-background;
                color: $content-text;
                padding: 5px 15px;
                display: flex;
                align-items: center;

                &:hover {
                    text-decoration: none !important;
                }

                i {
                    margin-right: 5px;
                }
            }

            .name {
                border: solid 1px #fff;
                color: #fff;
                display: flex;
                flex-direction: column;

                > p {
                    flex-grow: 1;
                }

                img {
                    width: 32px;
                    height: 32px;
                    margin-top: 0;
                    margin-bottom: 0;
                }

                margin-right: 5px;
            }

            @media (min-width: 992px) {
                .difficulty {
                    text-align: center;
                    background: #fff;
                    padding-left: 0;
                    padding-right: 0;
                    margin-right: 5px;

                    > a {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        height: 100%;
                        padding-left: 15px;
                        padding-right: 15px;
                        color: #000;
                        font-size: 1.5rem;

                        img {
                            margin: 20px auto;
                        }

                        img.normal {
                            display: block;
                            max-height: 100px;
                            max-width: 100px;
                        }

                        img.inverted {
                            display: none;
                            max-height: 100px;
                            max-width: 100px;
                        }

                        &:hover {
                            background: $card-footer-background-hover;
                            text-decoration: none;
                            color: $card-footer-text;

                            img.normal {
                                display: none;
                            }

                            img.inverted {
                                display: block;
                            }
                        }
                    }
                }
            }

            @media (max-width: 991px) {
                .name {
                    margin-right: 0;
                }

                .difficulty {
                    background: $card-footer-background;

                    > a {
                        img.normal {
                            display: inline-block;
                            max-height: 32px;
                            max-width: 32px;
                        }

                        img.inverted {
                            display: none;
                            max-height: 32px;
                            max-width: 32px;
                        }

                        &:hover {
                            text-decoration: none;
                            color: $card-footer-text;
                        }

                        p {
                            display: inline-block;
                        }
                    }
                }
            }
        }

        a:hover .card-footer {
            color: $card-footer-text;
            background-color: $card-footer-background-hover;

            i {
                color: $card-footer-background-hover;
                background: $card-footer-text;
            }

            .text {
                h2 {
                    color: $card-footer-text;
                    font-weight: 400;
                }
            }
        }
    }

    h2 {
        text-transform: uppercase;
        color: $card-footer-text;
        margin-bottom: 20px;
    }
}
</style>

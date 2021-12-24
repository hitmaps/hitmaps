<template>
    <div>
        <splash-screen v-if="metadataLoaded && !mapDataLoaded" :mission="mission"/>
        <l-map v-else-if="metadataLoaded && mapDataLoaded" id="map">
            <l-image-overlay v-if="mission.missionType !== 'Sniper Assassin'"/>
        </l-map>
    </div>
</template>

<script>
    import SplashScreen from '../components/Map/SplashScreen';
    export default {
        name: 'Map',
        components: {SplashScreen},
        data() {
            return {
                metadataLoaded: false,
                mapDataLoaded: false,
                game: null,
                mission: null
            }
        },
        mounted() {
            // 1. Get game data
            const gamePromise = this.$http.get(`${this.$domain}/api/v1/games/${this.$route.params.game}`)
                .then(resp => {
                    this.game = resp.data[0];
                });

            // 2. Get mission data
            //@formatter:off
            const missionPromise = this.$http.get(`${this.$domain}/api/v1/games/${this.$route.params.game}`+
                                                                            `/locations/${this.$route.params.location}`+
                                                                            `/missions/${this.$route.params.mission}`)
                .then(resp => {
                    this.mission = resp.data[0];
                });
            //@formatter:on

            // Once **both** are done, go fetch map information
            Promise.all([gamePromise, missionPromise]).then(_ => {
                this.metadataLoaded = true;
                // TODO Fetch map
            });
        },
        computed: {
            showDebug() {
                return process.env.VUE_APP_SHOW_DEBUG === 'true';
            },
            getSvgMapUrl() {
                if (this.game === undefined || this.mission === undefined) {
                    return '';
                }

                return `https://media.hitmaps.com/img/${this.game.slug}/maps/${this.mission.mapFolderName}/`;
            },
            getImageTileUrl() {
                return `${this.$domain}/api/maps/${this.$route.params.mission}/tiles/{floorNumber}/{z}/{x}/{y}.png`;
            }
        }
    };
</script>

<style lang="scss" scoped>
    #map {
        z-index: 0;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        &.hm-editor-items {
            cursor: crosshair !important;
        }

        .leaflet-control-container {
            display: none;
        }

        .leaflet-popup-close-button {
            font-size: 2rem;
            width: 25px;
        }

        .leaflet-popup-content-wrapper {
            padding: 0;
            border-radius: 5px;

            .leaflet-popup-content {
                width: 300px !important;
                margin: 0 !important;
                padding-bottom: 10px !important;

                .image-and-name {
                    background-position-x: center;
                    background-position-y: center;
                    background-size: cover;
                    height: 200px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    text-shadow: 2px 2px #000;

                    .flex-push {
                        flex-grow: 1;
                    }

                    div[data-name='name'] {
                        color: #fff;
                        text-transform: uppercase;
                        padding: 5px 10px;
                        font-size: 1.3em;
                        font-weight: bolder;
                        background: rgba(0,0,0,.4);
                    }

                    div[data-name='group'] {
                        color: #fff;
                        text-transform: uppercase;
                        font-weight: bolder;
                        padding: 0 10px 5px;
                        background: rgba(0,0,0,.4);
                    }

                    &.game-absolution {
                        background-color: #000;
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                }

                .no-image {
                    div[data-name='name'] {
                        color: #000;
                        text-transform: uppercase;
                        padding: 10px 10px 0;
                        font-size: 1.3em;
                        font-weight: bolder;
                    }

                    div[data-name='group'] {
                        color: #aaa;
                        text-transform: uppercase;
                        font-weight: bolder;
                        padding: 0 10px;
                    }
                }

                [data-name='target'] {
                    padding: 0 10px;
                    color: #666;
                }

                [data-name='notes'] {
                    margin-top: 10px;
                    margin-bottom: 10px;

                    > div {
                        padding: 10px;
                        white-space: pre-line;

                        &:not(:last-child) {
                            margin-bottom: 10px;
                        }
                    }

                    .requirement {
                        .in-game-description {
                            display: none;
                        }

                        color: #721c24;
                        background: #f8d7da;
                        border-left: solid 3px #d00000;
                    }

                    .warning {
                        .in-game-description {
                            display: none;
                        }

                        color: #856404;
                        background: #fff3cd;
                        border-left: solid 3px #ffa500;
                    }

                    .info {
                        .in-game-description {
                            display: none;
                        }

                        color: #0c5460;
                        background: #b7d4ff;
                        border-left: solid 3px #0000e0;
                    }

                    .description {
                        .in-game-description {
                            text-transform: uppercase;
                            font-weight: bolder;
                            color: #404040;
                        }

                        color: #666;
                        background: #e4e4e4;
                        border-left: solid 3px #666666;
                    }
                }

                [data-action='delete-btn'] {
                    margin-left: 10px;
                }
            }
        }
    }
</style>
<template>
    <div class="overlay"
         :style="'background: #ccc url(' + mission.backgroundUrl + ') no-repeat; background-size: cover'">
        <div class="overlay-container" :style="`background: url('${mission.tileUrl}') center center / cover no-repeat`">
            <img class="img-fluid" :src="mission.tileUrl" alt="Mission Thumbnail" style="visibility: hidden"/>
            <div class="footer">
                <div class="footer-image">
                    <game-icon icon="mission" font-style="normal"/>
                </div>
                <div class="footer-text">
                    <h2>{{ lang('mission-types.' + mission.missionType.toLowerCase(), mission.missionType) }}</h2>
                    <h1>{{ lang('missions.' + mission.slug, mission.name) }}</h1>
                </div>
                <div class="loader" style="display: inline-block; height: 48px; float: right">
                    <!-- TODO New Loader -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GameIcon from '../GameIcon';

    export default {
        name: 'SplashScreen',
        components: {GameIcon},
        props: {
            mission: Object
        }
    };
</script>

<style lang="scss" scoped>
    .overlay {
        position: fixed;
        text-align: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        color: #fff;
        display: flex;
        align-items: center;
        justify-items: center;

        .background {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
            z-index: -100;

            .video {
                position: absolute;
                top: 50%;
                left: 50%;
                width: auto;
                height: auto;
                min-width: 100%;
                min-height: 100%;
                transform: translate(-50%, -50%);

                @media (max-width: 767px) {
                    & {
                        display: none;
                    }
                }
            }
        }

        .overlay-container {
            margin: 0 auto;
            box-shadow: 5px 5px 40px #000;

            .footer {
                background: $card-footer-background;
                color: $card-footer-text;
                text-align: left;
                padding: 10px;

                .footer-image {
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 5px;
                }

                .footer-text {
                    display: inline-block;
                    text-transform: uppercase;

                    h1 {
                        font-size: 1.5rem;
                        margin-bottom: 0;
                    }

                    h2 {
                        font-size: 1rem;
                        margin-bottom: 0;
                        color: $card-footer-text;
                        font-weight: 400;
                    }
                }
            }
        }
    }
</style>
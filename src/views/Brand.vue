<template>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <div class="inner-content">
            <h1>Brand</h1>
            <p>Given that HITMAPS&trade; is a fan-site of the Hitman series, we don't take our branding
                <a href="https://youtu.be/IS73oZdrnFY" target="_blank"><i>too</i> seriously</a>.
                That being said, we do have a few restrictions.</p>
            <hr>
            <h3>Naming</h3>
            <div class="row">
                <div class="col">
                    <h4>Permitted Names</h4>
                    <p>HITMAPS&trade;</p>
                    <p>HITMAPS</p>
                </div>
                <div class="col">
                    <h4>Prohibited Names</h4>
                    <p>Hitmaps</p>
                    <p>hitmaps</p>
                    <p><i>...and any other variant not listed under "Permitted Names"</i></p>
                </div>
            </div>
            <hr>
            <h3>Logo</h3>
            <p>Please do not edit, change, distort, recolor, or reconfigure the HITMAPS&trade; logo in any way.</p>
            <div class="row">
                <div class="col logo-type">
                    <h4>Full Logo</h4>
                    <div class="faux-transparency">
                        <img v-webp src="/img/png/logos/hitmaps.png" class="img-fluid">
                    </div>
                    <div class="download-links">
                        <a href="/img/png/logos/hitmaps.png" target="_blank">.PNG</a>
                        &nbsp;&bullet;&nbsp;
                        <a href="/img/webp/logos/hitmaps.webp" target="_blank">.WEBP</a>
                        &nbsp;&bullet;&nbsp;
                        <a href="/img/svg/logos/hitmaps.svg" target="_blank" download>.SVG</a>
                    </div>
                </div>
                <div class="col logo-type">
                    <h4>HITMAPS&trade; "H"</h4>
                    <div class="faux-transparency">
                        <img v-webp src="/img/png/logos/hitmaps-h.png" class="img-fluid">
                    </div>
                    <div class="download-links">
                        <a href="/img/png/logos/hitmaps-h.png" target="_blank">.PNG</a>
                        &nbsp;&bullet;&nbsp;
                        <a href="/img/webp/logos/hitmaps-h.webp" target="_blank">.WEBP</a>
                        &nbsp;&bullet;&nbsp;
                        <a href="/img/svg/logos/hitmaps-h.svg" target="_blank" download>.SVG</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-button">
            <router-link :to="{ name: 'home' }">
                <game-button>
                    <game-icon icon="story" font-style="normal" />
                    Home
                </game-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import GameButton from "../components/GameButton";
import GameIcon from "../components/GameIcon";
export default {
    name: 'about',
    components: {GameIcon, GameButton},
    pageTitle: 'Brand',
}
</script>

<style lang="scss" scoped>
.content {
    > .home-button {
        margin: 20px;

        a:hover {
            text-decoration: none;
        }
    }

    > .inner-content {
        background-color: $content-background;
        color: $content-text;
        margin: 20px;
        padding: 20px;
        font-family: 'nimbus_sans_lbold', sans-serif;

        hr {
            background: $content-text;
        }

        h1 {
            text-transform: uppercase;
        }

        h2 {
            font-size: 1.25rem;
        }

        p {
            font-family: 'Roboto', 'Arial', sans-serif;
            font-weight: lighter;

        }

        div {
            /* Gracious copied from https://discord.com/branding */
            &.faux-transparency {
                display: inline-block;
                background: repeating-conic-gradient(#222427 0% 25%, #2c2f33 0% 50%) 50% / 20px 20px;

                img {
                    max-height: 154px;
                }
            }

            &.logo-type {
                text-align: center;
            }
        }
    }
}


</style>

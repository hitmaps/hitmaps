<template>
    <div class="content">
        <header>
            <div class="row">
                <div class="col text-center site-header">
                    <h1>{{ $t("interactive-maps-for") }}</h1>
                    <img
                            v-webp
                            src="/img/png/logos/hitman2.png"
                            class="img-fluid"
                    />
                    <h2>One Year Later</h2>
                </div>
            </div>
        </header>
        <section class="intro">
            <div class="inner-content">
                <h3>Introduction</h3>
                <p>On November 20, 2018, HITMAN™️ 2 Maps was released. The site was basic back then, with barren maps
                    and
                    no helpful information available. A year later, and the site today looks nothing like it did then.
                    Let's
                    take a look at the history of HITMAN™️ 2 Maps, and a look ahead at its future.</p>
            </div>
        </section>
        <section class="timeline">
            <div class="inner-content">
                <h3>Timeline</h3>
                <div id="timeline-content">
                    <ul class="timeline">
                        <li class="event" data-date="September 28, 2018">
                            <h3>Development Begins</h3>
                            <p>Development begins on HITMAN™️ 2 Maps with an <a href="https://gitlab.com/mike-koch/hitman-maps/commit/06ff5ccdba274aa6871eeadb510487815539891c" target="_blank">initial README.md commit</a>.</p>
                        </li>
                        <li class="event" data-date="November 14, 2018">
                            <h3>Initial Discovery</h3>
                            <p>Notex on the HITMAN™️ Forums discovers HITMAN™️ 2 Maps mid-development.</p>
                        </li>
                        <li class="event" data-date="November 16, 2018">
                            <h3>HITMAN™️ Forum Introduction</h3>
                            <p>MrMike (creator of HITMAN™️ 2 Maps) introduces himself, to show that development is on-going</p>
                        </li>
                        <li class="event" data-date="November 20, 2018">
                            <h3>Initial Release</h3>
                            <p>HITMAN™️ 2 Maps is officially released, calling for volunteers to help map the site</p>
                        </li>
                        <li class="event" data-date="December 30, 2018">
                            <h3>Main Mission Maps Complete</h3>
                            <p>Items for the main mission maps are completed, with the exception of disguise areas</p>
                        </li>
                        <li class="event" data-date="February 16, 2019">
                            <h3>Elusive Target Push Notifications</h3>
                            <p>Services are created to keep track of Elusive Targets via IO Interactive's public API, providing push notifications for public use.</p>
                        </li>
                        <li class="event" data-date="April 26, 2019">
                            <h3>Sniper Assassin</h3>
                            <p>Sniper Assassin maps are added for all locations.</p>
                        </li>
                        <li class="event" data-date="September 7, 2019">
                            <h3>Hallo!</h3>
                            <p>HITMAN™️ 2 Maps is translated into 11 different languages.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="the-future">
            <div class="inner-content">
                <h3>The Future</h3>
                <p>...</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'one-year',
        title: 'HITMAN™️ 2 Maps\' One Year Anniversary',
    }
</script>

<style lang="scss" scoped>
    .content {
        background: url('/img/jpg/one-year/miami.jpg') no-repeat center center fixed;
        background-size: cover;

        header {
            background: rgba(0, 0, 0, .4);
            margin-top: 0;
            margin-right: 0;

            h2 {
                text-transform: uppercase;
            }
        }

        .intro,
        .the-future {
            background: #ff003c;
            color: #fff;
        }

        section.timeline {
            background: #c41e3d;
            color: #dbd4d3;

            /* region timeline */
            @import url('https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800');

            /* Variables */

            $background: #252827;

            $color-primary: #dbd4d3;
            $color-light: white;
            $color-dim: #6c6d6d;
            $spacing: 50px;
            $radius: 4px;

            $date: 120px;
            $dotborder: 4px;
            $dot: 11px;
            $line: 4px;

            $font-title: 'Saira', sans-serif;
            $font-text: 'Chivo', sans-serif;

            /* Base */

            body {
                background: $background;
                font-size: 16px;
            }

            p {
                font-weight: 300;
            }

            a {
                color: #fff;
                text-decoration: none;
            }

            a:hover {
                color: #dbd4d3;
            }

            strong {
                font-weight: 600;
            }

            h1 {
                font-family: $font-title;
                letter-spacing: 1.5px;
                color: $color-light;
                font-weight: 400;
                font-size: 2.4em;
            }

            #timeline-content {
                margin-top: $spacing;
                text-align: center;
            }

            /* Timeline */

            ul.timeline {
                border-left: $line solid $color-primary;
                border-bottom-right-radius: $radius;
                border-top-right-radius: $radius;
                background: fade($color-light, 3%);
                color: fade(white, 80%);
                font-family: $font-text;
                margin: $spacing auto;
                letter-spacing: 0.5px;
                position: relative;
                line-height: 1.4em;
                font-size: 1.03em;
                padding: $spacing;
                list-style: none;
                text-align: left;
                font-weight: 100;
                max-width: 60%;

                h1 {
                    font-family: $font-title;
                    letter-spacing: 1.5px;
                    font-weight: 100;
                    font-size: 1.4em;
                }

                h2, h3 {
                    font-family: $font-title;
                    letter-spacing: 1.5px;
                    font-weight: 400;
                    font-size: 1.4em;
                }

                .event {
                    border-bottom: 1px dashed fade($color-light, 10%);
                    padding-bottom: ($spacing * 0.5);
                    margin-bottom: $spacing;
                    position: relative;

                    &:last-of-type {
                        padding-bottom: 0;
                        margin-bottom: 0;
                        border: none;
                    }

                    &:before, &:after {
                        position: absolute;
                        display: block;
                        top: 0;
                    }

                    &:before {
                        left: ((($date * 0.6) + $spacing + $line + $dot + ($dotborder * 2)) * 1.5) * -1;
                        color: fade($color-light, 40%);
                        content: attr(data-date);
                        text-align: right;
                        font-weight: 100;
                        font-size: 0.9em;
                        min-width: $date;
                        font-family: $font-title;
                    }

                    &:after {
                        box-shadow: 0 0 0 $dotborder fade($color-primary,100%);
                        left: ($spacing + $line + ($dot * 0.35)) * -1;
                        background: lighten($background,5%);
                        border-radius: 50%;
                        height: $dot;
                        width: $dot;
                        content: "";
                        top: 5px;
                    }
                }
            }
            /* endregion */
        }

        /*
        Other colors; 3C0919, 7D1128
         */

        section {
            > .inner-content {
                padding: 30px 50px;
                font-family: 'Lato', sans-serif;

                h3 {
                    font-weight: 700;
                    font-family: 'PT Serif', serif;
                }
            }
        }


    }
</style>

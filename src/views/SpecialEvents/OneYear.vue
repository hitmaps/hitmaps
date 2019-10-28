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
                <p>On November 20, 2018, HITMAN™️ 2 Maps was released. The site was basic back then, with barren maps and
                    no helpful information available. A year later, and the site today looks nothing like it did then. Let's
                    take a look at the history of HITMAN™️ 2 Maps, and a look ahead at its future.</p>
            </div>
        </section>
        <section class="timeline">
            <div class="inner-content">
                <h3>Timeline</h3>
                <p>lfkjsdkfjlskdjflksjd</p>
                <!--
                https://gist.github.com/CodeMyUI/60abcaeb7ee90ab30669d8b7cff2cf7e
                -->
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'one-year',
    title: 'HITMAN™️ 2 Maps\'s One Year Anniversary',
}
</script>

<style lang="scss" scoped>
.content {
    background: url('/img/jpg/one-year/miami.jpg') no-repeat center center fixed;
    background-size: cover;

    header {
        background: rgba(0,0,0,.4);
        margin-top: 0;
        margin-right: 0;

        h2 {
            text-transform: uppercase;
        }
    }

    .intro {
        background: #ff003c;
        color: #fff;
    }

    .timeline {
        background: #c41e3d;
        color: #dbd4d3;
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

<template>
    <Head>
        <Title>{{ $t('footer.about') }}</Title>
    </Head>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <div class="inner-content">
            <h1>About</h1>
            <h2>Some History and FAQs</h2>
            <hr>
            <h3>Hi There!</h3>
            <p>I'm MrMike, creator of HITMAPS. I'm currently working as a web developer while
                working on HITMAPS in my spare time.</p>
            <p>I started working on HITMAPS a month or so before HITMAN&trade; 2 was released, as I was not
            seeing any progress made on hitmanmaps.com. By building a site that allows outside contributions, maps
            for all six starting locations were created far faster than I could ever imagine.</p>
            <h3>Are you Affiliated With IO Interactive or HITMAN&trade; Maps?</h3>
            <p>Nope. Not at all. hitmanmaps.com was created by Winterbirds, which heavily influenced HITMAPS,
            as I wanted to provide a similar user experience to what hitmanmaps.com users were used to using.  However,
                I've never spoken to the creator of hitmanmaps.com.</p>
            <h3>Special Thanks</h3>
            <p>I'd like to thank the following for making HITMAPS what it is today:</p>
            <div class="row">
                <div class="col">
                    <div class="media">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/site/png/logos/ioi.png" alt="IO Interactive Logo" class="align-self-start mr-3" height="64" width="64">
                        <div class="media-body">
                            <h5 class="mt-0">
                                <a href="https://www.ioi.dk" target="_blank">IO Interactive</a>
                            </h5>
                            <p>Without them, the Hitman series would not exist, and therefore this site would
                                not exist.</p>
                        </div>
                    </div>
                    <div class="media">
                            <img src="https://media.hitmaps.com/img/hitmaps-custom/site/png/logos/readmeio.png" alt="Readme.io Logo" class="align-self-start mr-3" height="64" width="64">
                        <div class="media-body">
                            <h5 class="mt-0">
                                <a href="https://www.readme.io" target="_blank">ReadMe</a>
                            </h5>
                            <p>ReadMe provides a free open-source license to document HITMAPS' public API.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h5>The Community</h5>
                    <p>The community is vital to HITMAPS. Without them, this site would not be where it is
                    today (I would not have had the motivation to do it all by myself 😂).</p>
                </div>
            </div>
        </div>
        <div class="home-button">
            <nuxt-link to="/">
                <game-button>
                    <game-icon icon="story" font-style="normal" />
                    Home
                </game-button>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n();

//region SEO
useSeoMeta({
    ogTitle: () => Utils.siteTitle(t('footer.about'))
});
//endregion
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

        a {
            color: $content-text;
        }
    }
}

#ppBody {
    font-size: 11pt;
    width: 100%;
    margin: 0 auto;
    text-align: justify;
}

#ppHeader {
    font-size: 21pt;
    width: 100%;
    margin: 0 auto;
}

.ppConsistencies {
    display: none;
}
</style>

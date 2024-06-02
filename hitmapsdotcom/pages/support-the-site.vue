<template>
    <Head>
        <Title>Support the Site</Title>
    </Head>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <div class="inner-content">
            <h1>Support the Site</h1>
            <h2>Ways to Say, "Thanks!"</h2>
            <hr>
            <h3>Ko-fi</h3>
            <p>
                I have recently created a Ko-fi page for all of my works (not just HITMAPS™). By becoming a supporter,
                you will receive certain perks. Both one-time and membership (monthly) contributions are possible with Ko-fi.
            </p>
            <a href="https://ko-fi.com/mrmike227" class="btn patreon-button">
                <icon name="cib:ko-fi"/>
                Become a Supporter
            </a>
            <h4>Current Supporters:</h4>
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-3">
                        <patron name="Ashton" tier="Silent Assassin"/>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-3">
                        <patron name="Sailor Assassin" tier="Silent Assassin"/>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-3">
                        <patron name="Some Random Person" tier="Assassin" legacy/>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-sm-3">
                        <patron name="ChromeX" tier="Assassin" legacy />
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-3">
                        <patron name="ThatObserver" tier="Assassin" legacy />
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-3">
                        <patron name="AgentSnail47" tier="Agent" legacy />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <patron name="illum503" tier="Agent" />
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-3">
                        <patron name="ARcheR X" tier="Initiate" legacy />
                    </div>
                </div>
            </div>
            <h4>One-Time Contributors:</h4>
            <ul>
                <li>Frote7 - 47.00 USD</li>
                <li>Billy_Rizzle - 25.00 USD</li>
            </ul>
            <h3 style="margin-top: 20px;">PayPal</h3>
            <p>
                I previously accepted tips/contributions via PayPal. Since Ko-fi allows both one-time and monthly
                contributions, I no longer accept contributions via PayPal.
            </p>
            <p>Previous Donors (contribution amounts are cumulative):</p>
            <ul>
                <li>David Thompson - 50.00 USD</li>
                <li>Alexander White - 40.00 USD</li>
                <li>Finikyu - 25.00 USD</li>
                <li>Frote7 - 21.23 USD</li>
                <li>TimothyMark - 10.47 USD</li>
                <li>GKPunk - 10.00 USD</li>
                <li>Jonathan Rokosz - 10.00 USD</li>
                <li>Spencer Sabet - 6.00 USD</li>
                <li>Brian McKenzie - 5.55 USD</li>
                <li>srm022 - 5.00 USD</li>
                <li>Derek Ashel - 5.00 USD</li>
                <li>Esther de Bruin - 5.00 USD</li>
                <li>Somdy Alafac - 5.00 USD</li>
                <li>Gabriel Caballero - 4.70 USD</li>
                <li>Nikjojo - 3.00 USD</li>
            </ul>
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
//region SEO
useSeoMeta({
    ogTitle: () => Utils.siteTitle('Support the Site')
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

        p, ul {
            font-family: 'Roboto', 'Arial', sans-serif;
            font-weight: lighter;
        }

        a {
            color: $content-text;

            &.patreon-button {
                margin-bottom: 20px;
                border-radius: 0;
                background: $support-the-site;
                color: #fff;

                &:hover {
                    background: $support-the-site-hover;
                }
            }
        }
    }
}
</style>

<template>
    <Head>
        <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <Link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png"/>
        <Link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/>
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <Link rel="manifest" href="/site.webmanifest"/>
        <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff1439"/>
        <Link rel="shortcut icon" href="/favicon.ico"/>
    </Head>
    <NuxtPage/>
    <footer v-if="isNotInMap()">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h4>&copy; 2018 - {{ currentYear }} hitmaps.com</h4>
                    <p style="margin-bottom: 0">
                        <i18n-t keypath="footer.disclaimer">
                            <template v-slot:ioiLink>
                                <a href="https://www.ioi.dk" target="_blank">{{ $t('footer.io-interactive') }}</a>
                            </template>
                        </i18n-t>
                    </p>
                    <p>
                        <i18n-t keypath="footer.developed-by">
                            <template v-slot:mikeKochLink>
                                <a href="https://mikeko.ch" target="_blank">Mike Koch</a>
                            </template>
                        </i18n-t>
                    </p>
                </div>
                <div class="col-md-6 text-end">
                    <nuxt-link to="/about">
                        <footer-icon-stack icon="fa6-solid:circle-info" :tooltip-text="$t('footer.about')"/>
                    </nuxt-link>
                    <a href="https://discord.gg/RssFsajjjX" target="_blank">
                        <footer-icon-stack icon="fa6-brands:discord" :tooltip-text="$t('footer.join-the-discord')"/>
                    </a>
                    <a
                        href="https://hitmanstat.us"
                        target="_blank"
                        data-toggle="tooltip">
                        <footer-icon-stack icon="fa6-solid:user-tie" :tooltip-text="$t('footer.hitman-status')"/>
                    </a>
                    <a href="https://twitter.com/hitmapsdotcom" target="_blank">
                        <footer-icon-stack icon="fa6-brands:x-twitter" :tooltip-text="$t('footer.twitter')"/>
                    </a>
                    <a href="https://www.patreon.com/mrmike227"
                       target="_blank"
                       data-toggle="tooltip"
                       class="patreon-button">
                        <footer-icon-stack icon="fa6-brands:patreon" :tooltip-text="$t('footer.patreon')"/>
                    </a>
                </div>
            </div>
            <div class="row legal">
                <div class="col-sm-2">
                    <span class="language-switcher">
                        <locale-modal/>
                    </span>
                </div>
                <div class="col-sm-10 text-end">
                    <span class="footer-link">
                        <icon name="fa-solid:gavel"/>
                        <nuxt-link to="/terms-of-use">
                            {{ $t('authentication.terms-of-use') }}</nuxt-link>
                    </span>
                    |
                    <span class="footer-link">
                      <icon name="fa-solid:shield-alt"/>
                        <nuxt-link to="/privacy-policy">
                            {{ $t('authentication.privacy-policy') }}</nuxt-link>
                    </span>
                    |
                    <span class="footer-link">
                      <icon name="fa-solid:paint-brush"/>
                      <nuxt-link to="/brand">{{ $t('footer.brand-guidelines') }}</nuxt-link>
                  </span>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
const currentYear = ref(new Date().getFullYear());
const route = useRoute();

useHead({
    titleTemplate: (titleChunk) => Utils.siteTitle(titleChunk)
});
useSeoMeta({
    appleMobileWebAppTitle: 'HITMAPS',
    applicationName: 'HITMAPS',
    description: 'HITMAPS™ provides interactive maps for the Hitman series, including HITMAN World of Assassination and Hitman: Absolution',
    msapplicationTileColor: '#aabdc6',
    themeColor: '#aabdc6',
    ogType: 'website',
    ogTitle: () => Utils.siteTitle(undefined),
    ogDescription: 'HITMAPS™ provides interactive maps for the Hitman series, including HITMAN World of Assassination and Hitman: Absolution',
    ogImage: 'https://media.hitmaps.com/img/hitmaps-custom/promo1.png',
    twitterImage: 'https://media.hitmaps.com/img/hitmaps-custom/promo1.png',
    twitterCard: 'summary_large_image',
    twitterDescription: 'HITMAPS™ provides interactive maps for the Hitman series, including HITMAN World of Assassination and Hitman: Absolution'
});

function isNotInMap() {
    // Thanks nuxt!
    return route.name !== 'games-game-location-mission';
}
</script>
<style lang="scss" scoped>
.footer-link {
    a {
        text-decoration: none;
        margin-left: 2px;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
<style lang="scss">
html,
body,
#__nuxt {
    height: 100%;
}

#__nuxt {
    background: #ddd;
    display: flex;
    flex-direction: column;

    .content {
        flex: 1 0 auto;
    }

    .language-switcher {
        cursor: pointer;
    }
}

header {
    font-family: 'Roboto', 'Arial', sans-serif;
    color: #fff;
    font-weight: bolder;
    margin-top: 20px;
    width: 100%;

    h1 {
        text-transform: uppercase;
    }

    h2 {
        margin-top: 20px;
    }
}

footer {
    flex-shrink: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background: #000;
    color: #6b6c72;

    a {
        color: #fff;

        .fa-stack > .fa-stack-1x {
            color: #000;
        }

        &:hover {
            color: #ddd;

            .fa-stack > .fa-stack-1x {
                color: #000;
            }
        }

        &.patreon-button {
            color: #e7705c;

            &:hover {
                color: #cd685c;
            }
        }
    }

    .legal {
        color: #fff;

        .footer-link {
            margin-left: 5px;
            margin-right: 5px;
        }
    }

    h4 {
        text-transform: uppercase;
        color: #fff;
        font-size: 1rem;
    }
}

.breadcrumb {
    background: transparent;

    .breadcrumb-item {
        padding-left: 30px;
        padding-right: 30px;
        font-size: 1.5rem;
        text-shadow: 2px 2px 2px #000;
        font-weight: normal;

        a {
            color: #fff;
        }

        &.active {
            color: #fff;
        }

        & + .breadcrumb-item::before {
            //noinspection CssNoGenericFontName
            font-family: 'Font Awesome 5 Pro';
            content: '\f054';
            margin-right: 30px;
            color: #fff;
        }
    }
}

@font-face {
    font-family: 'nimbus_sans_lbold';
    src: url('/fonts/NimbusSanL-Bol-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'nimbus_sans_lregular';
    src: url('/fonts/NimbusSanL-Reg-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.modal-backdrop {
    display: none;
}
</style>
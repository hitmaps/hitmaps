<template>
    <div id="app">
        <router-view />
        <footer v-if="isNotInMap()">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h4>
                            &copy; 2018 - {{ $currentYear }} hitman2maps.com
                        </h4>
                        <p>
                            HITMAN™, HITMAN™ 2, the HITMAN™ logo, images, and
                            text are the property of
                            <a href="https://www.ioi.dk" target="_blank">
                                IO Interactive
                            </a>
                            .
                        </p>
                    </div>
                    <div class="col-md-6 text-right">
                        <a
                            href="https://discord.gg/eZqhZah"
                            target="_blank"
                            data-toggle="tooltip"
                            title="Join the HITMAN™ 2 Maps Discord"
                        >
                            <span class="fa-stack fa-2x">
                                <i class="fas fa-square fa-stack-2x"></i>
                                <i
                                    class="fab fa-discord fa-stack-1x fa-inverse"
                                ></i>
                            </span>
                        </a>
                        <a
                            href="https://www.hitmanforum.com/t/interactive-maps-for-hitman-2/27897"
                            target="_blank"
                            data-toggle="tooltip"
                            title="hitmanforum.com Discussion"
                        >
                            <span class="fa-stack fa-2x">
                                <i class="fas fa-square fa-stack-2x"></i>
                                <i
                                    class="fas fa-comments fa-stack-1x fa-inverse"
                                ></i>
                            </span>
                        </a>
                        <a
                            href="https://hitmanstat.us"
                            target="_blank"
                            data-toggle="tooltip"
                            title="HITMAN™ Server Status - Made With <3 by Hardware"
                        >
                            <span class="fa-stack fa-2x">
                                <i class="fas fa-square fa-stack-2x"></i>
                                <i
                                    class="fas fa-user-tie fa-stack-1x fa-inverse"
                                ></i>
                            </span>
                        </a>
                        <a
                            href="https://status.hitman2maps.com"
                            data-toggle="tooltip"
                            title="HITMAN™ 2 Maps Server Status"
                        >
                            <span class="fa-stack fa-2x">
                                <i class="fas fa-square fa-stack-2x"></i>
                                <i
                                    class="fas fa-shield-check fa-stack-1x fa-inverse"
                                ></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="row legal">
                    <div class="col-sm-12 text-right">
                        <span class="footer-link">
                            <router-link :to="{ name: 'terms-of-use' }">
                                <i class="fas fa-gavel"></i>
                                Terms of Use
                            </router-link>
                        </span>
                        |
                        <span class="footer-link">
                            <router-link :to="{ name: 'privacy-policy' }">
                                <i class="fas fa-user-secret"></i>
                                Privacy Policy
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
$(function() {
    $('body').tooltip({
        selector: '[data-toggle="tooltip"]'
    })
})

export default {
    methods: {
        isNotInMap() {
            return this.$router.history.current.name !== 'map-view'
        }
    }
}
</script>

<style lang="scss">
html,
body,
#app {
    height: 100%;
}

#app {
    background: #ddd;
    display: flex;
    flex-direction: column;

    .content {
        flex: 1 0 auto;
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
</style>

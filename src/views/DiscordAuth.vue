<template>
    <div
            class="content"
            style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <header class="row">
            <div class="col text-center site-header">
                <router-link :to="{ name: 'home' }">
                    <img
                            v-webp
                            src="/img/png/logos/hitmaps.png"
                            class="img-fluid"
                    />
                </router-link>
                <h1>{{ $t('interactive-maps-for-hitman') }}</h1>
            </div>
        </header>
        <div class="row">
            <div class="col-md-6 offset-md-3 login">
                <div class="login-card">
                    <h3>{{ $t('authentication.login-with-discord') }}</h3>
                    <p v-if="error !== ''">{{ $t(`authentication.${error}`) }}</p>
                    <p v-else>{{ $t('authentication.logging-in') }}</p>
                </div>
                <div class="sign-in-button">
                    <router-link :to="{ name: 'home' }">
                        <game-button>
                            <game-icon icon="story" font-style="normal" />
                            Home
                        </game-button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GameButton from "../components/GameButton";
    import GameIcon from "../components/GameIcon";

    export default {
        name: "DiscordAuth",
        data() {
            return {
                error: ''
            }
        },
        components: {
            GameIcon,
            GameButton
        },
        mounted() {
            // Discord Callback
            let hashes = this.$route.hash.slice(1).split('&');
            let hashParameters = {};
            let hasParameters = false;
            hashes.forEach(param => {
                let splitParams = param.split('=');
                hashParameters[splitParams[0]] = splitParams[1];

                if (splitParams[0] === 'token_type' || splitParams[0] === 'access_token') {
                    hasParameters = true;
                }
            });

            if (!hasParameters) {
                return;
            }

            var data = new FormData()
            data.append('tokenType', hashParameters['token_type']);
            data.append('accessToken', hashParameters['access_token']);

            this.$http
                .post(this.$domain + '/api/web/user/login', data)
                .then(resp => {
                    if (resp.data.data !== null) {
                        this.error = resp.data.data.messages[0].icon;
                    } else if (resp.data.token !== null) {
                        localStorage.setItem('token', resp.data.token);

                        let redirectLocation = '/';
                        if (this.$cookies.isKey('redirect-location')) {
                            redirectLocation = this.$cookies.get('redirect-location');
                            this.$cookies.remove('redirect-location');
                        }

                        window.location.href = redirectLocation;
                    }
                });
        }
    }
</script>

<style lang="scss" scoped>
    .site-header {
        margin: 0 20px;

        h1 {
            margin-top: 20px;
        }

        img {
            max-height: 100px;
        }
    }

    .row {
        .col-md-6.login {
            background: transparent;
            border: none;

            .alert {
                margin: 10px;
            }

            .login-card {
                margin: 10px;
                background: $content-background;
                color: $content-text;
                padding: 1rem;
            }

            h3 {
                font-family: 'nimbus_sans_lbold', sans-serif;
                text-transform: uppercase;
                border-bottom: none;
                border-radius: 0;
            }

            .sign-in-button {
                background: #fff;
                padding: 0;
                margin: 0 10px 10px;

                a:hover {
                    text-decoration: none;
                }
            }

            .blurple {
                background: #7289da;
                color: #fff;
                border: none;

                &:hover {
                    background: #6073bf;
                }
            }
        }
    }
</style>

<template>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
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
                <h2>{{ $t('authentication.login-or-create-an-account') }}</h2>
            </div>
        </header>
        <div class="row">
            <div class="col-md-6 offset-md-3 login">
                <div class="login-card">
                    <h3>{{ $t('authentication.sign-in') }}</h3>
                    <!-- TODO Add Discord button -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VeeValidate from 'vee-validate'
import VueRecaptcha from 'vue-recaptcha'
import Vue from 'vue'
import Alert from '../components/Alert'
import Modal from '../components/Modal'
import GameButton from '../components/GameButton'

Vue.use(VeeValidate)
VeeValidate.configure({
    events: 'change'
})
export default {
    name: 'login',
    data() {
        return {
            referer: '/'
        }
    },
    components: {
        GameButton,
        Modal,
        Alert
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // TODO -- set cookie
            vm.referer = from.path
        })
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
            background: #fff;
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
    }
}
</style>

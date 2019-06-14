<template>
    <div
        class="content"
        style="background: url('/img/jpg/backgrounds/loading.jpg') no-repeat center center fixed; background-size: cover"
    >
        <header class="row">
            <div class="col text-center">
                <h1>Interactive Maps For</h1>
                <router-link :to="{ name: 'home' }">
                    <img src="/img/png/logos/hitman2.png" class="img-fluid" />
                </router-link>
                <h2>Login or Create an Account</h2>
            </div>
        </header>
        <div class="row">
            <div class="col-md-6 offset-md-3 login">
                <alert v-for="message in login.messages" :type="message.type">
                    {{ message.messageHtml }}
                </alert>
                <alert v-if="this.$route.hash === '#verified'" type="success">
                    Account verified! You may now log in.
                </alert>
                <alert
                    v-if="this.$route.hash === '#verify-failed'"
                    type="danger"
                >
                    We were not able to verify your account. Make sure you
                    clicked the activation link from the most recent email you
                    received, and that the link did not expire.
                </alert>
                <div class="login-card">
                    <h3>Sign In</h3>
                    <div class="form-group email row">
                        <label for="email" class="col-md-3 col-form-label">
                            <i class="fas fa-envelope"></i>
                            Email
                        </label>
                        <div class="col-md-9">
                            <input
                                type="email"
                                v-validate
                                name="email"
                                v-model="login.email"
                                :class="{
                                    'is-invalid': errors.has('login.email'),
                                    'text-danger': errors.has('login.email')
                                }"
                                class="form-control"
                                id="login-email"
                                placeholder="carlton.smith@example.com"
                                data-vv-scope="login"
                                required
                            />
                            <span
                                v-show="errors.has('login.email')"
                                class="form-text text-danger"
                            >
                                {{ errors.first('login.email') }}
                            </span>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-md-3 col-form-label">
                            <i class="fas fa-key"></i>
                            Password
                        </label>
                        <div class="col-md-9">
                            <input
                                type="password"
                                v-validate
                                name="pass"
                                v-model="login.password"
                                :class="{
                                    'is-invalid': errors.has('login.pass'),
                                    'text-danger': errors.has('login.pass')
                                }"
                                class="form-control"
                                id="login-password"
                                placeholder="********"
                                data-vv-scope="login"
                                required
                            />
                            <div class="row">
                                <div class="col-md-6">
                                    <span
                                        v-show="errors.has('login.pass')"
                                        class="form-text text-danger"
                                    >
                                        {{ errors.first('login.pass') }}
                                    </span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <div class="help-block">
                                        <a
                                            href="javascript:"
                                            data-toggle="modal"
                                            data-target="#forgot-password"
                                        >
                                            I forgot my password
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sign-in-button">
                    <button
                        type="button"
                        @click="doLogin"
                        class="btn btn-block"
                    >
                        <img
                            src="/img/game-icons/modal-continue.png"
                            class="normal img-fluid"
                            alt="Notification Icon"
                        />
                        <img
                            src="/img/game-icons/modal-continue-inverted.png"
                            class="inverted img-fluid"
                            alt="Notification Icon"
                        />
                        Sign In
                    </button>
                </div>
                <div class="sign-in-button">
                    <router-link
                        type="button"
                        class="btn btn-block"
                        :to="{ name: 'register' }"
                    >
                        <img
                            src="/img/game-icons/modal-continue.png"
                            class="normal img-fluid"
                            alt="Notification Icon"
                        />
                        <img
                            src="/img/game-icons/modal-continue-inverted.png"
                            class="inverted img-fluid"
                            alt="Notification Icon"
                        />
                        Create an Account
                    </router-link>
                </div>
            </div>
            <modal
                id="forgot-password"
                aria-labelledby="forgot-password-label"
                modalTitle="Forgot Password?"
                dismissable
            >
                <p>
                    Forgot your password? No problem! Enter your email below and
                    we will send you an email with a link to reset your
                    password.
                </p>
                <div class="form-group row">
                    <label for="email" class="col-form-label col-md-3">
                        <i class="fa fa-envelope"></i>
                        Email
                    </label>
                    <div class="col-md-9">
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            placeholder="carlton.smith@example.com"
                            v-model="resetPassword.email"
                            required
                        />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <template v-slot:modal-footer>
                    <game-button data-dismiss="modal" @click="doResetPassword">
                        <img
                            src="/img/game-icons/modal-continue.png"
                            class="normal img-fluid"
                            alt="Submit Icon"
                        />
                        <img
                            src="/img/game-icons/modal-continue-inverted.png"
                            class="inverted img-fluid"
                            alt="Submit Icon"
                        />
                        Submit
                    </game-button>
                    <game-button data-dismiss="modal">
                        <img
                            src="/img/game-icons/modal-close.png"
                            class="normal img-fluid"
                            alt="Cancel Icon"
                        />
                        <img
                            src="/img/game-icons/modal-close-inverted.png"
                            class="inverted img-fluid"
                            alt="Cancel Icon"
                        />
                        Cancel
                    </game-button>
                </template>
            </modal>
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
            recaptchaSiteKey: process.env.VUE_APP_RECAPTCHA_KEY,
            login: {
                email: '',
                password: '',
                messages: []
            },
            resetPassword: {
                email: ''
            },
            recaptcha: '',
            referer: '/'
        }
    },
    components: {
        GameButton,
        Modal,
        Alert,
        VueRecaptcha
    },
    methods: {
        doLogin: function() {
            this.$validator.validateAll('login').then(result => {
                if (result) {
                    var data = new FormData()
                    data.append('email', this.login.email)
                    data.append('password', this.login.password)

                    this.$http
                        .post(this.$domain + '/api/web/user/login', data)
                        .then(resp => {
                            if (resp.data.data !== null) {
                                this.login.messages = resp.data.data.messages
                            }
                            if (resp.data.token !== null) {
                                localStorage.setItem('token', resp.data.token)
                                this.$router.push({ path: this.referer })
                            }
                        })
                }
            })
        },
        doResetPassword: function() {
            this.$validator.validateAll('resetPassword').then(result => {
                if (result) {
                    const data = new FormData()
                    data.append('email', this.resetPassword.email)

                    this.$request(true, 'web/user/forgot-password', data).then(
                        resp => {
                            this.login.messages = [
                                {
                                    messageHtml: resp.data.message,
                                    type: 'success'
                                }
                            ]
                        }
                    )
                }
            })
        },
        validEmail: function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email)
        }
    },
    created: function() {
        this.$validator.localize({
            en: {
                messages: {
                    email: 'This value should be a valid email.',
                    required: 'This value is required.'
                },
                custom: {
                    recaptcha: {
                        required: 'Please complete the captcha.'
                    }
                }
            }
        })
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.referer = from.path
        })
    }
}
</script>

<style lang="scss" scoped>
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

            .btn-block {
                border-radius: 0;
                text-transform: uppercase;
                background: #fff;
                color: #000;
                font-family: 'nimbus_sans_lbold', sans-serif;
                text-align: left;
                font-size: 1.3rem;
                transition: none;

                img {
                    max-width: 32px;
                    max-height: 32px;
                    vertical-align: top;

                    &.normal {
                        display: inline-block;
                    }

                    &.inverted {
                        display: none;
                    }

                    &:hover {
                        &.normal {
                            display: none;
                        }

                        &.inverted {
                            display: inline-block;
                        }
                    }
                }

                &:hover {
                    background: #ff003c;
                    color: #fff;

                    img {
                        &.normal {
                            display: none;
                        }

                        &.inverted {
                            display: inline-block;
                        }
                    }
                }
            }
        }
    }
}
</style>

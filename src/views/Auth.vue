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
            <div class="col-md-6 offset-md-3 login" v-if="!showRegistration">
                <div class="login-card">
                    <div
                        v-for="alert in login.messages"
                        :key="alert.type"
                        :class="'alert alert-' + alert.type"
                        role="alert"
                    >
                        <i :class="'fas fa-' + alert.icon"></i>
                        {{ alert.messageHtml }}
                    </div>
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
                    <button
                        type="button"
                        @click="showRegistration = true"
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
                        Create an Account
                    </button>
                </div>
            </div>
            <div class="col-md-6 offset-md-3 login" v-if="showRegistration">
                <div class="login-card">
                    <h3>Create an Account</h3>
                    <div class="form-group row">
                        <label
                            for="super-secret-code"
                            class="col-md-3 col-form-label"
                        >
                            Registration Code
                        </label>
                        <div class="col-md-9">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="lemmein!"
                            />
                            <small class="form-text text-muted">
                                Please enter the registration code that was
                                provided to you. If you were not provided a
                                registration code, you cannot register at this
                                time. Public registration will be available in
                                the future once the beta test has completed.
                            </small>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="name" class="col-md-3 col-form-label">
                            <i class="fas fa-user-plus"></i>
                            Name
                        </label>
                        <div class="col-md-9">
                            <input
                                type="text"
                                class="form-control"
                                id="register-name"
                                placeholder="Carlton Smith"
                                required
                            />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="email" class="col-md-3 col-form-label">
                            <i class="fas fa-envelope"></i>
                            Email
                        </label>
                        <div class="col-md-9">
                            <input
                                type="email"
                                class="form-control"
                                id="register-email"
                                placeholder="carlton.smith@example.com"
                                data-parsley-remote="/user/register/verify-email"
                                data-parsley-remote-message="An account with this email already exists"
                                required
                            />
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
                                class="form-control"
                                id="register-password"
                                placeholder="********"
                                minlength="8"
                                data-parsley-error-message="Password must be at least 8 characters"
                                required
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="confirm-password"
                            class="col-md-3 col-form-label"
                        >
                            <i class="fas fa-key"></i>
                            Confirm Password
                        </label>
                        <div class="col-md-9">
                            <input
                                type="password"
                                class="form-control"
                                id="register-confirm-password"
                                placeholder="********"
                                data-parsley-equalto="#password"
                                data-parsley-error-message="Passwords must match"
                                required
                            />
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group row has-feedback">
                        <div class="col-md-9 offset-md-3">
                            <div class="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        data-error="You must agree to the Terms of Use and Privacy Policy"
                                        required
                                    />
                                    I agree to the
                                    <a href="/terms-of-use" target="_blank">
                                        Terms of Use
                                    </a>
                                    and
                                    <a href="/privacy-policy" target="_blank">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row has-feedback">
                        <div class="col-md-9 offset-md-3">
                            <vue-recaptcha
                                @verify="recaptcha = $event"
                                @expired="recaptcha = ''"
                                :sitekey="recaptchaSiteKey"
                            ></vue-recaptcha>
                            <input
                                type="hidden"
                                class="form-control"
                                name="recaptcha"
                                v-validate
                                v-model="recaptcha"
                                data-vv-scope="login"
                                required
                            />
                            <span
                                v-show="errors.has('login.recaptcha')"
                                class="form-text text-danger"
                            >
                                {{ errors.first('login.recaptcha') }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sign-in-button">
                    <button type="button" class="btn btn-block">
                        <img
                            src="/img/game-icons/modal-continue.png"
                            class="normal img-fluid"
                            alt="Register Icon"
                        />
                        <img
                            src="/img/game-icons/modal-continue-inverted.png"
                            class="inverted img-fluid"
                            alt="Register Icon"
                        />
                        Register
                    </button>
                </div>
                <div class="sign-in-button">
                    <button
                        type="button"
                        @click="showRegistration = false"
                        class="btn btn-block"
                    >
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
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VeeValidate from 'vee-validate'
import VueRecaptcha from 'vue-recaptcha'
import Vue from 'vue'

Vue.use(VeeValidate)
VeeValidate.configure({
    events: 'change'
})
export default {
    name: 'user-auth',
    data() {
        return {
            recaptchaSiteKey: process.env.VUE_APP_RECAPTCHA_KEY,
            login: {
                email: '',
                password: '',
                messages: []
            },
            register: {},
            recaptcha: '',
            referer: '/',
            showRegistration: false
        }
    },
    components: {
        VueRecaptcha
    },
    methods: {
        doLogin: function() {
            this.$validator.validateAll('login').then(result => {
                if (result) {
                    var data = new FormData()
                    data.append('email', this.login.email)
                    data.append('password', this.login.password)

                    // TODO Move to registration
                    //data.append('g-recaptcha-response', this.recaptcha)
                    this.$http
                        .post(this.$domain + '/api/web/user/login', data)
                        .then(resp => {
                            this.login.messages = resp.data.messages
                            if (resp.data.token !== null) {
                                localStorage.setItem('token', resp.data.token)
                                this.$router.push({ path: this.referer })
                            }
                        })
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

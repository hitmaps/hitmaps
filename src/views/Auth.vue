<template>
    <div>
        <header class="row">
            <div class="col text-center">
                <h1>Interactive Maps For</h1>
                <router-link :to="{name: 'home'}">
                    <img src="/cdn/png/logos/hitman2.png" class="img-fluid">
                </router-link>
                <h2>Login or Create an Account</h2>
            </div>
        </header>
        <div class="row">
            <div class="col login">
                <div class="login-card">
                    <div v-for="alert in login.messages" :key="alert.type" :class="'alert alert-' + alert.type" role="alert">
                        <i :class="'fas fa-' + alert.icon"></i>
                        {{ alert.messageHtml }}
                    </div>
                    <h3>Existing Users</h3>
                    <h4>Sign In</h4>
                    <div class="form-group email row">
                        <label for="email" class="col-md-3 col-form-label"><i class="fas fa-envelope"></i> Email</label>
                        <div class="col-md-9">
                            <input type="email" v-validate name="email" v-model="login.email" :class="{'is-invalid' : errors.has('login.email'), 'text-danger': errors.has('login.email')}" 
                            class="form-control" id="login-email" placeholder="carlton.smith@example.com" data-vv-scope="login" required>
                            <span v-show="errors.has('login.email')" class="form-text text-danger">{{errors.first('login.email')}}</span>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-md-3 col-form-label"><i class="fas fa-key"></i> Password</label>
                        <div class="col-md-9">
                            <input type="password" v-validate name="pass" v-model="login.password" :class="{'is-invalid' : errors.has('login.pass'), 'text-danger': errors.has('login.pass')}" 
                            class="form-control" id="login-password" placeholder="********" data-vv-scope="login" required>
                            <div class="row">
                                <div class="col-md-6">
                                    <span v-show="errors.has('login.pass')" class="form-text text-danger">{{errors.first('login.pass')}}</span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <div class="help-block">
                                        <a href="javascript:" data-toggle="modal" data-target="#forgot-password">I forgot my password</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row has-feedback">
                        <div class="col-md-9 offset-md-3">
                            <vue-recaptcha @verify="recaptcha = $event" @expired="recaptcha = ''" sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></vue-recaptcha>
                            <input type="hidden" class="form-control" name="recaptcha" v-validate v-model="recaptcha" data-vv-scope="login" required>
                            <span v-show="errors.has('login.recaptcha')" class="form-text text-danger">{{errors.first('login.recaptcha')}}</span>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-3 offset-md-3">
                            
                            <button type="button" @click="doLogin" class="btn btn-primary">
                                <i class="fas fa-sign-in-alt"></i> Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col login">
                <div class="login-card">
                    <h3>New Users</h3>
                    <h4>Create an Account to Get Started</h4>
                    <div class="form-group row">
                        <label for="super-secret-code" class="col-md-3 col-form-label">Registration Code</label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" placeholder="lemmein!">
                            <small class="form-text text-muted">
                                Please enter the registration code that was provided to you.
                                If you were not provided a registration code, you cannot register at this time.
                                Public registration will be available in the future once the beta test has completed.
                            </small>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="name" class="col-md-3 col-form-label"><i class="fas fa-user-plus"></i> Name</label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="register-name" placeholder="Carlton Smith" required>
                        </div>
                    </div>

                    
                    <div class="form-group row">
                        <label for="email" class="col-md-3 col-form-label"><i class="fas fa-envelope"></i> Email</label>
                        <div class="col-md-9">
                            <input type="email" class="form-control" id="register-email"
                                   placeholder="carlton.smith@example.com"
                                   data-parsley-remote="/user/register/verify-email"
                                   data-parsley-remote-message="An account with this email already exists"
                                   required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-md-3 col-form-label"><i class="fas fa-key"></i> Password</label>
                        <div class="col-md-9">
                            <input type="password" class="form-control" id="register-password" placeholder="********"
                                   minlength="8" data-parsley-error-message="Password must be at least 8 characters" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="confirm-password" class="col-md-3 col-form-label"><i class="fas fa-key"></i> Confirm Password</label>
                        <div class="col-md-9">
                            <input type="password" class="form-control" id="register-confirm-password"
                                   placeholder="********" data-parsley-equalto="#password" data-parsley-error-message="Passwords must match" required>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group row has-feedback">
                        <div class="col-md-9 offset-md-3">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="terms" data-error="You must agree to the Terms of Use and Privacy Policy" required>
                                    I agree to the <a href="/terms-of-use" target="_blank">Terms of Use</a> and <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row has-feedback">
                        <div class="col-md-9 offset-md-3">
                            <div class="g-recaptcha"
                                 data-callback="verifyRecaptchaCallback"
                                 data-expired-callback="expiredRecaptchaCallback"
                                 data-sitekey="asdsaasasdad"></div>
                            <input type="hidden" class="form-control" data-parsley-required="true" data-recaptcha="true" data-parsley-error-message="Please complete the captcha" data-validate="true" required>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-2 offset-md-3">
                            <button class="btn btn-primary" type="button">
                                <i class="fas fa-check"></i> Submit
                            </button>
                        </div>
                    </div>
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
});
export default {
    name: 'user-auth',
    data () {
        return {
            login: {
                email: "",
                password: "",
                messages: []
            },
            register: {},
            recaptcha: ""
        }
    },
    components: {
        VueRecaptcha
    },
    methods: {
        doLogin: function() {
            this.$validator.validateAll("login").then((result) => {
                if (result) {
                    var data = new FormData()
                    data.append("email", this.login.email)
                    data.append("password", this.login.password)
                    data.append("g-recaptcha-response", this.recaptcha)
                    this.$http.post(this.$domain + "/api/v1/user/login", data).then(resp => {
                        this.login.messages = resp.data.messages
                        if(resp.data.loggedIn) {
                            document.cookie = "PHPSESSID=" + resp.data.session + ";path=/";
                            this.$router.push({path: this.$route.params.redirect ? this.$route.params.redirect : "/home" }) 
                        }
                    })
                }
            });
        },
        validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        }
  },
  created: function() {
    this.$validator.localize({
        en: {
            messages:{
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
  }
}
</script>

<style lang="scss" scoped>
.row {
    .col.login {
        margin: 40px;

        &:first-child {
        margin-right: 20px;
        }

        &:last-child {
        margin-left: 20px;
        }

        background: #fff;
        border-radius: .25rem;
        border: solid 1px rgba(0, 0, 0, .125);

        .login-card {
        margin: 10px;
        }
    }
}

</style>
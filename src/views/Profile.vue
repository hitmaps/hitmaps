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
                <h2>Manage Your Profile</h2>
            </div>
        </header>
        <div class="row">
            <div class="col login">
                <div class="login-card">
                    <h3>Change Name</h3>
                    <div class="form-group row has-feedback">
                        <label for="email" class="col-form-label col-md-4">
                            <i class="fas fa-envelope"></i>
                            Email
                        </label>
                        <div class="col-md-8">
                            <input
                                type="email"
                                class="form-control"
                                name="email"
                                v-model="model.email"
                                disabled
                                required
                            />
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group row has-feedback">
                        <label for="name" class="col-form-label col-md-4">
                            <i class="fas fa-user"></i>
                            Name
                        </label>
                        <div class="col-md-8">
                            <input
                                type="text"
                                class="form-control"
                                name="name"
                                placeholder="Carlton Smith"
                                v-model="model.name"
                                required
                            />
                            <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                            ></span>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-5 offset-md-4">
                            <button
                                class="btn btn-primary"
                                type="submit"
                                @click="changeName"
                            >
                                <i class="fas fa-check"></i> Save Name
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col login">
                <div class="login-card">
                    <h3>Change Password</h3>
                    <div class="form-group row has-feedback">
                        <label
                            for="current-password"
                            class="col-form-label col-md-5"
                        >
                            <i class="fa fa-key"></i>
                            Current Password
                        </label>
                        <div class="col-md-7">
                            <input
                                type="password"
                                class="form-control"
                                name="current-password"
                                id="current-password"
                                v-model="model.currentPassword"
                                placeholder="********"
                                required
                            />
                            <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                            ></span>
                        </div>
                    </div>
                    <div class="form-group row has-feedback">
                        <label for="password" class="col-form-label col-md-5">
                            <i class="fa fa-key"></i>
                            New Password
                        </label>
                        <div class="col-md-7">
                            <input
                                type="password"
                                class="form-control"
                                name="password"
                                id="password"
                                placeholder="********"
                                v-model="model.newPassword"
                                minlength="8"
                                required
                            />
                            <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                            ></span>
                        </div>
                    </div>
                    <div class="form-group row has-feedback">
                        <label
                            for="confirm-password"
                            class="col-form-label col-md-5"
                        >
                            <i class="fa fa-key"></i>
                            Confirm New Password
                        </label>
                        <div class="col-md-7">
                            <input
                                type="password"
                                class="form-control"
                                name="confirm-password"
                                placeholder="********"
                                v-model="model.confirmNewPassword"
                                data-parsley-equalto="#password"
                                data-parsley-error-message="Passwords must match"
                                required
                            />
                            <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                            ></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-5 offset-md-5">
                            <button
                                class="btn btn-primary"
                                type="submit"
                                @click="changePassword"
                            >
                                <i class="fas fa-check"></i> Update Password
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
    events: 'change',
})
export default {
    name: 'profile',
    data() {
        return {
            model: {
                email: '',
                name: '',
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: '',
            },
        }
    },
    methods: {
        changePassword: function() {
            const data = new FormData()
            data.append('email', this.model.email)
            data.append('name', this.model.name)
            this.$http
                .post(this.$domain + '/api/web/user/edit/basic-info', data)
                .then(resp => {
                    console.log(resp)
                })
            /*this.$validator.validateAll("login").then((result) => {
                    if (result) {
                        var data = new FormData()
                        data.append("email", this.login.email)
                        data.append("password", this.login.password)
                        data.append("g-recaptcha-response", this.recaptcha)
                        this.$http.post(this.$domain + "/api/web/user/login", data).then(resp => {
                            this.login.messages = resp.data.messages
                            if (resp.data.token !== null) {
                                localStorage.setItem('token', resp.data.token);
                                this.$router.push({path: this.referer});
                            }
                        })
                    }
                });*/
        },
    },
    created: function() {
        this.$http.get(this.$domain + '/api/web/user/edit', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(resp => {
                this.model.name = resp.data.data.name;
                this.model.email = resp.data.data.email;
            })
            this.$validator.localize({
                en: {
                    messages: {
                        email: 'This value should be a valid email.',
                        required: 'This value is required.',
                },
                custom: {
                    recaptcha: {
                        required: 'Please complete the captcha.',
                    },
                },
            },
        })
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.referer = from.path
        })
    },
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
        border-radius: 0.25rem;
        border: solid 1px rgba(0, 0, 0, 0.125);

        .login-card {
            margin: 10px;
        }
    }
}
</style>

<template>
    <p style="height: 100vh; background: white;">Logging in with Discord, please wait...</p>
</template>

<script>
    export default {
        name: "DiscordAuth",
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
                        alert(resp.data.data.messages);
                    }
                    if (resp.data.token !== null) {
                        localStorage.setItem('token', resp.data.token)

                        // TODO Get redirect cookie location, and clear cookie
                        // const redirectLocation = this.$cookies.get('redirect-location');
                        // this.$cookies.remove('redirect-location');
                        //window.location.href = redirectLocation;
                    }
                })
            // TODO: Call HITMAPS API
        }
    }
</script>

<style lang="scss" scoped>
body {
    background-color: white;
}
</style>

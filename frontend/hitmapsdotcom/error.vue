<script setup>
const error = useError();
const { t } = useI18n();

const handleError = () => {
    clearError({
        redirect: '/'
    });
}
</script>
<template>
    <NuxtLayout>
        <div class="body" style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg')">
            <div class="not-found" v-if="error.statusCode === 404">
                <img class="img-fluid" src="https://media.hitmaps.com/img/hitmaps-custom/site/404.gif" :alt="$t('404.janus-being-attacked')">
                <h1>Ope!</h1>
                <h2>{{ error.message }}</h2>
                <p>{{ $t('404.image-caption') }}</p>
            </div>
            <div class="error" v-else>
                <img class="img-fluid" src="https://media.hitmaps.com/img/hitman3/challenges/opulent/break_serverracks.jpg" alt="Haven Server Failure">
                <h1>{{ error.statusCode }}</h1>
                <h2>{{ error.message }}</h2>
                <p>It looks like something went terribly wrong and your request failed.  Please try your request again.</p>
            </div>
            <div class="home-button">
                <game-button @click="handleError">
                    <game-icon icon="campaign" font-style="normal"/>
                    Home
                </game-button>
            </div>
        </div>
    </NuxtLayout>
</template>
<style lang="scss" scoped>
.body {
    height: 100vh;
    color: $content-text;
    display: flex;
    flex-direction: column;

    .not-found, .error {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 5rem;
        }
    }

    .home-button {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        button {
            width: 300px;
        }
    }
}
</style>
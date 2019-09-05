<template>
    <div
        class="content"
        style="background: url('/img/jpg/backgrounds/loading.jpg') no-repeat center center fixed; background-size: cover"
    >
        <header class="row">
            <div class="col text-center site-header">
                <h1>{{ $t('404.page-not-found') }}</h1>
            </div>
        </header>
        <div class="row text-center">
            <div class="col">
                <img
                    src="/img/404.gif"
                    :alt="$t('404.janus-being-attacked')"
                />
                <br />
                <a
                    style="font-size: .6em; color: white"
                    href="https://www.reddit.com/r/HiTMAN/comments/ai5ao0/death_by_muffins/"
                >
                    u/AJNguyenYT on Reddit
                </a>
                <br />
                <br />
                <p>{{ $t('404.image-caption') }}</p>
                <a href="/" style="color: white">
                    <i class="fas fa-arrow-left"></i>
                    {{ $t('back-to-home') }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '404',
    title: $t('404.page-not-found')
}
</script>
<style lang="scss" scoped>
h1 {
    text-transform: none;
}
p {
    color: white;
}
</style>

<template>
    <div class="wrapper">
        <p>Loading...</p>
        <img class="img-fluid" src="/img/map-icons/loader.gif" alt="Loading">
    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        p {
            font-weight: bolder;
        }

        background: white;
        border: solid 1px #000;
        box-shadow: 5px 5px 40px #000;
        padding: 10px;
    }

    img {
        width: 500px;
    }
</style>
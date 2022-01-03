<template>
    <button class="btn control-button" v-bind="$attrs" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ControlButton"
}
</script>

<style lang="scss" scoped>
    .control-button {
        height: 40px;
        border-radius: 3px;
        background: rgba(22, 24, 29, 0.75);
        color: #fff;
        box-shadow: none;
        border: solid 2px #fff;
        transition: none;

        &.disabled {
            &:hover {
                cursor: not-allowed;
                background: inherit;
                color: #fff;
            }
        }

        &:hover {
            color: #000;
            background: #fff;
        }

        .flag {
            margin: -20px -24px -24px -24px !important;
            transform: scale(.50) !important;
            -ms-transform: scale(.50) !important;
            -webkit-transform: scale(.50) !important;
            -moz-transform: scale(.50) !important;
        }
    }
</style>
<script setup>
    const props = defineProps({
        tooltipText: {
            type: String,
            required: true
        },
        iconName: {
            type: String,
            required: true
        },
        inverse: {
            type: Boolean,
            required: false,
            default: false
        }
    });
</script>

<template>
    <div class="icon-stack" v-tooltip:top="tooltipText">
        <icon class="square icon" name="fa6-solid:square"/>
        <div class="inner icon" :class="inverse ? 'inverse' : ''">
            <icon :name="iconName"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.icon-stack {
    display: inline-block;
    height: 2em;
    line-height: 2em;
    position: relative;
    vertical-align: middle;
    width: 2.5em;
    font-size: 2em;

    .square {
        font-size: 2em;
    }

    .icon {
        left: 0;
        position: absolute;
        text-align: center;
        width: 100%;
    }

    .inner {
        line-height: inherit;
        color: #000;
        display: flex;
        height: 64px;
        align-items: center;
    }

    .inverse {
        color: #fff;
    }
}
</style>
<script setup lang="ts">
defineProps({
    elements: Array,
    selectedIndex: {
        type: Number,
        required: false,
        default: 0
    }
});

const emits = defineEmits(['indexSelected'])
</script>

<template>
    <div class="selector">
        <button type="button" @click="$emit('indexSelected', selectedIndex === 0 ? elements.length - 1 : selectedIndex - 1)">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <div class="dots">
                <span v-for="(_, index) in elements"
                      class="dot"
                      @click="$emit('indexSelected', index)"
                      :class="{'active': index === selectedIndex}">&bull;</span>
        </div>
        <button type="button" @click="$emit('indexSelected', selectedIndex + 1)">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped lang="scss">
.selector  {
    background: $content-background;
    display: flex;
    justify-content: space-evenly;

    button {
        background: 0 0;
        border: 0;
    }

    .dots {
        flex-grow: 1;
        display: flex;
        justify-content: space-evenly;
        font-size: 1.2rem;
        color: rgba($content-text, .4);

        .dot {
            cursor: pointer;
        }

        .active {
            color: #fff;
        }
    }
}
</style>
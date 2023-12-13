<template>
    <div class="ledges-menu">
        <p data-ledge="delete-help">
            <icon name="fa6-solid:trash"/>
            {{ $t('map.click-ledge-to-delete') }}
        </p>
        <div class="editor-button" :class="drawingActive ? 'selected' : ''" @click="$emit('enable-ledge-creation')">
            <h3>
                <icon name="fa6-solid:circle-plus"/>
                {{ $t('map.add-ledge') }}
            </h3>
            <p>{{ $t('map.toggle-ledge-builder') }}</p>
        </div>
        <div class="editor-button" @click="$emit('launch-editor', 'MENU')">
            <h3>
                <icon name="fa6-solid:circle-xmark"/>
                {{ $t('map.close-ledge-menu') }}
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditLedges",
    props: {
        drawingActive: Boolean
    }
}
</script>

<style lang="scss" scoped>
.ledges-menu {
    h2 {
        color: #fff;
        text-transform: uppercase;
    }

    h3 {
        color: #fff;
    }

    p {
        color: #fff;
    }

    .editor-button {
        border-radius: 3px;
        background: rgba(22, 24, 29, 0.75);
        color: #fff;
        box-shadow: none;
        border: solid 2px #2a2d31;
        opacity: 0.85;
        margin-bottom: 10px;
        width: 100%;
        padding: 20px;
        text-align: left;

        h3 {
            font-size: 1.25rem;
        }

        &:hover,
        &.selected {
            cursor: pointer;
            opacity: 1;
            border-color: #fff;
        }
    }
}
</style>
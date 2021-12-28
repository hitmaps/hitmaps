<template>
    <div class="items-menu">
        <p>
            <i class="fas fa-fw fa-plus-circle"></i>
            {{ $t('map.click-to-add') }}
        </p>
        <p>
            <i class="fas fa-fw fa-arrows-alt"></i>
            {{ $t('map.drag-to-move') }}
        </p>
        <p>
            <i class="fas fa-fw fa-trash"></i>
            {{ $t('map.click-item-to-delete') }}
        </p>
        <div class="editor-button" @click="$emit('launch-editor', 'MENU')">
            <h3>
                <i class="fas fa-times-circle"></i>
                {{ $t('map.close-item-menu') }}
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditItems"
}
</script>

<style lang="scss" scoped>
.items-menu {
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
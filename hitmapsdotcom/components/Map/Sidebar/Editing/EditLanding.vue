<template>
    <div class="edit-menu">
        <h3>{{ $t('map.what-would-you-like-to-do') }}</h3>
        <div class="editor-button" @click="$emit('launch-editor', 'ITEMS')">
            <h3>
                <icon name="fa6-solid:location-dot"/>
                {{ $t('map.add-remove-items') }}
            </h3>
        </div>
        <div v-if="!nodesOnly" class="editor-button" @click="$emit('launch-editor', 'LEDGES')">
            <h3>
                <icon name="fa6-solid:bezier-curve"/>
                {{ $t('map.add-remove-ledges') }}
            </h3>
        </div>
        <div v-if="!nodesOnly" class="editor-button" @click="$emit('launch-editor', 'FOLIAGE')">
            <h3>
                <icon name="fa6-solid:leaf"/>
                {{ $t('map.add-remove-foliage') }}
            </h3>
        </div>
        <div v-if="!nodesOnly"
             class="editor-button"
             @click="$emit('launch-editor', 'DISGUISE-REGIONS')">
            <h3>
                <icon name="fa6-regular:user"/>
                {{ $t('map.manage-disguise-areas') }}
            </h3>
        </div>
        <i18n-t keypath="map.click-icon-to-close" tag="p">
            <template v-slot:pencilIcon>
                <icon name="fa6-solid:pencil"/>
            </template>
        </i18n-t>
    </div>
</template>

<script>
export default {
    name: "EditLanding",
    props: {
        nodesOnly: Boolean
    }
}
</script>

<style lang="scss" scoped>
.edit-menu,
.items-menu,
.ledges-menu,
.foliage-menu,
.disguise-trespassing-menu {
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
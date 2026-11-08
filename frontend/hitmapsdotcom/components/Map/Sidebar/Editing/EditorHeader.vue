<template>
    <div class="editor-enabled">
        <h3 v-if="editorState === 'ITEMS'">
            <i class="fas fa-fw fa-map-marker-alt"></i>
            {{ $t('map.add-remove-items') }}
        </h3>
        <h3 v-else-if="editorState === 'LEDGES'">
            <i class="fas fa-fw fa-bezier-curve"></i>
            {{ $t('map.add-remove-ledges') }}
        </h3>
        <h3 v-else-if="editorState === 'FOLIAGE'">
            <i class="fas fa-fw fa-leaf"></i>
            {{ $t('map.add-remove-foliage') }}
        </h3>
        <h3 v-else-if="editorState === 'DISGUISE-REGIONS'">
            <i class="fas fa-fw fa-user-tie"></i>
            {{ $t('map.manage-disguise-areas') }}
        </h3>
    </div>
</template>

<script>
export default {
    name: "EditorHeader",
    props: {
        editorState: String
    }
}
</script>

<style lang="scss" scoped>
.editor-enabled {
    color: #fff;
    text-transform: uppercase;
    border: solid 2px $card-footer-background-hover;
    text-align: center;
    margin-bottom: 5px;
    background-color: $card-footer-background-hover;

    h3 {
        margin: .5rem 0;
    }
}
</style>
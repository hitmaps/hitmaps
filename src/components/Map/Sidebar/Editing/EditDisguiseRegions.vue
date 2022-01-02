<template>
    <div class="disguise-trespassing-menu">
        <p class="delete-help">
            <i class="fas fa-trash"></i>
            {{ $t('map.delete-existing-region') }}
        </p>
        <p>{{ $t('map.select-disguise-for-editing') }}</p>
        <div class="search-box">
            <select ref="disguisePicker"
                    name="disguise-menu-dropdown"
                    class="selectpicker"
                    @change="changeDisguise"
                    data-style="control-button">
                <option value="NONE">None</option>
                <option v-for="disguise in disguises"
                        :key="disguise.id"
                        :value="disguise.id">
                    {{ disguise.suit ? $t('map.suit-disguise', { suitName: disguise.name }) : disguise.name }}
                </option>
            </select>
        </div>
        <template v-if="currentDisguise !== null">
            <div class="editor-button"
                 :class="drawingActive && drawingType === 'trespassing' ? 'selected' : ''"
                 @click="initDraw('trespassing')">
                <h3>
                    <i class="fas fa-plus-circle"></i>
                    {{ $t('map.add-trespassing-region') }}
                </h3>
                <p>{{ $t('map.toggle-trespassing-builder') }}</p>
            </div>
            <div class="editor-button"
                 :class="drawingActive && drawingType === 'hostile' ? 'selected' : ''"
                 @click="initDraw('hostile')">
                <h3>
                    <i class="fas fa-plus-circle"></i>
                    {{ $t('map.add-hostile-region') }}
                </h3>
                <p>{{ $t('map.toggle-hostile-builder') }}</p>
            </div>
        </template>
        <div v-else class="editor-button" @click="initCopyDisguiseModal">
            <h3>
                <i class="fas fa-copy"></i>
                {{ $t('map.copy-regions') }}
            </h3>
            <p>{{ $t('map.click-to-copy-regions') }}</p>
        </div>
        <div class="editor-button"
             @click="$emit('launch-editor', 'MENU')">
            <h3>
                <i class="fas fa-times-circle"></i>
                {{ $t('map.close-disguise-menu') }}
            </h3>
        </div>
        <copy-disguise-regions ref="copyDisguiseModal" :disguises="disguises" @replace-disguise-areas="onReplaceDisguiseAreas" />
    </div>
</template>

<script>
import CopyDisguiseRegions from "./CopyDisguiseRegions";
export default {
    name: "EditDisguiseRegions",
    components: {CopyDisguiseRegions},
    props: {
        disguises: Array,
        drawingActive: Boolean,
        currentDisguise: Object
    },
    data() {
        return {
            drawingType: null
        }
    },
    mounted() {
        $(this.$refs.disguisePicker).selectpicker();

        if (this.currentDisguise) {
            $(this.$refs.disguisePicker).selectpicker('val', this.currentDisguise.id);
        }
    },
    methods: {
        changeDisguise(e) {
            if (e.target.value === 'NONE') {
                this.$emit('disguise-selected', 'NONE');
                return;
            }

            this.$emit('disguise-selected', this.disguises.find(x => x.id === parseInt(e.target.value, 10)));
        },
        initDraw(type) {
            this.drawingType = type;
            this.$emit('enable-region-creation', type);
        },
        initCopyDisguiseModal() {
            $('#copy-disguises-modal').modal('show');
        },
        onReplaceDisguiseAreas(disguiseAreas) {
            this.$emit('replace-disguise-areas', disguiseAreas);
        }
    },
    watch: {
        currentDisguise() {
            this.$nextTick(_ => $(this.$refs.disguisePicker).selectpicker('val', this.currentDisguise === null ? 'NONE' : this.currentDisguise.id));
        }
    }
}
</script>

<style lang="scss" scoped>
.disguise-trespassing-menu {

    &::v-deep {
        .control-button {
            border-radius: 3px;
            background: rgba(22, 24, 29, 0.75);
            color: #fff;
            box-shadow: none;
            border: solid 2px #2a2d31;
            opacity: 0.85;
            width: 100%;
            margin-bottom: 10px;

            &:hover {
                opacity: 1;
                border-color: #fff;
            }
        }

        .bootstrap-select {
            width: 368px !important;

            > .dropdown-toggle {
                &.bs-placeholder {
                    color: #fff;

                    &:hover,
                    &:active,
                    &:focus {
                        color: #fff;
                    }
                }
            }

            .dropdown-header {
                background: #eee;
                text-transform: uppercase;
            }
        }
    }

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
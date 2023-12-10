<template>
    <div class="disguise-trespassing-menu">
        <p class="delete-help">
            <icon name="fa6-solid:trash"/>
            {{ $t('map.delete-existing-region') }}
        </p>
        <p>{{ $t('map.select-disguise-for-editing') }}</p>
        <div class="search-box">
            <select ref="disguisePicker"
                    name="disguise-menu-dropdown"
                    class="form-select control-button"
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
                    <icon name="fa6-solid:circle-plus"/>
                    {{ $t('map.add-trespassing-region') }}
                </h3>
                <p>{{ $t('map.toggle-trespassing-builder') }}</p>
            </div>
            <div class="editor-button"
                 :class="drawingActive && drawingType === 'hostile' ? 'selected' : ''"
                 @click="initDraw('hostile')">
                <h3>
                    <icon name="fa6-solid:circle-plus"/>
                    {{ $t('map.add-hostile-region') }}
                </h3>
                <p>{{ $t('map.toggle-hostile-builder') }}</p>
            </div>
        </template>
        <div v-else class="editor-button" @click="initCopyDisguiseModal">
            <h3>
                <icon name="fa6-solid:copy"/>
                {{ $t('map.copy-regions') }}
            </h3>
            <p>{{ $t('map.click-to-copy-regions') }}</p>
        </div>
        <div class="editor-button"
             @click="$emit('launch-editor', 'MENU')">
            <h3>
                <icon name="fa6-solid:circle-xmark"/>
                {{ $t('map.close-disguise-menu') }}
            </h3>
        </div>
        <copy-disguise-regions ref="copyDisguiseModal" :disguises="disguises" @replace-disguise-areas="onReplaceDisguiseAreas" />
    </div>
</template>

<script>
export default {
    name: "EditDisguiseRegions",
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
        if (this.currentDisguise) {
            this.$refs.disguisePicker.value = this.currentDisguise.id;
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
            this.$refs.copyDisguiseModal.showModal();
        },
        onReplaceDisguiseAreas(disguiseAreas) {
            this.$emit('replace-disguise-areas', disguiseAreas);
        }
    },
    watch: {
        currentDisguise() {
            this.$nextTick(_ => this.$refs.disguisePicker.value = this.currentDisguise === null ? 'NONE' : this.currentDisguise.id);
        }
    }
}
</script>

<style lang="scss" scoped>
.disguise-trespassing-menu {
    &:deep(.control-button) {
        border-radius: 3px;
        background-color: rgba(22, 24, 29, 0.75);
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

    &:deep(.bootstrap-select) {
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
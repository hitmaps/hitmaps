<template>
    <div class="search-box" :class="searchedItem ? 'item-selected' : ''">
        <select @change="onSearch"
                :id="id"
                class="selectpicker"
                ref="itemSearch"
                data-live-search="true"
                :data-title="`<i class='fas fa-fw fa-search'></i> ${$t('map.search')}`"
                data-style="control-button">
                <optgroup v-for="(items, key) in searchableNodes" :key="key" :label="key">
                    <option v-for="item in items" :key="`${key}|${item}`" :value="`${key}|${item}`">{{ item }}</option>
                </optgroup>
        </select>
        <button @click="clearSearch"
                id="clear-search"
                class="btn control-button"
                v-tooltip:top="$t('map.clear-search')"
                v-show="searchedItem">
            <i class="fas fa-times"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: "ItemSearch",
    props: {
        searchableNodes: Object
    },
    data() {
        return {
            id: this._uid,
            searchedItem: null
        }
    },
    mounted() {
        $(`#${this.id}`).selectpicker();
    },
    methods: {
        onSearch(event) {
            this.searchedItem = event.target.value;
        },
        clearSearch() {
            $(this.$refs.itemSearch).selectpicker('val', '');
            this.searchedItem = null;
        }
    },
    watch: {
        searchedItem() {
            this.$emit('search-item', this.searchedItem);
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box::v-deep {
    .control-button {
        border-radius: 3px;
        background: rgba(22, 24, 29, 0.75);
        color: #fff;
        box-shadow: none;
        border: solid 2px #2a2d31;
        opacity: 0.85;
        width: 100%;

        @media(min-width: 768px) {
            width: 368px;
        }

        margin-bottom: 10px;

        &:hover {
            opacity: 1;
            border-color: #fff;
        }
    }

    &.item-selected {
        .bootstrap-select {
            width: 86% !important;
        }
    }

    .bootstrap-select {
        width: 100% !important;

        @media(min-width: 768px) {
            width: 368px !important;
        }

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

    #clear-search.control-button,
    #clear-disguise-search.control-button {
        display: inline-block;
        width: 11%;
        margin-left: 11px;
        height: 40px;
    }
}
</style>
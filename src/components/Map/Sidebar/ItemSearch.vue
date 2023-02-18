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

        if (this.$route.query.item) {
            this.searchedItem = this.$route.query.item;
            $(this.$refs.itemSearch).selectpicker('val', this.searchedItem);
        }
    },
    methods: {
        onSearch(event) {
            this.searchedItem = event.target.value;

            this.updateQueryStringParameter();
        },
        updateQueryStringParameter() {
            let newQueryParameter = Object.assign({}, this.$route.query, {
                item: this.searchedItem
            });
            if (!this.searchedItem) {
                delete newQueryParameter.item;
            }
            this.$router.replace({
                query: newQueryParameter
            });
        },
        clearSearch() {
            $(this.$refs.itemSearch).selectpicker('val', '');
            this.searchedItem = null;
        }
    },
    watch: {
        searchedItem() {
            this.$emit('search-item', this.searchedItem);
        },
        searchableNodes() {
            this.$nextTick(() => {
                $(this.$refs.itemSearch).selectpicker('refresh');
                const newSearchValue = $(this.$refs.itemSearch).selectpicker('val');
                if (this.searchedItem !== null && this.searchedItem !== newSearchValue) {
                    this.clearSearch();
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box::v-deep {
    display: flex;

    .control-button {
        border-radius: 3px;
        background: rgba(22, 24, 29, 0.75);
        color: #fff;
        box-shadow: none;
        border: solid 2px #2a2d31;
        opacity: 0.85;

        margin-bottom: 10px;

        &:hover {
            opacity: 1;
            border-color: #fff;
        }
    }

    &.item-selected {
        .bootstrap-select {
        }
    }

    .bootstrap-select {
        flex-grow: 1;

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

        .dropdown-menu {
            @media(min-width: 768px) {
                min-width: 368px !important;
                max-width: 368px !important;
            }
        }
    }

    #clear-search.control-button,
    #clear-disguise-search.control-button {
        display: inline-block;
        margin-left: 11px;
        height: 40px;
    }
}
</style>
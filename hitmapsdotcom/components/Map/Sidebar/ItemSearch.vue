<template>
    <div class="search-box" :class="searchedItem ? 'item-selected' : ''">
        <div class="dropdown bootstrap-select" role="menu" v-on="{ 'hide.bs.dropdown': dropdownClose }">
            <button class="btn btn-secondary dropdown-toggle control-button" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                <icon class="magnifier" name="fa6-solid:magnifying-glass"/>
                {{ searchDropdownText }}
                <span class="dropdown-arrow">
                    <icon name="fa6-solid:caret-down"/>
                </span>
            </button>
            <div class="dropdown-menu">
                <div class="search-input">
                    <input class="form-control" v-model="searchBox">
                </div>
                <div class="dropdown-options">
                    <template v-for="(items, key) in searchResults" :key="key">
                        <h6 class="dropdown-header">{{ key }}</h6>
                        <template v-for="item in items" :key="`${key}|${item}`">
                            <a class="dropdown-item" href="#" @click="onSearch(key, item)">{{ item }}</a>
                        </template>
                        <hr class="dropdown-divider">
                    </template>
                </div>
            </div>
        </div>
        <button @click="clearSearch"
                id="clear-search"
                class="btn control-button"
                v-tooltip:top="$t('map.clear-search')"
                v-show="searchedItem">
            <icon name="fa6-solid:xmark"/>
        </button>
    </div>
</template>

<script>
import {v4 as uuidv4} from "uuid";
export default {
    name: "ItemSearch",
    props: {
        searchableNodes: Object
    },
    setup() {
        const uuid = uuidv4();
        return {
            uuid
        };
    },
    data() {
        return {
            id: this.uuid,
            searchResults: {},
            searchedItem: null,
            searchBox: ''
        }
    },
    mounted() {
        this.searchedItem = this.$route.query.item ?? null;
    },
    computed: {
        searchDropdownText() {
            if (!this.searchedItem) {
                return this.$t('map.search');
            }

            const parts = this.searchedItem.split('|');
            return this.searchableNodes[parts[0]].find(x => x === parts[1]);
        }
    },
    methods: {
        onSearch(key, item) {
            this.searchedItem = `${key}|${item}`;

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
            this.searchedItem = null;
            this.updateQueryStringParameter();
        },
        dropdownClose() {
            this.searchBox = '';
        }
    },
    watch: {
        searchedItem() {
            this.$emit('search-item', this.searchedItem);
        },
        searchBox() {
            if (!this.searchBox) {
                this.searchResults = this.searchableNodes;
                return;
            }

            this.searchResults = {};
            for (const [key, items] of Object.entries(this.searchableNodes)) {
                const filteredItems = items.filter(x => x.toLowerCase().includes(this.searchBox.toLowerCase()));
                if (filteredItems.length) {
                    this.searchResults[key] = items.filter(x => x.toLowerCase().includes(this.searchBox.toLowerCase()));
                }
            }
        },
        searchableNodes: {
            handler() {
                this.searchResults = this.searchableNodes;
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box {
    display: flex;

    &:deep(.control-button) {
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

    .control-button.dropdown-toggle {
        width: 100%;
        text-align: left;
    }

    .magnifier {
        margin-right: 5px;
    }

    .dropdown-arrow {
        flex-grow: 1;
        text-align: right;
    }

    .dropdown-toggle {
        display: flex;
        align-items: center;

        &::after {
            display: none;
        }
    }

    &:deep(.item-selected) {
        .bootstrap-select {
        }
    }

    &:deep(.bootstrap-select) {
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
            font-weight: 400;
            padding-left: 24px;
            color: #6c757d;
        }

        .dropdown-menu {
            @media(min-width: 768px) {
                min-width: 368px !important;
                max-width: 368px !important;
            }

            .dropdown-options {
                max-height: calc(100vh - 350px);
                overflow-y: auto;
            }
        }

        .dropdown-item {
            padding-left: 36px;
        }
    }

    &:deep(#clear-search.control-button),
    &:deep(#clear-disguise-search.control-button) {
        display: inline-block;
        margin-left: 11px;
        height: 40px;
    }

    .search-input {
        padding: 4px 8px;
    }
}
</style>
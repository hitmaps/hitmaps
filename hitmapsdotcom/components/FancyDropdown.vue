<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        default: 'Select One'
    },
    elements: {
        type: Array,
        required: true
    },
    modelValue: Object
});
const emit = defineEmits(['update:modelValue', 'change']);

let searchBox = ref('');
function dropdownClose() {
    searchBox.value = '';
}
//@ts-ignore
function onSearch(item) {
    emit('update:modelValue', item);
    emit('change', item);
}
function getSearchResults() {
    if (!searchBox.value) {
        return props.elements;
    }

    const searchResults = [];
    for (const group of props.elements) {
        const filteredItems = group.groupItems.filter(x => x.value.toLowerCase().includes(searchBox.value.toLowerCase()));
        if (filteredItems.length) {
            searchResults.push({
                groupName: group.groupName,
                groupItems: filteredItems
            });
        }
    }

    return searchResults;
}
</script>

<template>
    <div class="dropdown bootstrap-select" role="menu" v-on="{ 'hide.bs.dropdown': dropdownClose }">
        <div class="d-grid">
            <button class="btn btn-light btn-block dropdown-toggle" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                <template v-if="modelValue">
                    <span v-if="modelValue.html" v-html="modelValue.display"></span>
                    <template v-else>{{ modelValue.display }}</template>
                </template>
                <template v-else>{{ placeholder }}</template>
                <span class="dropdown-arrow">
                <icon name="fa6-solid:caret-down"/>
            </span>
            </button>
            <div class="dropdown-menu">
                <div class="search-input">
                    <input class="form-control" v-model="searchBox">
                </div>
                <div class="dropdown-options">
                    <template v-for="group in getSearchResults()">
                        <h6 class="dropdown-header">{{ group.groupName }}</h6>
                        <template v-for="item in group.groupItems">
                            <a class="dropdown-item" href="#" @click="onSearch(item)">
                                <template v-if="!item.html">{{ item.display }}</template>
                                <span v-else v-html="item.display"></span>
                            </a>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
        font-weight: 400;
        padding-left: 24px;
        color: #6c757d;
    }

    .dropdown-menu {
        width: 100%;

        .dropdown-options {
            max-height: 350px;
            overflow-y: auto;
        }
    }

    .dropdown-item {
        padding-left: 36px;
    }
}
</style>
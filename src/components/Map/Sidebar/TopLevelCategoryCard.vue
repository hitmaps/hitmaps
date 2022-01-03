<template>
    <div class="card">
        <div class="card-header" :id="`header-${uid}`">
            <div class="name collapsed"
                 data-toggle="collapse"
                 :data-target="`#body-${uid}`"
                 aria-expanded="false"
                 :aria-controls="`body-${uid}`">
                {{ lang(`map.types.${topLevelCategoryName}`, topLevelCategoryName) }}
                <span class="float-right">
                    <i class="fas fa-caret-down"></i>
                    <i class="fas fa-caret-up"></i>
                </span>
            </div>
            <div class="visibility-toggle group-toggle"
                 @click="onTopLevelClick"
                 :class="{ 'map-hidden': areAllNodesHiddenForTopLevelCategory() }">
                <i class="far fa-eye" v-if="!areAllNodesHiddenForTopLevelCategory()"></i>
                <i class="far fa-eye-slash" v-else></i>
            </div>
        </div>
        <div :id="`body-${uid}`"
             class="collapse"
             :aria-labelledby="`header-${uid}`">
            <div class="card-body">
                <div v-for="category in categories"
                     :key="category.group"
                     :class="{
                         'full-width': category.collapsible,
                         'half-width': !category.collapsible
                     }">
                    <div class="name-and-toggle">
                        <div class="name"
                             @click="onCategoryLevelClick(category)"
                             :class="{ 'map-hidden': isCategoryHidden(category) }">
                            <img :src="`/img/map-icons/${category.icon}.png`"
                                 :alt="`${category.group} Icon`"
                                 class="img-fluid">
                            <span>{{ lang(`map.groups.${topLevelCategoryName}|${category.group}`, category.group) }}</span>
                        </div>
                        <div v-if="category.collapsible"
                             class="visibility-toggle collapsed"
                             data-toggle="collapse"
                             :data-target="`#${buildCollapsibleId(category)}`">
                            <i class="fas fa-caret-up"></i>
                            <i class="fas fa-caret-down"></i>
                        </div>
                    </div>
                    <div v-if="category.collapsible"
                         class="collapsible-items collapse"
                         :id="buildCollapsibleId(category)">
                        <ul :style="{ columns: getItemsForCategory(category).length > 1 ? 2 : 1 }">
                            <li v-for="node in noDuplicates(getItemsForCategory(category))" :key="node.name">
                                {{ node.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopLevelCategoryCard",
    props: {
        topLevelCategoryName: String,
        categories: Array,
        nodes: Array,
        ledges: Array,
        foliage: Array
    },
    data() {
        return {
            uid: this._uid
        }
    },
    methods: {
        areAllNodesHiddenForTopLevelCategory() {
            let polysVisible = false;
            if (this.topLevelCategoryName === 'Navigation') {
                polysVisible = this.ledges.some(ledge => ledge.visible) || this.foliage.some(foliage => foliage.visible);
            }

            return !polysVisible && !this.nodes.some(node => node.visible && !node.searchResult);
        },
        onTopLevelClick() {
            if (this.areAllNodesHiddenForTopLevelCategory()) {
                this.$emit('show-top-level-category', this.topLevelCategoryName);
            } else {
                this.$emit('hide-top-level-category', this.topLevelCategoryName);
            }
        },
        onCategoryLevelClick(category) {
            if (this.getItemsForCategory(category).some(node => node.visible && !node.searchResult)) {
                this.$emit('hide-category', category);
            } else {
                this.$emit('show-category', category);
            }
        },
        isCategoryHidden(category) {
            if (category.subgroup === 'ledge') {
                return !this.ledges.some(ledge => ledge.visible);
            }
            if (category.subgroup === 'foliage') {
                return !this.foliage.some(foliage => foliage.visible);
            }

            return !this.nodes.some(node => node.group === category.group && node.visible && !node.searchResult);
        },
        buildCollapsibleId(category) {
            const categoryName = category.group.replace(/ /g, '_');
            return `collapsible-${this.uid}-${categoryName}`
        },
        getItemsForCategory(category) {
            if (category.subgroup === 'ledge') {
                return this.ledges;
            }
            if (category.subgroup === 'foliage') {
                return this.foliage;
            }

            return this.nodes.filter(node => node.subgroup === category.subgroup);
        },
        noDuplicates: function(val) {
            const filteredArray = []
            for (let i = 0; i < val.length; i++) {
                if (filteredArray.findIndex(el => el.name === val[i].name) === -1) {
                    filteredArray.push(val[i]);
                }
            }
            return filteredArray;
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 3px !important;
    background: transparent;
    border: none;

    > .card-header {
        background: transparent;
        border-radius: 0;
        border: none;
        padding: 0;
        margin-bottom: 10px;
        display: flex;

        .visibility-toggle {
            width: 40px;
            text-align: center;

            .fa-eye-slash {
                display: none;
            }

            .fa-eye {
                display: inline;
            }

            &.map-hidden {
                .fa-eye-slash {
                    display: inline;
                }

                .fa-eye {
                    display: none;
                }
            }
        }

        .name {
            margin-right: 14px;
            flex-grow: 1;
        }

        .name,
        .visibility-toggle {
            &.control-button {
                padding-left: 12px;
                padding-top: 6px;
                padding-bottom: 6px;
                transition: color 0.15s ease-in-out,
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;

                &:hover {
                    background: rgba(22, 24, 29, 0.75);
                }
            }

            display: inline-block;
            padding: 10px;
            background: rgba(22, 24, 29, 0.75);
            color: #fff;
            cursor: pointer;
            height: 40px;
            border-radius: 3px;

            .fa-caret-down {
                display: none;
            }

            .fa-caret-up {
                display: inline;
            }

            &.collapsed {
                .fa-caret-up {
                    display: none;
                }

                .fa-caret-down {
                    display: inline;
                }
            }

            &:hover {
                color: #fff;
                text-decoration: none;
                background: #33363a;
            }
        }

        &#header-disguises {
            margin-bottom: 0;
        }
    }

    .card-body {
        background: transparent;
        border-radius: 0;
        border: none;
        padding: 0;
        margin-bottom: 10px;

        .visibility-toggle {
            width: 40px;
            text-align: center;
        }

        .full-width {
            .name-and-toggle {
                display: flex;
            }

            .name {
                flex-grow: 1;
            }

            margin-bottom: 5px;
        }

        .half-width {
            width: 50%;
            display: inline-block;
            margin-bottom: 5px;
        }

        .name {
            margin-right: 10px;
            vertical-align: top;
            opacity: 0.85;

            span {
                vertical-align: middle;
            }

            &.map-hidden {
                opacity: 0.65;

                span {
                    text-decoration: line-through;
                }
            }
        }

        .visibility-toggle {
            background: #2a2d31;
            padding: 10px;
            display: block;
            border-radius: 3px;
            color: #fff;
            cursor: pointer;

            .fa-caret-down {
                display: none;
            }

            .fa-caret-up {
                display: inline;
                vertical-align: text-top;
            }

            &.collapsed {
                .fa-caret-up {
                    display: none;
                }

                .fa-caret-down {
                    display: inline;
                    vertical-align: text-top;
                }
            }

            &:hover {
                color: #fff;
                text-decoration: none;
                opacity: 1;
            }
        }

        .name {
            display: flex;
            color: #fff;
            cursor: pointer;
            min-height: 40px;
            border-radius: 3px;
            word-break: break-all;

            img {
                align-self: center;
            }

            span {
                align-self: center;
            }

            &.hidden {
                text-decoration: line-through;
            }

            .fa-caret-down {
                display: none;
            }

            .fa-caret-up {
                display: inline;
                vertical-align: text-top;
            }

            &.collapsed {
                .fa-caret-up {
                    display: none;
                }

                .fa-caret-down {
                    display: inline;
                    vertical-align: text-top;
                }
            }

            &:hover {
                color: #fff;
                text-decoration: none;
                opacity: 1;
            }
        }

        .collapsible-items {
            margin-top: 5px;

            ul {
                list-style-type: none;
                padding: 0 15px 10px 15px;
                background: #2a2d31;
                border-radius: 3px;
            }

            li {
                padding-top: 15px;
                color: #fff;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
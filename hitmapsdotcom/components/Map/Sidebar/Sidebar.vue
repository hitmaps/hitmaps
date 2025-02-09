<template>
    <nav class="navbar navbar-fixed-right navbar-dark">
        <div class="mobile-header">
            <div class="logo">
                <nuxt-link to="/">
                    <img src="https://media.hitmaps.com/img/hitmaps-custom/site/png/logos/hitmaps-h.png" class="img-fluid d-block d-md-none" alt="HITMAPS Logo"/>
                </nuxt-link>
            </div>
            <div class="header-buttons">
                <button v-if="getAllVariantsForUser().length > 1"
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#variants-toggle"
                        aria-controls="variants-toggle"
                        aria-expanded="true"
                        aria-label="Toggle variant selection box">
                    <game-icon :icon="currentVariant.icon" font-style="solid"/>
                </button>
                <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#search-item-toggle"
                        aria-controls="search-item-toggle"
                        aria-expanded="true"
                        aria-label="Toggle search box">
                    <icon name="fa:search"/>
                </button>
                <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#disguises-toggle"
                        aria-controls="disguises-toggle"
                        aria-expanded="false"
                        aria-label="Toggle disguises box">
                    <icon name="fa6-regular:user"/>
                </button>
                <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#floors-and-layers-toggle"
                        aria-controls="floors-and-layers-toggle"
                        aria-expanded="false"
                        aria-label="Toggle floors and layers box">
                    <icon name="fa6-solid:layer-group"/>
                </button>
                <button class="navbar-toggler"
                        @click="showLocaleModal"
                        type="button">
                    <client-only>
                        <country-flag :country="countryFlag" size="small" v-tooltip:top="$t('language-modal.change-language')" />
                    </client-only>
                </button>
            </div>
        </div>
        <div class="navbar-collapse">
            <div class="header d-none d-md-block">
                <nuxt-link to="/">
                    <img src="https://media.hitmaps.com/img/hitmaps-custom/site/png/logos/hitmaps.png" class="img-fluid" alt="HITMAPS Logo"/>
                </nuxt-link>
            </div>
            <editor-header v-if="editorState !== 'OFF' && editorState !== 'MENU'" :editor-state="editorState"/>
            <div class="map-control d-none d-md-flex">
                <div id="map-control-buttons">
                    <control-button @click="$emit('zoom-in')" :class="currentZoomLevel === maxZoomLevel ? 'disabled' : ''">+</control-button>
                    <control-button @click="$emit('zoom-out')" :class="currentZoomLevel === minZoomLevel ? 'disabled' : ''">-</control-button>
                </div>
                <div class="control-buttons">
                    <control-button @click="showLocaleModal">
                        <client-only>
                            <country-flag :country="countryFlag" size="small" v-tooltip:top="$t('language-modal.change-language')" />
                        </client-only>
                    </control-button>
                    <template v-if="loggedIn">
                        <control-button v-if="showDebug()"
                                        id="debug-button"
                                        @click="debugMode = !debugMode"
                                        v-tooltip:top="$t('map.debug-mode')"
                                        :style="debugMode ? 'background: white; color: black' : ''">
                            <icon name="fa6-solid:bug"/>
                        </control-button>
                        <control-button
                            id="edit-button"
                            @click="$emit('master-edit-toggle')"
                            v-tooltip:top="$t('map.edit-map')">
                            <icon name="fa6-solid:pencil"/>
                        </control-button>
                        <control-button
                            v-tooltip:top="$t('authentication.log-out')"
                            @click="logout">
                            <icon name="fa:sign-out"/>
                        </control-button>
                    </template>
                    <a v-else @click="beginDiscordLogin">
                        <control-button>
                            <icon name="fa:sign-in"/>
                        </control-button>
                    </a>
                </div>
            </div>
            <div v-show="editorState === 'OFF'">
                <alert type="info" v-if="currentVariant.icon === 'freelancer'">
                    {{ $t('map.freelancer-note') }}
                </alert>
                <div class="collapse navbar-collapse" id="variants-toggle">
                    <mission-variant-selector :mission="mission"
                                              :current-variant="currentVariant"
                                              :logged-in="loggedIn"
                                              @variant-selected="onVariantSelected" />
                </div>
                <div class="navbar-collapse collapse show" id="search-item-toggle">
                    <item-search :searchable-nodes="getSearchableNodes()" @search-item="onSearchItem" />
                </div>
                <div class="collapse navbar-collapse" id="disguises-toggle">
                    <disguise-dropdown :game="game"
                                       :mission="mission"
                                       :disguises="disguises"
                                       :current-disguise="currentDisguise"
                                       @disguise-selected="onDisguiseSelected" />
                </div>
                <div class="collapse navbar-collapse" id="floors-and-layers-toggle">
                    <hide-select-all @hide-all="$emit('hide-all')" @show-all="$emit('show-all')" />
                    <top-level-category-card v-for="topLevelCategory in topLevelCategories"
                                             :key="topLevelCategory"
                                             :top-level-category-name="topLevelCategory"
                                             :categories="categories.filter(x => x.type === topLevelCategory)"
                                             :nodes="nodes.filter(x => x.type === topLevelCategory)"
                                             :ledges="ledges"
                                             :foliage="foliage"
                                             @hide-category="onHideCategory"
                                             @show-category="onShowCategory"
                                             @hide-top-level-category="onHideTopLevelCategory"
                                             @show-top-level-category="onShowTopLevelCategory" />
                </div>
            </div>
            <edit-landing v-if="editorState === 'MENU'"
                          :nodes-only="mission.missionType === 'Sniper Assassin'"
                          @launch-editor="onLaunchEditor" />
            <edit-items v-if="editorState === 'ITEMS'"
                        @launch-editor="onLaunchEditor" />
            <edit-ledges v-if="editorState === 'LEDGES'"
                         :drawing-active="drawingActive"
                         @enable-ledge-creation="onEnableLedgeCreation"
                         @launch-editor="onLaunchEditor" />
            <edit-foliage v-if="editorState === 'FOLIAGE'"
                          :drawing-active="drawingActive"
                          @enable-foliage-creation="onEnableFoliageCreation"
                          @launch-editor="onLaunchEditor" />
            <edit-disguise-regions v-if="editorState === 'DISGUISE-REGIONS'"
                                   :drawing-active="drawingActive"
                                   :current-disguise="currentDisguise"
                                   :disguises="disguises"
                                   @disguise-selected="onDisguiseSelected"
                                   @enable-region-creation="onEnableRegionCreation"
                                   @launch-editor="onLaunchEditor"
                                   @replace-disguise-areas="onReplaceDisguiseAreas" />
        </div>
        <locale-modal ref="localeModal" flag-size="hidden" />
    </nav>
</template>

<script>
import {useCookies} from "vue3-cookies";


export default {
    name: "Sidebar",
    props: {
        game: Object,
        mission: Object,
        loggedIn: Boolean,
        categories: Array,
        nodes: Array,
        ledges: Array,
        foliage: Array,
        topLevelCategories: Array,
        disguises: Array,
        maxZoomLevel: Number,
        minZoomLevel: Number,
        currentZoomLevel: Number,
        editorState: String,
        drawingActive: Boolean,
        currentDisguise: Object,
        currentVariant: Object
    },
    setup() {
        const { cookies } = useCookies();
        const { locale } = useI18n();
        return {
            cookies,
            locale
        }
    },
    data() {
        return {
            debugMode: false
        }
    },
    watch: {
        zoomControl: function() {
        }
    },
    computed: {
        countryFlag() {
            return LanguageHelpers.getCountryFlagForLocale(this.locale);
        },
    },
    methods: {
        showLocaleModal() {
            this.$refs.localeModal.showModal();
        },
        getAllVariantsForUser() {
            if (this.loggedIn) {
                return this.mission.variants;
            }

            return this.mission.variants.filter(x => x.visible);
        },
        showDebug() {
            return import.meta.env.VITE_SHOW_DEBUG === 'true';
        },
        getSearchableNodes() {
            const nodesToSort = [...this.nodes].filter(x => x.variants.includes(this.currentVariant.id));
            nodesToSort.sort((first, second) => {
                if (first.type !== second.type) {
                    // Different types, sort by the types
                    return this.topLevelCategories.indexOf(first.type) < this.topLevelCategories.indexOf(second.type) ?
                        -1 :
                        1;
                }

                // Same type, check categories
                const firstCategory = this.categories.find(category => category.type === first.type && category.group === first.group);
                const secondCategory = this.categories.find(category => category.type === second.type && category.group === second.group);

                if (firstCategory.order !== secondCategory.order) {
                    return firstCategory.order < secondCategory.order ? -1 : 1;
                }

                return first.name < second.name ? -1 : 1;
            });

            const uniqueNodes = nodesToSort.filter(x => x.searchable) // Only searchable items
                .map(x => `${x.group}|${x.name}`) // Only get the group and name
                .filter((value, index, self) => self.indexOf(value) === index); // Only fetch unique records
            const uniqueNodesBrokenDownByGroup = {};
            uniqueNodes.forEach(node => {
                const nodeInfo = node.split('|');
                if (!(nodeInfo[0] in uniqueNodesBrokenDownByGroup)) {
                    uniqueNodesBrokenDownByGroup[nodeInfo[0]] = [];
                }
                uniqueNodesBrokenDownByGroup[nodeInfo[0]].push(nodeInfo[1]);
            });

            return uniqueNodesBrokenDownByGroup;
        },
        beginDiscordLogin() {
            this.cookies.set('redirect-location', `${window.location.pathname}${window.location.search}`, '600s');
            window.location.href = `https://discordapp.com/api/oauth2/authorize?client_id=681919936469401687&redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}`)}/auth&response_type=token&scope=identify`;
        },
        logout: function() {
            localStorage.removeItem('token');
            location.reload();
        },
        //region Event listeners
        onSearchItem(searchedItem) {
            this.$emit('search-item', searchedItem);
        },
        onHideCategory(category) {
            this.$emit('hide-category', category);
        },
        onShowCategory(category) {
            this.$emit('show-category', category);
        },
        onHideTopLevelCategory(type) {
            this.$emit('hide-top-level-category', type);
        },
        onShowTopLevelCategory(type) {
            this.$emit('show-top-level-category', type);
        },
        onLaunchEditor(editor) {
            this.$emit('launch-editor', editor);
        },
        onEnableLedgeCreation() {
            this.$emit('enable-ledge-creation');
        },
        onEnableFoliageCreation() {
            this.$emit('enable-foliage-creation');
        },
        onDisguiseSelected(disguise) {
            this.$emit('disguise-selected', disguise);
        },
        onEnableRegionCreation(regionType) {
            this.$emit('enable-region-creation', regionType);
        },
        onReplaceDisguiseAreas(disguiseAreas) {
            this.$emit('replace-disguise-areas', disguiseAreas);
        },
        onChangeFloor(floorNumber) {
            this.$emit('change-floor', floorNumber);
        },
        onVariantSelected(variant) {
            this.$emit('variant-selected', variant);
        }
        //endregion
    }
}
</script>

<style lang="scss" scoped>
    @media (min-width: 768px) {
        nav {
            padding: .5rem 1rem;
        }

        .mobile-header {
            display: none;
        }

        .navbar-fixed-right {
            display: block;
            float: right;
            width: 400px;
            min-height: 100vh;
            background: rgba(0, 0, 0, .90);
        }

        .navbar-toggler {
            display: none;
        }

        .navbar-collapse {
            display: block !important;
        }

        .accordion > .floor-toggle {
            display: none;
        }

        .content > .floor-toggle {
            display: block;
            position: fixed;
            top: 110px;
            left: 50px;
        }
    }

    @media (max-width: 767px) {
        .mobile-header {
            display: flex;
            margin-bottom: 5px;

            .logo {
                img {
                    height: 44px;
                }
            }

            .header-buttons {
                display: flex;
                flex-grow: 1;
                justify-content: flex-end;
            }
        }

        .navbar {
            display: block;
        }

        .navbar-fixed-right {
            background: rgba(0, 0, 0, .90);
        }

        .navbar-toggler {
            display: block;

            i {
                font-size: 16px;
            }

            &[data-toggle="collapse"] {
                padding: 10px;
            }

            & + & {
                margin-left: 10px;
            }
        }

        .accordion > .floor-toggle {
            display: block;
            margin-bottom: 10px;
        }

        .content > .floor-toggle {
            display: none;
        }
    }

    .navbar {
        z-index: 2;
    }

    .navbar-toggler {
        background: rgba(22, 24, 29, .75);
        border: 2px solid #2a2d31;
        color: #fff;
        border-radius: 3px;
        transition: color .15s ease-in-out,
                    background-color .15s ease-in-out,
                    border-color .15s ease-in-out,
                    box-shadow .15s ease-in-out;
        opacity: 0.85;

        &:hover {
            opacity: 1;
            border-color: #fff;
        }

        &:deep(.flag) {
            transform: scale(.50) !important;
            -ms-transform: scale(.50) !important;
            -webkit-transform: scale(.50) !important;
            -moz-transform: scale(.50) !important;

            margin-bottom: -13px;
            margin-left: -17px;
            margin-right: -17px;
        }
    }

    .map-control {
        width: 368px;
        display: flex;

        &.debug {
            flex-direction: column;
        }

        .control-buttons {
            display: flex;
            justify-content: flex-end;
            flex-grow: 1;
            margin-bottom: 10px;

            .control-button:not(:last-child) {
                margin-right: 5px;
            }
        }

        #map-control-buttons {
            .control-button {
                line-height: 26px;
                width: 40px;
                margin-left: 0;
                margin-right: 5px;
                margin-bottom: 10px;
                font: bold 18px 'Lucida Console', Monaco, monospace;
                text-indent: 1px;
                text-align: center;
            }
        }
    }

    .header {
        max-width: 368px;
        margin-top: 20px;
        margin-bottom: 20px;

        a {
            opacity: 0.85;

            &:hover {
                opacity: 1;
            }
        }
    }
</style>
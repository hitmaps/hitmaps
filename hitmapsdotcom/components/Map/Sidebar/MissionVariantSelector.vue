<template>
    <div class="variant-box" v-if="getAllVariantsForUser().length > 1">
        <div class="card">
            <div class="card-header" id="header-variants">
                <div class="name collapsed control-button"
                     ref="variantToggle"
                     data-bs-toggle="collapse"
                     data-bs-target="#body-variants"
                     aria-expanded="false"
                     aria-controls="body-variants"
                     @click="toggleDropdownState">
                    <game-icon :icon="currentVariant.icon" font-style="solid"/>
                    <span class="variant-text">
                        {{ currentVariant.name }}
                    </span>
                    <span class="carets">
                        <icon class="caret-down" name="fa6-solid:caret-down"/>
                        <icon class="caret-up" name="fa6-solid:caret-up"/>
                    </span>
                </div>
            </div>
            <div id="body-variants"
                 class="collapse"
                 aria-labelledby="header-variants">
                <div class="card-body variants">
                    <div class="row">
                        <div class="col-12">
                            <p class="variants-header">{{ $t('map.other-variants') }}</p>
                        </div>
                        <div @click="changeVariant(variant)"
                             v-for="variant in getVariantsToShow()"
                             :key="variant.id"
                             class="col-12">
                            <div class="variant">
                                <p class="variant-info">
                                    <game-icon :icon="variant.icon" font-style="solid"/>
                                    {{ variant.name }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MissionVariantSelector",
    props: {
        mission: Object,
        currentVariant: Object,
        loggedIn: Boolean
    },
    data() {
        return {
            dropdownClosed: true
        }
    },
    methods: {
        getAllVariantsForUser() {
            if (this.loggedIn) {
                return this.mission.variants;
            }

            return this.mission.variants.filter(x => x.visible);
        },
        getVariantsToShow() {
            if (this.loggedIn) {
                return this.mission.variants.filter(x => x.id !== this.currentVariant.id);
            }

            return this.mission.variants.filter(x => x.id !== this.currentVariant.id && x.visible);
        },
        changeVariant(variant) {
            this.$refs.variantToggle.click();
            this.$emit('variant-selected', variant);
        },
        toggleDropdownState() {
            this.dropdownClosed = !this.dropdownClosed;
        }
    }
}
</script>

<style lang="scss" scoped>
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

.card {
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 3px !important;
    background: transparent;
    border: none;
    width: 100%;

    > .card-header {
        background: transparent;
        border-radius: 0;
        border: none;
        padding: 0;
        margin-bottom: 10px;

        .visibility-toggle {
            width: 40px;
            text-align: center;
        }

        .name {
            margin-right: 14px;
            width: 313px;

            i {
                font-size: 16px;
            }

            .variant-text {
                margin-left: 5px;
            }
        }

        .name,
        .visibility-toggle {
            &.control-button {
                width: 100%;
                padding: 6px 12px;
                transition: color 0.15s ease-in-out,
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;

                &:hover {
                    background: rgba(22, 24, 29, 0.75);
                }
            }

            display: flex;
            align-items: center;
            padding: 10px;
            background: rgba(22, 24, 29, 0.75);
            color: #fff;
            cursor: pointer;
            height: 40px;
            border-radius: 3px;

            &.collapsed {
                .carets {
                    .caret-up {
                        display: none;
                    }

                    .caret-down {
                        display: block;
                    }
                }
            }

            .carets {
                display: flex;
                flex-grow: 1;
                justify-content: flex-end;

                .caret-down {
                    display: none;
                }

                .caret-up {
                    display: block;
                }
            }

            &:hover {
                color: #fff;
                text-decoration: none;
                background: #33363a;
            }
        }

        &#header-variants {
            margin-bottom: 0;
        }
    }

    .card-body {
        padding: 0;

        .col-12 + .col-12 {
            margin-top: 1px;
        }

        .variants-header {
            color: #fff;
            margin-bottom: 0;
            border-bottom: solid 1px #fff;
            display: flex;
            flex-grow: 1;
            font-weight: bolder;
        }

        .variant {
            margin: 5px;
            padding: 6px 9px;
            text-align: left;
            color: #fff;

            p {
                margin-bottom: 0;

                i {
                    font-size: 16px;
                    margin-right: 3px;
                }
            }

            &:hover {
                cursor: pointer;
                /*border-color: #fff;*/
                background: #33363a;
            }
        }
    }
}
</style>
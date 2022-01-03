<template>
    <div class="search-box">
        <div class="card">
            <div class="card-header" id="header-disguises">
                <div class="name collapsed control-button"
                     ref="disguiseToggle"
                     data-toggle="collapse"
                     data-target="#body-disguises"
                     aria-expanded="false"
                     aria-controls="body-digsuies">
                    <i class="far fa-fw fa-user-tie"></i>
                    <span class="disguise-text">
                        {{ currentDisguise === null ? $t('map.disguises') : currentDisguise.name }}
                    </span>
                    <span class="float-right">
                        <i class="fas fa-caret-down"></i>
                        <i class="fas fa-caret-up"></i>
                    </span>
                </div>
            </div>
            <div id="body-disguises"
                 class="collapse"
                 aria-labelledby="header-disguises">
                <div class="card-body disguises">
                    <div class="row">
                        <div class="col-12" @click="changeDisguise('NONE')">
                            <div class="disguise" style="background: #fff url('https://media.hitmaps.com/img/hitman3/ui/tiles/any_disguise.jpg') center center / auto no-repeat">
                                <p>{{ $t('map.none') }}</p>
                            </div>
                        </div>
                        <div @click="changeDisguise(disguise)"
                             v-for="disguise in disguises"
                             :key="disguise.id"
                             class="col-12">
                            <div class="disguise" :style="`background: url('${disguise.image}') center 70% / cover no-repeat`">
                                <i18n path="map.suit-disguise" tag="p" class="disguise-info" v-if="disguise.suit">
                                    <span slot="suitName">{{ disguise.name }}</span>
                                </i18n>
                                <p class="disguise-info" v-else>{{ disguise.name }}</p>
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
    name: "DisguiseDropdown",
    props: {
        game: Object,
        mission: Object,
        disguises: Array,
        currentDisguise: Object
    },
    data() {
        return {
            cachedDisguiseAreas: []
        }
    },
    methods: {
        changeDisguise(disguise) {
            this.$refs.disguiseToggle.click();
            this.$emit('disguise-selected', disguise);
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
                width: 313px;
            }

            .name,
            .visibility-toggle {
                &.control-button {
                    width: 100%;
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
            padding: 0;

            .col-12 + .col-12 {
                margin-top: 1px;
            }
            .disguise {
                padding: 15px;
                text-align: left;
                color: #fff;
                font-weight: bolder;
                border-radius: 3px;
                border: solid 2px transparent;

                p {
                    margin-bottom: 0;
                }

                &:hover {
                    cursor: pointer;
                    border-color: #fff;
                }
            }
        }
    }
</style>
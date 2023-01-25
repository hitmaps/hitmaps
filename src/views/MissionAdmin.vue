<template>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="metadata">
                        <h1>{{ missionInfo.name }}</h1>
                        <h2>{{ missionInfo.missionType }}</h2>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <h3>Variants</h3>
                    <div class="variants">
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Slug</th>
                                <th>Icon</th>
                                <th>Public</th>
                                <th>Default</th>
                                <th>Save</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="variant in missionInfo.variants">
                                <td>
                                    <input type="text" class="form-control" v-model="variant.name">
                                </td>
                                <td>
                                    <input type="text" class="form-control" v-model="variant.slug">
                                </td>
                                <td>
                                    <input type="text" class="form-control" v-model="variant.icon">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" v-model="variant.visible">
                                </td>
                                <td class="text-center">
                                    {{ variant.default ? 'Yes' : 'No' }}
                                </td>
                                <td>
                                    <game-button @click="saveVariant(variant)">
                                        <game-icon icon="check" font-style="solid"/>
                                        Save
                                    </game-button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="add-variant">
                        <h3>Add Variant</h3>
                        <form>
                            <div class="form-group">
                                <label for="add-variant-name">Name</label>
                                <input type="text" id="add-variant-name" class="form-control" v-model="addVariantForm.name">
                            </div>
                            <div class="form-group">
                                <label for="add-variant-slug">Slug</label>
                                <input type="text" id="add-variant-slug" class="form-control" v-model="addVariantForm.slug">
                            </div>
                            <div class="form-group">
                                <label for="add-variant-icon">Icon</label>
                                <input type="text" id="add-variant-icon" class="form-control" v-model="addVariantForm.icon">
                            </div>
                            <div class="form-group">
                                <label for="add-variant-source">Source Variant (for Nodes)</label>
                                <select class="form-control" id="add-variant-source" v-model="addVariantForm.sourceVariant">
                                    <option v-for="variant in missionInfo.variants" :value="variant.id">
                                        {{ variant.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="add-variant-public">
                                <label class="form-check-label" for="add-variant-public" v-model="addVariantForm.visible">
                                    Public
                                </label>
                            </div>
                            <game-button @click="createVariant">
                                <game-icon icon="check" font-style="solid"/>
                                Create Variant
                            </game-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.content {
    .col-md-8, .col-md-4, .col {
        font-family: 'nimbus_sans_lbold', sans-serif;
        background-color: $content-background;
        color: $content-text;

        h1 {
            text-transform: uppercase;
        }
    }

    .row:not(:first-child) {
        margin-top: 10px;

        .variants {
            table {
                width: 100%;

                tr:nth-child(even) {
                    background: rgba(255,255,255,.1);
                }
            }
        }
    }
}
</style>

<script>
import GameButton from "../components/GameButton";
import GameIcon from "../components/GameIcon";
export default {
    name: 'mission-admin',
    components: {GameIcon, GameButton},
    pageTitle: 'Mission Admin',
    props: {
        game: String,
        location: String,
        mission: String
    },
    data() {
        return {
            missionInfo: {},
            addVariantForm: {
                name: '',
                slug: '',
                icon: '',
                visible: false,
                sourceVariant: 0
            }
        }
    },
    mounted() {
        this.$http.get(`${this.$domain}/api/v1/games/${this.game}/locations/${this.location}/missions/${this.mission}`)
            .then(resp => this.missionInfo = resp.data[0]);
    },
    methods: {
        createVariant() {
            if (!this.addVariantForm.name || !this.addVariantForm.icon || !this.addVariantForm.slug || this.addVariantForm.sourceVariant === 0) {
                alert('At least one required field is missing.');
                return;
            }

            this.$http.post(`${this.$domain}/api/v1/mission-variants`, {
                missionId: this.missionInfo.id,
                name: this.addVariantForm.name,
                slug: this.addVariantForm.slug,
                icon: this.addVariantForm.icon,
                visible: this.addVariantForm.visible,
                sourceVariant: this.addVariantForm.sourceVariant
            }).then(_ => this.$router.go())
                .catch(err => this.$toast.error(err.stack));
        },
        saveVariant(variant) {
            if (!variant.name || !variant.icon || !variant.slug) {
                alert('At least one required field is missing.');
                return;
            }

            this.$http.put(`${this.$domain}/api/v1/mission-variants/${variant.id}`, {
                name: variant.name,
                slug: variant.slug,
                icon: variant.icon,
                visible: variant.visible
            }).then(_ => this.$router.go())
                .catch(err => this.$toast.error(err.stack));
        }
    }
}
</script>

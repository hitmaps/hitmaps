<template>
    <modal :modal-title="$t('map.add-edit-item')"
           id="edit-item-modal"
           tabindex="-1"
           role="dialog"
           fullscreen>
        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-dark" style="font-size: .8em">
                    {{ $t('map.please-indicate-when-adding') }}
                    <ul>
                        <li>{{ $t('map.required-items') }}</li>
                        <li>{{ $t('map.suspicious-items') }}</li>
                        <li>{{ $t('map.information-items') }}</li>
                        <li>{{ $t('map.in-game-description-items') }}</li>
                        <li>{{ $t('map.blank-notes') }}</li>
                    </ul>
                </div>
                <div v-show="mission.missionType !== 'Sniper Assassin'">
                    <h3>{{ $t('map.apply-template') }}</h3>
                    <div class="form-group row">
                        <label :for="`${uid}-template`" class="col sm-2 col-form-label">
                            {{ $t('map.template') }}
                        </label>
                        <div class="col-sm-10">
                            <select @change="applyTemplate"
                                    name="template"
                                    ref="templatePicker"
                                    class="form-control"
                                    title="Select One"
                                    :id="`${uid}-template`"
                                    data-live-search="true">
                                <optgroup v-for="(group, key) in templates" :key="key" :label="key">
                                    <option v-for="item in group"
                                            :key="item.id"
                                            :value="key + '|' + item.id">
                                        {{ item.name }}
                                    </option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <h3>Item Info</h3>
                <div class="form-group row">
                    <label :for="`${uid}-subgroup`" class="col-sm-2 col-form-label">
                        {{ $t('map.category') }}
                    </label>
                    <div class="col-sm-10">
                        <select name="subgroup"
                                ref="subgroupPicker"
                                class="form-control"
                                title="Select One"
                                :id="`${uid}-subgroup`"
                                @change="selectCategory"
                                data-live-search="true">
                            <optgroup v-for="topLevelCategory in topLevelCategories" :key="topLevelCategory" :label="topLevelCategory">
                                <option v-for="category in categories.filter(x => x.type === topLevelCategory)" :key="category.id" :value="topLevelCategory + '|' + category.subgroup"
                                        :data-content="`<img height='24' width='24' src='/img/map-icons/${category.icon}.png' alt='${category.group} Icon'> ${category.group}`">
                                    {{ category.group }}
                                </option>
                            </optgroup>
                        </select>
                        <small v-if="currentCategory"
                               class="form-text text-muted"
                               id="note-help-text">
                            {{ currentCategory.note }}
                        </small>
                    </div>
                </div>
                <div v-show="pickIconAllowed" class="form-group row" id="icon-form-group">
                    <label :for="`${uid}-icon`" class="col-sm-2 col-form-label">
                        {{ $t('map.icon') }}
                    </label>
                    <div class="col-sm-10">
                        <select name="icon"
                                v-model="createEditNodeModel.icon"
                                ref="iconPicker"
                                class="form-control"
                                :id="`${uid}-icon`"
                                data-live-search="true">
                            <optgroup v-for="(group, key) in icons" :key="key" :label="key">
                                <option v-for="icon in group"
                                        :key="icon.id"
                                        :value="icon.icon"
                                        :data-content="`<img height='24' width='24' src='/img/map-icons/${icon.icon}.png' alt='${icon.altText} Icon'> ${icon.altText}`">
                                    {{ icon.altText }}
                                </option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div v-if="currentCategory">
                    <div class="form-group row" v-if="currentCategory.requireName">
                        <label :for="`${uid}-name`" class="col-sm-2 col-form-label">
                            {{ $t('map.name') }}
                        </label>
                        <div class="col-sm-10">
                            <textarea type="text"
                                      name="name"
                                      v-model="createEditNodeModel.name"
                                      :id="`${uid}-name`"
                                      class="form-control"></textarea>
                            <small class="form-text text-muted">
                                {{ $t('map.name-note') }}
                            </small>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label :for="`${uid}-quantity`" class="col-sm-2 col-form-label">
                            {{ $t('map.quantity') }}
                        </label>
                        <div class="col-sm-10">
                            <select name="quantity"
                                    :id="`${uid}-quantity`"
                                    v-model="createEditNodeModel.quantity"
                                    class="form-control">
                                <option v-for="n in 10" :value="n">
                                    {{ n }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row" v-if="currentCategory.requireAction">
                        <label :for="`${uid}-action`" class="col-sm-2 col-form-label">
                            {{ $t('map.action') }}
                        </label>
                        <div class="col-sm-10">
                            <input type="text"
                                   name="action"
                                   :id="`${uid}-action`"
                                   v-model="createEditNodeModel.targetAction"
                                   class="form-control" />
                            <small class="form-text text-muted">
                                {{ $t('map.action-note') }}
                            </small>
                        </div>
                    </div>
                    <div class="form-group row" v-if="currentCategory.requireTarget">
                        <label :for="`${uid}-target`" class="col-sm-2 col-form-label">
                            {{ $t('map.target') }}
                        </label>
                        <div class="col-sm-10">
                            <input type="text"
                                   name="target"
                                   :id="`${uid}-target`"
                                   v-model="createEditNodeModel.targetAction"
                                   class="form-control" />
                            <small class="form-text text-muted">
                                {{ $t('map.target-note') }}
                            </small>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label :for="`${uid}-image`" class="col-sm-2 col-form-label">
                            {{ $t('map.image-url') }}
                        </label>
                        <div class="col-sm-10">
                            <input type="text"
                                   name="image"
                                   :id="`${uid}-image`"
                                   v-model="createEditNodeModel.image"
                                   class="form-control">
                            <small class="form-text text-muted">
                                {{ $t('map.image-url-note') }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <h3>{{ $t('map.notes') }}</h3>
                <div id="suggest-notes">
                    <div v-for="(note, index) in createEditNodeModel.notes" :key="note.type" class="note" :class="note.type">
                        <div class="row">
                            <div class="col-sm-3">
                                <button class="btn btn-block btn-light move-arrow"
                                        v-if="index !== 0"
                                        @click="modifyNote('UP', index)">
                                    <i class="fas fa-arrow-up"></i>
                                    Move Up
                                </button>
                                <button class="btn btn-block btn-light move-arrow"
                                        v-if="index !== createEditNodeModel.notes.length - 1"
                                        @click="modifyNote('DOWN', index)">
                                    <i class="fas fa-arrow-down"></i>
                                    Move Down
                                </button>
                                <button class="btn btn-block btn-danger delete-button" @click="modifyNote('DELETE', index)">
                                    <i class="fas fa-trash"></i>
                                    Remove
                                </button>
                            </div>
                            <div class="col-sm-9">
                                <div class="form-group row">
                                    <label for="note-type[]" class="col-sm-2 col-form-label">
                                        {{ $t('map.type') }}
                                    </label>
                                    <div class="col-sm-10">
                                        <select v-model="note.type"
                                                class="form-control"
                                                name="note-type[]">
                                            <option value="requirement">
                                                {{ $t('map.requirement') }}
                                            </option>
                                            <option value="warning">
                                                {{ $t('map.warning') }}
                                            </option>
                                            <option value="info">
                                                {{ $t('map.information') }}
                                            </option>
                                            <option value="description">
                                                {{ $t('map.description') }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="note-text[]" class="col-sm-2 col-form-label">
                                        {{ $t('map.text') }}
                                    </label>
                                    <div class="col-sm-10">
                                                <textarea name="note-text[]"
                                                          v-model="note.text"
                                                          class="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group row" style="margin-top: 10px">
                    <div class="col">
                        <button type="button"
                                @click="createEditNodeModel.notes.push({})"
                                id="add-note-button"
                                class="btn btn-dark">
                            <i class="fas fa-plus-circle"></i>
                            {{ $t('map.add-another-note') }}
                        </button>
                    </div>
                </div>
                <h3>{{ $t('map.mission-variants') }}</h3>
                <div class="form-group" v-for="variant in mission.variants">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" :id="`${uid}-variant-${variant.id}`" :value="variant.id" v-model="createEditNodeModel.variantIds">
                        <label class="form-check-label" :for="`${uid}-variant-${variant.id}`">
                            {{ lang(`difficulties.${variant.name}`, variant.name) }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <template v-slot:modal-footer>
            <game-button type="button" data-dismiss="modal">
                <game-icon icon="failed" font-style="normal" />
                {{ $t('form.close') }}
            </game-button>
            <game-button type="submit" @click="saveMarker" ref="saveMarkerButton">
                <game-icon icon="check" font-style="normal" />
                {{ $t('form.save') }}
            </game-button>
        </template>
    </modal>
</template>

<script>
import Modal from "../Modal";
import GameButton from "../GameButton";
import GameIcon from "../GameIcon";
import clone from 'just-clone';
import ArrayHelpers from "../ArrayHelpers";
export default {
    name: "AddEditItemModal",
    components: {GameIcon, GameButton, Modal},
    props: {
        mission: Object,
        categories: Array,
        topLevelCategories: Array,
        currentLevel: Number,
        clickedPoint: Object,
        // Only used as a starting point. We won't ever modify this directly
        node: Object
    },
    data() {
        return {
            defaultCreateEditNodeModel: {
                category: null,
                icon: '',
                name: '',
                quantity: 1,
                targetAction: '',
                image: '',
                notes: [],
                variantIds: []
            },
            createEditNodeModel: {
                category: null,
                icon: '',
                name: '',
                quantity: 1,
                targetAction: '',
                image: '',
                notes: [],
                variantIds: []
            },
            icons: {},
            templates: {},
            currentCategory: null,
            uid: this._uid
        }
    },
    mounted() {
        this.$http.get(`${this.$domain}/api/v1/editor/icons`).then(resp => {
            this.icons = resp.data;
            this.$nextTick(_ => {
                $(this.$refs.iconPicker).selectpicker();
            });
        });
        this.$http.get(`${this.$domain}/api/v1/editor/templates`).then(resp => {
            this.templates = resp.data;
            this.$nextTick(_ => {
                $(this.$refs.templatePicker).selectpicker();
            })
        });
    },
    computed: {
        pickIconAllowed() {
            if (!this.currentCategory) {
                return true;
            }

            return ['Navigation|agency-pickup',
                'Navigation|exit-location',
                'Navigation|ledge',
                'Navigation|foliage',
                'Navigation|up-stair',
                'Navigation|starting-location',
                'Navigation|up-pipe'].indexOf(this.currentCategory) === -1
        }
    },
    methods: {
        initializeAddEditModal() {
            $(this.$refs.subgroupPicker).selectpicker();
            $(this.$refs.subgroupPicker).selectpicker('val', -1);
            $(this.$refs.iconPicker).selectpicker('val', -1);
            $(this.$refs.templatePicker).selectpicker('val', -1);
            this.currentCategory = null;
            this.createEditNodeModel = clone(this.defaultCreateEditNodeModel);

            // Init editing
            if (this.node !== null) {
                this.createEditNodeModel.category = this.categories.find(category => category.type === this.node.type && category.subgroup === this.node.subgroup);
                $(this.$refs.subgroupPicker).selectpicker('val', `${this.createEditNodeModel.category.type}|${this.createEditNodeModel.category.subgroup}`);
                this.$refs.subgroupPicker.dispatchEvent(new Event('change'));
                this.createEditNodeModel.icon = this.node.icon;
                $(this.$refs.iconPicker).selectpicker('val', this.createEditNodeModel.icon);
                this.createEditNodeModel.name = this.node.name;
                this.createEditNodeModel.quantity = this.node.quantity;
                this.createEditNodeModel.targetAction = this.node.target;
                this.createEditNodeModel.image = this.node.image;
                this.createEditNodeModel.notes = this.node.notes.map(note => {
                    return {
                        type: note.type,
                        text: note.text
                    }
                });
                this.createEditNodeModel.variantIds = this.node.variants;
            }
        },
        selectCategory(event) {
            if (event.target.value === '') {
                return;
            }

            const previousCategory = this.currentCategory;
            const categoryInfo = event.target.value.split('|');
            this.currentCategory = this.categories.find(category => category.type === categoryInfo[0] && category.subgroup === categoryInfo[1]);
            this.createEditNodeModel.category = this.currentCategory;
            this.createEditNodeModel.icon = this.currentCategory.icon;

            if (previousCategory !== null &&
                ((previousCategory.requireAction !== this.currentCategory.requireAction) ||
                    (previousCategory.requireTarget !== this.currentCategory.requireTarget))) {
                this.createEditNodeModel.targetAction = '';
            }
            $(this.$refs.iconPicker).selectpicker('val', this.currentCategory.icon);
        },
        modifyNote(action, index) {
            switch (action) {
                case 'DELETE':
                    ArrayHelpers.deleteElementByIndex(this.createEditNodeModel.notes, index);
                    break;
                case 'DOWN':
                    ArrayHelpers.moveElement(this.createEditNodeModel.notes, index, index + 1);
                    break;
                case 'UP':
                    ArrayHelpers.moveElement(this.createEditNodeModel.notes, index, index - 1);
                    break;
            }
        },
        applyTemplate(event) {
            if (event.target.value === '') {
                return;
            }

            const splitTemplateInfo = event.target.value.split('|');
            const currentTemplate = this.templates[splitTemplateInfo[0]]
                .find(template => template.id === parseInt(splitTemplateInfo[1], 10));
            $(this.$refs.subgroupPicker).selectpicker('val', `${currentTemplate.type}|${currentTemplate.subgroup}`);
            this.$refs.subgroupPicker.dispatchEvent(new Event('change'));
            $(this.$refs.iconPicker).selectpicker('val', currentTemplate.icon);

            this.createEditNodeModel.name = currentTemplate.name;
            this.createEditNodeModel.targetAction = currentTemplate.target;
            this.createEditNodeModel.quantity = 1;
            this.createEditNodeModel.image = currentTemplate.image;
            this.createEditNodeModel.icon = currentTemplate.icon;
            this.createEditNodeModel.category = this.categories.find(category => category.type === currentTemplate.type && category.subgroup === currentTemplate.subgroup);

            this.createEditNodeModel.notes = [];
            if (currentTemplate.description) {
                this.createEditNodeModel.notes.push({
                    type: 'description',
                    text: currentTemplate.description
                });
            }
            if (currentTemplate.requirement) {
                this.createEditNodeModel.notes.push({
                    type: 'requirement',
                    text: currentTemplate.requirement
                });
            }
            if (currentTemplate.warning) {
                this.createEditNodeModel.notes.push({
                    type: 'warning',
                    text: currentTemplate.warning
                });
            }
            if (currentTemplate.information) {
                this.createEditNodeModel.notes.push({
                    type: 'info',
                    text: currentTemplate.information
                });
            }
        },
        saveMarker() {
            if (!this.createEditNodeModel.variantIds.length) {
                alert('You must select at least one mission variant');
                return;
            }

            if (this.node) {
                this.updateMarker();
            } else {
                this.createMarker();
            }
        },
        createMarker() {
            this.$http.post(`${this.$domain}/api/nodes`, {
                missionId: this.mission.id,
                icon: this.createEditNodeModel.icon,
                category: this.createEditNodeModel.category,
                name: this.createEditNodeModel.name,
                quantity: this.createEditNodeModel.quantity,
                targetAction: this.createEditNodeModel.targetAction,
                level: this.currentLevel,
                latitude: this.clickedPoint.lat,
                longitude: this.clickedPoint.lng,
                image: this.createEditNodeModel.image,
                notes: this.createEditNodeModel.notes,
                variantIds: this.createEditNodeModel.variantIds
            }).then(resp => {
                this.$emit('item-created', resp.data.data);
                this.$toast.success({
                    message: 'Item saved!'
                });
            }).catch(err => {
                this.$toast.error({
                    message: 'Changes failed to save!'
                });
            });
        },
        updateMarker() {
            this.$http.put(`${this.$domain}/api/nodes/${this.node.id}`, {
                missionId: this.mission.id,
                icon: this.createEditNodeModel.icon,
                category: this.createEditNodeModel.category,
                name: this.createEditNodeModel.name,
                quantity: this.createEditNodeModel.quantity,
                targetAction: this.createEditNodeModel.targetAction,
                level: this.currentLevel,
                latitude: this.node.latitude,
                longitude: this.node.longitude,
                image: this.createEditNodeModel.image,
                notes: this.createEditNodeModel.notes,
                variantIds: this.createEditNodeModel.variantIds
            }).then(resp => {
                this.$emit('item-updated', resp.data.data);
                this.$toast.success({
                    message: 'Item updated!'
                });
            }).catch(err => {
                console.log(err);
                this.$toast.error({
                    message: 'Changes failed to save!'
                });
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    overflow-y: auto;
}

.note {
    padding: 15px;
    background: rgb(58,63,73);

    .type {
        font-weight: bolder;
        text-transform: uppercase;
    }
}

.requirement {
    .in-game-description {
        display: none;
    }

    border-left: solid 3px #d00000;
}

.warning {
    .in-game-description {
        display: none;
    }

    border-left: solid 3px #ffa500;
}

.info {
    .in-game-description {
        display: none;
    }

    border-left: solid 3px #0000e0;
}

.move-arrow {
    color: green;
}

button {
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
}
</style>
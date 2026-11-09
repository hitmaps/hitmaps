<template>
    <modal :modal-title="$t('map.add-edit-item')"
           ref="innerModal"
           id="edit-item-modal"
           tabindex="-1"
           role="dialog"
           fullscreen>
        <template v-if="editorState === 'WALKTHROUGHS'">
            <div class="alert alert-dark">Select the Hitman: GO piece to add/update.</div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="editor-button" :class="createEditNodeModel.icon === 'dot-red' ? 'selected' : ''" @click="selectHitmanGoPiece('empty')">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/dot-red.png" alt="Empty Space">
                        Empty Space
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="editor-button" :class="createEditNodeModel.icon === 'unique-npc' ? 'selected' : ''" @click="selectHitmanGoPiece('agent-47')">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/unique-npc.png" alt="Agent 47">
                        Agent 47
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="editor-button" :class="createEditNodeModel.icon === 'blue-npc' ? 'selected' : ''" @click="selectHitmanGoPiece('static-guard')">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/blue-npc.png" alt="Static Guard">
                        Static (Blue) Guard
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="editor-button" :class="createEditNodeModel.icon === 'yellow-npc' ? 'selected' : ''" @click="selectHitmanGoPiece('patrol-guard')">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/yellow-npc.png" alt="Patrol Guard">
                        Patrol (Yellow) Guard
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="editor-button" :class="createEditNodeModel.icon === 'gray-npc' ? 'selected' : ''" @click="selectHitmanGoPiece('gray-guard')">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/gray-npc.png" alt="Gray Guard">
                        Pair (Gray) Guards
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="editor-button" :class="createEditNodeModel.icon === 'teal-npc' ? 'selected' : ''" @click="selectHitmanGoPiece('teal-guard')">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/teal-npc.png" alt="Teal Guard">
                        Turning (Teal) Guard
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="editor-button" :class="createEditNodeModel.icon === 'gold-npc' ? 'selected' : ''" @click="selectHitmanGoPiece('gold-guard')">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/gold-npc.png" alt="Teal Guard">
                        Circling (Gold) Guard
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="editor-button" :class="createEditNodeModel.icon === 'guard-dog' ? 'selected' : ''" @click="selectHitmanGoPiece('guard-dog')">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/guard-dog.png" alt="Guard Dog">
                        Guard Dog
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="row" v-if="editorState === 'ITEMS'">
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
                                <fancy-dropdown ref="templatePicker"
                                                @change="applyTemplate"
                                                v-model="selectedTemplate"
                                                :elements="templates"/>
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
                            <fancy-dropdown @change="selectCategory"
                                            v-model="currentCategory"
                                            :elements="groupedCategories"/>
                            <small v-if="currentCategory"
                                   class="form-text text-muted"
                                   id="note-help-text">
                                {{ currentCategory.note }}
                            </small>
                        </div>
                    </div>
                    <div v-if="pickIconAllowed" class="form-group row" id="icon-form-group">
                        <label :for="`${uid}-icon`" class="col-sm-2 col-form-label">
                            {{ $t('map.icon') }}
                        </label>
                        <div class="col-sm-10 icon-dropdown">
                            <fancy-dropdown v-model="selectedIcon"
                                            :elements="icons" />
                        </div>
                    </div>
                    <div v-if="pickPassageDestinationAllowed">
                        <div class="form-group row">
                            <label :for="`${uid}-destination-floor`" class="col-sm-2 col-form-label">
                                {{ $t('map.destination-floor') }}
                            </label>
                            <div class="col-sm-10">
                                <select name="destination-floor"
                                        :id="`${uid}-destination-floor`"
                                        v-model="createEditNodeModel.passageDestinationFloor"
                                        class="form-select">
                                    <option value="">
                                        -- {{ $t('map.none') }} --
                                    </option>
                                    <option v-for="floorInfo in floorNames" :value="floorInfo.index" :disabled="floorInfo.index === currentLevel">
                                        <template v-if="floorInfo.header">{{ floorInfo.header }} /</template>
                                        {{ floorInfo.value }}
                                    </option>
                                </select>
                                <small class="form-text text-muted">
                                    {{ $t('map.destination-floor-note') }}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div v-if="currentCategory">
                        <div class="form-group row" v-if="currentCategory.element.requireName">
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
                        <div class="form-group row" v-if="editorState === 'ITEMS'">
                            <label :for="`${uid}-quantity`" class="col-sm-2 col-form-label">
                                {{ $t('map.quantity') }}
                            </label>
                            <div class="col-sm-10">
                                <select name="quantity"
                                        :id="`${uid}-quantity`"
                                        v-model="createEditNodeModel.quantity"
                                        class="form-select">
                                    <option v-for="n in 10" :value="n">
                                        {{ n }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row" v-if="currentCategory.element.requireAction">
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
                        <div class="form-group row" v-if="currentCategory.element.requireTarget">
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
                        <div class="form-group row" v-if="editorState === 'ITEMS'">
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
                <div class="col-lg-6 col-md-12" v-if="editorState === 'ITEMS'">
                    <h3>{{ $t('map.notes') }}</h3>
                    <div id="suggest-notes">
                        <div v-for="(note, index) in createEditNodeModel.notes" :key="note.type" class="note" :class="note.type">
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="d-grid" v-if="index !== 0">
                                        <button class="btn btn-block btn-light move-arrow"
                                                @click="modifyNote('UP', index)">
                                            <icon name="fa6-solid:arrow-up"/>
                                            Move Up
                                        </button>
                                    </div>
                                    <div class="d-grid" v-if="index !== createEditNodeModel.notes.length - 1">
                                        <button class="btn btn-block btn-light move-arrow"
                                                @click="modifyNote('DOWN', index)">
                                            <icon name="fa6-solid:arrow-down"/>
                                            Move Down
                                        </button>
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-block btn-danger delete-button" @click="modifyNote('DELETE', index)">
                                            <icon name="fa6-solid:trash"/>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div class="col-sm-9">
                                    <div class="form-group row">
                                        <label for="note-type[]" class="col-sm-2 col-form-label">
                                            {{ $t('map.type') }}
                                        </label>
                                        <div class="col-sm-10">
                                            <select v-model="note.type"
                                                    class="form-select"
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
                                <icon name="fa6-solid:circle-plus"/>
                                {{ $t('map.add-another-note') }}
                            </button>
                        </div>
                    </div>
                    <h3>{{ $t('map.mission-variants') }}</h3>
                    <div class="form-group" v-for="variant in mission.variants">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" :id="`${uid}-variant-${variant.id}`" :value="variant.id" v-model="createEditNodeModel.variantIds">
                            <label class="form-check-label" :for="`${uid}-variant-${variant.id}`">
                                {{ variant.name }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:modal-footer>
            <game-button type="button" data-dismiss="modal" @click="hideModal">
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
import clone from 'just-clone';
import {v4 as uuidv4} from "uuid";
import {useAuthenticatedFetch} from "~/composables/useAuthenticatedFetch";
export default {
    name: "AddEditItemModal",
    props: {
        mission: Object,
        categories: Array,
        topLevelCategories: Array,
        currentLevel: Number,
        clickedPoint: Object,
        // Only used as a starting point. We won't ever modify this directly
        node: Object,
        editorState: String
    },
    setup() {
        const uuid = uuidv4();
        const config = useRuntimeConfig();
        const apiDomain = config.public.apiDomain;
        return {
            uuid,
            apiDomain
        };
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
                variantIds: [],
                passageDestinationFloor: ''
            },
            createEditNodeModel: {
                category: null,
                icon: '',
                name: '',
                quantity: 1,
                targetAction: '',
                image: '',
                notes: [],
                variantIds: [],
                passageDestinationFloor: ''
            },
            groupedCategories: [],
            icons: [],
            selectedIcon: null,
            templates: [],
            selectedTemplate: null,
            currentCategory: null,
            previousCategory: null,
            uid: this.uuid,
            floorNames: {}
        }
    },
    mounted() {
        $fetch(`${this.apiDomain}/api/editor/icons`).then(resp => {
            const dropdownGroups = [];
            for (const [key, items] of Object.entries(resp)) {
                const dropdownGroup = {
                    groupName: key,
                    groupItems: []
                };

                for (const item of items) {
                    const dropdownItem = {
                        element: item,
                        value: item.icon,
                        display: `<img height="24" width="24" src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/${item.icon}.png" alt="${item.altText} Icon"> ${item.altText}`,
                        html: true
                    };
                    dropdownGroup.groupItems.push(dropdownItem);
                }

                dropdownGroups.push(dropdownGroup);
            }

            this.icons = dropdownGroups;
        });
        $fetch(`${this.apiDomain}/api/editor/templates`).then(resp => {
            const dropdownGroups = [];
            for (const [key, items] of Object.entries(resp)) {
                // noinspection JSUnresolvedReference
                const dropdownGroup = {
                    groupName: key,
                    groupItems: []
                };

                for (const item of items) {
                    // noinspection JSUnresolvedReference
                    const dropdownItem = {
                        element: item,
                        value: item.name,
                        display: item.name,
                        html: false
                    };
                    dropdownGroup.groupItems.push(dropdownItem);
                }

                dropdownGroups.push(dropdownGroup);
            }

            this.templates = dropdownGroups;
        });
        this.buildLevelNames();
    },
    computed: {
        pickIconAllowed() {
            if (!this.currentCategory) {
                return true;
            }

            return !['exit-location',
                'ledge',
                'foliage',
                'starting-location',
                'hitmango-point'].includes(this.currentCategory.element.subgroup);
        },
        pickPassageDestinationAllowed() {
            if (!this.currentCategory) {
                return false;
            }

            return ['Stairwell', 'Passage', 'Ways Up/Down'].includes(this.currentCategory.element.group);
        }
    },
    methods: {
        buildLevelNames() {
            if (this.mission === undefined) {
                console.error('RIP');
                return;
            }

            this.floorNames = {};
            for (let i = this.mission.highestFloorNumber; i >= this.mission.lowestFloorNumber; i--) {
                const floorName = this.mission.floorNames.find(x => x.floorNumber === i);
                if (floorName) {
                    this.floorNames[i] = {
                        index: i,
                        header: this.getFloorHeader(this.$t(floorName.nameKey)),
                        value: this.getFormattedFloorName(this.$t(floorName.nameKey)),
                    }
                } else {
                    this.floorNames[i] = {
                        index: i,
                        header: undefined,
                        value: this.$t('map.level-number', { levelNumber: i })
                    }
                }
            }
        },
        getFloorHeader(level) {
            if (level.includes('|')) {
                return level.split('|')[0];
            }

            return null;
        },
        getFormattedFloorName(level) {
            if (level.includes('|')) {
                return level.split('|')[1];
            }

            return level;
        },
        buildTemplateElements() {
            const dropdownGroups = [];
            for (const [key, items] of Object.entries(this.templates)) {
                // noinspection JSUnresolvedReference
                const dropdownGroup = {
                    groupName: key,
                    groupItems: []
                };

                for (const item of items) {
                    // noinspection JSUnresolvedReference
                    const dropdownItem = {
                        element: item,
                        value: item.name,
                        display: item.name,
                        html: false
                    };
                    dropdownGroup.groupItems.push(dropdownItem);
                }

                dropdownGroups.push(dropdownGroup);
            }

            return dropdownGroups;
        },
        buildCategoryElements() {
            const dropdownGroups = [];
            for (const topLevelCategory of this.topLevelCategories) {
                const dropdownGroup = {
                    groupName: topLevelCategory,
                    groupItems: []
                };

                for (const category of this.categories.filter(x => x.type === topLevelCategory)) {
                    const dropdownItem = {
                        element: category,
                        value: category.group,
                        display: `<img height="24" width="24" src="https://media.hitmaps.com/img/hitmaps-custom/site/map-icons/${category.icon}.png" alt="${category.group} Icon"> ${category.group}`,
                        html: true
                    }
                    dropdownGroup.groupItems.push(dropdownItem);
                }

                dropdownGroups.push(dropdownGroup);
            }

            this.groupedCategories = dropdownGroups;
        },
        initializeAddEditModal() {
            this.selectedIcon = null;
            this.selectedTemplate = null;
            this.currentCategory = null;
            this.createEditNodeModel = clone(this.defaultCreateEditNodeModel);

            // Init editing
            if (this.node !== null) {
                this.createEditNodeModel.category = this.groupedCategories
                    .find(x => x.groupName === this.node.type)
                    .groupItems
                    .find(x => x.element.subgroup === this.node.subgroup);
                this.currentCategory = this.createEditNodeModel.category;
                this.selectCategory();
                this.createEditNodeModel.icon = this.node.icon;
                this.selectedIcon = this.icons.flatMap(x => x.groupItems).find(x => x.value === this.createEditNodeModel.icon);
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
                this.createEditNodeModel.passageDestinationFloor = this.node.passageDestinationFloor ?? '';
            } else if (this.mission.variants.length === 1) {
                this.defaultCreateEditNodeModel.variantIds.push(this.mission.variants[0].id);
            }

            if (this.editorState === 'HITMANGO-POINTS') {
                const navigationCategory = this.groupedCategories.find(x => x.groupName === 'Navigation');

                this.currentCategory = navigationCategory.groupItems.find(x => x.element.subgroup === 'hitmango-point');
                this.selectCategory();
            }
        },
        selectCategory() {
            if (!this.currentCategory) {
                return;
            }

            this.createEditNodeModel.category = this.currentCategory;
            this.createEditNodeModel.icon = this.currentCategory.element.icon;

            if (this.previousCategory !== null &&
                ((this.previousCategory.element.requireAction !== this.currentCategory.element.requireAction) ||
                    (this.previousCategory.element.requireTarget !== this.currentCategory.element.requireTarget))) {
                this.createEditNodeModel.targetAction = '';
            }
            if (!this.pickPassageDestinationAllowed) {
                this.createEditNodeModel.passageDestinationFloor = '';
            }
            this.selectedIcon = this.icons.flatMap(x => x.groupItems).find(x => x.value === this.createEditNodeModel.icon);
            this.previousCategory = this.currentCategory;
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
        applyTemplate() {
            if (!this.selectedTemplate) {
                return;
            }

            const currentTemplate = this.selectedTemplate.element;
            this.createEditNodeModel.name = currentTemplate.name;
            this.createEditNodeModel.targetAction = currentTemplate.target;
            this.createEditNodeModel.quantity = 1;
            this.createEditNodeModel.image = currentTemplate.image;
            this.createEditNodeModel.icon = currentTemplate.icon;
            this.selectedIcon = this.icons.flatMap(x => x.groupItems).find(x => x.value === this.createEditNodeModel.icon);
            this.createEditNodeModel.category = this.groupedCategories
                .find(x => x.groupName === currentTemplate.type)
                .groupItems.find(x => x.element.subgroup === currentTemplate.subgroup);
            this.currentCategory = this.createEditNodeModel.category;

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
            useAuthenticatedFetch(`${this.apiDomain}/api/nodes`, {
                method: 'POST',
                body: {
                    missionId: this.mission.id,
                    icon: this.createEditNodeModel.icon,
                    category: this.createEditNodeModel.category.element,
                    name: this.createEditNodeModel.name,
                    quantity: this.createEditNodeModel.quantity,
                    targetAction: this.createEditNodeModel.targetAction,
                    level: this.currentLevel,
                    latitude: this.clickedPoint.lat,
                    longitude: this.clickedPoint.lng,
                    image: this.createEditNodeModel.image,
                    notes: this.createEditNodeModel.notes,
                    variantIds: this.createEditNodeModel.variantIds,
                    passageDestinationFloor: this.createEditNodeModel.passageDestinationFloor === '' ?
                        null :
                        parseInt(this.createEditNodeModel.passageDestinationFloor)
                }
            }).then(resp => {
                this.$emit('item-created', resp.data);
                this.$toastr.s('Item saved!');
            }).catch(err => {
                console.error(err);
                this.$toastr.e('Changes failed to save!');
            });
        },
        updateMarker() {
            useAuthenticatedFetch(`${this.apiDomain}/api/nodes/${this.node.id}`, {
                method: 'PUT',
                body: {
                    missionId: this.mission.id,
                    icon: this.createEditNodeModel.icon,
                    category: this.createEditNodeModel.category.element,
                    name: this.createEditNodeModel.name,
                    quantity: this.createEditNodeModel.quantity,
                    targetAction: this.createEditNodeModel.targetAction,
                    level: this.currentLevel,
                    latitude: this.node.latitude,
                    longitude: this.node.longitude,
                    image: this.createEditNodeModel.image,
                    notes: this.createEditNodeModel.notes,
                    variantIds: this.createEditNodeModel.variantIds,
                    passageDestinationFloor: this.createEditNodeModel.passageDestinationFloor === '' ? null : parseInt(this.createEditNodeModel.passageDestinationFloor)
                }
            }).then(resp => {
                this.$emit('item-updated', resp.data);
                this.$toastr.s('Item updated!');
            }).catch(err => {
                console.log(err);
                this.$toastr.e('Changes failed to save!');
            });
        },
        selectHitmanGoPiece(pieceType) {
            switch (pieceType) {
                case 'empty':
                    this.createEditNodeModel.icon = 'dot-red';
                    this.createEditNodeModel.name = '';
                    break;
                case 'agent-47':
                    this.createEditNodeModel.icon = 'unique-npc';
                    this.createEditNodeModel.name = 'Agent 47';
                    break;
                case 'gray-guard':
                    this.createEditNodeModel.icon = 'gray-npc';
                    this.createEditNodeModel.name = 'Pair (Gray) Guards';
                    break;
                case 'teal-guard':
                    this.createEditNodeModel.icon = 'teal-npc';
                    this.createEditNodeModel.name = 'Turning (Teal) Guard';
                    break;
                case 'guard-dog':
                    this.createEditNodeModel.icon = 'guard-dog';
                    this.createEditNodeModel.name = 'Guard Dog';
                    break;
                case 'patrol-guard':
                    this.createEditNodeModel.icon = 'yellow-npc';
                    this.createEditNodeModel.name = 'Patrol (Yellow) Guard';
                    break;
                case 'gold-guard':
                    this.createEditNodeModel.icon = 'gold-npc';
                    this.createEditNodeModel.name = 'Circling (Gold) Guard';
                    break;
                case 'static-guard':
                    this.createEditNodeModel.icon = 'blue-npc';
                    this.createEditNodeModel.name = 'Static (Blue) Guard';
                    break;
                default:
                    alert('Invalid piece type');
            }
        },
        showModal() {
            this.$refs.innerModal.showModal();
        },
        hideModal() {
            this.$refs.innerModal.hideModal();
        }
    },
    watch: {
        // Why is this needed? Don't ask.
        topLevelCategories() {
            this.buildCategoryElements();
        },
        selectedIcon() {
            if (!this.selectedIcon) {
                return;
            }

            this.createEditNodeModel.icon = this.selectedIcon.value;
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    overflow-y: auto;

    .form-group.row {
        margin-bottom: 1rem;
    }
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

.icon-dropdown {
    &:deep(.bootstrap-select .dropdown-menu .dropdown-options) {
        max-height: 300px;
    }
}

.text-muted {
    /* Bootstrap uses !important, so we have to do it here too :( */
    color: #fff !important;
}

#suggest-notes {
    .d-grid + .d-grid {
        margin-top: .5rem;
    }
}

.editor-button {
    border-radius: 3px;
    background: rgba(22, 24, 29, 0.75);
    color: #fff;
    box-shadow: none;
    border: solid 2px #2a2d31;
    opacity: 0.85;
    margin-bottom: 10px;
    width: 100%;
    padding: 20px;
    text-align: left;

    h3 {
        font-size: 1.25rem;
    }

    &.selected,
    &:hover,
    &:active {
        border-color: #fff;
        opacity: 1;
        cursor: pointer;
    }
}
</style>
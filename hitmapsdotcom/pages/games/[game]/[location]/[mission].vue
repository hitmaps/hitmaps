<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "[mission].vue",
    setup() {
        const config = useRuntimeConfig();
        const route = useRoute();

        const gamePromise = useFetch(`${config.public.apiDomain}/api/v1/games/${route.params.game}`);

        const missionPromise = useFetch(`${config.public.apiDomain}/api/v1/games/${route.params.game}` +
            `/locations/${route.params.location}` +
            `/missions/${route.params.mission}`);

        return {
            gamePromise,
            missionPromise
        };
    },
    mounted() {
        const config = this.$config;

        this.gamePromise.then(resp => {
            this.game = resp.data.value[0];
        });
        this.missionPromise.then(resp => {
            this.mission = resp.data.value[0];
            this.currentFloor = this.mission.startingFloorNumber;
            this.currentVariant = this.$route.query.variant ?
                this.mission.variants.find(v => v.slug === this.$route.query.variant) :
                this.mission.variants.find(v => v.default);
        });

        Promise.all([this.gamePromise, this.missionPromise]).then(_ => {
            this.metadataLoaded = true;
            //@formatter:off
            const nodesPromise = useFetch(
                `${config.public.apiDomain}/api/v2/games/${this.$route.params.game}`+
                `/locations/${this.$route.params.location}`+
                `/missions/${this.$route.params.mission}/nodes`, {
                    lazy: true,
                    server: false
                }).then(resp => {
                    this.topLevelCategories = resp.data.value.topLevelCategories;
                    this.nodes = resp.data.value.nodes;
                    this.nodes.forEach(node => {
                        this.buildNodeForMap(node);
                    });
                    this.categories = resp.data.value.categories;
                    this.mapLayers = this.buildMapLayers();

                    this.$nextTick(() => {
                        this.map = L.map('map', {
                            maxZoom: this.mission.maxZoom,
                            minZoom: this.mission.minZoom,
                            crs: L.CRS.Simple,
                            renderer: this.mission.svg ? L.svg() : L.canvas(),
                            maxBounds: this.mapBounds,
                            layers: Object.values(this.mapLayers)
                        }).setView(L.latLng(this.mission.mapCenterLatitude, this.mission.mapCenterLongitude), this.mission.minZoom);
                        this.nodes.forEach(node => node.marker.addTo(this.map));
                    });
                });

            const disguisesPromise = useFetch(
                `${config.public.apiDomain}/api/v2/games/${this.$route.params.game}`+
                `/locations/${this.$route.params.location}`+
                `/missions/${this.$route.params.mission}/disguises`, {
                    lazy: true,
                    server: false
                }).then(resp => this.disguises = resp.data.value.disguises);

            const ledgesPromise = useFetch(
                `${config.public.apiDomain}/api/v2/games/${this.$route.params.game}`+
                `/locations/${this.$route.params.location}`+
                `/missions/${this.$route.params.mission}/ledges`, {
                    lazy: true,
                    server: false
                }).then(resp => {
                    this.ledges = resp.data.value.ledges;
                    this.ledges.forEach(ledge => this.buildLedgeForMap(ledge));

                    this.$nextTick(_ => this.ledges.forEach(ledge => ledge.polyline.addTo(this.map)));
                });
            const foliagePromise = useFetch(
                `${config.public.apiDomain}/api/v2/games/${this.$route.params.game}`+
                `/locations/${this.$route.params.location}`+
                `/missions/${this.$route.params.mission}/foliage`, {
                    lazy: true,
                    server: false
                }).then(resp => {
                    this.foliage = resp.data.value.foliage;
                    this.foliage.forEach(foliage => this.buildFoliageForMap(foliage));

                    this.$nextTick(_ => this.foliage.forEach(foliage => foliage.polygon.addTo(this.map)));
                });
            //@formatter:on

            Promise.all([nodesPromise, disguisesPromise, ledgesPromise, foliagePromise]).then(_ => {
                this.$nextTick(() => {
                    this.updateActiveMapState();
                    this.mapDataLoaded = true;

                    // Bind map listeners
                    this.map.on('click', this.addMarker);
                    this.map.on('pm:drawstart', this.initDraw);
                    this.map.on('pm:create', this.pmLayer);
                    this.map.on('pm:drawend', this.endDraw);
                    this.map.on('zoomend', () => {
                        let zoomLevel = this.map.getZoom();

                        const fonts = {
                            3: '.8em',
                            4: '1em',
                            5: '1.2em'
                        };

                        $('.area-icon').css('font-size', fonts[zoomLevel]);
                    });
                });
            });
        });
    },
    data() {
        return {
            metadataLoaded: false,
            mapDataLoaded: false,
            game: null,
            mission: null,
            nodes: [],
            categories: [],
            topLevelCategories: [],
            disguises: [],
            disguiseAreas: {},
            ledges: [],
            foliage: [],
            //region Map-specific
            currentFloor: 0,
            map: null,
            mapLayers: {},
            nodeForModal: null,
            nodeForEditing: null,
            nodeForMoving: null,
            clickedPoint: null,
            vertices: [],
            workingLayer: null,
            currentDisguise: null,
            currentVariant: null,
            //endregion
            //region Editor-specific
            editorState: 'OFF',
            disguiseRegionType: null,
            polyActive: false,
            deletionItem: null,
            deletionItemType: null
            //endregion
        }
    },
    methods: {
        //region Map-building
        buildNodeForMap(node) {
            node.latLng = L.latLng(node.latitude, node.longitude);
            node.visible = true;
            node.searchResult = false;
            node.marker = new L.marker([node.latitude, node.longitude], {
                icon: this.buildIcon(node),
                custom: {
                    id: node.id
                },
                riseOnHover: true
            }).on('click', _ => {
                //this.renderItemDetailsModal(node);
            }).on('dragend', _ => {
                this.nodeForMoving = node;
                $('#confirm-move-modal').modal('show');
            });

            this.bindTooltip(node);
        },
        buildLedgeForMap(ledge) {
            ledge.visible = true;
            const formattedVertices = ledge.vertices.map(vertexPair => [vertexPair.split(',')[0], vertexPair.split(',')[1]]);
            ledge.polyline = L.polyline(formattedVertices, {
                color: '#fff',
                weight: 4,
                opacity: .75,
                custom: {
                    id: ledge.id
                }
            }).bindTooltip(this.$t('map.groups.Navigation|Ledge'), {sticky: true})
                .on('click', () => this.displayConfirmPolyDeletionModal(ledge, 'ledge'));

            return ledge;
        },
        displayConfirmPolyDeletionModal(ledgeFoliage, type) {

        },
        buildFoliageForMap(foliage) {
            foliage.visible = true;
            const formattedVertices = foliage.vertices.map(vertexPair => [vertexPair.split(',')[0], vertexPair.split(',')[1]]);
            foliage.polygon = L.polygon(formattedVertices, {
                color: '#248f24',
                weight: 4,
                opacity: .75,
                custom: {
                    id: foliage.id
                }
            }).bindTooltip(this.$t('map.groups.Navigation|Foliage'), {sticky: true}).on('click', () => this.displayConfirmPolyDeletionModal(foliage, 'foliage'));

            return foliage;
        },
        buildDisguiseAreaForMap(disguiseArea) {
            const formattedVertices = disguiseArea.vertices.map(vertexPair => [vertexPair.split(',')[0], vertexPair.split(',')[1]]);
            disguiseArea.polygon = L.polygon(formattedVertices, {
                color: disguiseArea.type === 'trespassing' ? 'yellow' : '#f00',
                stroke: false,
                weight: 4,
                opacity: .75
            }).bindTooltip(disguiseArea.type === 'trespassing' ? this.$t('map.trespassing') : this.$t('map.hostile-area'), {sticky: true})
                .on('click', () => this.displayConfirmPolyDeletionModal(disguiseArea, 'disguise-area'));

            return disguiseArea;
        },
        buildMapLayers() {
            const allLayers = {};
            // 1. Sniper Assassin (only one level - 0)
            if (!this.mission.svg) {
                allLayers[0] = L.tileLayer(this.imageTileUrl.replace('{floorNumber}', '0'), {
                    noWrap: true,
                    minZoom: this.mission.minZoom,
                    maxZoom: this.mission.maxZoom
                });
            }

            // 2. SVG Layers for everything else
            if (this.mission.svg) {
                for (let i = this.mission.lowestFloorNumber; i <= this.mission.highestFloorNumber; i++) {
                    allLayers[i] = L.imageOverlay(`${this.svgMapUrl}${i}.svg`, this.layerBounds);
                }
            }

            // 3. Satellite layer (if present)
            if (this.mission.satelliteView) {
                allLayers[-99] = L.tileLayer(this.imageTileUrl.replace('{floorNumber}', '-99'), {
                    noWrap: true,
                    minZoom: this.mission.minZoom,
                    maxZoom: this.mission.maxZoom
                });
            }

            return allLayers;
        },
        updateActiveMapState() {
            this.updateActiveMapLayer();
            this.updateActiveDisguiseLayer();
            this.updateNodeMarkers();
        },
        updateActiveMapLayer() {
            // 1. Deactivate all map layers
            this.range(this.mission.lowestFloorNumber, this.mission.highestFloorNumber).forEach(x => this.map.removeLayer(this.mapLayers[x]));

            // 2. Activate the current one
            this.map.addLayer(this.mapLayers[this.currentFloor]);
        },
        updateActiveDisguiseLayer(oldDisguise) {
            // 1. Remove old disguise if need be
            if (oldDisguise) {
                this.disguiseAreas[oldDisguise.id].forEach(area => area.polygon.removeFrom(this.map));
            }

            if (this.currentDisguise) {
                // 2. Remove all current disguise layers for the current disguise
                this.disguiseAreas[this.currentDisguise.id].forEach(area => area.polygon.removeFrom(this.map));

                // 3. Add current disguise layers for the current disguise + level
                this.disguiseAreas[this.currentDisguise.id].filter(area => area.level === this.currentFloor).forEach(area => area.polygon.addTo(this.map));
            }
        },
        updateNodeMarkers() {
            // 1. Remove all items from the map
            this.nodes.forEach(node => node.marker._icon.style.display = 'none');
            this.ledges.forEach(ledge => ledge.polyline.removeFrom(this.map));
            this.foliage.forEach(foliage => foliage.polygon.removeFrom(this.map));

            // 3. [OVERRIDE] Mark nodes as "visible" if they are part of a search result
            this.nodes.filter(node => node.searchResult).forEach(node => node.visible = true);

            // 4. Add all visible nodes to map if they're on the current level and for the current variant
            this.nodes.filter(node => node.level === this.currentFloor && node.visible && node.variants.includes(this.currentVariant.id)).forEach(node => {
                node.marker._icon.style.display = 'block';

                if (node.searchResult) {
                    node.marker._icon.classList.add('search-result')
                } else {
                    node.marker._icon.classList.remove('search-result');
                }
            });

            // 5. Handle showing/hiding ledges/foliage
            this.ledges.filter(ledge => ledge.level === this.currentFloor && ledge.visible)
                .forEach(ledge => ledge.polyline.addTo(this.map));
            this.foliage.filter(foliage => foliage.level === this.currentFloor && foliage.visible)
                .forEach(foliage => foliage.polygon.addTo(this.map));

            // Make sure the counters and highlights for the level select are updated
            // TODO REENABLE
            /*if (this.$refs.floorToggle) {
                this.$refs.floorToggle.$forceUpdate();
            }
            if (this.$refs.sidebar) {
                this.$refs.sidebar.$forceUpdate();
            }*/
        },
        buildIcon(node) {
            return node.icon === 'area' ?
                new L.DivIcon({
                    className: 'area-icon',
                    html: node.name.replace(/(?:\r\n|\r|\n)/g, '<br>')
                }) :
                L.icon({
                    iconUrl: `/img/map-icons/${node.icon}.png`,
                    iconSize: [32, 32],
                    iconAnchor: [16, 16],
                    popupAnchor: [0, 0]
                });
        },
        bindTooltip(node) {
            let tooltip = node.name !== '' ? node.name : '';


            switch (node.subgroup) {
                case 'up-stair':
                    tooltip = this.$t('map.groups.Navigation|Stairwell');
                    break;
                case 'blend-in':
                    tooltip = node.name === 'Any Disguise' ?
                        this.$t('map.groups.Points of Interest|Blend In') :
                        this.$t('map.blend-in-as', { disguiseName: node.name });
                    break;
                case 'locked-door':
                case 'conceal-item':
                case 'hiding-spot':
                case 'destroy-evidence':
                case 'weapon-crate':
                case 'camera':
                case 'frisk':
                    tooltip = node.group;
                    break;
                case 'area':
                    // Don't show tooltips for areas
                    tooltip = '';
                    break;
            }

            if (tooltip === '') {
                return;
            }

            if (node.quantity > 1) {
                tooltip += ` (x${node.quantity})`;
            }

            node.marker.bindTooltip(tooltip.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;"));
        },
        renderItemDetailsModal(node) {
            this.nodeForModal = node;
            this.$refs.nodePopup.resetDeletionState();

            this.$nextTick(() => $('#popover-modal').modal('show'));
        },
        addMarker(event) {
            if (this.editorState !== 'ITEMS') {
                return;
            }

            this.nodeForEditing = null;
            this.clickedPoint = event.latlng;

            this.$nextTick(_ => {
                this.$refs.addEditItemModal.initializeAddEditModal();
                $('#edit-item-modal').modal('show');
            });
        },
        prepareEditor(nodeId) {
            this.nodeForEditing = this.nodes.find(node => node.id === nodeId);
            this.$refs.addEditItemModal.initializeAddEditModal();

            this.$nextTick(_ => {
                this.$refs.addEditItemModal.initializeAddEditModal();
                $('#edit-item-modal').modal('show');
            });
        },
        deleteNode(nodeId) {
            this.nodes.find(x => x.id === nodeId).marker.removeFrom(this.map);
            $('#popover-modal').modal('hide');
        },
        onItemCreated(node) {
            this.nodes.push(node);
            this.buildNodeForMap(node);
            // We're in the editor, so enable dragging right away
            node.marker.addTo(this.map);
            node.marker.dragging.enable();
            this.updateNodeMarkers();
            $('#edit-item-modal').modal('hide');
        },
        onItemUpdated(node) {
            this.nodeForEditing.marker.removeFrom(this.map);
            //ArrayHelpers.deleteElement(this.nodes, this.nodeForEditing);
            this.nodes.push(node);
            this.buildNodeForMap(node);
            node.marker.addTo(this.map);
            this.updateNodeMarkers();
            $('#edit-item-modal').modal('hide');
        },
        //endregion
        range(min, max) {
            return Utils.range(min, max);
        },
        //region Event listeners
        onChangeFloor(newFloor) {
            this.currentFloor = newFloor;
        },
        onHideAll() {
            this.nodes.forEach(node => node.visible = false);
            this.ledges.forEach(ledge => ledge.visible = false);
            this.foliage.forEach(foliage => foliage.visible = false);
            this.updateActiveMapState();
        },
        onShowAll() {
            this.nodes.forEach(node => node.visible = true);
            this.ledges.forEach(ledge => ledge.visible = true);
            this.foliage.forEach(foliage => foliage.visible = true);
            this.updateActiveMapState();
        },
        onSearchItem(itemKey) {
            this.nodes.forEach(node => node.searchResult = false);

            if (itemKey !== null) {
                const splitKey = itemKey.split('|');
                this.nodes.filter(node => node.group === splitKey[0] && node.name === splitKey[1]).forEach(node => node.searchResult = true);
            }

            this.updateNodeMarkers();
        },
        onHideCategory(category) {
            if (category.subgroup === 'ledge') {
                this.ledges.forEach(ledge => ledge.visible = false);
            } else if (category.subgroup === 'foliage') {
                this.foliage.forEach(foliage => foliage.visible = false);
            } else {
                this.nodes.filter(node => node.type === category.type && node.group === category.group).forEach(node => node.visible = false);
            }

            this.updateNodeMarkers();
        },
        onShowCategory(category) {
            if (category.subgroup === 'ledge') {
                this.ledges.forEach(ledge => ledge.visible = true);
            } else if (category.subgroup === 'foliage') {
                this.foliage.forEach(foliage => foliage.visible = true);
            } else {
                this.nodes.filter(node => node.type === category.type && node.group === category.group).forEach(node => node.visible = true);
            }

            this.updateNodeMarkers();
        },
        onHideTopLevelCategory(type) {
          this.nodes.filter(node => node.type === type).forEach(node => node.visible = false);

          if (type === 'Navigation') {
              this.ledges.forEach(ledge => ledge.visible = false);
              this.foliage.forEach(foliage => foliage.visible = false);
          }

          this.updateNodeMarkers();
        },
        onShowTopLevelCategory(type) {
          this.nodes.filter(node => node.type === type).forEach(node => node.visible = true);

          if (type === 'Navigation') {
            this.ledges.forEach(ledge => ledge.visible = true);
            this.foliage.forEach(foliage => foliage.visible = true);
          }

          this.updateNodeMarkers();
        },
        onZoomIn() {
            this.map.setZoom(this.map.getZoom() + 1);
        },
        onZoomOut() {
            this.map.setZoom(this.map.getZoom() - 1);
        },
        onMasterEditToggle() {
            if (this.editorState === 'OFF') {
                this.editorState = 'MENU';
            } else {
                this.editorState = 'OFF';
                this.toggleDraw('OFF');
                this.nodes.forEach(node => node.marker.dragging.disable());
            }
        },
        onLaunchEditor(editorState) {
            this.editorState = editorState;

            if (this.editorState === 'MENU') {
                this.toggleDraw('OFF');
            }

            // Update node "draggability"
            if (this.editorState === 'ITEMS') {
                this.nodes.forEach(node => node.marker.dragging.enable());
            } else {
                this.nodes.forEach(node => node.marker.dragging.disable());
            }
        },
        toggleDraw(state) {
            if (state === 'OFF') {
                this.map.pm.disableDraw('Line');
                this.map.pm.disableDraw('Polygon');
                return;
            }

            if (this.map.pm.Draw[state]._enabled) {
                this.map.pm.disableDraw(state);
                this.polyActive = false;
            } else {
                this.map.pm.enableDraw(state, {
                  snappable: false
                });
                this.polyActive = true;
            }

            let toastMessage = this.polyActive ? 'Drawing tools enabled' : 'Drawing tools disabled';
            this.$toastr.i(toastMessage);
        },
        onEnableLedgeCreation() {
            this.toggleDraw('Line');
        },
        onEnableFoliageCreation() {
            this.toggleDraw('Polygon');
        },
        onEnableDisguiseRegionCreation(regionType) {

        },
        initDraw(e) {
            e.workingLayer.on('pm:vertexadded', e => {
                this.vertices.push([e.latlng.lat, e.latlng.lng])
            });
        },
        pmLayer(e) {
            this.workingLayer = e.layer;
        },
        endDraw(e) {
            if (this.vertices.length === 0) {
                return;
            }

            const data = {
                vertices: [],
                missionId: this.mission.id,
                level: this.currentFloor
            };
            this.vertices.forEach(element => {
                data.vertices.push(`${element[0]},${element[1]}`);
            });
            /*if (e.shape === 'Line') {
                this.$http.post(`${this.$domain}/api/ledges`, data)
                    .then(resp => {
                        this.vertices = [];
                        this.ledges.push(this.buildLedgeForMap(resp.data.data));
                        this.$toastr.s('Ledge saved!');
                        this.map.removeLayer(this.workingLayer);
                        this.workingLayer = null;
                        this.polyActive = false;
                        this.updateNodeMarkers();
                    }).catch(_ => {
                  this.$toastr.e('Error occurred when saving ledge!');
                });
            } else if (this.editorState === 'FOLIAGE') {
                this.$http.post(`${this.$domain}/api/foliage`, data)
                    .then(resp => {
                        this.vertices = [];
                        this.foliage.push(this.buildFoliageForMap(resp.data.data));
                        this.$toastr.s('Foliage saved!');
                        this.map.removeLayer(this.workingLayer);
                        this.workingLayer = null;
                        this.polyActive = false;
                        this.updateNodeMarkers();
                    }).catch(_ => {
                  this.$toastr.e('Error occurred when saving foliage!');
                });
            } else if (this.editorState === 'DISGUISE-REGIONS') {
                data.disguiseId = this.currentDisguise.id;
                data.type = this.disguiseRegionType;

                this.$http.post(`${this.$domain}/api/disguise-areas`, data).then(resp => {
                    this.vertices = [];
                    this.disguiseAreas[this.currentDisguise.id].push(this.buildDisguiseAreaForMap(resp.data.data));
                    this.$toastr.s('Disguise area saved!');
                    this.map.removeLayer(this.workingLayer);
                    this.workingLayer = null;
                    this.polyActive = false;
                    this.disguiseRegionType = null;
                    this.updateActiveDisguiseLayer();
                }).catch(err => {
                    console.error(err);
                    this.$toastr.e('Error occurred when saving disguise area!');
                });
            }*/
        },
        onPolyDeleted() {
            if (this.deletionItemType === 'ledge') {
                this.deletionItem.polyline.removeFrom(this.map);
                //ArrayHelpers.deleteElement(this.ledges, this.deletionItem);
            } else if (this.deletionItemType === 'foliage') {
                this.deletionItem.polygon.removeFrom(this.map);
                //ArrayHelpers.deleteElement(this.foliage, this.deletionItem);
            } else if (this.deletionItemType === 'disguise-area') {
                this.deletionItem.polygon.removeFrom(this.map);
                //ArrayHelpers.deleteElement(this.disguiseAreas[this.currentDisguise.id], this.deletionItem);
            }

            this.deletionItemType = null;
            this.deletionItem = null;
            this.updateNodeMarkers();
            $('#delete-entity').modal('hide');
            $('#manage-disguise-area-modal').modal('hide');
        },
        onDisguiseAreaConverted() {
            this.deletionItem.polygon.removeFrom(this.map);
            this.deletionItem.type = this.deletionItem.type === 'trespassing' ? 'hostile' : 'trespassing';
            this.disguiseAreas[this.currentDisguise.id].push(this.buildDisguiseAreaForMap(this.deletionItem));
            this.deletionItemType = null;
            this.deletionItem = null;
            this.updateNodeMarkers();
            this.updateActiveDisguiseLayer();
            $('#manage-disguise-area-modal').modal('hide');
        },
        onDisguiseSelected(disguise) {
            // Disable disguise editor tools if they're enabled. You can't change a disguise mid-polygon.
            if (this.disguiseRegionType) {
                this.onEnableDisguiseRegionCreation(this.disguiseRegionType);
            }

            if (disguise === 'NONE' || this.disguiseAreas[disguise.id]) {
                this.currentDisguise = disguise === 'NONE' ? null : disguise;
                return;
            }

            /*this.$http.get(`${this.$domain}/api/v2/games/${this.$route.params.game}`+
                `/locations/${this.$route.params.location}`+
                `/missions/${this.$route.params.mission}` +
                `/disguise-areas/${disguise.id}`)
                .then(resp => {
                    this.disguiseAreas[disguise.id] = resp.data.disguiseAreas;
                    this.disguiseAreas[disguise.id].forEach(area => this.buildDisguiseAreaForMap(area));
                    this.currentDisguise = disguise;
                }).catch(err => {
                    console.error(err);
                    this.$toastr.e('Failed to retrieve disguise regions!');
                });*/
        },
        onReplaceDisguiseAreas(disguiseAreas) {
            if (!disguiseAreas.length) {
                // No actual regions, so nothing to do
                return;
            }

            const disguiseId = disguiseAreas[0].disguiseId;
            this.disguiseAreas[disguiseId].forEach(area => area.polygon.removeFrom(this.map));
            this.disguiseAreas[disguiseId] = disguiseAreas;
            this.disguiseAreas[disguiseId].forEach(area => this.buildDisguiseAreaForMap(area));
            this.updateActiveDisguiseLayer();
        },
        onVariantSelected(variant) {
            this.currentVariant = variant;
            this.updateActiveMapState();
        }
        //endregion
    },
    computed: {
        mapBounds() {
            return [
                this.mission.topLeftCoordinate.split(','),
                this.mission.bottomRightCoordinate.split(',')
            ];
        },
        layerBounds() {
            return [
                this.mission.boundingBoxTopLeft.split(','),
                this.mission.boundingBoxBottomRight.split(',')
            ];
        },
        showDebug() {
            return import.meta.env.VITE_SHOW_DEBUG === 'true';
        },
        svgMapUrl() {
            if (this.game === undefined || this.mission === undefined) {
                return '';
            }

            return `https://media.hitmaps.com/img/${this.game.slug}/maps/${this.mission.mapFolderName}/`;
        },
        imageTileUrl() {
            if (!this.mission) {
              return '';
            }

            // TODO Change URL
            return `https://www.hitmaps.com/api/maps/${this.mission.mapFolderName}/tiles/{floorNumber}/{z}/{x}/{y}.png`;
        },
        loggedIn() {
            if (localStorage.getItem('token') != null) {
                var data = JSON.parse(
                    atob(localStorage.getItem('token').split('.')[1])
                );
                var now = new Date();
                if (new Date(data.exp * 1000).getTime() - now.getTime() > 0) {
                    return true;
                }
            }
            return false;
        }
    },
    watch: {
        currentFloor() {
            if (!this.map) {
                return;
            }

            this.updateActiveMapState();
        },
        currentDisguise(_, old) {
            if (!this.map) {
                return;
            }

            this.updateActiveDisguiseLayer(old);
        }
    }
})
</script>

<template>
    <splash-screen v-if="metadataLoaded && !mapDataLoaded" :mission="mission" />
    <client-only>
        <div>
            <floor-toggle v-if="metadataLoaded && mapDataLoaded"
                          ref="floorToggle"
                          :mission="mission"
                          :current-floor="currentFloor"
                          :nodes="nodes"
                          :current-variant="currentVariant"
                          @change-floor="onChangeFloor"
            />
            <div :class="`hm-editor-${editorState.toLowerCase()}`" id="map"></div>
            <sidebar v-if="metadataLoaded && mapDataLoaded"
                     ref="sidebar"
                     :game="game"
                     :mission="mission"
                     :logged-in="loggedIn"
                     :top-level-categories="topLevelCategories"
                     :categories="categories"
                     :nodes="nodes"
                     :ledges="ledges"
                     :foliage="foliage"
                     :disguises="disguises"
                     :max-zoom-level="mission.maxZoom"
                     :min-zoom-level="mission.minZoom"
                     :current-zoom-level="map.getZoom()"
                     :editor-state="editorState"
                     :drawing-active="polyActive"
                     :current-disguise="currentDisguise"
                     :current-variant="currentVariant"
                     @hide-all="onHideAll"
                     @show-all="onShowAll"
                     @search-item="onSearchItem"
                     @hide-category="onHideCategory"
                     @show-category="onShowCategory"
                     @hide-top-level-category="onHideTopLevelCategory"
                     @show-top-level-category="onShowTopLevelCategory"
                     @zoom-in="onZoomIn"
                     @zoom-out="onZoomOut"
                     @master-edit-toggle="onMasterEditToggle"
                     @launch-editor="onLaunchEditor"
                     @enable-ledge-creation="onEnableLedgeCreation"
                     @enable-foliage-creation="onEnableFoliageCreation"
                     @enable-region-creation="onEnableDisguiseRegionCreation"
                     @disguise-selected="onDisguiseSelected"
                     @replace-disguise-areas="onReplaceDisguiseAreas"
                     @variant-selected="onVariantSelected" />
        </div>
    </client-only>
</template>

<style lang="scss" scoped>
#map {
    z-index: 0;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &.hm-editor-items {
        cursor: crosshair !important;
    }

    &:deep(.leaflet-control-container) {
        display: none;
    }


    &:deep(.leaflet-popup-close-button) {
        font-size: 2rem;
        width: 25px;
    }

    &:deep(.leaflet-popup-content-wrapper) {
        padding: 0;
        border-radius: 5px;

        .leaflet-popup-content {
            width: 300px !important;
            margin: 0 !important;
            padding-bottom: 10px !important;
        }
    }

    &:deep(.leaflet-marker-icon) {
        &.search-result {
            z-index: 9999 !important;
            background: rgba(255, 0, 60, 0.75);
            padding: 15px !important;
            margin: -33px 0 0 -33px !important;
            border-radius: 50%;
            border: 2px solid #ff003c;
            opacity: 0.85 !important;
            box-sizing: content-box;
        }

        &.area-icon {
            color: #fff;
            text-shadow: #000 1px 1px 1px;
            font-size: 0.8em;
            width: inherit !important;
            height: inherit !important;
            text-align: center;
        }
    }

    /* May be unused thanks to :visible */
    &:deep(.node-visible) {
        display: block;
    }

    &:deep(.node-hidden) {
        display: none;
    }
}
</style>
<script setup>
import {useAuthenticatedFetch} from "~/composables/useAuthenticatedFetch";

const config = useRuntimeConfig();
const { t } = useI18n();
const route = useRoute();

// TODO Remove this once I find a different toast library
const app = getCurrentInstance();
const toastr = app.appContext.config.globalProperties.$toastr;

//region SEO
const missionInfo = await $fetch(`${config.public.apiDomain}/api/games/${route.params.game}` +
    `/locations/${route.params.location}` +
    `/missions/${route.params.mission}`);
const ogImage = `${config.public.apiDomain}/api/games/${route.params.game}` +
    `/locations/${route.params.location}` +
    `/missions/${route.params.mission}/ogimage.png`;
const missionName = missionInfo.name;
useSeoMeta({
    title: missionName,
    ogTitle: Utils.siteTitle(missionName),
    ogImage: ogImage,
    twitterImage: ogImage,
    description: `View item locations, disguises, and more for ${missionName}`,
    ogDescription: `View item locations, disguises, and more for ${missionName}`,
    twitterDescription: `View item locations, disguises, and more for ${missionName}`
});
//endregion
//region Data
let disguiseAreas = {};
let mapLayers = {};
let vertices = [];
let workingLayer = null;
let disguiseRegionType = null;
const metadataLoaded = ref(false);
const mapDataLoaded = ref(false);
const game = ref(null);
const mission = ref(null);
const nodes = shallowRef([]);
const categories = ref([]);
const topLevelCategories = ref([]);
const disguises = ref([]);
const ledges = shallowRef([]);
const foliage = shallowRef([]);
const floorNames = ref({});
const currentFloor = ref(0);
let map = null;
const currentZoom = ref(null);
const nodeForModal = ref(null);
const nodeForEditing = ref(null);
const nodeForMoving = ref(null);
const clickedPoint = ref(null);
const currentDisguise = ref(null);
const currentVariant = ref(null);
const editorState = ref('OFF');
const polyActive = ref(false);
const deletionItem = ref(null);
const deletionItemType = ref(null);
//endregion
//region Mounted
onMounted(() => {
    const gamePromise = $fetch(`${config.public.apiDomain}/api/games/${route.params.game}`, {
        server: false
    });
    gamePromise.then(resp => {
        game.value = resp;
    });
    const missionPromise = $fetch(`${config.public.apiDomain}/api/games/${route.params.game}` +
        `/locations/${route.params.location}` +
        `/missions/${route.params.mission}`, {
        server: false
    });
    missionPromise.then(resp => {
        mission.value = resp;
        currentZoom.value = mission.value.minZoom;
        currentFloor.value = mission.value.startingFloorNumber;
        currentVariant.value = route.query.variant ?
            mission.value.variants.find(v => v.slug === route.query.variant) :
            mission.value.variants.find(v => v.default);
    });

    Promise.all([gamePromise, missionPromise]).then(_ => {
        metadataLoaded.value = true;
        buildLevelNames();
        map = L.map('map', {
            maxZoom: mission.value.maxZoom,
            minZoom: mission.value.minZoom,
            crs: L.CRS.Simple,
            renderer: /*mission.value.svg ? L.svg() :*/ L.canvas(),
            maxBounds: mapBounds.value,
            layers: Object.values(mapLayers)
        }).setView(L.latLng(mission.value.mapCenterLatitude, mission.value.mapCenterLongitude), mission.value.minZoom);
        //@formatter:off
        const nodesPromise = $fetch(
            `${config.public.apiDomain}/api/games/${route.params.game}`+
            `/locations/${route.params.location}`+
            `/missions/${route.params.mission}/nodes`).then(resp => {
            topLevelCategories.value = resp.topLevelCategories;
            nodes.value = resp.nodes;
            nodes.value.forEach(node => {
                buildNodeForMap(node);
            });
            categories.value = resp.categories;
            mapLayers = buildMapLayers();

            nextTick(() => {
                nodes.value.forEach(node => node.marker.addTo(map));
            });
        });

        const disguisesPromise = $fetch(
            `${config.public.apiDomain}/api/games/${route.params.game}`+
            `/locations/${route.params.location}`+
            `/missions/${route.params.mission}/disguises`).then(resp => disguises.value = resp.disguises);

        const ledgesPromise = $fetch(
            `${config.public.apiDomain}/api/games/${route.params.game}`+
            `/locations/${route.params.location}`+
            `/missions/${route.params.mission}/ledges`).then(resp => {
            ledges.value = resp.ledges;
            ledges.value.forEach(ledge => buildLedgeForMap(ledge));

            nextTick(_ => ledges.value.forEach(ledge => ledge.polyline.addTo(map)));
        });
        const foliagePromise = $fetch(
            `${config.public.apiDomain}/api/games/${route.params.game}`+
            `/locations/${route.params.location}`+
            `/missions/${route.params.mission}/foliage`).then(resp => {
            foliage.value = resp.foliage;
            foliage.value.forEach(foliage => buildFoliageForMap(foliage));

            nextTick(_ => foliage.value.forEach(foliage => foliage.polygon.addTo(map)));
        });
        //@formatter:on

        Promise.all([nodesPromise, disguisesPromise, ledgesPromise, foliagePromise]).then(_ => {
            nextTick(() => {
                updateActiveMapState();
                mapDataLoaded.value = true;

                // Bind map listeners
                map.on('click', addMarker);
                map.on('pm:drawstart', initDraw);
                map.on('pm:create', pmLayer);
                map.on('pm:drawend', endDraw);
                map.on('zoomend', () => {
                    let zoomLevel = map.getZoom();
                    currentZoom.value = zoomLevel;

                    const fonts = {
                        3: '.8em',
                        4: '1em',
                        5: '1.2em'
                    };

                    const areas = document.querySelector('.area-icon');
                    if (areas) {
                        areas.style.fontSize = fonts[zoomLevel];
                    }
                });
            });
        });
    });
});
//endregion
//region Methods
//region Map-building
function buildNodeForMap(node) {
    node.latLng = L.latLng(node.latitude, node.longitude);
    node.visible = true;
    node.searchResult = false;
    node.marker = new L.marker([node.latitude, node.longitude], {
        icon: buildIcon(node),
        custom: {
            id: node.id
        },
        riseOnHover: true
    }).on('click', e => {
        if (node.passageDestinationFloor !== null && editorState.value === 'OFF' && e.originalEvent.pointerType === 'mouse') {
            onChangeFloor(node.passageDestinationFloor);
        } else {
            renderItemDetailsModal(node);
        }
    }).on('dragend', _ => {
        nodeForMoving.value = node;
        moveNodeModalRef.value.showModal();
    });

    bindTooltip(node);
}
function buildLedgeForMap(ledge) {
    ledge.visible = true;
    const formattedVertices = ledge.vertices.map(vertexPair => [vertexPair.split(',')[0], vertexPair.split(',')[1]]);
    ledge.polyline = L.polyline(formattedVertices, {
        color: '#fff',
        weight: 4,
        opacity: .75,
        custom: {
            id: ledge.id
        }
    }).bindTooltip(t('map.groups.Navigation|Ledge'), {sticky: true})
        .on('click', () => displayConfirmPolyDeletionModal(ledge, 'ledge'));

    return ledge;
}
function displayConfirmPolyDeletionModal(ledgeFoliage, type) {
    // Can't delete either if their respective editor isn't enabled
    if (!((editorState.value === 'LEDGES' && type === 'ledge') ||
        (editorState.value === 'FOLIAGE' && type === 'foliage') ||
        (editorState.value === 'DISGUISE-REGIONS' && type === 'disguise-area'))) {
        return;
    }

    if (editorState.value === 'LEDGES') {
        deletionItemType.value = 'ledge';
    } else if (editorState.value === 'FOLIAGE') {
        deletionItemType.value = 'foliage';
    } else if (editorState.value === 'DISGUISE-REGIONS') {
        deletionItemType.value = 'disguise-area';
    } else {
        return;
    }

    deletionItem.value = ledgeFoliage;

    if (editorState.value === 'DISGUISE-REGIONS') {
        nextTick(() => manageDisguiseAreaModalRef.value.showModal());
    } else {
        nextTick(() => deleteEntityModalRef.value.showModal());
    }
}
function buildFoliageForMap(foliage) {
    foliage.visible = true;
    const formattedVertices = foliage.vertices.map(vertexPair => [vertexPair.split(',')[0], vertexPair.split(',')[1]]);
    foliage.polygon = L.polygon(formattedVertices, {
        color: '#248f24',
        weight: 4,
        opacity: .75,
        custom: {
            id: foliage.id
        }
    }).bindTooltip(t('map.groups.Navigation|Foliage'), {sticky: true}).on('click', () => displayConfirmPolyDeletionModal(foliage, 'foliage'));

    return foliage;
}
function buildDisguiseAreaForMap(disguiseArea) {
    const formattedVertices = disguiseArea.vertices.map(vertexPair => [vertexPair.split(',')[0], vertexPair.split(',')[1]]);
    disguiseArea.polygon = L.polygon(formattedVertices, {
        color: disguiseArea.type === 'trespassing' ? 'yellow' : '#f00',
        stroke: false,
        weight: 4,
        opacity: .75
    }).bindTooltip(disguiseArea.type === 'trespassing' ? t('map.trespassing') : t('map.hostile-area'), {sticky: true})
        .on('click', () => displayConfirmPolyDeletionModal(disguiseArea, 'disguise-area'));

    return disguiseArea;
}
function buildMapLayers() {
    const allLayers = {};
    // 1. Sniper Assassin (only one level - satellite)
    if (!mission.value.svg) {
        allLayers[0] = L.tileLayer(imageTileUrl.value.replace('{floorNumber}', 'satellite'), {
            noWrap: true,
            minZoom: mission.value.minZoom,
            maxZoom: mission.value.maxZoom
        });
    }

    // 2. SVG Layers for everything else
    if (mission.value.svg) {
        for (let i = mission.value.lowestFloorNumber; i <= mission.value.highestFloorNumber; i++) {
            allLayers[i] = L.imageOverlay(`${svgMapUrl.value}${i}.svg`, layerBounds.value);
        }
    }

    // 3. Satellite layer (if present)
    if (mission.value.satelliteView) {
        allLayers[-99] = L.tileLayer(imageTileUrl.value.replace('{floorNumber}', 'satellite'), {
            noWrap: true,
            minZoom: mission.value.minZoom,
            maxZoom: mission.value.maxZoom
        });
    }

    return allLayers;
}
function updateActiveMapState() {
    updateActiveMapLayer();
    updateActiveDisguiseLayer();
    updateNodeMarkers();
}
function updateActiveMapLayer() {
    // 1. Deactivate all map layers
    range(mission.value.lowestFloorNumber, mission.value.highestFloorNumber).forEach(x => map.removeLayer(mapLayers[x]));

    // 2. Activate the current one
    map.addLayer(mapLayers[currentFloor.value]);
}
function updateActiveDisguiseLayer(oldDisguise) {
    // 1. Remove old disguise if need be
    if (oldDisguise) {
        disguiseAreas[oldDisguise.id].forEach(area => area.polygon.removeFrom(map));
    }

    if (currentDisguise.value) {
        // 2. Remove all current disguise layers for the current disguise
        disguiseAreas[currentDisguise.value.id].forEach(area => area.polygon.removeFrom(map));

        // 3. Add current disguise layers for the current disguise + level
        disguiseAreas[currentDisguise.value.id].filter(area => area.level === currentFloor.value).forEach(area => area.polygon.addTo(map));
    }
}
function updateNodeMarkers() {
    // 1. Remove all items from the map
    nodes.value.filter(node => node.marker._icon !== null).forEach(node => node.marker._icon.style.display = 'none');
    ledges.value.forEach(ledge => ledge.polyline.removeFrom(map));
    foliage.value.forEach(foliage => foliage.polygon.removeFrom(map));

    // 3. [OVERRIDE] Mark nodes as "visible" if they are part of a search result
    nodes.value.filter(node => node.searchResult).forEach(node => node.visible = true);

    // 4. Add all visible nodes to map if they're on the current level and for the current variant
    nodes.value.filter(node => node.marker._icon !== null && node.level === currentFloor.value && node.visible && node.variants.includes(currentVariant.value.id)).forEach(node => {
        node.marker._icon.style.display = 'block';

        if (node.searchResult) {
            node.marker._icon.classList.add('search-result')
        } else {
            node.marker._icon.classList.remove('search-result');
        }
    });

    // 5. Handle showing/hiding ledges/foliage
    ledges.value.filter(ledge => ledge.level === currentFloor.value && ledge.visible)
        .forEach(ledge => ledge.polyline.addTo(map));
    foliage.value.filter(foliage => foliage.level === currentFloor.value && foliage.visible)
        .forEach(foliage => foliage.polygon.addTo(map));

    // Make sure the counters and highlights for the level select are updated
    if (floorToggleRef.value) {
        floorToggleRef.value.$forceUpdate();
    }
    if (sidebarRef.value) {
        sidebarRef.value.$forceUpdate();
    }
}
function buildIcon(node) {
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
}
function bindTooltip(node) {
    let tooltip = node.name !== '' ? node.name : '';


    switch (node.subgroup) {
        case 'up-stair':
            tooltip = t('map.groups.Navigation|Stairwell');

            if (node.passageDestinationFloor !== null) {
                const floorName = floorNames.value[node.passageDestinationFloor];
                const destination = floorName.header ? `${floorName.header} / ${floorName.value}` : floorName.value;
                tooltip = t('map.groups.Navigation|Stairwell-with-destination', { destination: destination});
            }
            break;
        case 'up-pipe':
            if (node.passageDestinationFloor !== null) {
                const floorName = floorNames.value[node.passageDestinationFloor];
                const destination = floorName.header ? `${floorName.header} / ${floorName.value}` : floorName.value;
                tooltip = t('map.groups.Navigation|Ways Up/Down-with-destination', { destination: destination});
            }
            break;
        case 'passage':
            if (node.passageDestinationFloor !== null) {
                const floorName = floorNames.value[node.passageDestinationFloor];
                const destination = floorName.header ? `${floorName.header} / ${floorName.value}` : floorName.value;
                tooltip = t('map.groups.Navigation|Passage-with-destination', { destination: destination});
            }
            break;
        case 'blend-in':
            tooltip = node.name === 'Any Disguise' ?
                t('map.groups.Points of Interest|Blend In') :
                t('map.blend-in-as', { disguiseName: node.name });
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
}
function buildLevelNames() {
    if (mission.value === undefined) {
        console.error('RIP');
        return;
    }

    floorNames.value = {};
    for (let i = mission.value.highestFloorNumber; i >= mission.value.lowestFloorNumber; i--) {
        const floorName = mission.value.floorNames.find(x => x.floorNumber === i);
        if (floorName) {
            floorNames.value[i] = {
                index: i,
                header: getFloorHeader(t(floorName.nameKey)),
                value: getFormattedFloorName(t(floorName.nameKey)),
            }
        } else {
            floorNames.value[i] = {
                index: i,
                header: undefined,
                value: t('map.level-number', { levelNumber: i })
            }
        }
    }
}
function getFloorHeader(level) {
    if (level.includes('|')) {
        return level.split('|')[0];
    }

    return null;
}
function getFormattedFloorName(level) {
    if (level.includes('|')) {
        return level.split('|')[1];
    }

    return level;
}
function renderItemDetailsModal(node) {
    nodeForModal.value = node;
    nodePopupRef.value.resetDeletionState();

    nextTick(() => {
        nodePopupRef.value.showModal();
    });
}
function addMarker(event) {
    if (editorState.value !== 'ITEMS') {
        return;
    }

    nodeForEditing.value = null;
    clickedPoint.value = event.latlng;

    nextTick(_ => {
        addEditItemModalRef.value.initializeAddEditModal();
        addEditItemModalRef.value.showModal();
    });
}
function prepareEditor(nodeId) {
    nodeForEditing.value = nodes.value.find(node => node.id === nodeId);
    addEditItemModalRef.value.initializeAddEditModal();

    nextTick(_ => {
        addEditItemModalRef.value.initializeAddEditModal();
        addEditItemModalRef.value.showModal();
    });
}
function deleteNode(nodeId) {
    const node = nodes.value.find(x => x.id === nodeId);
    node.marker.removeFrom(map);
    ArrayHelpers.deleteElement(nodes.value, node);
}
function onItemCreated(node) {
    nodes.value.push(node);
    buildNodeForMap(node);
    // We're in the editor, so enable dragging right away
    node.marker.addTo(map);
    node.marker.dragging.enable();
    updateNodeMarkers();
    addEditItemModalRef.value.hideModal();
}
function onItemUpdated(node) {
    nodeForEditing.value.marker.removeFrom(map);
    ArrayHelpers.deleteElementByFilter(nodes.value, x => x.id === node.id);
    nodes.value.push(node);
    buildNodeForMap(node);
    node.marker.addTo(map);
    node.marker.dragging.enable();

    nextTick(() => {
        updateNodeMarkers();
        addEditItemModalRef.value.hideModal();
    });
}
//endregion
function range(min, max) {
    return Utils.range(min, max);
}
//region Event listeners
function onChangeFloor(newFloor) {
    currentFloor.value = newFloor;
}
function onHideAll() {
    nodes.value.forEach(node => node.visible = false);
    ledges.value.forEach(ledge => ledge.visible = false);
    foliage.value.forEach(foliage => foliage.visible = false);
    updateActiveMapState();
}
function onShowAll() {
    nodes.value.forEach(node => node.visible = true);
    ledges.value.forEach(ledge => ledge.visible = true);
    foliage.value.forEach(foliage => foliage.visible = true);
    updateActiveMapState();
}
function onSearchItem(itemKey) {
    nodes.value.forEach(node => node.searchResult = false);

    if (itemKey !== null) {
        const splitKey = itemKey.split('|');
        nodes.value.filter(node => node.group === splitKey[0] && node.name === splitKey[1]).forEach(node => node.searchResult = true);
    }

    updateNodeMarkers();
}
function onHideCategory(category) {
    if (category.subgroup === 'ledge') {
        ledges.value.forEach(ledge => ledge.visible = false);
    } else if (category.subgroup === 'foliage') {
        foliage.value.forEach(foliage => foliage.visible = false);
    } else {
        nodes.value.filter(node => node.type === category.type && node.group === category.group).forEach(node => node.visible = false);
    }

    updateNodeMarkers();
}
function onShowCategory(category) {
    if (category.subgroup === 'ledge') {
        ledges.value.forEach(ledge => ledge.visible = true);
    } else if (category.subgroup === 'foliage') {
        foliage.value.forEach(foliage => foliage.visible = true);
    } else {
        nodes.value.filter(node => node.type === category.type && node.group === category.group).forEach(node => node.visible = true);
    }

    updateNodeMarkers();
}
function onHideTopLevelCategory(type) {
    nodes.value.filter(node => node.type === type).forEach(node => node.visible = false);

    if (type === 'Navigation') {
        ledges.value.forEach(ledge => ledge.visible = false);
        foliage.value.forEach(foliage => foliage.visible = false);
    }

    updateNodeMarkers();
}
function onShowTopLevelCategory(type) {
    nodes.value.filter(node => node.type === type).forEach(node => node.visible = true);

    if (type === 'Navigation') {
        ledges.value.forEach(ledge => ledge.visible = true);
        foliage.value.forEach(foliage => foliage.visible = true);
    }

    updateNodeMarkers();
}
function onZoomIn() {
    map.setZoom(map.getZoom() + 1);
}
function onZoomOut() {
    map.setZoom(map.getZoom() - 1);
}
function onMasterEditToggle() {
    if (editorState.value === 'OFF') {
        editorState.value = 'MENU';
    } else {
        editorState.value = 'OFF';
        toggleDraw('OFF');
        nodes.value.forEach(node => node.marker.dragging.disable());
    }
}
function onLaunchEditor(newEditorState) {
    editorState.value = newEditorState;

    if (editorState.value === 'MENU') {
        toggleDraw('OFF');
    }

    // Update node "draggability"
    if (editorState.value === 'ITEMS') {
        nodes.value.forEach(node => node.marker.dragging.enable());
    } else {
        nodes.value.forEach(node => node.marker.dragging.disable());
    }
}
function toggleDraw(state) {
    if (state === 'OFF') {
        map.pm.disableDraw('Line');
        map.pm.disableDraw('Polygon');
        return;
    }

    if (map.pm.Draw[state]._enabled) {
        map.pm.disableDraw(state);
        polyActive.value = false;
    } else {
        map.pm.enableDraw(state, {
            snappable: false
        });
        polyActive.value = true;
    }

    let toastMessage = polyActive.value ? 'Drawing tools enabled' : 'Drawing tools disabled';
    toastr.i(toastMessage);
}
function onEnableLedgeCreation() {
    toggleDraw('Line');
}
function onEnableFoliageCreation() {
    toggleDraw('Polygon');
}
function onEnableDisguiseRegionCreation(regionType) {
    if (disguiseRegionType !== null && disguiseRegionType !== regionType) {
        // We'll need to disable and re-enable to switch type
        toggleDraw('Polygon');
    }
    if (disguiseRegionType !== null && disguiseRegionType === regionType) {
        // Toggling the same one disables, so just null it out.
        disguiseRegionType = null;
    } else {
        disguiseRegionType = regionType;
    }

    toggleDraw('Polygon');
}
function initDraw(e) {
    e.workingLayer.on('pm:vertexadded', e => {
        vertices.push([e.latlng.lat, e.latlng.lng])
    });
}
function pmLayer(e) {
    workingLayer = e.layer;
}
function endDraw(e) {
    if (vertices.length === 0) {
        return;
    }

    const data = {
        vertices: [],
        missionId: mission.value.id,
        level: currentFloor.value
    };
    vertices.forEach(element => {
        data.vertices.push(`${element[0]},${element[1]}`);
    });
    if (e.shape === 'Line') {
        useAuthenticatedFetch(`${config.public.apiDomain}/api/ledges`, {
            method: 'POST',
            body: data
        }).then(resp => {
            vertices = [];
            ledges.value.push(buildLedgeForMap(resp.data));
            toastr.s('Ledge saved!');
            map.removeLayer(workingLayer);
            workingLayer = null;
            polyActive.value = false;
            updateNodeMarkers();
        }).catch(_ => {
            toastr.e('Error occurred when saving ledge!');
        });
    } else if (editorState.value === 'FOLIAGE') {
        useAuthenticatedFetch(`${config.public.apiDomain}/api/foliage`, {
            method: 'POST',
            body: data
        }).then(resp => {
            vertices = [];
            foliage.value.push(buildFoliageForMap(resp.data));
            toastr.s('Foliage saved!');
            map.removeLayer(workingLayer);
            workingLayer = null;
            polyActive.value = false;
            updateNodeMarkers();
        }).catch(_ => {
            toastr.e('Error occurred when saving foliage!');
        });
    } else if (editorState.value === 'DISGUISE-REGIONS') {
        data.disguiseId = currentDisguise.value.id;
        data.type = disguiseRegionType;

        useAuthenticatedFetch(`${config.public.apiDomain}/api/disguise-areas`, {
            method: 'POST',
            body: data
        }).then(resp => {
            vertices = [];
            disguiseAreas[currentDisguise.value.id].push(buildDisguiseAreaForMap(resp.data));
            toastr.s('Disguise area saved!');
            map.removeLayer(workingLayer);
            workingLayer = null;
            polyActive.value = false;
            disguiseRegionType = null;
            updateActiveDisguiseLayer();
        }).catch(err => {
            console.error(err);
            toastr.e('Error occurred when saving disguise area!');
        });
    }
}
function onPolyDeleted() {
    if (deletionItemType.value === 'ledge') {
        deletionItem.value.polyline.removeFrom(map);
        ArrayHelpers.deleteElementByFilter(ledges.value, x => x.id === deletionItem.value.id);
    } else if (deletionItemType.value === 'foliage') {
        deletionItem.value.polygon.removeFrom(map);
        ArrayHelpers.deleteElementByFilter(foliage.value, x => x.id === deletionItem.value.id);
    } else if (deletionItemType.value === 'disguise-area') {
        deletionItem.value.polygon.removeFrom(map);
        ArrayHelpers.deleteElementByFilter(disguiseAreas[currentDisguise.value.id], x => x.id === deletionItem.value.id);
    }

    deletionItemType.value = null;
    deletionItem.value = null;
    updateNodeMarkers();
    deleteEntityModalRef.value.hideModal();
    manageDisguiseAreaModalRef.value.hideModal();
}
function onDisguiseAreaConverted() {
    deletionItem.value.polygon.removeFrom(map);
    deletionItem.value.type = deletionItem.value.type === 'trespassing' ? 'hostile' : 'trespassing';
    disguiseAreas[currentDisguise.value.id].push(buildDisguiseAreaForMap(deletionItem.value));
    deletionItemType.value = null;
    deletionItem.value = null;
    updateNodeMarkers();
    updateActiveDisguiseLayer();
    manageDisguiseAreaModalRef.value.hideModal();
}
function onDisguiseSelected(disguise) {
    // Disable disguise editor tools if they're enabled. You can't change a disguise mid-polygon.
    if (disguiseRegionType) {
        onEnableDisguiseRegionCreation(disguiseRegionType);
    }

    if (disguise === 'NONE' || disguiseAreas[disguise.id]) {
        currentDisguise.value = disguise === 'NONE' ? null : disguise;
        return;
    }

    useAuthenticatedFetch(`${config.public.apiDomain}/api/games/${route.params.game}`+
        `/locations/${route.params.location}`+
        `/missions/${route.params.mission}` +
        `/disguise-areas/${disguise.id}`)
        .then(resp => {
            disguiseAreas[disguise.id] = resp.disguiseAreas;
            disguiseAreas[disguise.id].forEach(area => buildDisguiseAreaForMap(area));
            currentDisguise.value = disguise;
        }).catch(err => {
        console.error(err);
        toastr.e('Failed to retrieve disguise regions!');
    });
}
function onReplaceDisguiseAreas(newDisguiseAreas) {
    if (!newDisguiseAreas.length) {
        // No actual regions, so nothing to do
        return;
    }

    const disguiseId = newDisguiseAreas[0].disguiseId;
    disguiseAreas[disguiseId].forEach(area => area.polygon.removeFrom(map));
    disguiseAreas[disguiseId] = newDisguiseAreas;
    disguiseAreas[disguiseId].forEach(area => buildDisguiseAreaForMap(area));
    updateActiveDisguiseLayer();
}
function onVariantSelected(variant) {
    currentVariant.value = variant;
    updateActiveMapState();
}
//endregion
//endregion
//region Computed
const mapBounds = computed(() => {
    return [
        mission.value.topLeftCoordinate.split(','),
        mission.value.bottomRightCoordinate.split(',')
    ];
});
const layerBounds = computed(() => {
    return [
        mission.value.boundingBoxTopLeft.split(','),
        mission.value.boundingBoxBottomRight.split(',')
    ];
});
const showDebug = computed(() => {
    return process.env.SHOW_DEBUG === 'true';
});
const svgMapUrl = computed(() => {
    if (game.value === undefined || mission.value === undefined) {
        return '';
    }

    return `https://www.hitmaps.com/cdn-cgi/image//https://media.hitmaps.com/img/${game.value.slug}/maps/${mission.value.mapFolderName}/`;
});
const imageTileUrl = computed(() => {
    if (!mission.value) {
        return '';
    }

    return `https://www.hitmaps.com/cdn-cgi/image/format=auto/https://media.hitmaps.com/img/${game.value.slug}/maps/${mission.value.mapFolderName}/{floorNumber}/{z}/{x}/{y}.png`;
});
const loggedIn = computed(() => {
    if (localStorage.getItem('token') != null) {
        const data = JSON.parse(
            atob(localStorage.getItem('token').split('.')[1])
        );
        const now = new Date();
        if (new Date(data.exp * 1000).getTime() - now.getTime() > 0) {
            return true;
        }
    }
    return false;
});
//endregion
//region Watchers
watch(currentFloor, () => {
    if (!map) {
        return;
    }

    updateActiveMapState();
});
watch(currentDisguise, (_, old) => {
    if (!map) {
        return;
    }

    updateActiveDisguiseLayer(old);
});
//endregion
//region Old Refs
const floorToggleRef = ref(null);
const sidebarRef = ref(null);
const nodePopupRef = ref(null);
const addEditItemModalRef = ref(null);
const deleteEntityModalRef = ref(null);
const manageDisguiseAreaModalRef = ref(null);
const moveNodeModalRef = ref(null);
//endregion
</script>

<template>
    <splash-screen v-if="metadataLoaded && !mapDataLoaded" :mission="mission" />
    <client-only>
        <div>
            <floor-toggle v-if="metadataLoaded && mapDataLoaded"
                          ref="floorToggleRef"
                          :mission="mission"
                          :current-floor="currentFloor"
                          :nodes="nodes"
                          :current-variant="currentVariant"
                          @change-floor="onChangeFloor"
            />
            <div :class="`hm-editor-${editorState.toLowerCase()} game-${game?.slug}`" id="map"></div>
            <sidebar v-if="metadataLoaded && mapDataLoaded"
                     ref="sidebarRef"
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
                     :current-zoom-level="currentZoom"
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
            <node-popup :node="nodeForModal"
                        :logged-in="loggedIn"
                        :game="game"
                        :editor-state="editorState"
                        :floor-names="floorNames"
                        ref="nodePopupRef"
                        @delete-node="deleteNode"
                        @edit-node="prepareEditor"
                        @change-floor="onChangeFloor" />
            <add-edit-item-modal ref="addEditItemModalRef"
                                 v-if="mission"
                                 :top-level-categories="topLevelCategories"
                                 :categories="categories"
                                 :clicked-point="clickedPoint"
                                 :current-level="currentFloor"
                                 :node="nodeForEditing"
                                 :mission="mission"
                                 @item-created="onItemCreated"
                                 @item-updated="onItemUpdated" />
            <delete-entity-modal ref="deleteEntityModalRef" :entity="deletionItem" :entity-type="deletionItemType" @item-deleted="onPolyDeleted" />
            <manage-disguise-area-modal ref="manageDisguiseAreaModalRef" :entity="deletionItem" @item-deleted="onPolyDeleted" @item-converted="onDisguiseAreaConverted" />
            <move-node-modal ref="moveNodeModalRef" :node="nodeForMoving" />
        </div>
<!--        <div>





        </div>-->
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

    &.game-blood-money {
        background: #3F4E47;
    }

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

    &:deep(.node-visible) {
        display: block;
    }

    &:deep(.node-hidden) {
        display: none;
    }
}
</style>
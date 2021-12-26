<template>
    <div>
        <splash-screen v-if="metadataLoaded && !mapDataLoaded" :mission="mission"/>
        <div>
            <floor-toggle v-if="metadataLoaded && mapDataLoaded"
                          :mission="mission"
                          :current-floor="currentFloor"
                          :nodes="nodes"
                          :searched-nodes="[]"
                          @change-floor="onChangeFloor" />
            <div id="map"></div>
            <sidebar v-if="metadataLoaded && mapDataLoaded"
                     :logged-in="loggedIn"
                     :top-level-categories="topLevelCategories"
                     :categories="categories"
                     :nodes="nodes"
                     :disguises="disguises"
                     @hide-all="hideAll"
                     @show-all="showAll" />
            <node-popup ref="popupTemplate" style="display: none" :node="nodeForPopup" :logged-in="loggedIn" :game="game"/>
        </div>
    </div>
</template>

<script>
    import SplashScreen from '../components/Map/SplashScreen';
    import FloorToggle from "../components/Map/FloorToggle";
    import NodePopup from "../components/Map/NodePopup";
    import Sidebar from "../components/Map/Sidebar/Sidebar";

    export default {
        name: 'Map',
        components: {
            Sidebar,
            NodePopup,
            FloorToggle,
            SplashScreen
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
                //region Map-specific
                currentFloor: 0,
                map: null,
                mapLayers: {},
                nodeForPopup: null
                //endregion
            }
        },
        mounted() {
            // 1. Get game data
            const gamePromise = this.$http.get(`${this.$domain}/api/v1/games/${this.$route.params.game}`)
                .then(resp => {
                    this.game = resp.data[0];
                });

            // 2. Get mission data
            //@formatter:off
            const missionPromise = this.$http.get(`${this.$domain}/api/v1/games/${this.$route.params.game}`+
                                                                            `/locations/${this.$route.params.location}`+
                                                                            `/missions/${this.$route.params.mission}`)
                .then(resp => {
                    this.mission = resp.data[0];
                    this.currentFloor = this.mission.startingFloorNumber;
                });
            //@formatter:on

            // Once **both** are done, go fetch map information
            Promise.all([gamePromise, missionPromise]).then(_ => {
                this.metadataLoaded = true;
                // TODO Fetch map
                //@formatter:off
                const nodesPromise = this.$http.get(
                    `${this.$domain}/api/v2/games/${this.$route.params.game}`+
                                              `/locations/${this.$route.params.location}`+
                                              `/missions/${this.$route.params.mission}/nodes`)
                    .then(resp => {
                        this.topLevelCategories = resp.data.topLevelCategories;
                        this.nodes = resp.data.nodes;
                        this.nodes.forEach(node => {
                            node.latLng = L.latLng(node.latitude, node.longitude);
                            node.visible = true;
                            node.marker = new L.marker([node.latitude, node.longitude], {
                                icon: this.buildIcon(node),
                                custom: {
                                    id: node.id
                                },
                                riseOnHover: true
                            }).on('click', (e) => {
                                this.renderPopup(node, e.target);
                            });
                        });
                        this.categories = resp.data.categories;
                        this.mapLayers = this.buildMapLayers();

                        this.$nextTick(() => {
                            this.map = L.map('map', {
                                maxZoom: this.mission.maxZoom,
                                minZoom: this.mission.minZoom,
                                crs: L.CRS.Simple,
                                renderer: this.mission.svg ? L.svg() : L.canvas(),
                                maxBounds: this.mapBounds,
                                layers: Object.values(this.mapLayers)
                            }).setView([this.mission.mapCenterLatitude, this.mission.mapCenterLongitude], this.mission.minZoom);
                            this.nodes.forEach(node => node.marker.addTo(this.map));
                        });
                    });

                const disguisesPromise = this.$http.get(
                    `${this.$domain}/api/v2/games/${this.$route.params.game}`+
                                              `/locations/${this.$route.params.location}`+
                                              `/missions/${this.$route.params.mission}/disguises`)
                    .then(resp => this.disguises = resp.data.disguises);
                //@formatter:on

                Promise.all([nodesPromise, disguisesPromise]).then(_ => {
                    this.$nextTick(() => {
                        this.updateActiveMapState();
                        this.mapDataLoaded = true;
                    });
                });
            });
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
                return process.env.VUE_APP_SHOW_DEBUG === 'true';
            },
            svgMapUrl() {
                if (this.game === undefined || this.mission === undefined) {
                    return '';
                }

                return `https://media.hitmaps.com/img/${this.game.slug}/maps/${this.mission.mapFolderName}/`;
            },
            imageTileUrl() {
                return `${this.$domain}/api/maps/${this.$route.params.mission}/tiles/{floorNumber}/{z}/{x}/{y}.png`;
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
        methods: {
            //region Map-building
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
                this.updateNodeMarkers();
            },
            updateActiveMapLayer() {
                // 1. Deactivate all map layers
                this.range(this.mission.lowestFloorNumber, this.mission.highestFloorNumber).forEach(x => this.map.removeLayer(this.mapLayers[x]));

                // 2. Activate the current one
                this.map.addLayer(this.mapLayers[this.currentFloor]);
            },
            updateNodeMarkers() {
                // 1. Remove all nodes from the map
                this.nodes.forEach(node => node.marker._icon.style.display = 'none');

                // 3. [OVERRIDE] Mark nodes as "visible" if they are part of a search result
                // TODO search result
                //this.nodes.filter(node => true).forEach(node => node.visible = true);

                // 4. Add all visible nodes to map if they're on the current level
                this.nodes.filter(node => node.level === this.currentFloor && node.visible).forEach(node => node.marker._icon.style.display = 'block');
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
            renderPopup(node, marker) {
                this.nodeForPopup = node;

                this.$nextTick(() => {
                    marker.bindPopup(this.$refs.popupTemplate.$el.innerHTML).openPopup();
                })
            },
            //endregion
            range(min, max) {
                var array = [],
                    j = 0;
                for (var i = min; i <= max; i++) {
                  array[j] = i;
                  j++;
                }
                return array;
            },
            // Event-driven methods
            onChangeFloor(newFloor) {
                this.currentFloor = newFloor;
            },
            hideAll() {
                this.nodes.forEach(node => node.visible = false);
                this.updateActiveMapState();
            },
            showAll() {
                this.nodes.forEach(node => node.visible = true);
                this.updateActiveMapState();
            }
        },
        watch: {
            currentFloor() {
                if (!this.map) {
                    return;
                }

                this.updateActiveMapState();
            }
        }
    };
</script>


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

        &::v-deep {
            .leaflet-control-container {
                display: none;
            }


            .leaflet-popup-close-button {
                font-size: 2rem;
                width: 25px;
            }

            .leaflet-popup-content-wrapper {
                padding: 0;
                border-radius: 5px;

                .leaflet-popup-content {
                    width: 300px !important;
                    margin: 0 !important;
                    padding-bottom: 10px !important;
                }
            }

            .leaflet-marker-icon {
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
            .node-visible {
                display: block;
            }

            .node-hidden {
                display: none;
            }
        }
    }
</style>
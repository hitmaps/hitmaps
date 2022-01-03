<template>
    <div class="floor-toggle">
        <div v-for="i in range(mission.lowestFloorNumber, mission.highestFloorNumber).reverse()"
             :key="i"
             class="floor-info"
             :class="{ selected: currentFloor === i }">
            <div class="floor-header" v-if="floorNames[i] && floorNames[i].header">
                <span>{{ floorNames[i].header }}</span>
            </div>
            <div class="floor-details">
                <div @click="$emit('change-floor', i)" class="floor">
                    <span v-if="floorNames[i] && floorNames[i].value">{{ floorNames[i].value }}</span>
                </div>
                <div :class="{ 'has-search-results': hasSearchResults(i) }" class="item-count">
                    {{ calculateNumber(i) }}
                </div>
            </div>
        </div>
        <div class="floor-info text-center "
             :class="{ selected: currentFloor === -99 }"
             v-if="mission.satelliteView">
            <div class="floor-details">
                <div @click="$emit('change-floor', -99)" class="floor satellite">
                    {{ $t('map.satellite') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Utils from '../../util/Utils';

export default {
    name: "FloorToggle",
    props: {
        mission: Object,
        currentFloor: Number,
        nodes: Array,
        currentVariant: Object
    },
    data() {
        return {
            floorNames: [],
            lastFloorType: ''
        }
    },
    mounted() {
        this.buildLevelNames();
    },
    methods: {
        range(min, max) {
            return Utils.range(min, max);
        },
        buildLevelNames() {
            if (this.mission === undefined) {
                console.error('RIP');
                return;
            }

            this.floorNames = {};
            for (var i = this.mission.highestFloorNumber; i >= this.mission.lowestFloorNumber; i--) {
                if (this.mission.floorNames[i]) {
                    this.floorNames[i] = {
                        header: this.isNewFloorType(this.$t(this.mission.floorNames[i].nameKey)) ? this.lastFloorType : undefined,
                        value: this.getFormattedFloorName(this.$t(this.mission.floorNames[i].nameKey))
                    }
                } else {
                    this.floorNames[i] = {
                        header: undefined,
                        value: this.$t('map.level-number', { levelNumber: i })
                    }
                }
            }
        },
        isNewFloorType(level) {
            if (!level.length) {
                return false;
            }

            if (!level.includes('|') && level !== this.lastFloorType) {
                if (level !== this.lastFloorType) {
                    this.lastFloorType = level;
                    return true;
                }

                return false;
            }

            let type = level.split('|');
            if (type[0] !== this.lastFloorType) {
                this.lastFloorType = type[0];
                return true;
            }

            return false;
        },
        getFormattedFloorName(level) {
            if (level.includes('|')) {
                return level.split('|')[1];
            }

            return level;
        },
        calculateNumber(floor) {
            return this.nodes.filter(node => node.level === floor && node.visible && node.variants.includes(this.currentVariant.id)).length;
        },
        hasSearchResults(floor) {
            return this.nodes.some(node => node.level === floor && node.searchResult);
        }
    }
}
</script>

<style lang="scss" scoped>
    .floor-toggle {
        border-radius: 3px;
        border: 2px solid #fff;
        background: rgba(22, 24, 29, 0.75);

        @media(min-width: 768px) {
            display: block;
            position: fixed;
            top: 110px;
            left: 50px;
            z-index: 1;
        }

        @media(max-width: 767px) {
            display: block;
            position: fixed;
            bottom: 10px;
            right: 10px;
            z-index: 1;
        }

        &.desktop {
            display: block;
            position: fixed;
            top: 110px;
            left: 50px;
            z-index: 1;
        }

        .floor-info {
            margin: 0;
            border-bottom: 2px solid #fff;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;

            .floor-header {
                cursor: default;
                text-align: center;
                background: #ddd;
                color: #000;
            }

            .floor-details {
                display: flex;

                .floor {
                    display: inline-block;
                    padding: 10px 20px;
                    text-align: center;
                    flex-grow: 1;
                }

                .item-count {
                    display: inline-block;
                    background: #ddd;
                    color: #000;
                    padding: 10px 15px;
                    text-align: center;
                    width: 50px;

                    &.has-search-results {
                        background: $card-footer-background-hover;
                        color: #fff;
                    }
                }
            }

            &:hover {
                background: #33363a;
            }

            &:last-child {
                border-bottom: none;
            }

            &.selected {
                background: #fff;
                color: #000;
                margin-top: -1px;
            }
        }
    }
</style>
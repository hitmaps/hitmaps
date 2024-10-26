<script setup>
const props = defineProps({
    upcomingMatchInfo: Array
});
const { t } = useI18n();

const showRandomMaps = ref(false);

function toggleRandomMaps() {
    showRandomMaps.value = !showRandomMaps.value;
}
</script>

<template>
    <div class="row dashboard" v-for="eventInfo in upcomingMatchInfo">
        <div class="tournament col-lg">
            <div class="tournament-info row">
                <div class="text col-lg-10 col-sm-12">
                    <h1>{{ eventInfo.event.name }}</h1>
                    <h2>Upcoming Matches</h2>
                </div>
                <div class="toggler justify-content-end col-lg-2 col-sm-12">
                    <button class="btn square-button btn-dark" @click="toggleRandomMaps">
                        {{ showRandomMaps ? t('community-event.hide-random-maps') : t('community-event.show-random-maps') }}
                    </button>
                </div>
            </div>
            <div class="row d-none d-lg-flex d-xl-flex" style="border-bottom: 2px solid #dee2e6; border-top: 1px solid #dee2e6; padding: .75rem;">
                <div class="col-lg-3">
                    <b><icon name="fa6-solid:users"/> Competitors</b>
                </div>
                <div class="col-lg-3">
                    <b><icon name="fa6-regular:map"/> Maps</b>
                </div>
                <div class="col-lg-3">
                    <b><icon name="fa6-regular:calendar-days"/> Date | <i class="far fa-fw fa-clock"></i> Time</b>
                </div>
                <div class="col-lg-3">
                    <b><icon name="fa6-solid:microphone-lines"/> Shoutcaster(s)</b>
                </div>
            </div>
            <div class="row" v-if="!eventInfo.upcomingMatches.length" style="border-top: 1px solid #dee2e6; padding: .75rem;">
                <div class="col">
                    <i>No upcoming matches</i>
                </div>
            </div>
            <template v-for="matchup in eventInfo.upcomingMatches"
                      :key="matchup.id">
                <div class="row"
                     style="border-top: 1px solid #dee2e6; padding: .75rem;">
                    <div class="col-lg-3 col-12">
                        <icon class="d-lg-none" name="fa6-solid:users"/>
                        <country-flag :country="matchup.competitors[0].countryCode"/>
                        {{ matchup.competitors[0].challongeName }} vs
                                    {{ matchup.competitors[1].challongeName }}

                        <country-flag :country="matchup.competitors[1].countryCode"/>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div v-for="map in matchup.maps.filter(x => x.selectionType !== 'Ban' && (x.selectionType === 'Pick' || showRandomMaps))">
                            <icon class="d-lg-none" name="fa6-regular:map"/>
                            {{ map.missionLocation }} - {{ map.missionName }}
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <icon class="d-lg-none" name="fa6-regular:calendar-days"/>
                        {{ $dayjs(matchup.matchScheduledAt).format('ddd, D MMM') }}
                        | <icon class="d-lg-none" name="fa6-regular:clock"/>
                        {{ $dayjs(matchup.matchScheduledAt).format('h:mm A ') + Utils.getTimeZoneAbbreviation() }}
                    </div>
                    <div class="col-lg-3 col-12">
                        <template v-if="matchup.cast">
                            <icon class="d-lg-none" name="fa6-solid:microphone-lines"/>
                            <a :href="matchup.cast.mainCasterUrl" target="_blank">
                                {{ matchup.cast.mainCaster.name }}
                                <template v-if="matchup.cast.cocasters.length" v-for="cocaster in matchup.cast.cocasters">
                                    / {{ cocaster.name }}
                                </template>
                            </a>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.square-button {
    border-radius: 0;
}

.dashboard {
    margin: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background: $content-background;

    .tournament {
        display: flex;
        flex-direction: column;
        color: white;

        .tournament-info {
            padding: 15px 0;
            color: $content-text;
            text-shadow: none;

            h2 {
                color: $content-text;
            }

            .text {
                display: inline-block;
                text-transform: uppercase;
                flex-grow: 1;

                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 0;
                }

                h2 {
                    font-size: 1.5rem;
                    margin-bottom: 0;
                }
            }

            .toggler {
                display: flex;
                align-items: flex-end;
            }
        }

        a {
            color: $content-text;

            &:hover {
                color: #ddd;
            }
        }
    }
}
</style>
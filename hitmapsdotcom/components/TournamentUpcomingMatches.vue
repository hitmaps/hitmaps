<script setup>
const props = defineProps({
    upcomingMatchInfo: Array
});
</script>

<template>
    <div class="row dashboard" v-for="eventInfo in upcomingMatchInfo">
        <div class="tournament col-lg">
            <div class="tournament-info">
                <div class="text">
                    <h1>{{ eventInfo.event.name }}</h1>
                    <h2>Upcoming Matches</h2>
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
                        <span>{{ matchup.competitors[0].challongeName }} vs
                                    {{ matchup.competitors[1].challongeName }}
                        </span>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div v-for="map in matchup.maps.filter(x => x.selectionType === 'Pick')">
                            {{ map.missionLocation }} - {{ map.missionName }}
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <icon class="d-lg-none" name="fa6-regular:calendar-days"/>
                        {{ $formatDate(matchup.matchScheduledAt, 'ddd, D MMM') }}
                        | <icon class="d-lg-none" name="fa6-regular:clock"/>
                        {{ $formatDate(matchup.matchScheduledAt, 'h:mm A zz') }}
                    </div>
                    <div class="col-lg-3 col-12">
                        <template v-if="matchup.cast">
                            <i class="fab fa-fw fa-twitch d-lg-none"></i>
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
.dashboard {
    margin: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background: $content-background;

    h1 {
    }

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

                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 0;
                }

                h2 {
                    font-size: 1.5rem;
                    margin-bottom: 0;
                }
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
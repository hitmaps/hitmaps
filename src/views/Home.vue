<template>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <header class="row">
            <div class="col text-center site-header">
                <img v-webp src="/img/png/logos/hitmaps.png" class="img-fluid">
                <h1>{{ $t('interactive-maps-for-hitman') }}</h1>
            </div>
        </header>
        <div class="row loading" v-if="games.length === 0">
            <div class="loader">
                <loader></loader>
            </div>
        </div>
        <template v-if="games.length > 0">
            <div class="row dashboard">
                <div
                    class="game col-lg"
                    v-for="game in games.filter(x => ['hitman', 'hitman2', 'hitman3'].includes(x.slug))"
                    :key="game.id"
                    v-bind:style="{
                        backgroundImage:
                            'url(' + game.tileUrl + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }"
                >
                    <router-link
                        :to="{ name: 'level-select', params: { slug: game.slug } }"
                    >
                        <p>&nbsp;</p>
                        <div class="game-info">
                            <div class="image">
                                <game-icon :icon="game.icon" font-style="normal" />
                            </div>
                            <div class="text">
                                <h2>{{ $t("game-type." + game.type) }}</h2>
                                <h1>{{ game.fullName }}</h1>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div
                    class="elusive-target col-lg"
                    v-bind:style="{
                        backgroundImage:
                            'url(' +
                            (elusiveTarget != null
                                ? elusiveTarget.tileUrl
                                : '/img/jpg/elusive-targets/coming-soon.jpg') +
                            ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }"
                >
                    <a
                        :href="elusiveTarget.missionUrl"
                        v-if="elusiveTarget != null"
                    >
                        <p>&nbsp;</p>
                        <div class="countdown">
                            <game-icon icon="timed" font-style="normal" />
                            <div
                                class="timer"
                                :class="{
                                    'not-playable':
                                        new Date(elusiveTarget.beginningTime) >
                                        new Date()
                                }"
                            >
                                <div class="target-arrives">{{ $t('elusive-target.target-arrives') }}</div>
                                <countdown
                                    class="elusive-countdown"
                                    :date="
                                        new Date(elusiveTarget.beginningTime) >
                                        new Date()
                                            ? elusiveTarget.beginningTime
                                            : elusiveTarget.endingTime
                                    "
                                ></countdown>
                            </div>
                            <game-icon @click="showBriefing"
                                       onclick="return false;"
                                       icon="background"
                                       font-style="normal"
                                       extra-classes="normal briefing-icon float-right"
                                       v-tooltip:left="$t('elusive-target.mission-briefing')" />
                        </div>
                        <div class="elusive-target-info">
                            <div class="image">
                                <game-icon icon="elusive" font-style="normal" />
                            </div>
                            <div class="text">
                                <h2>{{ $t('game-type.Elusive Target') }}</h2>
                                <h1>
                                    {{
                                        elusiveTarget != null
                                            ? elusiveTarget.name
                                            : $t('elusive-target.coming-soon')
                                    }}
                                    <span class="mkii" v-if="elusiveTarget.reactivated" v-tooltip="$t('elusive-target.reactivated-target')">2</span>
                                </h1>
                            </div>
                            <div
                                onclick="return false;"
                                @click="showNotificationModal"
                                class="image elusive-notification float-right notification-icon"
                                v-tooltip:left="$t('elusive-target.notifications.manage-notifications')"
                            >
                                <game-icon icon="audio" font-style="normal" />
                            </div>
                        </div>
                    </a>
                    <a v-else href="#">
                        <p>&nbsp;</p>
                        <div class="elusive-target-info">
                            <div class="image">
                                <game-icon icon="elusive" font-style="normal" />
                            </div>
                            <div class="text">
                                <h2>{{ $t('game-type.Elusive Target') }}</h2>
                                <h1>{{ $t('elusive-target.coming-soon') }}</h1>
                            </div>
                            <div
                                onclick="return false;"
                                @click="showNotificationModal"
                                class="image float-right notification-icon"
                                v-tooltip:left="$t('elusive-target.notifications.manage-notifications')"
                            >
                                <game-icon icon="audio" font-style="normal" />
                            </div>
                        </div>
                    </a>
                </div>
                <modal v-if="elusiveTarget != null"
                       id="briefing-modal"
                       :modal-title="elusiveTarget.name">
                    <div class="row">
                        <div v-if="elusiveTarget.videoBriefingUrl != null" class="col-xl">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe :src="elusiveTarget.videoBriefingUrl"
                                        class="embed-responsive-item"
                                        frameborder="0"
                                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                        <div class="col-xl">
                            <p v-html="elusiveTarget.briefing">[briefing]</p>
                        </div>
                    </div>
                    <template v-slot:modal-footer>
                        <game-button data-dismiss="modal">
                            <game-icon icon="failed" font-style="normal"/>
                            {{ $t('form.close') }}
                        </game-button>
                    </template>
                </modal>
                <modal ref="notification-modal"
                       id="notification-modal"
                       :modal-title="$t('elusive-target.notifications.manage-notifications-modal-title')">
                    <div id="checking-notification-status">
                        <h6>{{ $t('elusive-target.notifications.checking-if-enabled') }}</h6>
                        <div class="spinner-grow" role="status">
                            <span class="sr-only">{{ $t('form.loading') }}</span>
                        </div>
                    </div>
                    <div
                        id="notifications-unsupported"
                        style="display: none"
                    >
                        <h6>{{ $t('elusive-target.notifications.unsupported-browser') }}</h6>
                        <ul>
                            <li>
                                iOS
                                <ul>
                                    <li>
                                        <a href="https://itunes.apple.com/us/app/google-chrome/id535886823?mt=8">
                                            Google Chrome
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://itunes.apple.com/us/app/firefox-web-browser/id989804926?mt=8">
                                            Firefox
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://itunes.apple.com/us/app/opera-touch-web-browser/id1411869974?mt=8">
                                            Opera
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://itunes.apple.com/us/app/brave-browser-fast-adblocker/id1052879175">
                                            Brave
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Android
                                <ul>
                                    <li>
                                        <a href="https://play.google.com/store/apps/details?id=com.android.chrome&hl=en_US">
                                            Google Chrome
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en_US">
                                            Firefox
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://play.google.com/store/apps/details?id=com.brave.browser&hl=en_US">
                                            Brave
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Desktop
                                <ul>
                                    <li>
                                        <a href="https://www.google.com/chrome/">
                                            Google Chrome
                                        </a>
                                    </li>
                                    <li>Microsoft Edge</li>
                                    <li>
                                        <a href="https://www.mozilla.org/en-US/firefox/new/">
                                            Firefox
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.opera.com/computer">
                                            Opera
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div id="enrollment-required" style="display: none">
                        <h6>{{ $t('elusive-target.notifications.device-not-enrolled') }}</h6>
                        <p id="error-container"></p>
                    </div>
                    <div
                        id="notifications-blocked"
                        style="display: none"
                    >
                        <h6>{{ $t('elusive-target.notifications.notifications-blocked') }}</h6>
                    </div>
                    <div
                        id="notification-settings"
                        style="display: none"
                    >
                        <table class="table">
                            <thead>
                            <tr>
                                <td><b>{{ $t('elusive-target.notifications.send-me-a-notification-when') }}</b></td>
                                <td>{{ $t('elusive-target.notifications.new-et') }}</td>
                                <td>{{ $t('elusive-target.notifications.reactivated-et') }}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {{ $t('elusive-target.notifications.announced') }}
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="elusive-target-coming"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-elusive-target-coming'"
                                           v-model="notifications.new.almostPlayable">
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="reactivation-elusive-target-coming"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-reactivation-elusive-target-coming'"
                                           v-model="notifications.reactivation.almostPlayable">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('elusive-target.notifications.playable') }}
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="elusive-target-playable"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-elusive-target-playable'"
                                           v-model="notifications.new.becomesPlayable">
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="reactivation-elusive-target-playable"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-reactivation-elusive-target-playable'"
                                           v-model="notifications.reactivation.becomesPlayable">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('elusive-target.notifications.7-days') }}
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="elusive-target-7"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-elusive-target-7'"
                                           v-model="notifications.new.sevenDays">
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="reactivation-elusive-target-7"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-reactivation-elusive-target-7'"
                                           v-model="notifications.reactivation.sevenDays">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('elusive-target.notifications.5-days') }}
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="elusive-target-5"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-elusive-target-5'"
                                           v-model="notifications.new.fiveDays">
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="reactivation-elusive-target-5"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-reactivation-elusive-target-5'"
                                           v-model="notifications.reactivation.fiveDays">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('elusive-target.notifications.3-days') }}
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="elusive-target-3"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-elusive-target-3'"
                                           v-model="notifications.new.threeDays">
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="reactivation-elusive-target-3"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-reactivation-elusive-target-3'"
                                           v-model="notifications.reactivation.threeDays">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('elusive-target.notifications.1-day') }}
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="elusive-target-1"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-elusive-target-1'"
                                           v-model="notifications.new.oneDay">
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="reactivation-elusive-target-1"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-reactivation-elusive-target-1'"
                                           v-model="notifications.reactivation.oneDay">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('elusive-target.notifications.ended') }}
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="elusive-target-end"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-elusive-target-end'"
                                           v-model="notifications.new.ended">
                                </td>
                                <td>
                                    <input type="checkbox"
                                           class="form-check-input"
                                           id="reactivation-elusive-target-end"
                                           @change="toggleNotificationState"
                                           :data-firebase-topic="'hitmaps-' + environment + '-reactivation-elusive-target-end'"
                                           v-model="notifications.reactivation.ended">
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <input type="hidden" name="firebase-token" />
                    </div>
                    <template v-slot:modal-footer>
                        <game-button id="enroll-button" style="display: none" @click="enroll">
                            <game-icon icon="arrow-right" font-style="normal" />
                            {{ $t('elusive-target.notifications.enroll') }}
                        </game-button>
                        <game-button data-dismiss="modal">
                            <game-icon icon="failed" font-style="normal" />
                            {{ $t('form.close') }}
                        </game-button>
                    </template>
                </modal>
            </div>
            <div class="row dashboard">
                <div class="game col-lg"
                     v-for="game in games.filter(x => ['absolution', 'sniper-assassin'].includes(x.slug))"
                     :key="game.id"
                     :style="{
                        backgroundImage: 'url(' + game.tileUrl + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }">
                    <router-link :to="{ name: 'level-select', params: { slug: game.slug } }">
                        <p>&nbsp;</p>
                        <div class="game-info">
                            <div class="image">
                                <game-icon :icon="game.icon" font-style="normal" />
                            </div>
                            <div class="text">
                                <h2>{{ $t("game-type." + game.type) }}</h2>
                                <h1>{{ game.fullName }}</h1>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="row dashboard">
                <div class="tournament col-lg">
                    <div class="tournament-info">
                        <div class="text">
                            <h1>Roulette Rivals 10 (Presented by Frote's Speedrun Community)</h1>
                            <h2>Upcoming Matches</h2>
                        </div>
                    </div>
                    <template v-if="fetchedTournamentMatches === false">
                        <div class="row">
                            <div class="col-md-12">
                                <game-button @click="fetchUpcomingMatches">
                                    <game-icon icon="arrow-right" font-style="normal"></game-icon>
                                    Fetch Upcoming Matches
                                </game-button>
                            </div>
                        </div>
                    </template>
                    <template v-else-if="fetchedTournamentMatches === 'FETCHING'">
                        <loader/>
                    </template>
                    <template v-else-if="tournamentMatches.length">
                        <div class="row dashboard" style="margin: 0; margin-bottom: 40px;">
                            <div class="elusive-target col-lg" :style="{
                                backgroundImage:
                                    'url(https://media.hitmaps.com/img/hitmaps-tournaments/rr10-red-bg.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                paddingLeft: 0,
                                paddingRight: 0
                            }">
                                <div style="flex-grow: 1">&nbsp;</div>
                                <template v-if="tournamentMatches[0].cast && new Date(tournamentMatches[0].matchScheduledAt) - new Date() < (10*60*1000)">
                                    <iframe
                                            :src="`https://player.twitch.tv/?autoplay=false&channel=${getTwitchNameFromUrl(tournamentMatches[0].cast.mainCasterUrl)}&parent=${$hostname}`"
                                            height="100%"
                                            width="100%"
                                            frameborder="0"
                                            scrolling="no"
                                            autoplay="false"
                                            allowfullscreen="true">
                                    </iframe>
                                </template>
                                <template v-else>
                                    <div v-if="tournamentMatches[0].cast && tournamentMatches[0].cast.mainCasterUrl" class="countdown">
                                        <game-icon font-style="normal" icon="timed" />
                                        <div class="timer not-playable">
                                            <div class="target-arrives">Next Match Begins in</div>
                                            <countdown class="elusive-countdown" :date="tournamentMatches[0].matchScheduledAt"/>
                                        </div>
                                    </div>
                                </template>
                                <div class="game-info">
                                    <div class="image">
                                        <game-icon font-style="normal" icon="versus" />
                                    </div>
                                    <div class="text">
                                        <h2>
                                            {{ tournamentMatches[0].maps.filter(x => x.selectionType === 'Pick').map(x => `${x.missionName} - ${x.missionLocation}`).join(' / ') }}
                                        </h2>
                                        <h1>
                                            {{ tournamentMatches[0].competitors[0].challongeName }} vs
                                            {{ tournamentMatches[0].competitors[1].challongeName }}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div v-if="fetchedTournamentMatches === 'FETCHED'" class="row d-none d-lg-flex d-xl-flex" style="border-bottom: 2px solid #dee2e6; border-top: 1px solid #dee2e6; padding: .75rem;">
                        <div class="col-lg-3">
                            <b><i class="fas fa-fw fa-swords"></i> Competitors</b>
                        </div>
                        <div class="col-lg-3">
                            <b><i class="far fa-fw fa-map"></i> Maps</b>
                        </div>
                        <div class="col-lg-3">
                            <b><i class="far fa-fw fa-calendar-alt"></i> Date | <i class="far fa-fw fa-clock"></i> Time ({{ new Date() | moment('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone, 'z') }})</b>
                        </div>
                        <div class="col-lg-3">
                            <b><i class="fab fa-fw fa-twitch"></i> Shoutcaster(s)</b>
                        </div>
                    </div>
                    <div class="row" v-if="fetchedTournamentMatches === 'FETCHED' && !this.tournamentMatches.length" style="border-top: 1px solid #dee2e6; padding: .75rem;">
                        <div class="col">
                            <i>No upcoming matches</i>
                        </div>
                    </div>
                    <template v-if="fetchedTournamentMatches === 'FETCHED'" v-for="matchup in this.tournamentMatches">
                        <div class="row" :key="matchup.id"
                             style="border-top: 1px solid #dee2e6; padding: .75rem;">
                            <div class="col-lg-3 col-12">
                                <span>
                                   {{ matchup.competitors[0].challongeName }} vs
                                    {{ matchup.competitors[1].challongeName }}
                                </span>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div v-for="map in matchup.maps.filter(x => x.selectionType === 'Pick')">
                                    {{ map.missionLocation }} - {{ map.missionName }}
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <i class="far fa-fw fa-calendar-alt d-lg-none"></i>{{ matchup.matchScheduledAt | moment('ddd, D MMM') }} | <i class="far fa-fw fa-clock d-lg-none"></i> {{ matchup.matchScheduledAt | moment('h:mm A') }}
                                <span class="d-lg-none">{{ new Date() | moment('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone, 'z') }}</span>
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
        <modal modal-title="Roulette Rivals 8"
               id="roulette-rivals-modal"
               tabindex="-1"
               dismissable>
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="embed-responsive embed-responsive-16by9"
                         style="min-height: 310px">
                        <iframe src="https://www.youtube.com/embed/k9t7PPLEZp8"
                                class="embed-responsive-item"
                                frameborder="0"
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <alert type="info">
                        <ul>
                            <li><b>Matches</b>: May 6 - 28</li>
                            <li><b>Grand Finals</b>: May 29</li>
                        </ul>
                    </alert>
                    <p>
                        In Roulette Rivals you go head-to-head against another player in main missions. Once a mission is selected,
                        an admin will spin the roulette.
                    </p>
                    <p>
                        The admin will give the roulette restrictions info to both players and give the sign to officially
                        start the match. Players are allowed to use every item and spawn location they want.
                    </p>
                    <p>
                        Whoever finishes the mission with a 5 star SA rating first in real time wins the map. Repeat: This
                        is NOT about the fastest time, but about who ever finishes the mission first with a 5 star SA rating.
                    </p>
                    <p>
                        Do you play it safe? Takes longer, but you wouldn't have to restart. Or do you play it risky to get
                        that awesome time, with the potential of a lot of restarts?
                    </p>
                </div>
            </div>
            <template v-slot:modal-footer>
                <game-button data-dismiss="modal">
                    <game-icon icon="failed" font-style="normal"/>
                    {{ $t('form.close') }}
                </game-button>
            </template>
        </modal>
        <input type="hidden" name="notification-environment" />
        <div class="patreon community-server">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>{{ $t('community-server.header') }}</h1>
                    <p>{{ $t('community-server.intro') }}</p>
                    <p>
                        <i18n path="community-server.download-instructions">
                            <span slot="serverPatcher">
                                <a href="https://gitlab.com/grappigegovert/localghost/-/jobs/artifacts/master/download?job=build_patcher" target="_blank">{{ $t('community-server.server-patcher') }}</a>
                            </span>
                            <span slot="serverUrl">
                                <code>gm.hitmaps.com</code>
                            </span>
                        </i18n>
                    </p>
                    <p>{{ $t('community-server.disclaimer') }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 roulette">
                    <p>
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/roulette-logo.png" class="img-fluid">
                    </p>
                    <div class="row">
                        <div class="col-lg-7 col-xs-12">
                            <p>{{ $t('community-server.roulette.in-game-intro') }}</p>
                            <p>{{ $t('community-server.roulette.available-for-h3-users') }}</p>
                        </div>
                        <div class="col-lg-5 col-xs-12">
                            <img src="https://media.hitmaps.com/img/hitmaps-custom/sample-in-game-spin.png" class="img-fluid" alt="Screenshot of In-Game Spin">
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-lg-7 col-xs-12">
                            <p>
                                <i18n path="roulette.introduction">
                                    <span slot="hitmanRoulette">
                                        <a href="https://thekotti.github.io/hitman.html" target="_blank">{{ $t('roulette.hitman-roulette') }}</a>
                                    </span>
                                </i18n>
                            </p>
                            <ul>
                                <li><b>{{ $t('roulette.list-item-tournament-mode.header') }}</b> {{ $t('roulette.list-item-tournament-mode.details') }}</li>
                                <li><b>{{ $t('roulette.list-item-control.header') }}</b> {{ $t('roulette.list-item-control.details') }}</li>
                                <li><b>{{ $t('roulette.list-item-overlay.header') }}</b> {{ $t('roulette.list-item-overlay.details') }}</li>
                            </ul>
                            <a href="https://roulette.hitmaps.com" target="_blank" class="btn square-button white">
                                <i class="fas fa-arrow-right"></i>
                                {{ $t('roulette.visit-button') }}
                            </a>
                            <p><i>{{ $t('roulette.footer') }}</i></p>
                        </div>
                        <div class="col-lg-5 col-xs-12">
                            <img src="https://media.hitmaps.com/img/hitmaps-custom/sample-website-spin.png" class="img-fluid" alt="Screenshot of Website Spin">
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 ghost-mode">
                    <h2>
                        <game-icon icon="versus" font-style="solid"></game-icon>
                        {{ $t('mission-types.ghost mode') }}
                    </h2>
                    <p>{{ $t('community-server.ghost-mode.intro') }}</p>
                    <p>{{ $t('community-server.ghost-mode.available-for-h2-users') }}</p>
                    <div class="ghost-mode-image">
                        <img src="https://media.hitmaps.com/img/hitman3/gamemodes/briefing_ghostmode.jpg" alt="Ghost Mode Image" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="patreon">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>{{ $t('partnership.header') }}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 partner">
                    <div class="image">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/f7sc-logo.png" style="width: 128px; height: 128px;" alt="F7SC Logo">
                    </div>
                    <div class="text">
                        <h3>{{ $t('partnership.f7sc.header') }}</h3>
                        <p>{{ $t('partnership.f7sc.paragraph')}}</p>
                        <a href="https://discord.gg/FVxTKdU" target="_blank" class="btn square-button blurple">
                            <i class="fab fa-discord"></i>
                            {{ $t('partnership.f7sc.call-to-action') }}
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 partner">
                    <div class="image">
                        <img src="https://media.hitmaps.com/img/hitmaps-custom/rrstats-logo.png" style="width: 128px; height: 128px;" alt="RRStats Logo">
                    </div>
                    <div class="text">
                        <h3>{{ $t('partnership.rr-stats.header') }}</h3>
                        <p>{{ $t('partnership.rr-stats.paragraph')}}</p>
                        <a href="https://rrstats.currymaker.net" target="_blank" class="btn btn-dark square-button">
                            <i class="fas fa-arrow-right"></i>
                            {{ $t('partnership.rr-stats.call-to-action') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="patreon community-server">
            <div class="row intro">
                <div class="col-xs-12">
                    <h1>
                    <span class="fa-stack">
                        <i class="fas fa-square fa-stack-2x"></i>
                        <i class="fab fa-patreon fa-stack-1x fa-inverse"></i>
                    </span>
                        {{ $t('patreon.patreon-supporters') }}
                    </h1>
                    {{ $t('patreon.patreon-supporters-description') }}
                </div>
            </div>
            <div class="row">
                <div class="col" style="text-align: right">
                    <a href="https://www.patreon.com/mrmike227" class="btn patreon-button">
                        <i class="fab fa-patreon"></i>
                        Become a Patron
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Countdown from '../components/Countdown.vue'
import Loader from '../components/Loader.vue'
import CxltToaster from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import Vue from 'vue'
import Modal from "../components/Modal";
import Alert from "../components/Alert";
import MetaHandler from "../components/MetaHandler";
import GameIcon from "../components/GameIcon";
import GameButton from "../components/GameButton";
import TournamentPlatformIcon from "../components/TournamentPlatformIcon";
import Patron from "../components/Patron";

Vue.use(CxltToaster)
export default {
    name: 'home',
    pageTitle: 'Home',
    components: {
        Patron,
        TournamentPlatformIcon,
        GameButton,
        GameIcon,
        Alert,
        Modal,
        Countdown,
        Loader
    },
    metaInfo: {
        meta: [
            {
                name: 'description',
                content: 'HITMAPS™ provides interactive maps for the Hitman series since 2018'
            },
            {
                property: 'og:description',
                content: 'HITMAPS™ provides interactive maps for the Hitman series since 2018'
            },
            {
                property: 'twitter:description',
                content: 'HITMAPS™ provides interactive maps for the Hitman series since 2018'
            }
        ]
    },
    data() {
        return {
            fetchedTournamentMatches: false,
            tournamentMatches: undefined,
            promos: [],
            games: [],
            token: null,
            notifications: {
                new: {
                    almostPlayable: false,
                    becomesPlayable: false,
                    sevenDays: false,
                    fiveDays: false,
                    threeDays: false,
                    oneDay: false,
                    ended: false
                },
                reactivation: {
                    almostPlayable: false,
                    becomesPlayable: false,
                    sevenDays: false,
                    fiveDays: false,
                    threeDays: false,
                    oneDay: false,
                    ended: false
                }
            },
            previousNotificationsState: {
                new: {
                    almostPlayable: false,
                    becomesPlayable: false,
                    sevenDays: false,
                    fiveDays: false,
                    threeDays: false,
                    oneDay: false,
                    ended: false
                },
                reactivation: {
                    almostPlayable: false,
                    becomesPlayable: false,
                    sevenDays: false,
                    fiveDays: false,
                    threeDays: false,
                    oneDay: false,
                    ended: false
                }
            },
            elusiveTarget: null,
            environment: null
        }
    },
    methods: {
        getTwitchNameFromUrl(url) {
            return url.replace(/(.*\/)*/,"")
        },
        showBriefing(e) {
            $('#briefing-modal').modal('show')
        },
        showNotificationModal(e) {
            e.preventDefault();
            const that = this;
            $('#notification-modal').modal('show');
            if (
                H2MAPS_FIREBASE.messagingSupported !== undefined &&
                !H2MAPS_FIREBASE.messagingSupported
            ) {
                $('#notifications-unsupported').show()
                $('#checking-notification-status').hide()
                return false
            }

            H2MAPS_FIREBASE.checkIfEnrolled(function(enrollmentStatus) {
                if (enrollmentStatus === null) {
                    $('#checking-notification-status').hide()
                    $('#enrollment-required').show()
                    $('#enroll-button').show()
                } else if (
                    enrollmentStatus === H2MAPS_FIREBASE.RESULT.FAILURE
                ) {
                    // Notifications are blocked
                    $('#notifications-blocked').show()
                    $('#checking-notification-status').hide()
                    $('#enroll-button').hide()
                } else {
                    that.token = enrollmentStatus
                    $('input[name="firebase-token"]').val(enrollmentStatus)
                    $('#checking-notification-status').hide()
                    updateCheckboxState(
                        that.token,
                        that.notifications,
                        that.previousNotificationsState,
                        that.environment
                    )
                    $('#notification-settings').show()
                    $('#enroll-button').hide()
                }
            })

            return false
        },
        enroll() {
            requestPermission(0)
        },
        toggleNotificationState() {
            let sendRequest = false;
            let requestType = '';
            let subscribing = false;
            //region New
            if (this.notifications.new.almostPlayable !==
                this.previousNotificationsState.new.almostPlayable) {
                sendRequest = true;
                requestType = 'elusive-target-coming';
                subscribing = this.notifications.new.almostPlayable;
            }
            if (this.notifications.new.becomesPlayable !==
                this.previousNotificationsState.new.becomesPlayable) {
                sendRequest = true;
                requestType = 'elusive-target-playable';
                subscribing = this.notifications.new.becomesPlayable;
            }
            if (this.notifications.new.sevenDays !==
                this.previousNotificationsState.new.sevenDays) {
                sendRequest = true;
                requestType = 'elusive-target-7';
                subscribing = this.notifications.new.sevenDays;
            }
            if (this.notifications.new.fiveDays !==
                this.previousNotificationsState.new.fiveDays) {
                sendRequest = true;
                requestType = 'elusive-target-5';
                subscribing = this.notifications.new.fiveDays;
            }
            if (this.notifications.new.threeDays !==
                this.previousNotificationsState.new.threeDays) {
                sendRequest = true;
                requestType = 'elusive-target-3';
                subscribing = this.notifications.new.threeDays;
            }
            if (this.notifications.new.oneDay !==
                this.previousNotificationsState.new.oneDay) {
                sendRequest = true;
                requestType = 'elusive-target-1';
                subscribing = this.notifications.new.oneDay;
            }
            if (this.notifications.new.ended !==
                this.previousNotificationsState.new.ended) {
                sendRequest = true;
                requestType = 'elusive-target-end';
                subscribing = this.notifications.new.ended;
            }
            //endregion
            //region Reactivation
            if (this.notifications.reactivation.almostPlayable !==
                this.previousNotificationsState.reactivation.almostPlayable) {
                sendRequest = true;
                requestType = 'reactivation-elusive-target-coming';
                subscribing = this.notifications.reactivation.almostPlayable;
            }
            if (this.notifications.reactivation.becomesPlayable !==
                this.previousNotificationsState.reactivation.becomesPlayable) {
                sendRequest = true;
                requestType = 'reactivation-elusive-target-playable';
                subscribing = this.notifications.reactivation.becomesPlayable;
            }
            if (this.notifications.reactivation.sevenDays !==
                this.previousNotificationsState.reactivation.sevenDays) {
                sendRequest = true;
                requestType = 'reactivation-elusive-target-7';
                subscribing = this.notifications.reactivation.sevenDays;
            }
            if (this.notifications.reactivation.fiveDays !==
                this.previousNotificationsState.reactivation.fiveDays) {
                sendRequest = true;
                requestType = 'reactivation-elusive-target-5';
                subscribing = this.notifications.reactivation.fiveDays;
            }
            if (this.notifications.reactivation.threeDays !==
                this.previousNotificationsState.reactivation.threeDays) {
                sendRequest = true;
                requestType = 'reactivation-elusive-target-3';
                subscribing = this.notifications.reactivation.threeDays;
            }
            if (this.notifications.reactivation.oneDay !==
                this.previousNotificationsState.reactivation.oneDay) {
                sendRequest = true;
                requestType = 'reactivation-elusive-target-1';
                subscribing = this.notifications.reactivation.oneDay;
            }
            if (this.notifications.reactivation.ended !==
                this.previousNotificationsState.reactivation.ended) {
                sendRequest = true;
                requestType = 'reactivation-elusive-target-end';
                subscribing = this.notifications.reactivation.ended;
            }
            //endregion

            let data = new FormData()
            let token = $('input[name="firebase-token"]').val()
            let topic = 'hitmaps-' + this.environment + '-' + requestType
            data.append('token', token)
            data.append('state', subscribing ? 'SUBSCRIBING' : 'UNSUBSCRIBING')
            data.append('topic', topic)
            if (sendRequest) {
                this.$request(true, 'notifications', data).then(resp => {
                    this.$toast.success({
                        title: 'Changes Saved',
                        message: 'Notification preferences updated!'
                    })
                    window.localStorage.setItem(
                        token + '|' + topic,
                        subscribing ? '1' : '0'
                    )
                    //region New
                    this.previousNotificationsState.new.almostPlayable = this.notifications.new.almostPlayable;
                    this.previousNotificationsState.new.becomesPlayable = this.notifications.new.becomesPlayable;
                    this.previousNotificationsState.new.sevenDays = this.notifications.new.sevenDays;
                    this.previousNotificationsState.new.fiveDays = this.notifications.new.fiveDays;
                    this.previousNotificationsState.new.threeDays = this.notifications.new.threeDays;
                    this.previousNotificationsState.new.oneDay = this.notifications.new.oneDay;
                    this.previousNotificationsState.new.ended = this.notifications.new.ended;
                    //endregion
                    //region Reactivation
                    this.previousNotificationsState.reactivation.almostPlayable = this.notifications.reactivation.almostPlayable;
                    this.previousNotificationsState.reactivation.becomesPlayable = this.notifications.reactivation.becomesPlayable;
                    this.previousNotificationsState.reactivation.sevenDays = this.notifications.reactivation.sevenDays;
                    this.previousNotificationsState.reactivation.fiveDays = this.notifications.reactivation.fiveDays;
                    this.previousNotificationsState.reactivation.threeDays = this.notifications.reactivation.threeDays;
                    this.previousNotificationsState.reactivation.oneDay = this.notifications.reactivation.oneDay;
                    this.previousNotificationsState.reactivation.ended = this.notifications.reactivation.ended;
                    //endregion
                })
            }
        },
        fetchUpcomingMatches() {
            this.fetchedTournamentMatches = 'FETCHING';
            this.$http.get('https://tournamentsapi.hitmaps.com/api/events/rr10/upcoming-matches').then(resp => {
                this.tournamentMatches = resp.data.data;
                this.fetchedTournamentMatches = 'FETCHED';
            }).catch(_ => this.tournamentMatches = []);
        }
    },
    created: function() {
        MetaHandler.setOpengraphTag('image', 'https://media.hitmaps.com/img/hitmaps-custom/promo1.png');

        this.$http.get(this.$domain + '/api/web/home').then(resp => {
            this.games = resp.data.games;
            this.elusiveTarget = resp.data.elusiveTargets.length ? resp.data.elusiveTargets[0] : null;
            this.environment = resp.data.environment;
            $('input[name="notification-environment"]').val(this.environment);
        }).catch(err => {
            console.error(err);
            this.$router.push({ name: '500' });
        });
    }
}

function requestPermission(retryCount) {
    var $enrollmentRequiredDiv = $('#enrollment-required')
    if (retryCount > 5) {
        $enrollmentRequiredDiv
            .find('#error-container')
            .text(
                'Unfortunately, we were unable to receive permission from your device after five attempts. Please try again later or post a message on the HITMAN forums or on the HITMAN 2 Maps Discord via the links in the footer.'
            )
    }

    H2MAPS_FIREBASE.requestPermission(function(result) {
        if (result === H2MAPS_FIREBASE.RESULT.ERROR) {
            // An unrelated error occurred. Try enrolling again.
            $enrollmentRequiredDiv
                .find('#error-container')
                .text(
                    'Unfortunately, an error occurred when trying to enroll your device. You may try enrolling again by clicking the "Enroll" button.'
                )
            return
        }
        if (result === H2MAPS_FIREBASE.RESULT.FAILURE) {
            return requestPermission(retryCount + 1)
        }

        // Enrollment successful
        $enrollmentRequiredDiv.hide()
        $('input[name="firebase-token"]').val(result)
        $('#notification-settings').show()
        $('#enroll-button').hide()
    })
}

function updateCheckboxState(
    token,
    notifications,
    previousNotificationsState,
    environment
) {
    //region New
    notifications.new.almostPlayable =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-elusive-target-coming'
        ) === '1';
    notifications.new.becomesPlayable =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-elusive-target-playable'
        ) === '1';
    notifications.new.sevenDays =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-elusive-target-7'
        ) === '1';
    notifications.new.fiveDays =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-elusive-target-5'
        ) === '1';
    notifications.new.threeDays =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-elusive-target-3'
        ) === '1';
    notifications.new.oneDay =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-elusive-target-1'
        ) === '1';
    notifications.new.ended =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-elusive-target-end'
        ) === '1';
    //endregion
    //region Reactivation
    notifications.reactivation.almostPlayable =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-reactivation-elusive-target-coming'
        ) === '1';
    notifications.reactivation.becomesPlayable =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-reactivation-elusive-target-playable'
        ) === '1';
    notifications.reactivation.sevenDays =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-reactivation-elusive-target-7'
        ) === '1';
    notifications.reactivation.fiveDays =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-reactivation-elusive-target-5'
        ) === '1';
    notifications.reactivation.threeDays =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-reactivation-elusive-target-3'
        ) === '1';
    notifications.reactivation.oneDay =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-reactivation-elusive-target-1'
        ) === '1';
    notifications.reactivation.ended =
        window.localStorage.getItem(
            token + '|hitmaps-' + environment + '-reactivation-elusive-target-end'
        ) === '1';
    //endregion

    //region New
    previousNotificationsState.new.almostPlayable = notifications.new.almostPlayable;
    previousNotificationsState.new.becomesPlayable = notifications.new.becomesPlayable;
    previousNotificationsState.new.sevenDays = notifications.new.sevenDays;
    previousNotificationsState.new.fiveDays = notifications.new.fiveDays;
    previousNotificationsState.new.threeDays = notifications.new.threeDays;
    previousNotificationsState.new.oneDay = notifications.new.oneDay;
    previousNotificationsState.new.ended = notifications.new.ended;
    //endregion
    //region Reactivation
    previousNotificationsState.reactivation.almostPlayable = notifications.reactivation.almostPlayable;
    previousNotificationsState.reactivation.becomesPlayable = notifications.reactivation.becomesPlayable;
    previousNotificationsState.reactivation.sevenDays = notifications.reactivation.sevenDays;
    previousNotificationsState.reactivation.fiveDays = notifications.reactivation.fiveDays;
    previousNotificationsState.reactivation.threeDays = notifications.reactivation.threeDays;
    previousNotificationsState.reactivation.oneDay = notifications.reactivation.oneDay;
    previousNotificationsState.reactivation.ended = notifications.reactivation.ended;
    //endregion
}
</script>
<style lang="scss" scoped>
.embed-responsive-16by9::before {
    padding-top: 21.25%;
}

header {
    .site-header {
        h1 {
            margin-top: 20px;
        }

        img {
            max-height: 100px;
        }
    }
}

@media (min-width: 992px) {
    .game,
    .elusive-target {
        height: 500px;
    }
}

@media (max-width: 991px) {
    .game,
    .elusive-target {
        height: 300px;
        margin-bottom: 20px;
    }
}

.loading {
    .loader {
        margin: 100px auto 0;
    }
}

.dashboard {
    margin: 40px;

    .tournament {
        display: flex;
        flex-direction: column;
        color: white;
        background: $content-background;

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
                    font-size: 1.5rem;
                    margin-bottom: 0;
                }

                h2 {
                    font-size: 1rem;
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

    .game,
    .elusive-target {
        display: flex;
        flex-direction: column;
        color: white;
        margin-left: 3px;
        margin-right: 3px;

        &:hover {
            .game-info,
            .elusive-target-info {
                color: $card-footer-text;
                background: $card-footer-background-hover;

                h2 {
                    color: $card-footer-text;
                }

                .image {
                    i {
                        color: $card-footer-background-hover;
                        background: $card-footer-text;

                        &.fa-discord {
                            background: inherit;
                            color: $card-footer-text;
                        }
                    }

                    img {
                        &.normal {
                            display: none;
                        }

                        &.inverted {
                            display: block;

                        }
                    }
                }
            }
        }

        .game-info,
        .elusive-target-info {
            padding: 15px;
            background: $card-footer-background;
            color: $card-footer-text;
            text-shadow: none;

            h2 {
                color: $card-footer-text;
                font-weight: 400;
            }

            .image {
                display: inline-block;
                vertical-align: top;
                margin-right: 5px;

                &.elusive-notification {
                    margin-right: 0;
                }

                img {
                    height: 48px;
                    width: 48px;

                    &.normal {
                        display: block;
                    }

                    &.inverted {
                        display: none;
                    }
                }


                i {
                }
            }

            .text {
                display: inline-block;
                text-transform: uppercase;

                h1 {
                    font-size: 1.5rem;
                    margin-bottom: 0;
                }

                h2 {
                    font-size: 1rem;
                    margin-bottom: 0;
                }
            }
        }
    }

    .game > a,
    .elusive-target > a {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-left: -15px;
        margin-right: -15px;
        text-decoration: none;

        > p:first-child {
            flex-grow: 1;
        }
    }

    .elusive-target {
        .countdown {
            padding: 15px 15px 0;
            padding-bottom: 1rem;
            background: rgba(0,0,0,.4);

            i.game-icon {
                color: $elusive-countdown;
                border-color: $elusive-countdown;
                margin-right: 5px;

                &.briefing-icon {
                    color: white;
                    border-color: white;
                    margin-right: 0;
                }
            }

            .timer {
                display: inline-block;
                vertical-align: middle;

                .target-arrives {
                    color: $elusive-countdown-header;
                    line-height: 0;
                    display: none;
                }

                .elusive-countdown {
                    color: $elusive-countdown;
                    font-size: 2rem;
                    vertical-align: middle;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                &.not-playable {
                    vertical-align: bottom;

                    .target-arrives {
                        display: block;
                        text-transform: uppercase;
                    }

                    .elusive-countdown {
                        line-height: 33px;
                        margin-top: 7px;
                    }
                }
            }
        }
    }
}

#notification-settings {
    td {
        text-align: center;

        .form-check-input {
            margin-left: 0;
        }

        &:first-child {
            text-align: left;
        }
    }
}

.patreon {
    background: #fff;
    padding: 40px;

    .intro {
        margin-bottom: 30px;

        h1 {
            font-family: 'nimbus_sans_lbold', sans-serif;
            text-transform: uppercase;
        }

        i.fa-square {
            color: #e7705c;
        }
    }

    .patron {
        text-align: center;

        img {
            max-height: 128px;
            max-width: 128px;
        }

        p {
            margin-bottom: 0;
        }
    }

    .square-button {
        border-radius: 0;

        &.blurple {
            background: #7289DA;
            color: #fff;

            &:hover {
                background: #6073bf;
            }
        }

        &.white {
            background: #fff;
            color: #000;

            &:hover {
                background: #eee;
            }
        }
    }

    .patreon-button {
        margin-top: 30px;
        border-radius: 0;
        background: #e7705c;
        color: #fff;

        &:hover {
            background: #cd685c;
        }
    }

    &.community-server, &.roulette {
        background: black;
        color: white;

        hr {
            color: white;
            background: white;
        }

        .ghost-mode {
            h2 {
                text-transform: uppercase;

                i {
                    vertical-align: middle;
                }
            }

            .ghost-mode-image {
                text-align: center;
            }
        }
    }
}

.mkii {
    background: #ff003c;
    color: #fff;
    margin: 0;
    width: 32px;
    height: 32px;
    display: inline-block;
    text-align: center;
}

.flag {
    vertical-align: text-top;
}

.partner {
    display: flex;

    .image {
        margin-right: 10px;
    }
}
</style>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "ElusiveTargetNotificationsModal",
    data() {
        return {
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
            environment: null
        }
    },
    methods: {
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
                this.$http.post(`${this.$domain}/api/notifications`, data).then(resp => {
                    this.$toastr.s('Notification preferences updated!');
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
        enroll() {
            //requestPermission(0)
        },
        showModal() {
            this.$refs['notification-modal'].showModal();
        }
    }
})
</script>

<template>
    <modal ref="notification-modal"
           id="notification-modal"
           :modal-title="$t('elusive-target.notifications.manage-notifications-modal-title')">
        <div id="checking-notification-status">
            <h6>{{ ('elusive-target.notifications.checking-if-enabled') }}</h6>
            <div class="spinner-grow" role="status">
                <span class="sr-only">{{ ('form.loading') }}</span>
            </div>
        </div>
        <div
            id="notifications-unsupported"
            style="display: none"
        >
            <h6>{{ ('elusive-target.notifications.unsupported-browser') }}</h6>
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
            <h6>{{ ('elusive-target.notifications.device-not-enrolled') }}</h6>
            <p id="error-container"></p>
        </div>
        <div
            id="notifications-blocked"
            style="display: none"
        >
            <h6>{{ ('elusive-target.notifications.notifications-blocked') }}</h6>
        </div>
        <div
            id="notification-settings"
            style="display: none"
        >
            <table class="table">
                <thead>
                <tr>
                    <td><b>{{ ('elusive-target.notifications.send-me-a-notification-when') }}</b></td>
                    <td>{{ ('elusive-target.notifications.new-et') }}</td>
                    <td>{{ ('elusive-target.notifications.reactivated-et') }}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {{ ('elusive-target.notifications.announced') }}
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
                        {{ ('elusive-target.notifications.playable') }}
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
                        {{ ('elusive-target.notifications.7-days') }}
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
                        {{ ('elusive-target.notifications.5-days') }}
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
                        {{ ('elusive-target.notifications.3-days') }}
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
                        {{ ('elusive-target.notifications.1-day') }}
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
                        {{ ('elusive-target.notifications.ended') }}
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
                {{ ('elusive-target.notifications.enroll') }}
            </game-button>
            <game-button data-dismiss="modal">
                <game-icon icon="failed" font-style="normal" />
                {{ ('form.close') }}
            </game-button>
        </template>
    </modal>
</template>

<style scoped lang="scss">

</style>
<script lang="ts">
import {defineComponent} from 'vue'
import {useFirebaseApp} from "vuefire";
import {getMessaging, getToken, Messaging} from "@firebase/messaging";
import {useAuthenticatedFetch} from "~/composables/useAuthenticatedFetch";

export default defineComponent({
    name: "ElusiveTargetNotificationsModal",
    setup() {
        const config = useRuntimeConfig();

        return {
            environment: config.public.firebaseEnvironment,
            apiDomain: config.public.apiDomain
        };
    },
    data() {
        return {
            //region Firebase-specific
            messaging: null as Messaging|null,
            messagingSupported: undefined as boolean|undefined,
            messagingPermitted: undefined as boolean|undefined,
            token: null as string|null,
            //endregion
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
            }
        }
    },
    mounted() {
        try {
            const firebase = useFirebaseApp();
            this.messaging = getMessaging(firebase);
            this.messagingSupported = true;
        } catch (err) {
            console.log(err);
            this.messagingSupported = false;
        }
    },
    methods: {
        loadTokenState(): void {
            if (this.messagingSupported) {
                getToken(this.messaging as Messaging, {
                    vapidKey: "BPNrkIqrzWoYKu9BblgGOX-DuOjUwQnHm5dXANfAmrNYiCkL2bY3-oinMFfM7K5rRcW7Ej6PygQfGbCXw1pklG4"
                }).then(currentToken => {
                    this.token = currentToken;
                    this.messagingPermitted = true;
                    this.setInitialCheckboxState();
                }).catch(err => {
                    console.error(err);
                    this.messagingPermitted = false;
                });
            }
        },
        setInitialCheckboxState(): void {
            //region New ETs
            this.notifications.new.almostPlayable = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-coming`) === '1';
            this.notifications.new.becomesPlayable = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-playable`) === '1';
            this.notifications.new.sevenDays = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-7`) === '1';
            this.notifications.new.fiveDays = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-5`) === '1';
            this.notifications.new.threeDays = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-3`) === '1';
            this.notifications.new.oneDay = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-1`) === '1';
            this.notifications.new.ended = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-end`) === '1';
            //endregion
            //region Reactivated ETs
            this.notifications.reactivation.almostPlayable = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-coming`) === '1';
            this.notifications.reactivation.becomesPlayable = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-playable`) === '1';
            this.notifications.reactivation.sevenDays = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-7`) === '1';
            this.notifications.reactivation.fiveDays = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-5`) === '1';
            this.notifications.reactivation.threeDays = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-3`) === '1';
            this.notifications.reactivation.oneDay = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-1`) === '1';
            this.notifications.reactivation.ended = window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-end`) === '1';
            //endregion

            // Copy current state to previous state
            this.previousNotificationsState.new.almostPlayable = this.notifications.new.almostPlayable;
            this.previousNotificationsState.new.becomesPlayable = this.notifications.new.becomesPlayable;
            this.previousNotificationsState.new.sevenDays = this.notifications.new.sevenDays;
            this.previousNotificationsState.new.fiveDays = this.notifications.new.fiveDays;
            this.previousNotificationsState.new.threeDays = this.notifications.new.threeDays;
            this.previousNotificationsState.new.oneDay = this.notifications.new.oneDay;
            this.previousNotificationsState.new.ended = this.notifications.new.ended;
            this.previousNotificationsState.reactivation.almostPlayable = this.notifications.reactivation.almostPlayable;
            this.previousNotificationsState.reactivation.becomesPlayable = this.notifications.reactivation.becomesPlayable;
            this.previousNotificationsState.reactivation.sevenDays = this.notifications.reactivation.sevenDays;
            this.previousNotificationsState.reactivation.fiveDays = this.notifications.reactivation.fiveDays;
            this.previousNotificationsState.reactivation.threeDays = this.notifications.reactivation.threeDays;
            this.previousNotificationsState.reactivation.oneDay = this.notifications.reactivation.oneDay;
            this.previousNotificationsState.reactivation.ended = this.notifications.reactivation.ended;
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

            const topic = `hitmaps-${this.environment}-requestType`;
            /*let data = new FormData();
            let token = $('input[name="firebase-token"]').val();

            data.append('token', token)
            data.append('state', subscribing ? 'SUBSCRIBING' : 'UNSUBSCRIBING')
            data.append('topic', topic)*/
            console.log(requestType);
            console.log(subscribing);
            if (sendRequest) {
                //
                useAuthenticatedFetch(`${this.apiDomain}/api/notifications`, {
                    method: 'POST',
                    body: {
                        token: this.token,
                        state: subscribing ? 'SUBSCRIBING' : 'UNSUBSCRIBING',
                        topic: topic
                    }
                }).then(res => {
                    window.localStorage.setItem(`${this.token}|${topic}`, subscribing ? '1' : '0');
                    // Reset new vs previous
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
                    (this.$toastr as any).s('Notification preferences updated!');
                });
                console.log('Would have processed request');
            }
        },
        enroll() {
            //requestPermission(0)
        },
        showModal() {
            (this.$refs['notification-modal'] as any).showModal();
            this.loadTokenState();
        },
        hideModal() {
            (this.$refs['notification-modal'] as any).hideModal();
        }
    }
})
</script>

<template>
    <modal ref="notification-modal"
           id="notification-modal"
           :modal-title="$t('elusive-target.notifications.manage-notifications-modal-title')">
        <div v-if="messagingSupported === undefined">
            <h6>{{ $t('elusive-target.notifications.checking-if-enabled') }}</h6>
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">{{ $t('form.loading') }}</span>
            </div>
        </div>
        <div v-else-if="!messagingSupported">
            <h6>{{ $t('elusive-target.notifications.unsupported-browser') }}</h6>
            <ul>
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
        <template v-else>
            <div v-if="messagingPermitted === undefined">
                <h6>{{ $t('elusive-target.notifications.device-not-enrolled') }}</h6>
                <p id="error-container"></p>
            </div>
            <div v-else-if="!messagingPermitted">
                <h6>{{ $t('elusive-target.notifications.notifications-blocked') }}</h6>
            </div>
            <div v-else>
                <table class="table">
                    <thead>
                    <tr>
                        <td>{{ $t('elusive-target.notifications.send-me-a-notification-when') }}</td>
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
            </div>
        </template>
        <template v-slot:modal-footer>
            <game-button @click="hideModal">
                <game-icon icon="failed" font-style="normal" />
                {{ $t('form.close') }}
            </game-button>
        </template>
    </modal>
</template>

<style scoped lang="scss">
.table {
    thead {
        font-weight: bolder;
    }

    td {
        background-color: inherit;
        text-align: center;

        &:first-child {
            text-align: left;
        }
    }
}
</style>
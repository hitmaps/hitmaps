<template>
    {{ moment(value).tz(actualTimezone).format(format) }}<template v-if="includeRelative">
        ({{ moment(value).tz(actualTimezone).fromNow() }}
    </template>
</template>

<script>
import moment from 'moment-timezone';
export default {
    name: "Moment",
    props: {
        value: String|Date,
        format: String,
        timezone: String,
        includeRelative: Boolean
    },
    data() {
        return {
            moment: null
        }
    },
    computed: {
        actualTimezone() {
            if (this.timezone) {
                return this.timezone;
            }

            return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
    },
    created() {
        this.moment = moment;
    }
}
</script>

<style scoped lang="scss">

</style>
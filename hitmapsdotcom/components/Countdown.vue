<template>
    <div :class="textClass" v-if="days < 2">
        {{ twoDigits(hours) }}:{{ twoDigits(minutes) }}:{{ twoDigits(seconds) }}
    </div>
    <div :class="textClass" v-else>
        {{ $t('elusive-target.n-days', { days: days }) }}
    </div>
</template>

<script>
export default {
    props: {
        textClass: {
            type: String,
            required: false,
            default: ''
        },
        date: {
            type: String,
            required: true,
        },
    },
    computed: {
        parsedDate: function() {
            return new Date(this.date).getTime()
        },
        seconds: function() {
            return Math.trunc(((this.parsedDate - this.now) / 1000) % 60)
        },
        minutes: function() {
            return Math.trunc(((this.parsedDate - this.now) / 1000 / 60) % 60)
        },
        hours: function() {
            return Math.trunc((this.parsedDate - this.now) / 1000 / 60 / 60)
        },
        days: function() {
            return Math.trunc(
                (this.parsedDate - this.now) / 1000 / 60 / 60 / 24
            )
        },
    },
    methods: {
        twoDigits(value) {
            if (value < 0) {
                return '00';
            }
            if (value < 10) {
                return '0' + value
            }
            return value
        }
    },
    data() {
        return {
            now: new Date(),
        }
    },
    mounted() {
        setInterval(() => {
            this.now = new Date()
        }, 1000)
    }
}
</script>
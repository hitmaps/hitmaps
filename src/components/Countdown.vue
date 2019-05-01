<template>
<div>
{{hours | twoDigits }}:{{minutes | twoDigits }}:{{seconds | twoDigits }}
</div>
</template>

<script>
export default {
    props: {
        date: {
            type: String,
            required: true
        }
    },
    computed: {
        parsedDate: function() {
            return new Date(this.date).getTime() - this.now.getTimezoneOffset() * 60000
        },
        seconds: function() {
            return Math.trunc((this.parsedDate - this.now) / 1000 % 60)
        },
        minutes: function() {
            return Math.trunc((this.parsedDate - this.now) / 1000 / 60 % 60)
        },
        hours: function() {
            return Math.trunc((this.parsedDate - this.now) / 1000 / 60 / 60)
        }
    },
    data() {
        return {
            now: new Date()
        }
    },
    mounted() {
        setInterval(() => {
            this.now = new Date()
        },1000);
    },
    filters: {
        twoDigits: function(value) {
            if(value < 10) {
                return '0' + value
            }
            return value
        }
    }
}
</script>

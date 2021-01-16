<template>
    <i :class="`${getStyle()}-${getIcon()}`"></i>
</template>

<script>
    export default {
        name: "GameIcon",
        props: {
            icon: String,
            fontStyle: String
        },
        methods: {
            getStyle() {
                if (this.fontStyle === 'solid') {
                    return 'hm-solid';
                }

                return 'hm';
            },
            getIcon() {
                if (this.icon === 'campaign') {
                    return 'story';
                }

                if (this.icon === 'sniper-assassin') {
                    return 'sniperrifle';
                }

                return this.icon;
            }
        }
    }
</script>

<style scoped lang="scss">
    i {
        line-height: 0;
        font-size: 48px;
        display: block;
    }
</style>

<template>
    <i :class="`game-icon ${getStyle()}-${getIcon()} style-${fontStyle} ${extraClasses}`"
       v-bind="$attrs"></i>
</template>

<script>
    export default {
        name: "GameIcon",
        props: {
            icon: String,
            fontStyle: String,
            extraClasses: String
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
        display: inline-block;

        &.style-normal {
            font-size: 32px;
            padding: 6px;
            border: solid 2px #fff;
            border-radius: 5px;
            vertical-align: top;

            &.hm-merces {
                padding-top: 11px;
                padding-bottom: 11px;

                &:before {
                    width: inherit;
                    font-size: 22px;
                }
            }
        }
    }
</style>

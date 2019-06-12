<template>
    <button
            type="button"
            class="btn btn-block game-button"
            v-bind="$attrs"
            @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "GameButton"
    }
</script>

<style lang="scss" scoped>
    .game-button {
        background: #fff;
        margin: 0 10px 10px 0;

        .btn-block {
            border-radius: 0;
            text-transform: uppercase;
            background: #fff;
            color: #000;
            font-family: 'nimbus_sans_lbold', sans-serif;
            text-align: left;
            font-size: 1.3rem;
            transition: none;

            img {
                max-width: 32px;
                max-height: 32px;
                vertical-align: top;

                &.normal {
                    display: inline-block;
                }

                &.inverted {
                    display: none;
                }

                &:hover {
                    &.normal {
                        display: none;
                    }

                    &.inverted {
                        display: inline-block;
                    }
                }
            }

            &:hover {
                background: #ff003c;
                color: #fff;

                img {
                    &.normal {
                        display: none;
                    }

                    &.inverted {
                        display: inline-block;
                    }
                }
            }
        }
    }
</style>
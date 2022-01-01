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
    name: 'GameButton'
}
</script>

<style lang="scss" scoped>
.game-button {
    background: $game-button-background;
    margin: 0 10px 10px 0;

    &.btn-block {
        border-radius: 0;
        text-transform: uppercase;
        background: $game-button-background;
        color: $game-button-text;
        font-family: 'nimbus_sans_lbold', sans-serif;
        text-align: left;
        font-size: 1.3rem;
        transition: none;

        i.game-icon {
            font-size: 20px;
        }

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

        &:not(:disabled):hover {
            background: $game-button-background-hover;
            color: $game-button-text;

            i.game-icon {
                background: $game-button-text;
                color: $game-button-background-hover;
            }

            img {
                &.normal {
                    display: none;
                }

                &.inverted {
                    display: inline-block;
                }
            }
        }

        &:disabled {
            background: $game-button-disabled-background;
            color: $game-button-disabled-text;

            &:hover {
                cursor: not-allowed;
            }
        }
    }
}
</style>

<template>
    <div class="hide-select-all">
        <control-button class="hide-select-button"
                        @click="$emit('hide-all')">
            <i class="far fa-fw fa-eye-slash"></i>
            {{ $t('map.hide-all') }}
        </control-button>
        <control-button class="hide-select-button"
                        @click="$emit('show-all')">
            <i class="far fa-fw fa-eye"></i>
            {{ $t('map.show-all') }}
        </control-button>
    </div>
</template>

<script>
import ControlButton from "./ControlButton";
export default {
    name: "HideSelectAll",
    components: {ControlButton}
}
</script>

<style lang="scss" scoped>
.hide-select-all {
    display: flex;

    .hide-select-button + .hide-select-button {
        margin-left: 30px;
    }

    .hide-select-button {
        flex-grow: 1;
        border-radius: 3px;
        background: rgba(22,24,29,.75);
        color: #fff;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 2px solid #2a2d31;
        opacity: .85;
        width: 160px;
        margin-bottom: 10px;

        transition: color .15s ease-in-out,
        background-color .15s ease-in-out,
        border-color .15s ease-in-out,
        box-shadow .15s ease-in-out;

        &:hover {
            opacity: 1;
            border-color: #fff;
        }
    }
}
</style>
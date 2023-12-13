<template>
    <div class="alert" :class="'alert-' + type">
        <h4
            class="alert-heading"
            v-if="alertHeading !== undefined"
            v-html="alertHeading"
        ></h4>
        <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                v-if="dismissable"
        >
            <span aria-hidden="true">&times;</span>
        </button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        type: String,
        alertHeading: String,
        dismissable: Boolean
    }
}
</script>

<style lang="scss" scoped>
.alert {
    border: none;
    border-radius: 0;

    &.alert-success {
        border-left: solid 6px green;
    }

    &.alert-danger {
        border-left: solid 6px #d00000;
    }

    &.alert-info {
        border-left: solid 6px #0000ff;
    }
}
</style>

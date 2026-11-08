<template>
    <modal :modal-title="$t('map.confirm-move')"
           id="confirm-move-modal"
           tabindex="-1"
           ref="innerModal"
           role="dialog"
           dismissable>
        {{ $t('map.confirm-reposition') }}
        <template v-slot:modal-footer>
            <game-button type="button" @click="cancelMoveMarker" data-dismiss="modal">
                <game-icon icon="failed" font-style="normal" />
                {{ $t('form.cancel') }}
            </game-button>
            <game-button type="submit" @click="confirmMove">
                <game-icon icon="check" font-style="normal" />
                {{ $t('form.save') }}
            </game-button>
        </template>
    </modal>
</template>

<script>
import Modal from "../../../Modal.vue";
import GameButton from "../../../GameButton.vue";
import GameIcon from "../../../GameIcon.vue";
export default {
    name: "MoveNodeModal",
    components: {GameIcon, GameButton, Modal},
    props: {
        node: Object
    },
    setup() {
        const config = useRuntimeConfig();
        const apiDomain = config.public.apiDomain;
        return {
            apiDomain
        };
    },
    methods: {
        cancelMoveMarker() {
            this.node.marker.setLatLng([this.node.latitude, this.node.longitude]);
            this.hideModal();
        },
        confirmMove() {
            useAuthenticatedFetch(`${this.apiDomain}/api/nodes/${this.node.id}`, {
                method: 'PATCH',
                body: {
                    latitude: this.node.marker.getLatLng().lat,
                    longitude: this.node.marker.getLatLng().lng
                }
            }).then(_ => {
                this.$toastr.s('Item moved!');
                this.node.latitude = this.node.marker.getLatLng().lat;
                this.node.longitude = this.node.marker.getLatLng().lng;
                this.hideModal();
            }).catch(err => {
                console.error(err);
                this.$toastr.e('Error occurred when moving item!');
                this.node.marker.setLatLng([this.node.latitude, this.node.longitude]);
                this.hideModal();
            })
        },
        showModal() {
            this.$refs.innerModal.showModal();
        },
        hideModal() {
            this.$refs.innerModal.hideModal();
        }
    }
}
</script>

<style scoped>

</style>
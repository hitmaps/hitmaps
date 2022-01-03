<template>
    <modal :modal-title="$t('map.confirm-move')"
           id="confirm-move-modal"
           tabindex="-1"
           role="dialog"
           dismissable>
        <div class="alert alert-warning">
            {{ $t('map.confirm-reposition') }}
        </div>
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
import Modal from "../../../Modal";
import GameButton from "../../../GameButton";
import GameIcon from "../../../GameIcon";
export default {
    name: "MoveNodeModal",
    components: {GameIcon, GameButton, Modal},
    props: {
        node: Object
    },
    methods: {
        cancelMoveMarker() {
            this.node.marker.setLatLng([this.node.latitude, this.node.longitude]);
        },
        confirmMove() {
            const data = {
                latitude: this.node.marker.getLatLng().lat,
                longitude: this.node.marker.getLatLng().lng
            };

            this.$http.patch(`${this.$domain}/api/nodes/${this.node.id}`, data).then(_ => {
                this.$toast.success({
                    message: 'Item moved!'
                });
                this.node.latitude = this.node.marker.getLatLng().lat;
                this.node.longitude = this.node.marker.getLatLng().lng;
                $('#confirm-move-modal').modal('hide');
            }).catch(err => {
                console.error(err);
                this.$toast.error({
                    message: 'Error occurred when moving item!'
                });
                this.node.marker.setLatLng([this.node.latitude, this.node.longitude]);
                $('#confirm-move-modal').modal('hide');
            })
        }
    }
}
</script>

<style scoped>

</style>
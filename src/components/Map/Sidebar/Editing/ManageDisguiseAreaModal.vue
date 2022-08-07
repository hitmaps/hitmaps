<template>
    <modal id="manage-disguise-area-modal"
           :modal-title="modalTitle"
           v-if="entity">
        <template v-slot:modal-footer>
            <game-button type="button" data-dismiss="modal">
                <game-icon icon="failed" font-style="normal" />
                {{ $t('form.cancel') }}
            </game-button>
            <game-button type="button" @click="doConvert" :disabled="operationInProgress">
                <game-icon icon="reset" font-style="normal" />
                {{ convertToMessage }}
            </game-button>
            <span class="delete">
                <game-button type="button" @click="doDelete" :disabled="operationInProgress">
                    <game-icon icon="arrow-right" font-style="normal" />
                    {{ $t('map.delete') }}
                </game-button>
            </span>
        </template>
    </modal>
</template>

<script>
import Modal from "../../../Modal";
import GameButton from "../../../GameButton";
import GameIcon from "../../../GameIcon";
export default {
    name: "ManageDisguiseAreaModal",
    components: {GameIcon, GameButton, Modal},
    props: {
        entity: Object
    },
    data() {
        return {
            operationInProgress: false
        }
    },
    computed: {
        modalTitle() {
            return this.$t('map.manage-disguise-area');
        },
        convertToMessage() {
            const destination = this.entity.type === 'trespassing' ? 'hostile-area' : 'trespassing';
            return this.$t('map.convert-to-x', { type: this.$t(`map.${destination}`)});
        }
    },
    methods: {
        doDelete() {
            this.operationInProgress = true;

            this.$http.delete(`${this.$domain}/api/disguise-areas/${this.entity.id}`)
                .then(_ => {
                    this.operationInProgress = false;
                    this.$toast.success({
                        message: `Successfully deleted disguise area!`
                    });
                    this.$emit('item-deleted');
                }).catch(_ => {
                    this.operationInProgress = false;
                    this.$toast.error({
                        message: `Failed to delete disguise area!`
                    });
                });
        },
        doConvert() {
            this.operationInProgress = true;

            this.$http.patch(`${this.$domain}/api/disguise-areas/${this.entity.id}/convert`)
                .then(_ => {
                    this.operationInProgress = false;
                    this.$toast.success({
                        message: 'Successfully converted disguise area!'
                    });
                    this.$emit('item-converted');
                }).catch(_ => {
                    this.operationInProgress = false;
                    this.$toast.error({
                        message: 'Failed to convert disguise area!'
                    });
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.delete > button.game-button {
    background: #dc3545;
}
</style>
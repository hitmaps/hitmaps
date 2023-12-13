<template>
    <modal id="manage-disguise-area-modal"
           :modal-title="modalTitle"
           ref="innerModal"
           v-if="entity">
        <template v-slot:modal-footer>
            <game-button type="button" data-dismiss="modal" @click="hideModal">
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
import Modal from "../../../Modal.vue";
import GameButton from "../../../GameButton.vue";
import GameIcon from "../../../GameIcon.vue";
import {useAuthenticatedFetch} from "~/composables/useAuthenticatedFetch";
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
    setup() {
        const config = useRuntimeConfig();
        const apiDomain = config.public.apiDomain;
        return {
            apiDomain
        };
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

            useAuthenticatedFetch(`${this.apiDomain}/api/disguise-areas/${this.entity.id}`, {
                method: 'DELETE'
            }).then(_ => {
                this.operationInProgress = false;
                this.$toastr.s(`Successfully deleted disguise area!`);
                this.$emit('item-deleted');
            }).catch(_ => {
                this.operationInProgress = false;
                this.$toastr.e(`Failed to delete disguise area!`);
            });
        },
        doConvert() {
            this.operationInProgress = true;

            useAuthenticatedFetch(`${this.apiDomain}/api/disguise-areas/${this.entity.id}/convert`, {
                method: 'PATCH'
            }).then(_ => {
                this.operationInProgress = false;
                this.$toastr.s('Successfully converted disguise area!');
                this.$emit('item-converted');
            }).catch(_ => {
                this.operationInProgress = false;
                this.$toastr.e('Failed to convert disguise area!');
            });
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

<style lang="scss" scoped>
.delete > button.game-button {
    background: #dc3545;
}
</style>
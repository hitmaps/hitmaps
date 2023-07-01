<template>
    <modal id="delete-entity"
           :modal-title="modalTitle"
           v-if="entity && entityType">
        <i18n-t keypath="map.confirm-item-deletion-message" tag="p">
            <template v-slot:item>{{ displayEntityType }}</template>
        </i18n-t>
        <template v-slot:modal-footer>
            <game-button type="button" data-dismiss="modal">
                <game-icon icon="failed" font-style="normal" />
                {{ $t('form.cancel') }}
            </game-button>
            <span class="delete">
                <game-button type="submit" @click="doDelete" :disabled="deleteButtonBlocked">
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
export default {
    name: "DeleteEntityModal",
    components: {GameIcon, GameButton, Modal},
    props: {
        entity: Object,
        entityType: String
    },
    data() {
        return {
            deleteButtonBlocked: false
        }
    },
    computed: {
        modalTitle() {
            let titleCaseEntityType = this.entityType[0].toUpperCase() + this.entityType.substr(1).toLowerCase();
            if (this.entityType === 'disguise-area') {
                // TODO localize
                titleCaseEntityType = 'Disguise Area';
            }

            return this.$t('map.confirm-item-deletion-title', { item: titleCaseEntityType });
        },
        displayEntityType() {
            return this.entityType.replace('-', ' ');
        }
    },
    methods: {
        doDelete() {
            this.deleteButtonBlocked = true;
            const entityTypeForUrl = this.entityType === 'foliage' ? this.entityType : `${this.entityType}s`;

            this.$http.delete(`${this.$domain}/api/${entityTypeForUrl}/${this.entity.id}`)
                .then(_ => {
                    this.deleteButtonBlocked = false;
                    this.$toastr.s(`Successfully deleted ${this.entityType}!`);
                    this.$emit('item-deleted');
                }).catch(_ => {
                    this.deleteButtonBlocked = false;
                    this.$toastr.e(`Failed to delete ${this.entityType}!`);
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
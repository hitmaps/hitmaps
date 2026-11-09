<template>
    <modal :modal-title="$t('map.copy-disguise-areas')"
           id="copy-disguises-modal"
           ref="innerModal"
           tabindex="-1"
           role="dialog">
        <div class="alert alert-warning">
            {{ $t('map.copy-disguises-warning') }}
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="original-disguise">{{ $t('map.source-disguise') }}</label>
                    <br>
                    <select id="original-disguise"
                            name="original-disguise"
                            ref="originalDisguiseDropdown"
                            class="form-select"
                            data-style="control-button"
                            v-model="sourceDisguise"
                            required>
                        <option v-for="disguise in disguises" :value="disguise.id">
                            {{ disguise.suit ? $t('map.suit-disguise', { suitName: disguise.name }) : disguise.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="target-disguise">{{ $t('map.target-disguise') }}</label>
                    <br>
                    <select id="target-disguise"
                            name="target-disguise"
                            ref="targetDisguiseDropdown"
                            class="form-select"
                            data-style="control-button"
                            v-model="targetDisguise"
                            required>
                        <option v-for="disguise in disguises" :value="disguise.id">
                            {{ disguise.suit ? $t('map.suit-disguise', { suitName: disguise.name }) : disguise.name }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <template v-slot:modal-footer>
            <game-button type="button" data-dismiss="modal" @click="hideModal">
                <game-icon icon="failed" font-style="normal" />
                {{ $t('form.cancel') }}
            </game-button>
            <game-button type="submit" id="copy-disguise-regions-btn" @click="copyDisguiseAreas">
                <game-icon icon="check" font-style="normal" />
                {{ $t('form.copy') }}
            </game-button>
        </template>
    </modal>
</template>

<script>
import Modal from "../../../Modal.vue";
import GameButton from "../../../GameButton.vue";
import GameIcon from "../../../GameIcon.vue";
export default {
    name: "CopyDisguiseRegions",
    components: {GameIcon, GameButton, Modal},
    props: {
        disguises: Array
    },
    setup() {
        const config = useRuntimeConfig();
        const apiDomain = config.public.apiDomain;
        return {
            apiDomain
        };
    },
    data() {
        return {
            sourceDisguise: null,
            targetDisguise: null
        }
    },
    methods: {
        copyDisguiseAreas() {
            const data = {
                originalDisguise: this.sourceDisguise,
                targetDisguise: this.targetDisguise
            };
            useAuthenticatedFetch(`${this.apiDomain}/api/disguise-areas/copy`, {
                method: 'POST',
                body: data
            }).then(resp => {
                this.$emit('replace-disguise-areas', resp);
                this.$toastr.s('Disguise areas copied!');
            }).catch(err => {
                console.error(err);
                this.$toastr.e('Failed to copy disguise areas!');
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

<style scoped>

</style>
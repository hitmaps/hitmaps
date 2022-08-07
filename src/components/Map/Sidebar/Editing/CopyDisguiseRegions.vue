<template>
    <modal :modal-title="$t('map.copy-disguise-areas')"
           id="copy-disguises-modal"
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
                            class="selectpicker"
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
                            class="selectpicker"
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
            <game-button type="button" data-dismiss="modal">
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
import Modal from "../../../Modal";
import GameButton from "../../../GameButton";
import GameIcon from "../../../GameIcon";
export default {
    name: "CopyDisguiseRegions",
    components: {GameIcon, GameButton, Modal},
    props: {
        disguises: Array
    },
    data() {
        return {
            sourceDisguise: null,
            targetDisguise: null
        }
    },
    mounted() {
        $(this.$refs.originalDisguiseDropdown).selectpicker();
        $(this.$refs.targetDisguiseDropdown).selectpicker();
    },
    methods: {
        copyDisguiseAreas() {
            const data = {
                originalDisguise: this.sourceDisguise,
                targetDisguise: this.targetDisguise
            };
            this.$http.post(`${this.$domain}/api/disguise-areas/copy`, data).then(resp => {
                this.$emit('replace-disguise-areas', resp.data.data);
                this.$toast.success({
                    message: 'Disguise areas copied!'
                });
            }).catch(err => {
                console.error(err);
                this.$toast.error({
                    message: 'Failed to copy disguise areas!'
                });
            });
        }
    }
}
</script>

<style scoped>

</style>
<script setup lang="ts">
import ArrayHelpers from "~/utils/ArrayHelpers";
import WalkthroughStepsEditor from "~/components/Map/Sidebar/Editing/WalkthroughStepsEditor.vue";

const config = useRuntimeConfig();
const { missionVariantId } = defineProps<{
    missionVariantId: number
}>();
const emit = defineEmits(['launch-step-editor']);

const walkthroughs = ref<any>([]);
const newWalkthroughName = ref<string>('');
const savingChanges = ref<boolean>(false);
const editingWalkthrough = ref<any>(null);

const walkthroughResponse = await $fetch(`${config.public.apiDomain}/api/walkthroughs?missionVariantId=${missionVariantId}`) as any;
walkthroughs.value = walkthroughResponse.data;

async function createWalkthrough(): Promise<void> {
    savingChanges.value = true;
    const newWalkthrough = await $fetch(`${config.public.apiDomain}/api/walkthroughs`, {
        method: 'POST',
        body: JSON.stringify({
            missionVariantId: missionVariantId,
            name: newWalkthroughName.value
        })
    });

    walkthroughs.value.push((newWalkthrough as any).data);
    newWalkthroughName.value = '';
    savingChanges.value = false;
}

async function deleteWalkthrough(walkthroughId: number, index: number): Promise<void> {
    savingChanges.value = true;
    await $fetch(`${config.public.apiDomain}/api/walkthroughs/${walkthroughId}`, {
        method: 'DELETE'
    });

    ArrayHelpers.deleteElementByIndex(walkthroughs.value, index);
    savingChanges.value = false;
}

function onLaunchStepEditor(step: any): void {
    emit('launch-step-editor', editingWalkthrough.value, step);
}
</script>

<template>
    <div class="walkthroughs-menu">
        <template v-if="editingWalkthrough === null">
            <p>
                [!] Create, edit, reorder, or delete walkthroughs.
            </p>
            <div class="editor-button" v-for="(walkthrough, index) in walkthroughs">
                {{ walkthrough.name }}
                <div class="row">
                    <div class="col-md-6 d-grid">
                        <button :disabled="savingChanges" @click="editingWalkthrough = walkthrough" class="btn btn-block btn-warning"><icon name="fa6-solid:pencil" /> Edit</button>
    <!--                    <button :disabled="savingChanges" class="btn btn-block btn-secondary"><icon name="fa6-solid:arrow-up" /> Move Up</button>-->
                    </div>
                    <div class="col-md-6 d-grid">
                        <button :disabled="savingChanges" class="btn btn-block btn-danger" @click="deleteWalkthrough(walkthrough.id, index)"><icon name="fa6-solid:trash" /> Delete</button>
    <!--                    <button :disabled="savingChanges" class="btn btn-block btn-secondary"><icon name="fa6-solid:arrow-down" /> Move Down</button>-->
                    </div>
                </div>
            </div>
            <div class="editor-button">
                Add New Walkthrough
                <input type="text" v-model="newWalkthroughName" class="form-control" placeholder="Walkthrough Name"><br>
                <game-button :disabled="savingChanges" @click="createWalkthrough">
                    <game-icon icon="check" font-style="normal" />
                    Create
                </game-button>
            </div>
        </template>
        <template v-else>
            <walkthrough-steps-editor :walkthrough="editingWalkthrough" @close-walkthrough-steps-editor="editingWalkthrough = null" @launch-step-editor="onLaunchStepEditor" />
        </template>
    </div>
</template>

<style scoped lang="scss">
.walkthroughs-menu {
    h2 {
        color: #fff;
        text-transform: uppercase;
    }

    h3 {
        color: #fff;
    }

    p {
        color: #fff;
    }

    .editor-button {
        border-radius: 3px;
        background: rgba(22, 24, 29, 0.75);
        color: #fff;
        box-shadow: none;
        border: solid 2px #2a2d31;
        opacity: 0.85;
        margin-bottom: 10px;
        width: 100%;
        padding: 20px;
        text-align: left;

        h3 {
            font-size: 1.25rem;
        }
    }
}
</style>
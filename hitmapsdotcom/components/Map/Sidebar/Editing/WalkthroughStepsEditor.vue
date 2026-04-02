<script setup lang="ts">
import ArrayHelpers from "~/utils/ArrayHelpers";

const config = useRuntimeConfig();
const { walkthrough } = defineProps<{
    walkthrough: any
}>();
const emit = defineEmits(['close-walkthrough-steps-editor', 'launch-step-editor']);

const newStepName = ref<string>('');
const savingChanges = ref<boolean>(false);

async function createWalkthroughStep(): Promise<void> {
    savingChanges.value = true;
    const newWalkthroughStep = await $fetch(`${config.public.apiDomain}/api/walkthroughs/${walkthrough.id}/steps`, {
        method: 'POST',
        body: JSON.stringify({
            title: newStepName.value
        })
    });

    walkthrough.steps.push((newWalkthroughStep as any).data);
    newStepName.value = '';
    savingChanges.value = false;
}

async function deleteWalkthroughStep(step: any, index: number): Promise<void> {
    savingChanges.value = true;
    await $fetch(`${config.public.apiDomain}/api/walkthroughs/${walkthrough.id}/steps/${step.id}`, {
        method: 'DELETE'
    });

    ArrayHelpers.deleteElementByIndex(walkthrough.steps, index);
    savingChanges.value = false;
}

function launchEditor(step: any): void {
    emit('launch-step-editor', step);
}

async function move(currentIndex: number, direction: string): Promise<void> {
    savingChanges.value = true;
    ArrayHelpers.moveElement(walkthrough.steps, currentIndex, direction === 'UP' ? currentIndex - 1 : currentIndex + 1);

    await $fetch(`${config.public.apiDomain}/api/walkthroughs/${walkthrough.id}/steps/reorder`, {
        method: 'PATCH',
        body: JSON.stringify({
            stepIds: walkthrough.steps.map((step: any) => step.id)
        })
    });
    savingChanges.value = false;
    walkthrough.steps.forEach((step: any, index: number) => step.order = index);
}
</script>

<template>
    <div class="walkthrough-steps-menu">
        <p>
            Use the buttons below to edit, reorder, or delete walkthrough steps.
        </p>
        <p>Editing walkthrough: <b>{{ walkthrough.name }}</b></p>
        <div class="editor-button" v-for="(step, index) in walkthrough.steps">
            <span class="step-number" :class="step.order === 0 ? 'starting-position' : ''">{{ step.order }}</span>
            {{ step.title }}
            <div class="row">
                <div class="col-md-6 d-grid">
                    <button :disabled="savingChanges" class="btn btn-block btn-warning" @click="launchEditor(step)"><icon name="fa6-solid:pencil" /> Edit</button>
                    <button :disabled="savingChanges" class="btn btn-block btn-danger" @click="deleteWalkthroughStep(step, index)"><icon name="fa6-solid:trash" /> Delete</button>
                </div>
                <div class="col-md-6 d-grid">
                    <button :style="index > 0 ? '' : 'visibility: hidden'" :disabled="savingChanges" class="btn btn-block btn-secondary" @click="move(index, 'UP')"><icon name="fa6-solid:arrow-up" /> Move Up</button>
                    <button :style="index < walkthrough.steps.length - 1 ? '' : 'visibility: hidden'" :disabled="savingChanges" class="btn btn-block btn-secondary" @click="move(index, 'DOWN')"><icon name="fa6-solid:arrow-down" /> Move Down</button>
                </div>
            </div>
        </div>
        <div class="editor-button">
            Add Step
            <input type="text" v-model="newStepName" class="form-control" placeholder="Step Name"><br>
            <game-button :disabled="savingChanges" @click="createWalkthroughStep">
                <game-icon icon="check" font-style="normal" />
                Create
            </game-button>
        </div>
        <div class="editor-button hoverable go-back" @click="emit('close-walkthrough-steps-editor')">
            <icon name="fa6-solid:arrow-left"/>
            Go Back
        </div>
    </div>
</template>

<style scoped lang="scss">
.walkthrough-steps-menu {
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

        .step-number {
            font-size: 1.25rem;
            font-weight: bolder;

            &.starting-position {
                visibility: hidden;
            }
        }

        &.go-back {
            margin-top: 40px;
        }

        h3 {
            font-size: 1.25rem;
        }

        &.hoverable:hover,
        &.hoverable:active {
            opacity: 1;
            border-color: #fff;
            cursor: pointer;
        }
    }
}
</style>
<script setup lang="ts">
const config = useRuntimeConfig();
const { missionVariantId } = defineProps<{
    missionVariantId: number
}>();

const walkthroughs = ref<any>(null);

const walkthroughResponse = await $fetch(`${config.public.apiDomain}/api/walkthroughs?missionVariantId=${missionVariantId}`) as any;
walkthroughs.value = walkthroughResponse.data;
</script>

<template>
    <alert type="info">Select a walkthrough to view step-by-step instructions for completing the objective.</alert>
    <control-button class="walkthrough-button" v-for="walkthrough in walkthroughs">
        {{ walkthrough.name }}
    </control-button>
</template>

<style scoped lang="scss">
.walkthrough-button {
    flex-grow: 1;
    border-radius: 3px;
    background: rgba(22,24,29,.75);
    color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 2px solid #2a2d31;
    opacity: .85;
    width: 100%;
    margin-bottom: 10px;
    text-align: left;
    font-size: 1.25rem;
    padding: 20px;
    height: inherit;

    transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;

    &:hover {
        opacity: 1;
        border-color: #fff;
        color: #fff;
        background: rgba(22,24,29,.75);
    }
}
</style>
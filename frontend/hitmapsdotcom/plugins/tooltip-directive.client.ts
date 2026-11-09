import { Tooltip } from 'bootstrap'

/**
 * Enable Bootstrap tooltips using Vue directive
 * @author Vitim.us
 * @see https://gist.github.com/victornpb/020d393f2f5b866437d13d49a4695b47
 * @example
 *   <button v-tooltip="foo">Hover me</button>
 *   <button v-tooltip.click="bar">Click me</button>
 *   <button v-tooltip.html="baz">Html</button>
 *   <button v-tooltip:top="foo">Top</button>
 *   <button v-tooltip:left="foo">Left</button>
 *   <button v-tooltip:right="foo">Right</button>
 *   <button v-tooltip:bottom="foo">Bottom</button>
 *   <button v-tooltip:auto="foo">Auto</button>
 *   <button v-tooltip:auto.html="clock" @click="clock = Date.now()">Updating</button>
 *   <button v-tooltip:auto.html.live="clock" @click="clock = Date.now()">Updating Live</button>
 */
// @ts-ignore
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('tooltip', {
        beforeMount(el, binding) {
            let trigger = 'hover focus';

            if (binding.modifiers.focus || binding.modifiers.hover || binding.modifiers.click) {
                const t = [];
                if (binding.modifiers.focus) t.push('focus');
                if (binding.modifiers.hover) t.push('hover');
                if (binding.modifiers.click) t.push('click');
                trigger = t.join(' ');
            }

            //@ts-ignore
            nextTick(() => {
                new Tooltip(el, {
                    title: binding.value,
                    placement: binding.arg,
                    //@ts-ignore
                    trigger: trigger,
                    html: binding.modifiers.html ?? false
                });
            });
        }
    });
});
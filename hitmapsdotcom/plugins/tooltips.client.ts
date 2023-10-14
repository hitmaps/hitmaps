import { Tooltip } from 'bootstrap'

// @ts-ignore
export default defineNuxtPlugin(nuxtApp => {
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((tooltip) => {
        // @ts-ignore
        if (!tooltip._tooltip) {
            new Tooltip(tooltip);
        }
    });
});
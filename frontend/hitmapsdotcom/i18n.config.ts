//@ts-ignore
export default defineI18nConfig(() => ({
    fallbackLocale: process.env.I18N_FALLBACK_LOCALE || 'en-US',
    legacy: false
}));
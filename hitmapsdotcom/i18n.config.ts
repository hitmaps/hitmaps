//@ts-ignore
export default defineI18nConfig(() => ({
    locale: process.env.I18N_LOCALE || 'en-US',
    fallbackLocale: process.env.I18N_FALLBACK_LOCALE || 'en-US',
    allowComposition: true,
    messages: loadLocaleMessages(),
    silentTranslationWarn: true,
    legacy: false
}));

//@ts-ignore
function loadLocaleMessages() {
    const messages: any = {};
    let modules = import.meta.glob('./locales/*.json', { eager: true });

    for (const path in modules) {
        const matched = path.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = JSON.parse(JSON.stringify(modules[`./locales/${locale}.json`])).default;
        }
    }

    return messages
}
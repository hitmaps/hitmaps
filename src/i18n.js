import {createI18n} from 'vue-i18n'

loadLocaleMessages()

const i18n = createI18n({
  locale: import.meta.env.VITE_APP_I18N_LOCALE || 'en-US',
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en-US',
  allowComposition: true,
  messages: loadLocaleMessages(),
  silentTranslationWarn: true,
  legacy: false
});

export default i18n;

function loadLocaleMessages () {
  const messages = {}
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

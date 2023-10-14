import Language from "~/utils/Language";

export default class LanguageHelpers {
    static getLanguages(): Language[] {
        return [
            new Language({
                iso: 'de-DE',
                name: 'German'
            }),
            new Language({
                iso: 'en-US',
                name: 'English'
            }),
            new Language({
                iso: 'es-ES',
                name: 'Spanish'
            }),
            new Language({
                iso: 'fr-FR',
                name: 'French'
            }),
            new Language({
                iso: 'it-IT',
                name: 'Italian'
            }),
            new Language({
                iso: 'ja-JP',
                name: 'Japanese'
            }),
            new Language({
                iso: 'pl-PL',
                name: 'Polish'
            }),
            new Language({
                iso: 'pt-BR',
                name: 'Brazilian Portuguese'
            }),
            new Language({
                iso: 'ru-RU',
                name: 'Russian'
            }),
            new Language({
                iso: 'zh-CN',
                name: 'Simplified Chinese'
            }),
            new Language({
                iso: 'zh-TW',
                name: 'Traditional Chinese'
            })
        ];
    }

    static getCountryFlag(language: string): string {
        switch (language) {
            case 'de-DE':
                return 'de';
            case 'en-US':
                return 'us';
            case 'es-ES':
                return 'es';
            case 'fr-FR':
                return 'fr';
            case 'it-IT':
                return 'it';
            case 'ja-JP':
                return 'jp';
            case 'pl-PL':
                return 'pl';
            case 'pt-BR':
                return 'br';
            case 'ru-RU':
                return 'ru';
            case 'zh-CN':
                return 'cn';
            case 'zh-TW':
                return 'tw';
            default:
                console.error('Failed to find flag for locale: ' + language);
                return 'us';
        }
    }

    static getCountryFlagForLocale(i18n: any) {
        let locale = i18n.locale;
        if (locale === undefined) {
            locale = i18n.fallbackLocale;
            i18n.locale = locale;
            localStorage.locale = i18n.locale;
        }

        return this.getCountryFlag(locale.value);
    }
}
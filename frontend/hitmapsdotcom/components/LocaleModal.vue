<template>
    <client-only>
        <country-flag v-if="flagSize !== 'hidden'" :country="getCountryFlagForLocale()" v-tooltip:top="$t('language-modal.change-language')" @click="showModal" :size="flagSize" />
        <modal id="locale-modal"
               aria-labelledby="locale-modal-label"
               ref="innerModal"
               :modalTitle="$t('language-modal.change-language')"
               dismissable>
            <div class="row">
                <div @click="setLang(lang.iso)" data-dismiss="modal" class="col-md-3 col-sm-6 text-center language-option" v-for="(lang, i) in languages" :key="`Lang${i}`">
                    <country-flag :country="getCountryFlagForIsoCode(lang.iso)" size="big" />
                    <p>{{ lang.name }}</p>
                </div>
            </div>
            <i18n-t keypath="language-modal.footer" tag="p">
                <template v-slot:submitACorrection>
                    <a href="https://translate.hitmaps.com" target="_blank">{{ $t('language-modal.submit-a-correction') }}</a>
                </template>
            </i18n-t>
        </modal>
    </client-only>
</template>

<script>
    export default {
        name: "LocaleModal",
        setup() {
            const { locale, locales, setLocale } = useI18n();

            return {
                locale,
                locales,
                setLocale
            };
        },
        props: {
            flagSize: {
                type: String,
                default: 'normal'
            }
        },
        computed: {
            languages() {
                return LanguageHelpers.getLanguages();
            }
        },
        methods: {
            getCountryFlagForLocale() {
                return LanguageHelpers.getCountryFlagForLocale(this.locale);
            },
            getCountryFlagForIsoCode(iso) {
                return LanguageHelpers.getCountryFlag(iso)
            },
            setLang(iso) {
                this.$i18n.setLocale(iso);
                this.hideModal();
            },
            showModal() {
                this.$refs.innerModal.showModal();
            },
            hideModal() {
                this.$refs.innerModal.hideModal();
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        color: $content-text;
    }

    a {
        color: $content-text;
        font-weight: bolder;

        &:hover {
            color: $content-text;
        }
    }

    .notice {
        margin: 0 10px;
    }

    .language-option {
        cursor: pointer;
        margin-bottom: 10px;

        &:hover {
            background: rgba(0,0,0,.1);
        }
    }
</style>
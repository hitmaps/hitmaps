<template>
  <div>
    <NuxtPage />
      <footer v-if="isNotInMap()">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">
                      <h4>&copy; 2018 - {{ currentYear }} hitmaps.com</h4>
                      <p style="margin-bottom: 0">
                          <i18n-t keypath="footer.disclaimer">
                              <template v-slot:ioiLink>
                                  <a href="https://www.ioi.dk" target="_blank">{{ $t('footer.io-interactive') }}</a>
                              </template>
                          </i18n-t>
                      </p>
                      <p>
                          <i18n-t keypath="footer.developed-by">
                              <template v-slot:mikeKochLink>
                                  <a href="https://mikeko.ch" target="_blank">Mike Koch</a>
                              </template>
                          </i18n-t>
                      </p>
                  </div>
                  <div class="col-md-6 text-right">
                      <a href="#" :to="{ name: 'about' }">
                            <span class="fa-stack fa-2x" :top="$t('footer.about')">
                                <i class="fas fa-square fa-stack-2x"></i>
                                <i class="fas fa-info-circle fa-stack-1x fa-inverse"></i>
                            </span>
                      </a>
                      <a href="https://discord.gg/RssFsajjjX" target="_blank">
                            <span class="fa-stack fa-2x" :top="$t('footer.join-the-discord')">
                                <i class="fas fa-square fa-stack-2x"></i>
                                <i class="fab fa-discord fa-stack-1x fa-inverse"></i>
                            </span>
                      </a>
                      <a
                          href="https://hitmanstat.us"
                          target="_blank"
                          data-toggle="tooltip">
                            <span class="fa-stack fa-2x" :top="$t('footer.hitman-status')">
                                <i class="fas fa-square fa-stack-2x"></i>
                                <i class="fas fa-user-tie fa-stack-1x fa-inverse"></i>
                            </span>
                      </a>
                      <a href="https://twitter.com/hitmapsdotcom" target="_blank">
                            <span class="fa-stack fa-2x" :top="$t('footer.twitter')">
                                <i class="fas fa-square fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                            </span>
                      </a>
                      <a href="https://www.patreon.com/mrmike227"
                         target="_blank"
                         data-toggle="tooltip"
                         class="patreon-button">
                            <span class="fa-stack fa-2x" :top="$t('footer.patreon')">
                                <i class="fas fa-square fa-stack-2x"></i>
                                <i class="fab fa-patreon fa-stack-1x fa-inverse"></i>
                            </span>
                      </a>
                  </div>
              </div>
              <div class="row legal">
                  <div class="col-sm-2">
                        <span class="language-switcher" data-toggle="modal" data-target="#locale-modal">
                            <country-flag :country="getCountryFlag()" :top="('language-modal.change-language')" />
                        </span>
                  </div>
                  <div class="col-sm-10 text-end">
                        <span class="footer-link">
                            <icon name="fa-solid:gavel"/>
                            <a href="#" :to="{ name: 'terms-of-use' }">
                                {{ $t('authentication.terms-of-use') }}</a>
                        </span>
                      |
                      <span class="footer-link">
                          <icon name="fa-solid:shield-alt"/>
                            <a href="#" :to="{ name: 'privacy-policy' }">
                                {{ $t('authentication.privacy-policy') }}</a>
                        </span>
                      |
                      <span class="footer-link">
                          <icon name="fa-solid:paint-brush"/>
                          <a href="#" :to="{ name: 'brand' }">Brand</a>
                      </span>
                      |
                      <span class="footer-link">
                            <icon name="fa-solid:money-bill"/>
                            <a href="#" :to="{ name: 'support-the-site' }">
                                {{ 'Support the Site' }}</a>
                        </span>
                      |
                      <span class="footer-link">
                            <icon name="fa:code"/>
                            <a href="https://hitmaps.readme.io/reference" target="_blank">API</a>
                        </span>
                  </div>
              </div>
          </div>
      </footer>
  </div>
</template>
<script setup lang="ts">
const currentYear = ref(new Date().getFullYear());
const route = useRoute();

function isNotInMap() {
    return route.name !== 'map-view'
}

function getCountryFlag() {
    return 'us';//LanguageHelpers.getCountryFlagForLocale(this.$i18n);
}
</script>
<style lang="scss" scoped>
.footer-link {
    a {
        text-decoration: none;
        margin-left: 2px;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/main.scss";`
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: {
  }
}

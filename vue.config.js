module.exports = {
  chainWebpack: config => { config.module.rules.delete("eslint"); },
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/scss/_colors.scss";
        @import "~@/scss/_fonts.scss";
        @import "~@/scss/_respond.scss";
        @import "~@/scss/_spacing.scss";
        @import "~@/scss/_box-shadows.scss";
        `
      }
    }
  }
}

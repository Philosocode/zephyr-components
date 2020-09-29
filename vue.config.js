module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/scss/_colors.scss";
          @import "~@/scss/_fonts.scss";
          @import "~@/scss/_respond.scss";
        `
      }
    }
  }
}

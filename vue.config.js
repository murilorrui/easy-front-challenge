module.exports = {
  pwa: {
    name: 'Easy Carros',
    themeColor: '#8306BE',
    iconPaths: {
      favicon32: 'favicon.png',
      favicon16: '',
      appleTouchIcon: '',
      maskIcon: '',
      msTileImage: '',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: "@import '~@/assets/styles/defaults/mobileFirst.sass' \n"
            + "@import '~@/assets/styles/defaults/variables.sass'"
      }
    }
  },
  devServer: {
    proxy: {
      '/api' : {
        target: 'http://localhost:8181',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  },
}

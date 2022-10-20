const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: {
    //   '/api': {
    //     // target: 'https://958af609-1601-4c7f-87e9-51b368ae6645.mock.pstmn.io',
    //     target: 'http://localhost:3000/',
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  }
})

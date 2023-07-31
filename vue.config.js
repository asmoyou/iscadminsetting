const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/': {
            // target: 'http://192.168.0.117:9877', //伟强
            target: 'http://192.168.0.113:9877', //日晨
            changeOrigin: true,
            pathRewrite: {
              '^/': ''
            }

        }
    }
  }
})

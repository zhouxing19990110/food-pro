// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      "/api":{
        // target后 放请求的地址
        target:"https://api.binstd.com/recipe",
        // 允许跨域
        changeOrigin: true,
        // 路径重写
        pathRewrite:{
          "^/api":""
        }
      }
    }
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
 
  // 代理跨域
  devServer:{
    proxy: {
      "/api": {

        target:"http://gmall-h5-api.atguigu.cn"
        // pathRewrite: {"^/api" : ""}
        // target: "http://39.98.123.211",
      }
  }},
  
  lintOnSave:false,
  
})

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7001",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/baidu": {
        target: "http://api.map.baidu.com",
        changeOrigin: true,
        pathRewrite: {
          "^/baidu": ""
        }
      }
    }
  }
};

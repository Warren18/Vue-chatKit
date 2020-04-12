module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    post: 8080,
    https: false,
    hotOnly: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:3000', // 本地服务器1地址
    //     // target: 'https://api.leijiuling.com', // 线上真实地址
    //     ws: true,
    //     changeOrigin: true, // 是否开启跨域
    //     pathRewrite: {
    //       '^/api': '',
    //     },
    //   },
    // },
  },
}

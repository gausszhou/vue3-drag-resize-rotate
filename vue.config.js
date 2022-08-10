module.exports = {
  devServer: {
    open: true
  },
  lintOnSave: false,
  // 配置相对路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // 受否生成SourceMap
  productionSourceMap: false,
  // 是否生成文件哈希值
  filenameHashing: true,
  // 这里编写webpack配置
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
};

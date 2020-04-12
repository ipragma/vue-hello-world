// module.exports = {
//   "transpileDependencies": [
//     "vuetify"
//   ]
// }

module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  }
}
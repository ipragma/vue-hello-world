// module.exports = {
//   "transpileDependencies": [
//     "vuetify"
//   ]
// }

// vue.config.js
const webpack = require('webpack')
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    optimization: {
      splitChunks: false // makes there only be 1 js file - leftover from earlier attempts but doesn't hurt
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  chainWebpack:
    config => {
      config.optimization.delete('splitChunks')
  }
}
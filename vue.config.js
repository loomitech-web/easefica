module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: { output: { filename: '[name].[hash].bundle.js' } },
  pwa :{
    assetsVersion : "2.4"
  } 
}
const { defineConfig } = require('@vue/cli-service');
const { websiteConfig } = require('./src/data/authordata.json');
module.exports = defineConfig({
  runtimeCompiler: true,
  publicPath: '/',
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.whitespace = 'preserve';
        return options;
      });
    config.plugin('html').tap((args) => {
      args[0].title = websiteConfig.title;
      args[0].twitterData = websiteConfig.twitterData;
      args[0].keywords = websiteConfig.keyWords;
      args[0].desc = websiteConfig.webSiteDesc;
      args[0].url = websiteConfig.baseSite;
      args[0].BASE_URL = '';
      args[0].minify = {
        ...args[0].minify,
        caseSensitive: true,
        collapseWhitespace: false,
        conservativeCollapse: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeAttributeQuotes: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
      };
      return args;
    });
  },
  transpileDependencies: ['vuetify'],
});

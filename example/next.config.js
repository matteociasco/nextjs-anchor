const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    // /Next-React-Components
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },
  assetPrefix: !debug ? 'https://matteociasco.github.io/nextjs-anchor/' : ''
  /* webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
}

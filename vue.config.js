module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },

  configureWebpack: {
    plugins: [],
  },

  productionSourceMap: false,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: false,
    },
  },
};

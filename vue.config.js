module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
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

const imageDomains = require("./constants/imageDomains")

module.exports = {
  future: {
    webpack5: true,
  },
  i18n: {
    locales: ["es-ES"],
    defaultLocale: "es-ES",
  },
  images: {
    domains: imageDomains,
    deviceSizes: [640, 750, 828, 1080],
  },
  webpack: (config, { webpack }) => {
    const IGNORED_MODULES = /jimp|sharp|centra/
    const ignorePlugin = new webpack.IgnorePlugin(IGNORED_MODULES)
    config.plugins.push(ignorePlugin)
    return config
  },
}

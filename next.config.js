/** @type {import('next').NextConfig} */
const withSVGR = require('next-svgr')
const nextTranslate = require('next-translate')

const config = {
  publicRuntimeConfig: {},
  images: { domains: ['placeimg.com', 'www.pngmart.com'] }
}

const withWebpack = (userConfig) => {
  return {
    ...userConfig,
    webpack: (currentConfig) => {
      currentConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/
      })

      return currentConfig
    }
  }
}

const moduleExports = nextTranslate(withSVGR(withWebpack(config)))

module.exports = moduleExports

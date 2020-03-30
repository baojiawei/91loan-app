const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const compress = new CompressionWebpackPlugin(
  {
    filename: info => {
      return `${info.path}.gz${info.query}`
    },
    algorithm: 'gzip',
    threshold: 10240,
    test: new RegExp(
      '\\.(' +
      ['js'].join('|') +
      ')$'
    ),
    minRatio: 0.8,
    deleteOriginalAssets: false
  }
)

const env = process.env.VUE_APP_ENV
let BASE_URL = ''

switch (env) {
  case 'production':
    BASE_URL = '/market/'
    break
  case 'test':
    BASE_URL = '/market/'
    break
  default:
    BASE_URL = '/'
}

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  publicPath: BASE_URL,
  outputDir: 'dist',
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
      .set('pojo', resolve('src/pojo'))

    config.when(process.env.VUE_APP_ENV !== 'development', config => {
      config.optimization.minimize(true)
    })
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      .when(process.env.VUE_APP_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'all' // only package third parties that are initially dependent
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  },
  configureWebpack: {
    name: '91贷款网',
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      'vue-lazyload': 'VueLazyload',
      axios: 'axios',
      qs: 'Qs'
    },
    plugins: [compress]
  }
}

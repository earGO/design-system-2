var path = require('path')

module.exports = async ({config}) => {
  // Find Babel Loader
  const babelRules = config.module.rules.filter(rule => {
    let isBabelLoader = false

    if (rule.loader && rule.loader.includes('babel-loader')) {
      isBabelLoader = true
    }

    if (rule.use) {
      rule.use.forEach(use => {
        if (typeof use === 'string' && use.includes('babel-loader')) {
          isBabelLoader = true
        } else if (
          typeof use === 'object' &&
          use.loader &&
          use.loader.includes('babel-loader')
        ) {
          isBabelLoader = true
        }
      })
    }

    return isBabelLoader
  })

  babelRules.forEach(rule => {
    rule.include = /../
    rule.exclude = /node_modules/
  })

  if (!config.module.rules) {
    config.module.rules = []
  }

  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader' // creates style nodes from JS strings
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2
        } // translates CSS into CommonJS
      },
      {
        loader: 'less-loader' // compiles Less to CSS
      }
    ],
    include: [
      path.resolve(__dirname, '../../../node_modules/*'),
      path.resolve(__dirname, '../')
    ]
  })


  config.module.rules.push(
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader','@mdx-js/loader'
        ],
          include: [
              path.resolve(__dirname, '../../../node_modules/*'),
              path.resolve(__dirname, '../')
          ]
      }
  )

  config.resolve.extensions.push('.less')
    config.resolve.extensions.push('.mdx')

  if (!config.resolve.modules) {
    config.resolve.modules = []
  }

  config.resolve.modules = config.resolve.modules.concat([
    path.resolve('./'),
    path.resolve('./src'),
    'node_modules',
    'shared',
    'src',
    'build'
  ])

  return config
}

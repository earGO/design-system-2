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

  const renderer = `
import { h } from 'generic-implementation'
 
const mdx = (function (createElement) {
  return function (name, props, ...children) {
    if (typeof name === 'string') {
      if (name === 'wrapper') return children.map(createElement)
      if (name === 'inlineCode') return createElement('code', props, ...children)
    }
 
    return createElement(name, props, ...children)
  }
}(h))
`

  config.module.rules.push(
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              renderer,
            }
          }
        ]
      }
  )

  config.resolve.extensions.push('.less')

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

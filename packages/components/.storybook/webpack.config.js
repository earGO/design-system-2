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

  return config
}

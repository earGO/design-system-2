const pkg = require('./package')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname) + '/build',
    filename: `index.js`,
    chunkFilename: `${pkg.buildname}.js`,
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-transform-async-to-generator',
              '@babel/plugin-transform-runtime',
              'babel-plugin-styled-components',
              'inline-react-svg',
              [
                'import',
                {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}
              ]
            ],
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: 3
                }
              ],
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: 'commonjs react'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    symlinks: true
  }
}

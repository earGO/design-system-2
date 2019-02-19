import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import json from 'rollup-plugin-json'
import { uglify } from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: ['styled-components'],
  // https://github.com/WebReflection/hyperHTML/issues/304#issuecomment-443950244
  context: 'null',
  plugins: [
    external(),
    url(),
    svgr(),
    babel({
      babelrc: false,
      runtimeHelpers: true,
      presets: [['@babel/env', { modules: false }], '@babel/react'],
      exclude: ['node_modules/**', '**/*.json'],
      plugins: [
        '@babel/external-helpers',
        [
          '@babel/transform-runtime',
          {
            regenerator: true,
          },
        ],
        '@babel/plugin-proposal-class-properties',
      ],
    }),
    resolve(),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PureComponent',
          'PropTypes',
          'createElement',
          'Fragment',
          'cloneElement',
          'StrictMode',
          'createFactory',
          'createRef',
          'createContext',
          'isValidElement',
          'isValidElementType',
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
      },
    }),
    json(),
    uglify(),
    postcss({
      extensions: ['.css', '.less'],
      inject: false,
      extract: true,
      minimize: true,
    }),
  ],
}

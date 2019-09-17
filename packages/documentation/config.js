const pkg = require('../package.json')
const path = require('path')

function makeAbsolutePath(directory, component) {
  return path.resolve(__dirname, directory, component)
}

function getComponents(names = []) {
  return names.map(name => makeAbsolutePath('../src/components', name + '.js'))
}

/**
 * В этом массиве перечислены компоненты, которые являются дочерними к другим.
 * Например компонет CollapsePanel доступен как Collapse.Panel.
 */
const nestedComponents = ['CollapsePanel', 'FormItem', 'TabPane', 'RadioGroup']

module.exports = {
  title: pkg.name,
  version: pkg.version,
  skipComponentsWithoutExample: true,
  pagePerSection: false,
  editorConfig: {theme: 'material'},
  exampleMode: 'collapse',
  usageMode: 'collapse',
  ignore: ['/index.js', '/*.test.js', '**/*.spec.js'],
  serverPort: 3000,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
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
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.ttf$/,
          use: [
            {
              loader: 'ttf-loader',
              options: {
                name: './font/[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.woff$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 50000
            }
          }
        },
        {
          test: /\.woff2$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        }
      ]
    }
  },
  styleguideDir: '../docs',
  /** Используется кастомный враппер для проброса темы через провайдер */
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'Wrapper')
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=PT+Sans'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"PT Sans", sans-serif'
    },
    fontSize: {
      base: 14,
      text: 14,
      small: 12
    }
  },
  getComponentPathLine(componentPath) {
    if (nestedComponents.some(component => componentPath.includes(component))) {
      return false
    }

    return `import { ${path.basename(componentPath, '.js')} } from '${
      pkg.name
    }'`
  },
  getExampleFilename(componentPath) {
    return makeAbsolutePath(
      '../documentation/components',
      path.basename(componentPath.replace(/\.jsx?$/, '.md'))
    )
  },
  sections: [
    {
      name: 'Дизайн система',
      content: 'introduction.md',
      sections: [
        {
          name: 'Установка',
          content: 'installation.md'
        },
        {
          name: 'Интеграция',
          content: 'integration.md'
        },
        {
          name: 'Цветовая палитра',
          content: 'colors.md'
        },
        {
          name: 'Шрифты',
          content: 'fonts.md'
        },
        {
          name: 'Настройка темы',
          content: 'theme.md'
        },
        {
          name: 'Ядро системы',
          content: 'core.md'
        }
      ]
    },
    {
      name: 'Примитивы',
      description:
        'Компоненты-примитивы используются для управления расположением элементов интерфейса на экране.',
      components: () =>
        getComponents([
          'Box',
          'Flex',
          'Relative',
          'Absolute',
          'Card',
          'Overlay'
        ])
    },
    {
      name: 'Элементы',
      components: () =>
        getComponents([
          'Text',
          'Heading',
          'Icon',
          'Button',
          'Divider',
          'Scrollbars',
          'Modal',
          'Popover'
        ])
    },
    {
      name: 'Ввод данных',
      description: 'Компоненты для получения данных, введенных пользователем.',
      components: () =>
        getComponents([
          'Form',
          'FormItem',
          'Input',
          'Textarea',
          'Checkbox',
          'Toggle',
          'Radio',
          'RadioGroup',
          'Select'
        ])
    },
    {
      name: 'Отображение данных',
      description: 'Компоненты для отображения данных',
      components: () =>
        getComponents(['Collapse', 'CollapsePanel', 'Tabs', 'TabPane', 'Table'])
    }
  ]
}

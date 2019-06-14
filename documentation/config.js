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
  editorConfig: { theme: 'material' },
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
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
      ],
    },
  },
  styleguideDir: '../docs',
  /** Используется кастомный враппер для проброса темы через провайдер */
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'Wrapper'),
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=PT+Sans',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"PT Sans", sans-serif',
    },
    fontSize: {
      base: 14,
      text: 14,
      small: 12,
      // h1: theme.fontSizes[6],
      // h2: theme.fontSizes[5],
      // h3: theme.fontSizes[4],
      // h4: theme.fontSizes[3],
      // h5: theme.fontSizes[2],
      // h6: theme.fontSizes[1],
    },
  },
  getComponentPathLine(componentPath) {
    if (nestedComponents.some(component => componentPath.includes(component))) {
      return false
    }

    return `import { ${path.basename(componentPath, '.js')} } from '${pkg.name}'`
  },
  getExampleFilename(componentPath) {
    return makeAbsolutePath('../documentation/components', path.basename(componentPath.replace(/\.jsx?$/, '.md')))
  },
  sections: [
    {
      name: 'Дизайн система',
      content: 'introduction.md',
      sections: [
        {
          name: 'Установка',
          content: 'installation.md',
        },
        {
          name: 'Интеграция',
          content: 'integration.md',
        },
        {
          name: 'Цветовая палитра',
          content: 'colors.md',
        },
        {
          name: 'Шрифты',
          content: 'fonts.md',
        },
        {
          name: 'Настройка темы',
          content: 'theme.md',
        },
      ],
    },
    {
      name: 'Примитивы',
      description: 'Компоненты-примитивы используются для управления расположением элементов интерфейса на экране.',
      components: () => getComponents(['Box', 'Flex', 'Relative', 'Absolute', 'Card', 'Positional', 'Overlay']),
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
          'Collapse',
          'CollapsePanel',
          'Tooltip',
          'Tabs',
          'TabPane',
          'Table',
          'Popover',
          'Modal',
          'Dropdown',
        ]),
    },
    {
      name: 'Данные',
      description: 'Компоненты для получения данных, введенных пользователем.',
      components: () =>
        getComponents([
          'Input',
          'Textarea',
          'Checkbox',
          'Form',
          'FormItem',
          'Select',
          'Datepicker',
          'Toggle',
          'Radio',
          'RadioGroup',
          'Tree',
          // 'Position',
        ]),
    },
    {
      name: 'Ядро системы',
      content: 'core.md',
    },
  ],
}

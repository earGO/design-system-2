const pkg = require('../package.json')
const path = require('path')

function makeAbsolutePath(directory, component) {
  return path.resolve(__dirname, directory, component)
}

/**
 * В этом массиве перечислены компоненты, которые являются дочерними к другим.
 * Например компонет CollapsePanel доступен как Collapse.Panel.
 */
const nestedComponents = ['CollapsePanel', 'FormItem']

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
      components: () => [
        makeAbsolutePath('../src/primitives', 'Box.js'),
        makeAbsolutePath('../src/primitives', 'Flex.js'),
        makeAbsolutePath('../src/primitives', 'Relative.js'),
        makeAbsolutePath('../src/primitives', 'Absolute.js'),
        makeAbsolutePath('../src/primitives', 'Card.js'),
        makeAbsolutePath('../src/primitives', 'Positional.js'),
      ],
    },
    {
      name: 'Элементы',
      components: () => [
        makeAbsolutePath('../src/elements', 'Text.js'),
        makeAbsolutePath('../src/elements', 'Heading.js'),
        makeAbsolutePath('../src/elements', 'Icon.js'),
        makeAbsolutePath('../src/elements', 'Button.js'),
        makeAbsolutePath('../src/elements', 'Divider.js'),
        makeAbsolutePath('../src/elements', 'Collapse.js'),
        makeAbsolutePath('../src/elements', 'CollapsePanel.js'),
      ],
    },
    {
      name: 'Данные',
      description: 'Компоненты для получения данных, введенных пользователем.',
      components: () => [
        makeAbsolutePath('../src/data', 'Input.js'),
        makeAbsolutePath('../src/data', 'Checkbox.js'),
        makeAbsolutePath('../src/data', 'Form.js'),
        makeAbsolutePath('../src/data', 'FormItem.js'),
      ],
    },
    {
      name: 'Ядро системы',
      content: 'core.md',
    },
  ],
}

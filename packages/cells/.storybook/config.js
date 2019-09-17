import {addParameters, configure, addDecorator} from '@storybook/react'
import {create} from '@storybook/theming'
import {withInfo} from '@storybook/addon-info'
import {withThemesProvider} from 'storybook-addon-styled-component-theme'
import theme from '@design-system/theme'

addDecorator(withInfo)
addDecorator(withThemesProvider([theme]))

const sb_theme = create({
  base: 'light',
  colorPrimary: '#0e0e0e',
  colorSecondary: '#1EA7FD'
})
addParameters({
  options: {sb_theme},
  info: {
    inline: true,
    header: false,
    styles: {
      header: {
        h1: {
          color: 'red'
        }
      }
    }
  }
})

const comps = require.context('../stories', true, /.stories.js$/)

configure(() => {
  comps.keys().forEach(filename => comps(filename))
}, module)

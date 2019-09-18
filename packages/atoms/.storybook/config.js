import {addParameters, configure, addDecorator} from '@storybook/react'
import {create} from '@storybook/theming'
import {withInfo} from '@storybook/addon-info'
import {withThemesProvider} from 'storybook-addon-styled-component-theme'
import theme from '@design-system/theme'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addDecorator(withInfo)
addDecorator(withThemesProvider([theme]))

const sb_theme = create({
  base: 'light',
  colorPrimary: '#0e0e0e',
  colorSecondary: '#1EA7FD'
})
addParameters({
  options: {sb_theme},
  docs: ({ context }) => (
      <DocsPage context={context} descriptionSlot={({ parameters }) => parameters.notes} />
  ),
})

const comps = require.context('../stories', true, /.stories.js$/)

configure(() => {
  comps.keys().forEach(filename => comps(filename))
}, module)

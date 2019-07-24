import React from 'react'
import {storiesOf} from '@storybook/react'

import theme, {ThemeProvider} from '@design-system/theme'

import Tooltip from '../src/Tooltip'

storiesOf(`Tooltip`, module)
  .addParameters({
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
  .add('Default', () => <Tooltip theme={theme} placement={'top'} />, {
    info: {
      text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
    }
  })

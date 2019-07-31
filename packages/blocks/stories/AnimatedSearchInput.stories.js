import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'

import AnimatedSearchInput from '../src/AnimatedSearchInput'

storiesOf(`AnimatedSearchInput`, module)
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
  .add(
    'Default',
    () => (
      <ThemeProvider theme={theme}>
        {' '}
        <AnimatedSearchInput />
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
      }
    }
  )

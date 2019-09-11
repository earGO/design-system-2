import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
import Checkbox from '../src/Checkbox'

storiesOf(`Checkbox`, module)
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
        <Checkbox />
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров видим простой чекбокс. 
        `
      }
    }
  )

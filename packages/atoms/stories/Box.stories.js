import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
import Box from '../src/Box'

storiesOf(`Box`, module)
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
      <Box color={'blue'} bg={'yellow'}>
        Hello Box
      </Box>
    ),
    {
      info: {
        text: `
          Простой контейнер для контента. 
        `
      }
    }
  )
  .add(
    'Theme coloring',
    () => (
      <ThemeProvider theme={theme}>
        <Box width={1 / 2} bg="primary" color="white">
          Hello Box
        </Box>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          С цветами из темы. 
        `
      }
    }
  )

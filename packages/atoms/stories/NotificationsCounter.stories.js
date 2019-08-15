import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'

import NotificationsCounter from '../src/NotificationsCounter'

storiesOf(`NotificationsCounter`, module)
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
        <NotificationsCounter />
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          Иконка показывает количество сообщений (по умолчанию 30 - с целью вёрстки). 
        `
      }
    }
  )

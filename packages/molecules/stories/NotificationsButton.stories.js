import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'

import NotificationsButton from '../src/NotificationsButton'

storiesOf(`NotificationsButton`, module)
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
        <NotificationsButton />
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без уведомлений счётчик не выводится. 
        `
      }
    }
  )
  .add(
    'With counter',
    () => (
      <ThemeProvider theme={theme}>
        <NotificationsButton count={14} />
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          Если есть уведомления будет ещё и счётчик. 
        `
      }
    }
  )

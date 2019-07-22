import React from 'react'
import {storiesOf} from '@storybook/react'

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

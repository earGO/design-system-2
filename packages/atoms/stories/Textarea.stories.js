import React from 'react'
import {storiesOf} from '@storybook/react'
import {Textarea} from '../src'
import theme from '@design-system/theme'

storiesOf(`Textarea`, module)
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
      <Textarea disabled theme={theme}>
        Test text
      </Textarea>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
      }
    }
  )

import React from 'react'
import {storiesOf} from '@storybook/react'

import IconButton from '../src/IconButton'

storiesOf(`IconButton`, module)
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
  .add('Default', () => <IconButton name={'accessible'} />, {
    info: {
      text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
    }
  })

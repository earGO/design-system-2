import React from 'react'
import {storiesOf} from '@storybook/react'

import Radio from '../src/Radio'

storiesOf(`Radio`, module)
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
  .add('Default', () => <Radio label="Yes" />, {
    info: {
      text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
    }
  })

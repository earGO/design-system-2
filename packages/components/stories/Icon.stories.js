import React from 'react'
import {storiesOf} from '@storybook/react'

import Icon from '../src/Icon'

storiesOf(`Single Icons`, module)
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
    'Arrow Down Icon component',
    () => <Icon name={'keyboard_arrow_down'} color={'#000'} size={48} />,
    {
      info: {
        text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
      }
    }
  )

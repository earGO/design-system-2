import React from 'react'
import {storiesOf} from '@storybook/react'

import {Icon} from '../src'

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
  .add('Default', () => <Icon />, {
    info: {
      text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
    }
  })
  .add(
    'Arrow Down Icon component',
    () => <Icon name={'keyboard_arrow_down'} color={'#000'} size={48} />,
    {
      info: {
        text: `
          Вид иконки определяется параметром name, куда нужно передать название иконки из этого каталога https://material.io/resources/icons/?style=baseline. 
        `
      }
    }
  )
  .add('Spin', () => <Icon name={'cached'} color={'#000'} size={48} spin />, {
    info: {
      text: `
          Вид иконки определяется параметром name, куда нужно передать название иконки из этого каталога https://material.io/resources/icons/?style=baseline. 
        `
    }
  })

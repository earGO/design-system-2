import React from 'react'
import {storiesOf} from '@storybook/react'

import Icon from '../components/Icon'

storiesOf(`Icon`, module)
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
  .add('Default', () => <Icon name="Flights" />, {
    info: {
      text: `
          Иконку можно импортировать компонентом Icon, тип иконки задаётся полем name. 
        `
    }
  })
  .add('Colored', () => <Icon name="Flights" color={'blue'} />, {
    info: {
      text: `
          Цвет задаётся параметром color. 
        `
    }
  })
  .add('Sized', () => <Icon name="Flights" color={'blue'} size={56} />, {
    info: {
      text: `
          Размер задаётся параметром size. 
        `
    }
  })
  .add('Spin', () => <Icon name="Flights" color={'orange'} size={44} spin />, {
    info: {
      text: `
          Размер задаётся параметром size. 
        `
    }
  })

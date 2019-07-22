import React from 'react'
import {storiesOf} from '@storybook/react'

import Accessible from '../components/Accessible'

storiesOf(`Accessible`, module)
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
  .add('Default', () => <Accessible />, {
    info: {
      text: `
         Иконку можно импортировать как самостоятельный компонент, использовав для импорта её имя - например Accessible. Без параметров она отобразится чёрным цветом 
        `
    }
  })
  .add('Colored', () => <Accessible color={'red'} />, {
    info: {
      text: `
          Иконке можно передать цвет в параметр color. 
        `
    }
  })
  .add('Colored & Sized', () => <Accessible color={'red'} size={48} />, {
    info: {
      text: `
          Размер иконки можно изменять параметром size, передавая размер в пикселях (без приставки px, в формате number). 
        `
    }
  })
  .add('Spinning', () => <Accessible size={48} spin />, {
    info: {
      text: `
          Размер иконки можно изменять параметром size, передавая размер в пикселях (без приставки px, в формате number). 
        `
    }
  })

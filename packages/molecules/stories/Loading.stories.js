import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'

import {Loading} from '../src'

storiesOf(`Loading`, module)
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
        <Loading />
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без текста просто выводится спиннер загрузчик цвета primary . 
        `
      }
    }
  )
  .add(
    'With text',
    () => (
      <ThemeProvider theme={theme}>
        {' '}
        <Loading>Загружается шняжка</Loading>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
         Если обернуть компонентом текст - будет текст и спиннер. 
        `
      }
    }
  )
  .add(
    'Overlay',
    () => (
      <ThemeProvider theme={theme}>
        <Loading overlay>Загружается шняжка</Loading>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
         Если передать overlay - компонент будет поверх остального контента . 
        `
      }
    }
  )
  .add(
    'Sizing',
    () => (
      <ThemeProvider theme={theme}>
        {' '}
        <Loading size={4}>Загружается шняжка</Loading>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
         Максимальный размер - 4. 
        `
      }
    }
  )

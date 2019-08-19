import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
import {SearchInput} from '../src'

storiesOf(`SearchInput`, module)
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
        <SearchInput width={560} />
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          Вывод компонента без параметров. 
        `
      }
    }
  )

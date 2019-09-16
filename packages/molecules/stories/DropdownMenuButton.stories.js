import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
import {Icon} from '@design-system/atoms'

import DropdownMenuButton from '../src/DropdownMenuButton'

storiesOf(`DropdownMenuButton`, module)
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
        <DropdownMenuButton iconName={'assignment'}></DropdownMenuButton>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
      }
    }
  )

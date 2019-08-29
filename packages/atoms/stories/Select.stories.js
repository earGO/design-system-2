import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
import {Select} from '../src'

const options = [
  {value: 'template1', label: `Шаблон ИМ многоквартирного дома`},
  {value: 'template2', label: `Шаблон ИМ производственного помещения`},
  {value: 'template3', label: `Шаблон ИМ образовательного учреждения`},
  {value: 'template4', label: `Шаблон ИМ складского помещения`},
  {value: 'template5', label: `Шаблон ИМ торгового центра`}
]

storiesOf(`Select`, module)
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
        <Select options={options} />
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

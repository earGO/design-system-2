import React from 'react'
import {storiesOf} from '@storybook/react'
import {Select} from '../src'

const options = [
  {value: 'template1', label: `Шаблон ИМ многоквартирного дома`},
  {value: 'template2', label: `Шаблон ИМ производственного помещения`},
  {value: 'template3', label: `Шаблон ИМ образовательного учреждения`},
  {value: 'template4', label: `Шаблон ИМ складского помещения`},
  {value: 'template5', label: `Шаблон ИМ торгового центра`}
]

storiesOf(`Select`, module).add('Default', () => <Select options={options} />, {
  info: {
    text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
  }
})

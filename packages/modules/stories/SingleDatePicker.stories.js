import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
import {Box, Text} from '@design-system/components'
import {formatDate} from '@design-system/utils'

import SingleDatePicker from '../src/SingleDatePicker'

const RenderedDatePicker = ({props}) => {
  const [date, setDate] = useState([])

  const handlePick = value => {
    setDate(value)
    console.log(formatDate(value))
  }
  return (
    <Box>
      <SingleDatePicker onChange={handlePick} {...props} />
    </Box>
  )
}

storiesOf(`SingleDatePicker`, module)
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
  .add('Default', () => <RenderedDatePicker />, {
    info: {
      text: `
          Дата пикер на одну дату. Принимает на вход функцию onChange, которая на вход принимает выбранную дату в формате moment. 
          
          Приведенный выше компонент выводит в консоль выбранную дату, приводя ее к формату дд/мм/гггг 
        `
    }
  })

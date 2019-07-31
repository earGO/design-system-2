import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
import {Box, Text} from '@design-system/components'
import {formatDate} from '@design-system/utils'

import SingleDatePicker from '../src/SingleDatePicker'

const RenderedDatePicker = () => {
  const [date, setDate] = useState([])
  const handlePick = value => {
    setDate(value)
    console.log(formatDate(value))
  }
  return (
    <Box>
      <SingleDatePicker onChange={handlePick} />
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
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
    }
  })

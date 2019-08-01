import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'

import RangeDatePicker from '../src/RangeDatePicker'
import {formatDate} from '@design-system/utils'
import {Box} from '@design-system/components'

const RenderedDatePicker = ({props}) => {
  const [date, setDate] = useState([])

  const handlePick = (dates, dateStrings) => {
    console.log(dates, dateStrings)
  }
  return (
    <Box>
      <RangeDatePicker onChange={handlePick} {...props} width={192} />
    </Box>
  )
}

storiesOf(`RangeDatePicker`, module)
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
          На выход пикер даёт два массива. 
          
          В первом - dates - содержатся стартовая и конечная даты в формате moment.
          
          Во втором - dateStrings -  содержатся стартовая и конечная даты в формате String, отображаемые согласно переданному в параметр format правилу. 
          
          "Вынуть" эти массивы можно при помощи функции, передаваемой в onChange, принимающей на вход эти массивы. Например handleChange = (dates, dateStrings) =>{}   
        `
    }
  })

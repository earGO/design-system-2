import React, {useState} from 'react'
import {formatDate} from '@design-system/utils'
import {SingleDatePicker} from '../src/SingleDatePicker'
import {Flex, Text, Box} from '@design-system/atoms'

export default {
  title: 'Design System|SingleDatePicker',
  parameters: {
    component: SingleDatePicker
  }
}

export const basic = () => <SingleDatePicker />
basic.story = {
  parameters: {
    info: {
      text: `
          Вид компонента без параметров
        `
    }
  }
}

export const inAConsumer = () => {
  const [date, setDate] = useState([])
  const [dateString, setDateString] = useState('')
  const handlePick = value => {
    setDate(value)
    setDateString(formatDate(value))
    console.log(formatDate(value))
  }

  return (
    <Flex flexDirection={'column'}>
      <SingleDatePicker onChange={handlePick} />
      <Box>
        <Text>Вы выбрали дату: {dateString} </Text>
      </Box>
    </Flex>
  )
}
inAConsumer.story = {
  parameters: {
    info: {
      text: `
          Пример применения в компоненте-потребителе. Выводит выбранную дату на страницу.
        `
    }
  }
}

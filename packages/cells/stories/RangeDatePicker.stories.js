import React, {useState} from 'react'

import {RangeDatePicker} from '../src/RangeDatePicker'

export default {
  title: 'Design System|RangeDatePicker',
  parameters: {
    component: RangeDatePicker
  }
}

export const basic = () => <RangeDatePicker />
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

  const handlePick = (dates, dateStrings) => {
    console.log(dates, dateStrings)
  }

  return <RangeDatePicker onChange={handlePick} width={192} />
}
inAConsumer.story = {
  parameters: {
    info: {
      text: `
          Пример применения в компоненте-потребителе
        `
    }
  }
}

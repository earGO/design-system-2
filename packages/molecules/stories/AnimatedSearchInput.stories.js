import React, {useState} from 'react'

import {AnimatedSearchInput} from '../src/AnimatedSearchInput'

export default {
  title: 'Design System|AnimatedSearchInput',
  parameters: {
    component: AnimatedSearchInput
  }
}

export const basic = () => <AnimatedSearchInput />
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
  const [value, setValue] = useState(null)
  const handleChange = newValue => {
    setValue(newValue)
  }

  return (
    <AnimatedSearchInput
      value={value}
      onChange={handleChange}
      shrinkWidth={120}
      growWidth={480}
    />
  )
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

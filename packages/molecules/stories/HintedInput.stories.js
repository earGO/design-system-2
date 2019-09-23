import React, {useState} from 'react'

import {HintedInput} from '../src/HintedInput'

export default {
  title: 'Design System|HintedInput',
  parameters: {
    component: HintedInput
  }
}

export const basic = () => <HintedInput />
basic.story = {
  parameters: {
    info: {
      text: `
          Так выглядит компонент без параметров
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
    <HintedInput
      value={value}
      onChange={handleChange}
      hint={'Небольшая подсказка'}
      placeholder={'Введите что-нибудь'}
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

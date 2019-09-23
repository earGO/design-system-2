import React, {useState} from 'react'

import TitledNumericInput from '../src/TitledNumericInput'

export default {
  title: 'Design System|TitledNumericInput',
  parameters: {
    component: TitledNumericInput
  }
}

export const basic = () => <TitledNumericInput />
basic.story = {
  parameters: {
    info: {
      text: `
          Без параметров будет отображаться, но не будет реагировать на действия
        `
    }
  }
}

export const inAConsumer = () => {
  const [value, setValue] = useState(0)
  const handleChange = newValue => {
    setValue(newValue)
  }

  return (
    <TitledNumericInput
      globalValue={value}
      onChange={handleChange}
      title={'Бегемотиков в автобусе'}
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

import React, {useState} from 'react'

import {SearchInput} from '../src/SearchInput'

export default {
  title: 'Design System|SearchInput',
  parameters: {
    component: SearchInput
  }
}

export const basic = () => <SearchInput />
basic.story = {
  parameters: {
    info: {
      text: `
          Компонент без параметров
        `
    }
  }
}

export const inAConsumer = () => {
  const [value, setValue] = useState(null)
  const handleChange = newValue => {
    setValue(newValue)
  }

  return <SearchInput value={value} onChange={handleChange} />
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

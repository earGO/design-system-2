import React, {useState} from 'react'

import {TitledSelect} from '../src/TitledSelect'

export default {
  title: 'Design System|TitledSelect',
  parameters: {
    component: TitledSelect
  }
}

export const basic = () => <TitledSelect />
basic.story = {
  parameters: {
    info: {
      text: `
          Без параметров выглядит так (и не роняет приложение)
        `
    }
  }
}

export const inAConsumer = () => {
  const options = [
    {value: 1, label: 'first'},
    {value: 2, label: 'second'},
    {value: 3, label: 'third'}
  ]
  const [value, setValue] = useState(null)
  const handleChange = newValue => {
    setValue(newValue)
  }

  return (
    <TitledSelect
      global={value}
      options={options}
      onChange={handleChange}
      title={'Winner number'}
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

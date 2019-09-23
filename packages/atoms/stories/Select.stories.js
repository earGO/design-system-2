import React, {useState} from 'react'

import {Select} from '../src/Select'
import {Box, Flex, Text} from '../src'

export default {
  title: 'Design System|Select',
  parameters: {
    component: Select
  }
}

export const basic = () => {
  const options = Array(36)
    .fill(true)
    .map((_, i) => ({value: i, label: `Option ${i}`}))

  return (
    <Box width="292px">
      <Select placeholder="Раскрывающийся список" options={options} />
    </Box>
  )
}
basic.story = {
  parameters: {
    info: {
      text: `
            За основу взят [react-select](https://react-select.com/) + добавлена виртуализация.
            Полный список пропсов: [https://react-select.com/props#api](https://react-select.com/props#api)

        `
    }
  }
}

export const Virtualized = () => {
  const options = Array(10000)
    .fill(true)
    .map((_, i) => ({value: i, label: `Option ${i}`}))

  return <Select virtualized options={options} />
}

Virtualized.story = {
  parameters: {
    info: {
      text: `
          С виртуализацией
        `
    }
  }
}

export const InAConsumer = () => {
  const [value, setValue] = useState({label: 'Option 3', value: 3})

  const onChange = newOption => {
    setValue(newOption)
  }

  const options = Array(30)
    .fill(true)
    .map((_, i) => ({value: i, label: `Option ${i}`}))

  return (
    <Flex flexDirection={'column'}>
      <Select value={value} onChange={onChange} options={options} />
      <Box m={5}>
        <Text>выбрано значение: {value.label}</Text>
      </Box>
    </Flex>
  )
}

InAConsumer.story = {
  parameters: {
    info: {
      text: `
          Пример внутри компонента-потребителя
        `
    }
  }
}

export const Combobox = () => {
  const options = Array(30)
    .fill(true)
    .map((_, i) => ({value: i, label: `Option ${i}`}))

  return <Select options={options} isMulti closeMenuOnSelect={false} />
}

Combobox.story = {
  parameters: {
    info: {
      text: `
          С возможностью выбрать несколько значений
        `
    }
  }
}

export const Async = () => {
  let uuid = 1
  const [isLoading, setLoading] = useState(false)
  const [value, setValue] = useState({
    value: 'helloKitty',
    label: 'Initial Value?'
  })

  const onChange = value => setValue(value)

  const loadOptions = query => {
    return new Promise((resolve, reject) => {
      const sampleQueryResults = Array(13)
        .fill(true)
        .map((x, i) => ({label: `${query} - ${i}`, value: `${i}+${uuid}`}))
      uuid++
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        resolve(sampleQueryResults)
      }, 300)
    })
  }
  return (
    <Select
      async
      isLoading={isLoading}
      value={value}
      onChange={onChange}
      loadOptions={loadOptions}
      defaultOptions
    />
  )
}

Async.story = {
  parameters: {
    info: {
      text: `
          Нужно добавить пропсы **defaultOptions** и **loadOptions**

            **defaultOptions** отвечает за опции, который будут изначально в селекте; если \`\`\`defaultOptions === true\`\`\`, то тогда отправится запрос сразу, как только откроется селект.

            **loadOptions** - промис, который собственно и будет грузить данные в селект.
        `
    }
  }
}

import React, {useState} from 'react'

import {Radio} from '../src/Radio'
import Box from '../src/Box'
import RadioGroup from '../src/RadioGroup'

export default {
  title: 'Design System|Radio',
  parameters: {
    component: Radio
  }
}

export const basic = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <Box>
      <Radio mr={2} label="Yes" checked={checked} onChange={handleChange} />
      <Radio label="No" checked={!checked} onChange={handleChange} />
    </Box>
  )
}

basic.story = {
  parameters: {
    info: {
      text: `
          Radio input стилизованный в рамках корпоративного стиля. 
        `
    }
  }
}

export const sizing = () => (
  <Box>
    <Radio label="small" size="small" name="a" value="small" />
    <Radio ml={2} label="medium" size="medium" name="a" value="medium" />
    <Radio ml={2} label="large" size="large" name="a" value="large" />
  </Box>
)

sizing.story = {
  parameters: {
    info: {
      text: `
          Можно выбирать разные размеры
        `
    }
  }
}

export const disabled = () => (
  <Box>
    <Radio label="Disabled" disabled />
    <Radio ml={2} label="Disabled checked" disabled checked />
  </Box>
)

disabled.story = {
  parameters: {
    info: {
      text: `
          Можно "выключить"
        `
    }
  }
}

export const radiogroup = () => {
  const [value, setValue] = useState(null)

  const handleChange = activeValue => {
    setValue(activeValue)
  }

  return (
    <RadioGroup onChange={handleChange} value={value} defaultValue="one">
      <Radio label="One" value="one" />
      <Radio label="Two" value="two" ml={2} />
      <Radio label="Three" value="three" ml={2} />
    </RadioGroup>
  )
}

radiogroup.story = {
  parameters: {
    info: {
      text: `
          Пример группы переключателей
        `
    }
  }
}

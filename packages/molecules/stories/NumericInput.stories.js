import React, {useState} from 'react'

import NumericInput from '../src/NumericInput'

export default {
  title: 'Design System|NumericInput',
  parameters: {
    component: NumericInput
  }
}

export const basic = () => {
  const [value, setValue] = useState(null)

  const handleValueChange = newNumber => {
    setValue(newNumber)
  }

  return <NumericInput onChange={handleValueChange} globalValue={value} />
}
basic.story = {
  parameters: {
    info: {
      text: `
          Story basic text
        `
    }
  }
}

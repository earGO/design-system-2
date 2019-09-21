import React, {useState} from 'react'

import {ResizableInput} from '../src/ResizableInput'
import Box from '../src/Box'
import Icon from '../src/Icon'

export default {
  title: 'Design System|ResizableInput',
  parameters: {
    component: ResizableInput
  }
}

export const basic = () => {
  const [value, setValue] = useState(null)

  const prefix = (
    <Box onClick={() => {}} pt={1}>
      <Icon name="search" />
    </Box>
  )
  const suffix = (
    <Box onClick={() => {}} pt={1}>
      <Icon name="close" />
    </Box>
  )

  const handleChange = value => {
    setValue(value)
  }

  return (
    <Box width={300}>
      <ResizableInput
        size="small"
        value={value}
        placeholder={'Enter text'}
        prefix={prefix}
        suffix={Boolean(value) ? suffix : null}
        onChange={handleChange}
        shrinkWidth={60}
        growWidth={260}
      />
    </Box>
  )
}

basic.story = {
  parameters: {
    info: {
      text: `
         Тот же инпут, но расширяющийся при фокусе. 
        `
    }
  }
}

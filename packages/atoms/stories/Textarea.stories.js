import React, {useState} from 'react'

import {Textarea} from '../src/Textarea'
import {Flex, Box, Text} from '../src'

export default {
  title: 'Design System|Textarea',
  parameters: {
    component: Textarea
  }
}

export const basic = () => {
  const [value, setValue] = useState('')

  const handleTextareaChange = event => {
    setValue(event.target.value)
  }

  return (
    <Flex flexDirection={'column'}>
      <Textarea
        placeholder={'Введите что-нибудь'}
        rows={4}
        resize={'none'}
        value={value}
        border={'lightGray'}
        onChange={handleTextareaChange}
      />
      <Box m={3}>
        <Text>вы ввели: {value}</Text>
      </Box>
    </Flex>
  )
}
basic.story = {
  parameters: {
    info: {
      text: `
          HTML Тэг \`<Textarea/>\`. 
        `
    }
  }
}

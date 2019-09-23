import React, {useState} from 'react'

import {Toggle} from '../src/Toggle'
import {Flex, Box, Text} from '../src'

export default {
  title: 'Design System|Toggle',
  parameters: {
    component: Toggle
  }
}

export const basic = () => (
  <Flex width={600} justifyContent="space-between">
    <Box>
      Checked:
      <Toggle checked={true} />
    </Box>
    <Box>
      Unchecked:
      <Toggle checked={false} />
    </Box>
    <Box>
      Disabled:
      <Toggle disabled />
    </Box>

    <Box>
      Disabled checked:
      <Toggle disabled checked={true} />
    </Box>
  </Flex>
)
basic.story = {
  parameters: {
    info: {
      text: `
          Cостояния. 
        `
    }
  }
}

export const Uncontrolled = () => (
  <Flex width={1 / 5} alignItems="center">
    Отправлять данные
    <Box ml={2}>
      <Toggle />
    </Box>
  </Flex>
)

Uncontrolled.story = {
  parameters: {
    info: {
      text: `
         Uncontrolled
        `
    }
  }
}

export const Controlled = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(true)

  const handleChange = newState => {
    setAgreeToTerms(newState)
  }

  return (
    <Box width="100%">
      <Flex width={1 / 2} alignItems="center">
        <Toggle checked={agreeToTerms} onChange={handleChange} />
        <Text ml={2}>Даю согласие на обработку персональных данных</Text>
      </Flex>
      <Text>{agreeToTerms ? 'Согласен.' : 'Не согласен.'}</Text>
    </Box>
  )
}

Controlled.story = {
  parameters: {
    info: {
      text: `
         Controlled
        `
    }
  }
}

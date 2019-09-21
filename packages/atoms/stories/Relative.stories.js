import React from 'react'

import {Relative} from '../src/Relative'
import Flex from '../src/Flex'
import Text from '../src/Text'
import Box from '../src/Box'

export default {
  title: 'Design System|Relative',
  parameters: {
    component: Relative
  }
}

export const basic = () => (
  <Flex bg={'lightGrey'}>
    <Relative bg="lightBlue" p={2} bottom={14} left={14} width={50} height={20}>
      <Text color="white">Relative</Text>
    </Relative>
    <Box bg={'success'} m={4}>
      NonRelative box
    </Box>
  </Flex>
)
basic.story = {
  parameters: {
    info: {
      text: `
          Пример использования компонента со смещением вверх и вправо. 
          
          Обратите внимание: **template.space** и **template.breakpoints** 
          в параметрах **top, right, bottom, left, zIndex** не поддерживаются.
        `
    }
  }
}

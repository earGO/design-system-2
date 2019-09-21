import React from 'react'

import {FlexContainerBottomDivider} from '../src/FlexContainerBottomDivider'

import Box from '../src/Box'
import {Flex} from '../src/Flex'

export default {
  title: 'Design System|FlexContainerBottomDivider',
  parameters: {
    component: FlexContainerBottomDivider
  }
}

export const basic = () => (
  <FlexContainerBottomDivider>
    <Box bg="blue" width={1 / 2} p={2} m={4}>
      Flex
    </Box>
    <Box bg="red" width={1 / 2} p={2} m={4}>
      Box
    </Box>
  </FlexContainerBottomDivider>
)

export const flexProps = () => (
  <FlexContainerBottomDivider justifyContent={'flex-end'} width={800}>
    <Box bg="blue" width={80} p={2} m={2}>
      Flex
    </Box>
    <Box bg="red" width={80} p={2} m={2}>
      with
    </Box>
    <Box bg="yellow" width={80} p={2} m={2}>
      bottom
    </Box>
    <Box bg="green" width={80} p={2} m={2}>
      divider
    </Box>
  </FlexContainerBottomDivider>
)

flexProps.story = {
  parameters: {
    info: {
      text: `
          Компонент принимает все пропсы \`<Flex/>\`, например **justifyContent** и **width**
        `
    }
  }
}

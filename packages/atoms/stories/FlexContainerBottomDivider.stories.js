import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import {Box, Text} from '../src'
import FlexContainerBottomDivider from '../src/FlexContainerBottomDivider'

const FlexShildWarning = () => {
  return (
    <Box bg={'warning'} p={1} m={3}>
      <Text>Test FlexContainerBottomDivider component</Text>
    </Box>
  )
}
const FlexShildPrimary = () => {
  return (
    <Box bg={'primary'} p={1} m={3}>
      <Text>Test FlexContainerBottomDivider component</Text>
    </Box>
  )
}

storiesOf(`FlexContainerBottomDivider`, module).add(
  'Default',
  () => (
    <FlexContainerBottomDivider justifyContent={'space-between'}>
      <FlexShildPrimary />
      <FlexShildWarning />
      <FlexShildPrimary />
    </FlexContainerBottomDivider>
  ),
  {
    info: {
      text: `
          Флекс-бокс с границей вдоль нижнего края.
        `
    }
  }
)

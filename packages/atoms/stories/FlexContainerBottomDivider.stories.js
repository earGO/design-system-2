import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
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

storiesOf(`FlexContainerBottomDivider`, module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      }
    }
  })
  .add(
    'Default',
    () => (
      <ThemeProvider theme={theme}>
        {' '}
        <FlexContainerBottomDivider justifyContent={'space-between'}>
          <FlexShildPrimary />
          <FlexShildWarning />
          <FlexShildPrimary />
        </FlexContainerBottomDivider>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса.
        `
      }
    }
  )

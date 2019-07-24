import React from 'react'
import {storiesOf} from '@storybook/react'

import theme from '@design-system/theme'

import Collapse from '../src/Collapse'
import Text from '../src/Text'

storiesOf(`Collapse`, module)
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
    'Collapse panel default',
    () => (
      <Collapse theme={theme}>
        <Collapse.Panel key="key1" title="Title number 1" theme={theme}>
          <Text p={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Collapse.Panel>
        <Collapse.Panel key="key2" title="Title number 2" theme={theme}>
          <Text p={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Collapse.Panel>
      </Collapse>
    ),
    {
      info: {
        text: `
          По умолчанию без выводится простым списком. 
        `
      }
    }
  )

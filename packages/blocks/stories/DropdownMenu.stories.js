import React from 'react'
import {storiesOf} from '@storybook/react'

import DropdownMenu from '../src/DropdownMenu'
import {Flex, Text, Card, Box, Popover} from '@design-system/components'
import styled from 'styled-components'
import theme from '@design-system/theme'

const Content = ['item1', 'item2', 'item3']

storiesOf(`DropdownMenu`, module)
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
      <DropdownMenu theme={theme} content={Content}>
        Click Me
      </DropdownMenu>
    ),
    {
      info: {
        text: `
          Для работы нужно только передать в компонент список опций. 
        `
      }
    }
  )

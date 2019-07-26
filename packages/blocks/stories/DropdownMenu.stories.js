import React from 'react'
import {storiesOf} from '@storybook/react'

import DropdownMenu from '../src/DropdownMenu'
import {Flex, Text, Card, Box, Popover} from '@design-system/components'
import styled from 'styled-components'
import theme from '@design-system/theme'

const Content = ['item1', 'item2', 'item3']

const FunctionalContent = [
  {
    name: 'MenuItem1',
    HandleClick: something => {
      console.log('clicked ' + something)
    }
  },
  {
    name: 'MenuItem2',
    HandleClick: function(something) {
      console.log('clicked ' + something)
    }
  },
  {
    name: 'MenuItem2',
    HandleClick: function(something) {
      console.log('clicked ' + something)
    }
  }
]

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
      <Flex>
        <DropdownMenu theme={theme} content={FunctionalContent}>
          Click Me
        </DropdownMenu>
      </Flex>
    ),
    {
      info: {
        text: `
          Для работы нужно только передать в компонент список опций. 
        `
      }
    }
  )
  .add(
    'Controlled position',
    () => (
      <Flex>
        <DropdownMenu
          theme={theme}
          content={FunctionalContent}
          shiftTop={-10}
          shiftLeft={20}
        >
          Click Me
        </DropdownMenu>
      </Flex>
    ),
    {
      info: {
        text: `
          Можно управлять позиционированием выпадающего элемента. 
        `
      }
    }
  )

import React from 'react'
import {storiesOf} from '@storybook/react'

import DropdownMenu from '../src/DropdownMenu'
import {Flex, Text, Card, Box, Popover} from '@design-system/components'
import styled from 'styled-components'
import theme from '@design-system/theme'
import LabeledIconButton from '../src/LabeledIconButton'

const FunctionalContent = [
  {
    content: <Text>Simple Component</Text>,
    HandleClick: () => {
      console.log('clicked ' + 'something')
    }
  },
  {
    content: <LabeledIconButton iconName={'check'} caption={'OneWord'} />,
    HandleClick: function() {
      console.log('clicked ' + 'something else')
    }
  },
  {
    content: 'Simple text',
    HandleClick: function() {
      console.log('clicked ' + 'something special')
    }
  }
]

const FunctionalContentPartial = [
  {
    content: <Text>Управление модулями</Text>,
    HandleClick: () => {
      console.log('clicked ' + 'something')
    }
  },
  {
    content: (
      <LabeledIconButton iconName={'check'} caption={'OneWord'} top={-1} />
    ),
    HandleClick: function() {
      console.log('clicked ' + 'something else')
    }
  },
  {
    content: 'Simple text'
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
  .add(
    'Controlled sizing of items',
    () => (
      <Flex>
        <DropdownMenu
          theme={theme}
          content={FunctionalContent}
          shiftTop={-10}
          shiftLeft={20}
          width={300}
          height={40}
          pt={'10px'}
        >
          Click Me
        </DropdownMenu>
      </Flex>
    ),
    {
      info: {
        text: `
          В компонент можно передавать обычные для Box параметры - они будут применены к каждому элементу выпадающего меню. Задать зармеры самого выпадающего меню нельзя - они подстраиваются под размер пунктов. 
        `
      }
    }
  )
  .add(
    'Item without click',
    () => (
      <Flex>
        <DropdownMenu
          theme={theme}
          content={FunctionalContentPartial}
          shiftTop={-10}
          shiftLeft={20}
          width={300}
          height={40}
          pt={'10px'}
        >
          Click Me
        </DropdownMenu>
      </Flex>
    ),
    {
      info: {
        text: `
          При передаче опции без функции "на клик" не возникает ошибки и не происходит ничего (третья опция). 
        `
      }
    }
  )
  .add(
    'Do Not close on itemClick',
    () => (
      <Flex>
        <DropdownMenu
          theme={theme}
          content={FunctionalContentPartial}
          shiftTop={-10}
          shiftLeft={20}
          width={300}
          height={40}
          pt={'10px'}
          closeOnItemClick={false}
        >
          Click Me
        </DropdownMenu>
      </Flex>
    ),
    {
      info: {
        text: `
          По умолчанию компонент закрывается при клике на любую опцию. Передав параметр  closeOnItemClick=false меню останется открытым после клика на опцию
        `
      }
    }
  )

import React from 'react'
import {storiesOf} from '@storybook/react'

import {Flex, Text} from '@design-system/atoms'
import theme from '@design-system/theme'
import {LabeledIconButton, DropdownMenu} from '../src'

const FunctionalContent = [
  {
    name: 'String name and component',
    component: <Text>Simple Component</Text>,
    HandleClick: () => {
      console.log('clicked ' + 'something')
    }
  },
  {
    name: 'String name,no component',
    HandleClick: function() {
      console.log('clicked ' + 'something else')
    }
  },
  {
    component: <Text>Simple Component</Text>,
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

const FunctionalContentWDropdown = [
  {
    name: 'String name and component',
    component: <Text>Simple Component</Text>,
    HandleClick: () => {
      console.log('clicked ' + 'something')
    }
  },
  {
    name: 'String name,no component',
    HandleClick: function() {
      console.log('clicked ' + 'something else')
    }
  },
  {
    name: 'Dropdown in a dropdown',
    nested: [
      {
        name: 'String name and component',
        HandleClick: () => {
          console.log('clicked ' + 'something')
        }
      },
      {
        name: 'String name,no component',
        HandleClick: function() {
          console.log('clicked ' + 'something else')
        }
      }
    ],
    nestedProps: {
      position: 'right',
      shiftTop: 20,
      shiftLeft: 5,
      width: 300,
      height: 40,
      pt: '10px'
    },
    iconPositionProps: {
      pr: 2,
      top: 0
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
  .add(
    'Dropdown inside Dropdown',
    () => (
      <Flex>
        <DropdownMenu
          theme={theme}
          content={FunctionalContentWDropdown}
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
          В любой пункт можно передать параметр nested в таком же формате, как массив пунктов в Dropdown, и closeOnItemClick={false}
          
          В таком случае вместо обычного клика по пункту будет вызван вложенный Dropdown с опциями из массива nested.
          
          Вместе с массивом nested можно передать параметр nestedProps - объект, пропы из которого будут применены ко вложенному Dropdown.
          
          Такую "вложенность" можно делать по всех пунктах, всех пунктах вложенных Dropdown, и так до бесконечности.
          
          По клику на любую опцию вложенного Dropdown закроется и он, и родительский Dropdown.
        `
      }
    }
  )

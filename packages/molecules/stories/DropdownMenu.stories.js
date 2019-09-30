import React, {useState} from 'react'
import styled from 'styled-components'
import {Box, Button, ContentBox} from '@design-system/atoms'

import {DropdownMenu} from '../src/DropdownMenu'
const HintTrigger = styled(Box)`
  display: inline-block;
  background-color: red;
`

export default {
  title: 'Design System|DropdownMenu',
  parameters: {
    component: DropdownMenu
  }
}

const content = [
  {name: 'значение 1', HandleClick: () => console.log('значение 1')},
  {name: 'значение 2', HandleClick: () => console.log('значение 2')}
]

export const basic = () => (
  <ContentBox
    contentwidth={900}
    justifyContent={'center'}
    height={400}
    alignItems={'center'}
  >
    <DropdownMenu content={content}>
      <Button>Menu</Button>
    </DropdownMenu>
  </ContentBox>
)
basic.story = {
  parameters: {
    info: {
      text: `
        Пример применения.

        Компонент оборачивает элемент под которым при нажатии появится выпадающие меню.

        В параметре content передается список элементов меню с полями name и HandleClick.

        name - то что отображается в качестве элемента меню. Может быть строкой или react элементом.
        
        HandleClick - функция которая вызывается при клике на элемент меню.
        `
    }
  }
}

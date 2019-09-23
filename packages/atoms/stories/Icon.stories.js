import React from 'react'

import {Icon} from '../src/Icon'
import Box from '../src/Box'

export default {
  title: 'Design System|Icon',
  parameters: {
    component: Icon
  }
}

export const basic = () => <Icon />

basic.story = {
  parameters: {
    info: {
      text: `
          Без параметров выводится чёрная иконка 24х24рх со знаком вопроса. 
        `
    }
  }
}

export const customIcon = () => (
  <Icon name={'android'} size={3} color={'warning'} />
)

customIcon.story = {
  parameters: {
    info: {
      text: `
          Можно передавать имя и менять цвет и размер иконки
        `
    }
  }
}

export const wrongProps = () => (
  <Icon name={'android'} size={'10px'} color={'#55ff44'} />
)

wrongProps.story = {
  parameters: {
    info: {
      text: `
          Если параметры цвета и/или размера переданы не правильно, будут использованы значения "по умолчанию"
        `
    }
  }
}

export const wrongName = () => (
  <Icon name={'some_wrong_name'} size={3} color={'onclick'} />
)

wrongName.story = {
  parameters: {
    info: {
      text: `
          Иконка не будет отображаться, если передано неправильное имя.
        `
    }
  }
}

export const otherUseCases = () => (
  <Box p={3} bg={'lightGrey'}>
    <Icon name={'android'} size={3} color={'onclick'} />
    <Icon
      name={'assignment_turned_in'}
      size={4}
      color={'danger'}
      top={-20}
      left={80}
    />
    <Icon name={'autorenew'} size={4} color={'danger'} spin />
    <Icon name={'grade'} size={3} color={'primary'} spinCCW />
    <Icon name={'grade'} size={3} color={'success'} spinCCW hidden />
  </Box>
)

otherUseCases.story = {
  parameters: {
    info: {
      text: `
          Ещё несколько вариантов иконок. На самом деле тут 5 иконок, но последняя скрыта.
          Обратите внимание на смещение второй иконки сверху относительно её контейнера. 
        `
    }
  }
}

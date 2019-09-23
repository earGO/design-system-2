import React, {useState} from 'react'

import LabeledIconButton from '../src/LabeledIconButton'

export default {
  title: 'Design System|LabeledIconButton',
  parameters: {
    component: LabeledIconButton
  }
}

export const basic = () => <LabeledIconButton />
basic.story = {
  parameters: {
    info: {
      text: `
           По умолчанию без параметров выводится иконка "ошибка", текст по умолчанию, чёрного цвета, размер иконки 24px. 
        `
    }
  }
}
export const colorAndStyling = () => (
  <LabeledIconButton
    color="primary"
    iconName={'add_circle_outline'}
    size={18}
    fontSize={1}
    mt={'2px'}
  />
)
colorAndStyling.story = {
  parameters: {
    info: {
      text: `
           В компонент можно передать цвет, имя иконки, размер иконки и шрифта, а так же позиционировать текст относительно иконки обычными методами margin и padding. 
        `
    }
  }
}

export const CustomLabel = () => (
  <LabeledIconButton
    color="primary"
    iconName={'add_circle_outline'}
    size={18}
    fontSize={1}
    caption={'Добавить секцию'}
    mt={'2px'}
  />
)
CustomLabel.story = {
  parameters: {
    info: {
      text: `
           В компонент можно передать текстовую часть 
        `
    }
  }
}

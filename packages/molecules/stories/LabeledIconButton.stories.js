import React from 'react'
import {storiesOf} from '@storybook/react'
import theme from '@design-system/theme'
import {LabeledIconButton} from '../src'

storiesOf(`LabeledIconButton`, module)
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
  .add('Default', () => <LabeledIconButton theme={theme} />, {
    info: {
      text: `
          По умолчанию без параметров выводится иконка "ошибка", текст по умолчанию, чёрного цвета, размер иконки 24px. 
        `
    }
  })
  .add(
    'Theme color and styling',
    () => (
      <LabeledIconButton
        color="primary"
        iconName={'add_circle_outline'}
        theme={theme}
        size={18}
        fontSize={1}
        mt={'2px'}
      />
    ),
    {
      info: {
        text: `
          В компонент можно передать цвет, имя иконки, размер иконки и шрифта, а так же позиционировать текст относительно иконки обычными методами margin и padding. 
        `
      }
    }
  )
  .add(
    'Custom label',
    () => (
      <LabeledIconButton
        color="primary"
        iconName={'add_circle_outline'}
        theme={theme}
        size={18}
        fontSize={1}
        caption={'Добавить секцию'}
        mt={'2px'}
      />
    ),
    {
      info: {
        text: `
          В компонент можно передать текстовую часть 
        `
      }
    }
  )

import React from 'react'

import {Heading} from '../src/Heading'
import Box from '../src/Box'

export default {
  title: 'Design System|Heading',
  parameters: {
    component: Heading
  }
}

export const basic = () => (
  <Heading>Это заголовок, и он рендерится как H3 тэг по умолчанию</Heading>
)

export const variousSizes = () => (
  <Box>
    <Heading tag="h1">H1 заголовок </Heading>
    <Heading tag="h2">H2 заголовок </Heading>
    <Heading tag="h3">H3 заголовок </Heading>
    <Heading tag="h4">H4 заголовок </Heading>
    <Heading tag="h5">H5 заголовок </Heading>
    <Heading tag="h6">H6 заголовок </Heading>
  </Box>
)

variousSizes.story = {
  parameters: {
    info: {
      text: `
          Различные заголовки от h1 до h2
        `
    }
  }
}

export const variousStyles = () => (
  <Box>
    <Heading color="primary">Заголовок акцентного цвета</Heading>
    <Heading italic>Заголовок курсивом</Heading>
    <Heading caps>Заголовок капителью</Heading>
    <Heading truncated>
      Очень длинный текст заголовка, демонстрирующий работу свойства truncated.
      Но делать заголовки такой длинны лучше не надо ;)
    </Heading>
  </Box>
)

variousStyles.story = {
  parameters: {
    info: {
      text: `
          Различные стили заголовков
        `
    }
  }
}

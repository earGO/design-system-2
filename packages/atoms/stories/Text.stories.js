import React from 'react'

import {Text} from '../src/Text'
import {Flex, Box, Card, Icon} from '../src'

export default {
  title: 'Design System|Text',
  parameters: {
    component: Text
  }
}

export const basic = () => (
  <Box>
    <Text>Обычный текст</Text>
    <Text bold>
      Жирный текст{' '}
      <Text inline regular>
        обычный текст
      </Text>{' '}
      жирный текст
    </Text>

    <Text bold>Жирное начертание</Text>
    <Text italic>Курсивное начертание</Text>
    <Text caps>Капитель</Text>
  </Box>
)
basic.story = {
  parameters: {
    info: {
      text: `
         Начертания **regular, bold, italic, caps**
        `
    }
  }
}

export const fontSize = () => (
  <Box>
    <Text fontSize={1}>Размер текста 1</Text>
    <Text fontSize={2}>Размер текста 2</Text>
    <Text fontSize={3}>Размер текста 3</Text>
    <Text fontSize={4}>Размер текста 4</Text>
    <Text fontSize={5}>Размер текста 5</Text>
    <Text fontSize={6}>Размер текста 6</Text>
  </Box>
)

fontSize.story = {
  parameters: {
    info: {
      text: `
          **fontSize** задает размер, выбирая из соответствующего массива из темы
        `
    }
  }
}

export const align = () => (
  <Box>
    <Text align="left">Слева</Text>
    <Text align="center">Центр</Text>
    <Text align="right">Справа</Text>
    <Text align="justify">
      Выравнивание длинного текста по обеим сторонам. Использовать такое
      выравнивание крайне не рекомендуется, так как чаще всего это ухудшает
      восприятие информации.
    </Text>
  </Box>
)

align.story = {
  parameters: {
    info: {
      text: `
          **align** отвечает за выравнивание текста.
        `
    }
  }
}

export const color = () => (
  <Box>
    <Text color="primary">Primary color text</Text>
    <Text color="success">Success color text</Text>
    <Text color="error">Error color text</Text>
  </Box>
)

color.story = {
  parameters: {
    info: {
      text: `
          **color** управляет цветом текста.
        `
    }
  }
}

export const truncated = () => (
  <Flex>
    <Box width={1 / 2}>
      <Text truncated>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Text>
    </Box>
  </Flex>
)

truncated.story = {
  parameters: {
    info: {
      text: `
         **truncated** позволяет обрезать длинный текст по ширине блока и добавить троеточие в конце.
        `
    }
  }
}

export const inline = () => (
  <Box>
    <Card p={2}>
      <Text>Block text</Text>
      <Text>Block text</Text>
    </Card>
    <Card p={2} mt={2}>
      <Text inline>Inline text</Text>
      <Icon mx={2} name="beer" />
      <Text inline>Inline text</Text>
    </Card>
  </Box>
)

inline.story = {
  parameters: {
    info: {
      text: `
         По умолчанию \`<Text />\` рендерится как блочный элемент, но задав параметр inline его можно сделать инлайновым для расположения элементов в строку.
        `
    }
  }
}

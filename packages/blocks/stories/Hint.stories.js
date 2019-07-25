import React from 'react'
import {storiesOf} from '@storybook/react'
import {Flex} from '@design-system/components'
import theme from '@design-system/theme'

import Hint from '../src/Hint'

storiesOf(`Hint`, module)
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
      <Flex
        width={200}
        theme={theme}
        height={150}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Hint theme={theme} hintText={'This is a hint text'} />
      </Flex>
    ),
    {
      info: {
        text: `
          По умолчанию подсказка выводится с чёрной иконкой и чёрным текстом. 
        `
      }
    }
  )
  .add(
    'Colored',
    () => (
      <Flex
        width={200}
        theme={theme}
        height={150}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Hint
          theme={theme}
          hintText={'This is a hint text'}
          color={'primary'}
        />
      </Flex>
    ),
    {
      info: {
        text: `
          Подсказке можно передать цвет - окрасятся и иконка, и текст. 
        `
      }
    }
  )
  .add(
    'Positioned',
    () => (
      <Flex
        width={200}
        theme={theme}
        height={150}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Hint
          theme={theme}
          hintText={'This is a hint text'}
          color={'primary'}
          position={'right'}
        />
      </Flex>
    ),
    {
      info: {
        text: `
          Подсказке можно передать позицию, например - появление справа. 
        `
      }
    }
  )
  .add(
    'Shifted',
    () => (
      <Flex
        width={200}
        theme={theme}
        height={150}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Hint theme={theme} hintText={'This is a hint text'} shiftLeft={-25} />
      </Flex>
    ),
    {
      info: {
        text: `
          Контейнер с подсказкой можно смещать относительно иконки. 
        `
      }
    }
  )
  .add(
    'Wrongprops',
    () => (
      <Flex
        width={200}
        theme={theme}
        height={150}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Hint
          theme={theme}
          hintText={'This is a hint text'}
          shiftLeft={'nope'}
        />
      </Flex>
    ),
    {
      info: {
        text: `
          При передаче неправильных props подсказка не всплывёт, а в консоли будет ошибка. 
        `
      }
    }
  )

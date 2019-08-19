import React from 'react'
import {storiesOf} from '@storybook/react'
import theme from '@design-system/theme'
import {Text} from '../src'

storiesOf(`Text`, module)
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
  .add('Default', () => <Text>Test text</Text>, {
    info: {
      text: `
          По умолчанию без параметров текст не содержит форматирвоания. 
        `
    }
  })
  .add(
    'Centered',
    () => (
      <Text theme={theme} align={'center'}>
        Test text
      </Text>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
      }
    }
  )

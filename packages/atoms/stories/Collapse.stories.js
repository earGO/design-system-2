import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'

import Collapse from '../src/Collapse'

storiesOf(`Collapse`, module)
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
      <ThemeProvider theme={theme}>
        {' '}
        <Collapse>
          <Collapse.Panel key="key1" title={'someTitle'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            culpa delectus dolores facilis fugit, impedit, iure labore libero
            magnam natus repudiandae voluptatem. Ea impedit iusto nesciunt nulla
            ratione sequi voluptates.
          </Collapse.Panel>
        </Collapse>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров выводится с заголовком слева, с разделителем между заголовком и содержимым. 
        `
      }
    }
  )
  .add(
    'Undivided & right',
    () => (
      <ThemeProvider theme={theme}>
        {' '}
        <Collapse>
          <Collapse.Panel
            key="key1"
            title={'someTitle'}
            titleAlignment={'flex-end'}
            divided={false}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            culpa delectus dolores facilis fugit, impedit, iure labore libero
            magnam natus repudiandae voluptatem. Ea impedit iusto nesciunt nulla
            ratione sequi voluptates.
          </Collapse.Panel>
        </Collapse>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          Можно убрать разделитель и переориентировать заголовок. 
        `
      }
    }
  )
  .add(
    'No content',
    () => (
      <ThemeProvider theme={theme}>
        {' '}
        <Collapse></Collapse>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          Пустой компонент возвращает null. 
        `
      }
    }
  )

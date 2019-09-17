import React from 'react'
import {storiesOf} from '@storybook/react'

import Collapse from '../src/Collapse'

storiesOf(`Collapse`, module)
  .add(
    'Default',
    () => (
      <Collapse>
        <Collapse.Panel key="key1" title={'someTitle'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, culpa
          delectus dolores facilis fugit, impedit, iure labore libero magnam
          natus repudiandae voluptatem. Ea impedit iusto nesciunt nulla ratione
          sequi voluptates.
        </Collapse.Panel>
      </Collapse>
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
      <Collapse>
        <Collapse.Panel
          key="key1"
          title={'someTitle'}
          titleAlignment={'flex-end'}
          divided={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, culpa
          delectus dolores facilis fugit, impedit, iure labore libero magnam
          natus repudiandae voluptatem. Ea impedit iusto nesciunt nulla ratione
          sequi voluptates.
        </Collapse.Panel>
      </Collapse>
    ),
    {
      info: {
        text: `
          Можно убрать разделитель и переориентировать заголовок. 
        `
      }
    }
  )
  .add('No content', () => <Collapse></Collapse>, {
    info: {
      text: `
          Пустой компонент возвращает null. 
        `
    }
  })

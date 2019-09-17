import React from 'react'
import {storiesOf} from '@storybook/react'

import {Input, Icon} from '../src'

const prefix = <Icon name="search" />
const suffix = <Icon name="clear" />

storiesOf(`Input`, module)
  .add('With prefix', () => <Input prefix={prefix} />, {
    info: {
      text: `
          С иконкой "поиск" в начале. 
        `
    }
  })
  .add('With suffix', () => <Input suffix={suffix} />, {
    info: {
      text: `
          С иконкой "закрыть" в конце. 
        `
    }
  })
  .add(
    'With both',
    () => <Input prefix={prefix} suffix={suffix} width={300} />,
    {
      info: {
        text: `
          С иконкой "закрыть" в конце и "открыть" в начале. 
        `
      }
    }
  )

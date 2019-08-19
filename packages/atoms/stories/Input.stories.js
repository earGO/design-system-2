import React from 'react'
import {storiesOf} from '@storybook/react'
import theme from '@design-system/theme'

import {Input, Icon} from '../src'

const prefix = <Icon name="search" />
const suffix = <Icon name="clear" />

storiesOf(`Input`, module)
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
  .add('With prefix', () => <Input prefix={prefix} theme={theme} />, {
    info: {
      text: `
          С иконкой "поиск" в начале. 
        `
    }
  })
  .add('With suffix', () => <Input suffix={suffix} theme={theme} />, {
    info: {
      text: `
          С иконкой "закрыть" в конце. 
        `
    }
  })
  .add(
    'With both',
    () => <Input prefix={prefix} suffix={suffix} theme={theme} width={300} />,
    {
      info: {
        text: `
          С иконкой "закрыть" в конце и "открыть" в начале. 
        `
      }
    }
  )

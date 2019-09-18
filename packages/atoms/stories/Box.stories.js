import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'

import Box from '../src/Box'

storiesOf(`Box`, module)
  .addParameters({
    component: Box,
    parameters:{}
  })
  .add('Default', () => <Box bg={'primary'}>Test</Box>, {
    info: {
      text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
    }

  })

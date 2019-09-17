import React from 'react'
import {storiesOf} from '@storybook/react'
import Checkbox from '../src/Checkbox'

storiesOf(`Checkbox`, module).add('Default', () => <Checkbox />, {
  info: {
    text: `
          По умолчанию без параметров видим простой чекбокс. 
        `
  }
})

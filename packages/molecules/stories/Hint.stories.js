import React, {useState} from 'react'
import styled from 'styled-components'
import {Box, ContentBox} from '@design-system/atoms'

const HintTrigger = styled(Box)`
  display: inline-block;
  background-color: red;
`

import {Hint} from '../src/Hint'

export default {
  title: 'Design System|Hint',
  parameters: {
    component: Hint
  }
}

export const basic = () => (
  <ContentBox
    contentwidth={900}
    justifyContent={'center'}
    height={400}
    alignItems={'center'}
  >
    {' '}
    <Hint>
      <HintTrigger width={35} height={35}>
        Hint
      </HintTrigger>
    </Hint>
  </ContentBox>
)
basic.story = {
  parameters: {
    info: {
      text: `
          Вид компонента без параметров
        `
    }
  }
}

export const inAConsumer = () => {
  const [value, setValue] = useState(null)
  const handleChange = newValue => {
    setValue(newValue)
  }

  return (
    <ContentBox
      contentwidth={900}
      justifyContent={'center'}
      height={400}
      alignItems={'center'}
    >
      <Hint placement={'top'} align={{offsetX: 10, offsetY: -5}}>
        <HintTrigger width={50}>Hint</HintTrigger>
      </Hint>
    </ContentBox>
  )
}
inAConsumer.story = {
  parameters: {
    info: {
      text: `
          Передавая параметр align={offsetX, offsetY} можно тонко регулировать положение поповера. 
        `
    }
  }
}

import React, {useState} from 'react'

import {Overlay} from '../src/Overlay'
import Box from '../src/Box'
import Card from '../src/Card'
import Heading from '../src/Heading'
import Divider from '../src/Divider'
import Text from '../src/Text'
import Flex from '../src/Flex'
import Button from '../src/Button'
import Icon from '../src/Icon'

export default {
  title: 'Design System|Overlay',
  parameters: {
    component: Overlay
  }
}

export const basic = () => (
  <Flex>
    <Box width={300} height={300}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        eos ex perspiciatis vel. Aut eaque est, inventore minima necessitatibus
        neque. Cumque eos laudantium maiores non quasi sit veritatis? Est.
      </Text>
      <Overlay onClick={() => alert('overlay clicked')}>
        <Card bg="white" boxShadowSize="md" p={3}>
          <Heading tag="h4">Heading</Heading>
          <Divider my={2} />
          <Text>Lorem ipsum</Text>
        </Card>
      </Overlay>
    </Box>
  </Flex>
)
basic.story = {
  parameters: {
    info: {
      text: `
          Пример компонента поверх контента. 
        `
    }
  }
}

export const toggleLoading = () => {
  const [loading, setLoading] = useState(false)

  const toggleOverlay = () => {
    setLoading(!loading)
  }

  const clickOverlay = () => {
    alert('content is loading!')
  }

  return (
    <Box>
      <Button mb={3} onClick={toggleOverlay} size="small">
        {loading ? 'hide' : 'show'} loading
      </Button>
      <Card p={4}>
        {loading && (
          <Overlay onClick={clickOverlay}>
            <Icon spin color="white" name="autorenew" />
          </Overlay>
        )}
        <Heading mb={2}>What is Lorem Ipsum?</Heading>
        <Text>
          <Text inline bold>
            Lorem Ipsum
          </Text>{' '}
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
      </Card>
    </Box>
  )
}
toggleLoading.story = {
  parameters: {
    info: {
      text: `
          Пример компонента для статуса "loading" с сообщениемм по клику на оверлей. 
        `
    }
  }
}

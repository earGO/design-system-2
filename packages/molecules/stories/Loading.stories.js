import React, {useState} from 'react'

import {Loading} from '../src/Loading'
import {Flex, Text, Box, Button} from '@design-system/atoms'

export default {
  title: 'Design System|Loading',
  parameters: {
    component: Loading
  }
}

export const basic = () => {
  const [loading, setLoading] = useState(true)

  const handleLoadingSwitch = () => {
    setLoading(!loading)
  }

  return (
    <Flex flexDirection={'column'}>
      <Box width={80} m={3}>
        <Button onClick={handleLoadingSwitch}>Switch loading</Button>
      </Box>
      <Loading overlay={loading}>
        <Box width={1 / 3}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi
            dolorum est illum odio quidem saepe voluptate? Assumenda corporis
            debitis exercitationem inventore libero molestias necessitatibus
            odit! Blanditiis nobis totam voluptatem.
          </Text>
        </Box>
        <Box width={1 / 3}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi
            dolorum est illum odio quidem saepe voluptate? Assumenda corporis
            debitis exercitationem inventore libero molestias necessitatibus
            odit! Blanditiis nobis totam voluptatem.
          </Text>
        </Box>
      </Loading>
    </Flex>
  )
}
basic.story = {
  parameters: {
    info: {
      text: `
          Обернув компонентом контент, который изменяется после загрузки данных, можно отображать спиннер поверх него. Управлять компонентом можно через проп overlay
        `
    }
  }
}

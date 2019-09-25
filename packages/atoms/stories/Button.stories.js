import React from 'react'

import {Button} from '../src/Button'
import Box from '../src/Box'
import Icon from '../src/Icon'
import Flex from '../src/Flex'
import Relative from '../src/Relative'

export default {
  title: 'Design System|Button',
  parameters: {
    component: Button
  }
}

export const basic = () => <Button>Кнопка</Button>

export const buttonTypes = () => (
  <Box>
    <Button mr={2}>Primary</Button>
    <Button type="secondary" mr={2}>
      Secondary
    </Button>
    <Button type="bordered" mr={2}>
      Bordered
    </Button>
    <Button type="dashed" mr={2}>
      Dashed
    </Button>
    <Button type="flat">Flat</Button>
  </Box>
)

buttonTypes.story = {
  parameters: {
    info: {
      text: `
         **type** отвечает за вид кнопки и может принимать значения: **primary, bordered, dashed, outline, flat**
        `
    }
  }
}

export const buttonSizes = () => (
  <Box>
    <Button size="verySmall" mr={2}>
      VerySmall
    </Button>
    <Button size="small" mr={2}>
      Small
    </Button>
    <Button size="medium" mr={2}>
      Medium
    </Button>
    <Button size="large" mr={2}>
      Large
    </Button>
  </Box>
)

buttonSizes.story = {
  parameters: {
    info: {
      text: `
         **size** задает размер кнопки. Допустимые значения: **verySmall, small, medium, large**. (24px, 32px, 40px, 56px)
         
            По умолчанию размер кнопки **medium**
        `
    }
  }
}

export const buttonBlock = () => (
  <Box>
    <Button block>Full width</Button>
  </Box>
)

buttonBlock.story = {
  parameters: {
    info: {
      text: `
         **block** делает кнопку шириной 100% родительского блока
        `
    }
  }
}

export const buttonCircle = () => (
  <Box>
    <Button circle mr={2}>
      Circle
    </Button>
  </Box>
)

buttonCircle.story = {
  parameters: {
    info: {
      text: `
         **circle** превращает кнопку в окружность
        `
    }
  }
}

export const buttonDisabled = () => (
  <Box>
    <Button disabled>Disabled button</Button>
  </Box>
)

buttonDisabled.story = {
  parameters: {
    info: {
      text: `
         **disabled** блокирует кнопку
        `
    }
  }
}

export const buttonWithIcon = () => (
  <Box mb={2}>
    <Button mr={2}>
      <Flex alignItems={'center'}>
        <Box mr={1} mt={1}>
          <Icon spin name="autorenew" color={'white'} />
        </Box>
        <Box mt={1}>Loading...</Box>
      </Flex>
    </Button>
    <Button circle>
      <Relative mt={1} left={7} top={-2}>
        <Icon spin name="autorenew" color={'white'} />
      </Relative>
    </Button>
  </Box>
)

buttonWithIcon.story = {
  parameters: {
    info: {
      text: `
        Использование вместе с иконками. Обратите внимание, что ввиду реализации кнопки, требуется внутренний контейнер
        для выравнивания и тонкого позиционирования иконки и содержимого. 
        
        обратите так же внимание на параметр alignItems у Flex - при выравнивании "по центру контейнера" на деле
        и название кнопки, и иконка смещены вниз. 
        `
    }
  }
}

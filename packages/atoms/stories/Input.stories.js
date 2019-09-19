import React, {useState} from 'react'

import {Input} from '../src/Input'
import Flex from '../src/Flex'
import Icon from '../src/Icon'
import Button from '../src/Button'
import Box from '../src/Box'
import Divider from '../src/Divider'
import Text from '../src/Text'
import styled from 'styled-components'

export default {
  title: 'Design System|Input',
  parameters: {
    component: Input
  }
}

export const basic = () => <Input />
basic.story = {
  parameters: {
    info: {
      text: `
         Без параметров видим пустую строку ввода. Компонент занимает всю доступную ему ширину. 
        `
    }
  }
}

export const NumberInput = () => (
  <Box width={0.25}>
    <Input type="number" />
  </Box>
)

NumberInput.story = {
  parameters: {
    info: {
      text: `
         Только численные значения
        `
    }
  }
}

export const prefixAndPostfix = () => {
  const HoverWrapper = styled(Box)`
    :hover {
      cursor: pointer;
      i {
        color: ${props => props.theme.colors.primary};
      }
    }
  `
  return (
    <Input
      width={1 / 4}
      prefix={
        <HoverWrapper>
          <Icon name="search" color="grey" />
        </HoverWrapper>
      }
      suffix={
        <HoverWrapper>
          <Icon name="clear" color="grey" />
        </HoverWrapper>
      }
    />
  )
}

prefixAndPostfix.story = {
  parameters: {
    info: {
      text: `
         Иконка до и иконка после. Для стилизации иконки "по месту" нужно делать обёртку с синтаксисом как указано выше. 
         За изменение цвета иконки отвечает тэг **<i/>** внутри стиля обёртки.  
        `
    }
  }
}

export const insideComponent = () => {
  const [disabled, setDisable] = useState(false)

  const toggle = () => {
    setDisable(!disabled)
  }
  return (
    <Flex width={1 / 4}>
      <Input size="small" disabled={disabled} placeholder="Disabled input" />
      <Button onClick={toggle} ml={2} size="small" type="dashed">
        Toggle
      </Button>
    </Flex>
  )
}

insideComponent.story = {
  parameters: {
    info: {
      text: `
         Пример использования в компоненте. По нажатию на кнопку можно "выключать" компонент.
        `
    }
  }
}

export const differentSizing = () => (
  <Flex
    width={1 / 4}
    flexDirection="column"
    justifyContent="space-between"
    height={150}
  >
    <Input size="small" placeholder="small" />
    <Input size="medium" placeholder="medium" />
    <Input size="large" placeholder="large" />
  </Flex>
)

differentSizing.story = {
  parameters: {
    info: {
      text: `
         Параметр **size** позволяет выбирать размер поля ввода.  
        `
    }
  }
}

export const actualValueChange = () => {
  const [value, setValue] = useState(null)

  const handleChange = value => {
    setValue(value)
  }

  return (
    <Box width={250}>
      <Input value={value} onChange={handleChange} placeholder="Enter text" />
      {value && <Divider mt={3} mb={2} />}
      {value && (
        <Text>
          value:{' '}
          <Text bold inline color="green">
            {value}
          </Text>
        </Text>
      )}
    </Box>
  )
}

actualValueChange.story = {
  parameters: {
    info: {
      text: `
         Пример работы с фиксацией значения в стэйте.  
        `
    }
  }
}

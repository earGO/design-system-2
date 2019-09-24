import React, {useState} from 'react'

import {Modal} from '../src/Modal'
import Box from '../src/Box'
import Card from '../src/Card'
import Text from '../src/Text'
import Button from '../src/Button'

export default {
  title: 'Design System|Modal',
  parameters: {
    component: Modal
  }
}

export const basic = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => setVisible(!visible)

  return (
    <Box width={200}>
      <Modal isOpen={visible}>
        <Card bg="white" p={3}>
          <Text align="center">
            <Text>
              Сохраните все данные и завершите работу <Text bold>до 19:00</Text>
              . Система будет обновлена.
            </Text>
            <Button mt={2} type="primary" size="small" onClick={handleClick}>
              Хорошо
            </Button>
          </Text>
        </Card>
      </Modal>
      <Button onClick={handleClick}>Просмотреть важное уведомление</Button>
    </Box>
  )
}

basic.story = {
  parameters: {
    info: {
      text: `
          Модальное окно может содержать любое форматирование и любую разметку.
        `
    }
  }
}

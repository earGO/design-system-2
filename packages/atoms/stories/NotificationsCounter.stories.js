import React from 'react'

import {NotificationsCounter} from '../src/NotificationsCounter'
import Flex from '../src/Flex'
import Button from '../src/Button'

export default {
  title: 'Design System|NotificationsCounter',
  parameters: {
    component: NotificationsCounter
  }
}

export const basic = () => <NotificationsCounter />
basic.story = {
  parameters: {
    info: {
      text: `
          Без параметров будет цифра 30 в счётчике красного цвета посередине родительского контейнера
        `
    }
  }
}

export const customizedOnButton = () => (
  <Flex>
    <Button>Увдомления</Button>
    <NotificationsCounter left={-15} top={-6} color={'warning'} count={228} />
  </Flex>
)

customizedOnButton.story = {
  parameters: {
    info: {
      text: `
          Пример позиционирования счётчика на кнопке, изменения его цвета и количества событий.
        `
    }
  }
}

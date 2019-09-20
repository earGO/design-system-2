import React, {useState} from 'react'

import TitledInput from '../src/TitledInput'

export default {
  title: 'Design System|TitledInput',
  parameters: {
    component: TitledInput
  }
}

export const basic = () => <TitledInput />
basic.story = {
  parameters: {
    info: {
      text: `
          Без параметров инпут просит ввести в него данные
        `
    }
  }
}

export const simpleExample = () => (
  <TitledInput title={'Фамилия пользователя'} placeholder={'Введите фамилию'} />
)
simpleExample.story = {
  parameters: {
    info: {
      text: `
          Пример с заголовком и placeholder'ом
        `
    }
  }
}

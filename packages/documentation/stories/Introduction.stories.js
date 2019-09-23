import React, {useState} from 'react'

import {Introduction} from '../src/Introduction'
import {Card, Heading, Text, Box} from '@design-system/atoms'

export default {
  title: 'Design System|Introduction',
  parameters: {
    component: Introduction
  }
}

export const introduction = () => ( <Card width={360} p={4} bg={'white'}>
      <Box bg={'white'}>
      <Heading tag="h4">Внимание! Важное уведомление</Heading>
      <Text fontSize={1} mt={3}>
        Сохраните все данные и завершите работу <strong>до 19:00</strong>.
        Система будет обновлена.
      </Text>
      <Introduction />

      </Box>
    </Card>)

introduction.story = {
  parameters: {
    info: {
      text: `
          Пример реализации комплексного компонента путем комбинирования примитивов и простых элементов
          **нажмите "VIEW CODE" для просмотра исходного кода примера.**
        `
    }
  }
}

export const Installation = () => {
}
Installation.story = {
  parameters: {
    info: {
      text: `
          Библиотека хостится в нашем корпоративном артифактории внутри локальной сети, поэтому перед установкой необходимо убедиться, что **yarn** правильно настроен. Для этого можно выполнить команду:
          ~~~
          yarn config list
          ~~~
          
          Параметр **registry** должен содержать ссылку на https://gitlab.ursip.ru/nexus/repository/npm. Если это не так, то необходимо его явно указать:
          \`\`\`js static
          yarn config set registry https://gitlab.ursip.ru/nexus/repository/npm
          \`\`\`
          
          Далее для установки библиотеки необходимо выполнить команду:
          \`\`\`js static
          npm install --save @ursip/design-system 
          \`\`\`
        `
    }
  }
}

export const integration = () => {}

integration.story = {
  parameters: {
    info: {
      text: `
          Для работы библиотеки необходимо обернуть приложение в \`<ThemeProvider />\`
          Этот компонент является оберткой над провайдером из styled-components (https://www.styled-components.com/docs/advanced/#theming).

               \`\`\`js static
              // App.js
              import React from 'react'
              import { ThemeProvider, Heading, theme } from '@ursip/design-system'
              
              function App() {
                  return (
                    <ThemeProvider theme={theme}>
                      <Heading>You are welcome!</Heading>
                    </ThemeProvider>
                  )
              }
              
              export default App
              \`\`\`
                      `
    }
  }
}

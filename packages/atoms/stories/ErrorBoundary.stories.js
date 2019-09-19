import React from 'react'

import {ErrorBoundary} from '../src/ErrorBoundary'
import Box from '../src/Box'

export default {
  title: 'Design System|ErrorBoundary',
  parameters: {
    component: ErrorBoundary
  }
}

export const noErrors = () => (
  <ErrorBoundary>
    <Box>Рендер без ошибок</Box>
  </ErrorBoundary>
)

noErrors.story = {
  parameters: {
    info: {
      text: `
          Стандартный  error boundary из документации к Реакту. 
           Принимает на вход сообщение, выдаваемое при ошибке, и пропсы
           для настройки внешнего вида текста, по формату компонента \`<Heading/>\` 
        `
    }
  }
}

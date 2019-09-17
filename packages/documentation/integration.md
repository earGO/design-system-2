Для работы библиотеки необходимо обернуть приложение в `<ThemeProvider />`

```js static
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
```

Этот компонент является оберткой над провайдером из [styled-components](https://www.styled-components.com/docs/advanced/#theming).
Для кастомизации стандартной темы можно создать свой файл:
```js static
// custom-theme.js
import { theme as defaultTheme } from '@ursip/design-system'

export default {
    // Копируем значения стандартной темы для их дальнейшей перезаписи
    ...defaultTheme,
    // Свои отступы для margin и padding в px 
    space: [0, 2, 4, 8, 16, 32, 64],
    // Свой шрифт
    font: {
        ...defaultTheme.font,
        main: `'Comic Sans'`,
    },
    // Своя сетка размеров шрифта в px 
    fontSizes: [10, 12, 14, 18, 22, 30, 46],
    // Свои цвета
    colors: {
        ...defaultTheme.colors,
        primary: 'tomato'
    }
}
```

И импортировать его в `<ThemeProvider />`:
```js static
import React from 'react'
import { ThemeProvider, Heading } from '@ursip/design-system'
import theme from './custom-theme'

function App() {
    return (
      <ThemeProvider theme={theme}>
        <Heading color="primary">You are welcome!</Heading>
      </ThemeProvider>
    )
}

export default App
```

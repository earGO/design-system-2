import React, {useState} from 'react';

import {Theme} from '../src/Theme';
import Palette from "../src/Palette";
import {Flex,Heading,Box} from "@design-system/atoms";

export default {
    title: 'Design System|Theme',
    parameters: {
        component: Theme,
    },
};

export const basic = () => (<Theme/>
);
basic.story = {
    parameters: {
        info: {
            text: `
                      
             Для кастомизации стандартной темы можно создать свой файл
             
             \`\`\`js static
            // custom-theme.js
            import theme  from '@design-system/theme'
            
            export default {
                // Копируем значения стандартной темы для их дальнейшей перезаписи
                ...theme,
                // Свои отступы для margin и padding в px 
                space: [0, 2, 4, 8, 16, 32, 64],
                // Свой шрифт
                font: {
                    ...defaultTheme.font,
                    main: \`'Comic Sans'\`,
                },
                // Своя сетка размеров шрифта в px 
                fontSizes: [10, 12, 14, 18, 22, 30, 46],
                // Свои цвета
                colors: {
                    ...defaultTheme.colors,
                    primary: 'tomato'
                }
            }
            \`\`\`
        `
        },
    },
};

export const ThemeProviderImport = () => {}
ThemeProviderImport.story = {
    parameters: {
        info: {
            text: `
            И импортировать его в \`<ThemeProvider />\`
            
            \`\`\`js static
            import React from 'react'
            import { ThemeProvider} from '@design-system/theme'
            import {Heading} from '@design-system/atoms'
            import theme from './custom-theme'
            
            function App() {
                return (
                  <ThemeProvider theme={theme}>
                    <Heading color="primary">You are welcome!</Heading>
                  </ThemeProvider>
                )
            }
            
            export default App
            \`\`\`
        `
        }
    }
}


export const colors = () => (<Palette/>
);
colors.story = {
    parameters: {
        info: {
            text: `
           ### Системные цвета
            Назначаются из палитры. 
                
            Некоторые компоненты (таке, как иконки) не принимают на вход никаких цветов, за исключением этих. 
            Другие компоненты (такие как Box) могут принимать любые цвета. Однако такое использование строго 
            не рекомендуется. 
            
            В будущих версиях дизайн-системы все компоненты будут ограничены только цветами из системной палитры.
            
            Список цветов доступен в **theme.colors** в виде плоского объекта:
            
                
                {
                    primary: "#0091ea",
                    success: "#66bb6a",
                    black: "#3a3a3a",
                    white: "#ffffff",
                    blue: "#0091ea",
                    lightBlue: "#1e88e5",
                    lightGrey: "#f5f5f5",
                    // ...
                }
            
        `
        },
    },
};


export const colorsInAConsumer = () => (
    <Flex flexDirection={'column'}>
        <Heading color="#ebebeb">Ghost heading</Heading>
        <Heading color="pink">Default browser color heading</Heading>
        <Heading color="#ebebeb">Ghost heading</Heading>
        <Heading color="pink">Default browser color heading</Heading>
    </Flex>
);
colorsInAConsumer.story = {
    parameters: {
        info: {
            text: `
           В случае большинства компонентов если передаваемый цвет не найден в объекте, то он применится, 
           как обычная строка в css color
        `
        },
    },
};

export const colorsAdaptive = () => (
    <Flex flexDirection={'column'}>
        <Box bg={['primary', 'error', 'success' ]} p={4}>
            Responsive background color
        </Box>
        <Box bg={['primary', 'error', 'success' ]} p={4}>
            Responsive background color
        </Box>
    </Flex>
);
colorsAdaptive.story = {
    parameters: {
        info: {
            text: `
           Поддерживается использование массива значений для поддержки адаптивного дизайна.
           
           *Изменяйте ширину экрана для проверки работы массива цветов.*
        `
        },
    },
};

export const fonts = () => {}
fonts.story = {
    parameters: {
        info: {
            text: `
                Шрифты хранятся в **theme.fonts**
                                    
                    theme.font: {
                        // Основной шрифт. Текст, кнопки и тд
                        main: '"PT Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        // Шрифт для заголовков. Можно использовать такой же, как и main, либо выбрать другой
                        heading: '"PT Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        // Моноширинный шрифт
                        monospaced: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
                    }
                    
                Запись шрифтов через запятую означает, что если браузер не найдет первый шрифт, то будет применен следующий по списку.
                
                **Система физически не хранит в себе шрифты, в ней можно указать только названия, поэтому файлы шрифтов 
                должны быть загружены и подключены в приложении, в котором мы подключаем \`<ThemeProvider />\`**
        `
        },
    },
};

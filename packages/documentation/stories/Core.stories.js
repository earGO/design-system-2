import React, {useState} from 'react';

import {Core} from '../src/Core';
import {Flex, Box, Text, ContentBox} from "@design-system/atoms";

export default {
    title: 'Design System|Core',
    parameters: {
        component: Core,
    },
};

export const basic = () => (<Core/>
);
basic.story = {
    parameters: {
        info: {
            text: `
          ### Как это работает?
          Создадим компонент Box и добавим в него функцию **color**:
          
              
              import styled from 'styled-components'
              import {color} from 'styled-system'
              
              const Box = styled.div\`
                  \${color}
                \`
              
              export default Box

        `
        },
    },
};

export const coloringTheBox = () => {
    return (
            <Box color="#fff" bg="tomato">
                Tomato
            </Box>
    )
}
coloringTheBox.story = {
    parameters: {
        info: {
            text: `
          Теперь \`<Box />\` имеет два параметра: **color** для задания цвета текста и **bg** для фона.
        `
        }
    }
}

export const MoreFunctions = () => {
    return (
        <Box color="#fff" bg="tomato" width={1/3} m={2} py={2} px={3} >
            Tomato
        </Box>
    )
}
MoreFunctions.story = {
    parameters: {
        info: {
            text: `
          Добавим в Box еще несколько функций:
            
                import styled from 'styled-components'
                import { color, space, width } from 'styled-system'
                
                const Box = styled.div\`
                  \${color}
                  \${space}
                  \${width}
                \`
                
                export default Box
          
          Теперь мы можем управлять отступами и шириной блока
        `
        }
    }
}

export const spacing = () => {
    return (
        <Box color="#fff" bg="purple" width={1/3} m={3} py={3} px={3} >
            Purple
        </Box>
    )
}
spacing.story = {
    parameters: {
        info: {
            text: `
            Функция **space** может брать значения из заранее прописанной сетки отступов в объекте темы:
                    
                    // theme.js
                    export default {
                      space: [
                        0, 4, 8, 16, 32, 64, 128, 256, 512
                      ]
                    }
                    
            В примере выше для параметров **m** и **p** мы указали значение 3. Эта цифра является индексом элемента из массива **space** темы. То есть по факту мы записываем для компонента css:
            
                    {
                      margin: 16px;
                      padding: 16px;
                    }
            
            Все свойства могут принимать значения number, string, array:
            * Числа, превышающие длину массива отступов из темы, преобразуются в пиксели;
            * Есть возможность передавать значения строкой, например 'auto' или '2em';
            * Свойство margin может принимать отрицательные значения для задания негативного отступа;
            * Массивы используются для адаптивного дизайна.
            
            Аналогичным образом работает функция **fontSize**, которая смотрит на массив fontSizes в обьекте темы. 
        `
        }
    }
}

export const mediaQueriesAndBreakpoints = () => {
    return (
        <Box
            bg={'purple'} color={'white'}
            width={[
                1,    // 100% телефоны
                1/2,  // 50% планшеты
                1/4   // 25% десктоп
            ]}
        >
            // margin
            <Text m={[ 0, 1, 2 ]} color={'white'}>Ima Text with responsive margins</Text>

            // padding
            <Text p={[ 2, 3, 4 ]} color={'white'}>Ima Text with responsive paddings</Text>

            // font-size
            <Text fontSize={[ 3, 4, 5 ]} color={'white'}>Ima Text with responsive fontSize</Text>
            </Box>
    )
}
mediaQueriesAndBreakpoints.story = {
    parameters: {
        info: {
            text: `
            ## Адаптивная верстка
            Все функции из styled-system позволяют задать массив значений для различных размеров экранов.
            
            Брейкпоинты задаются в теме:
               
                // theme.js
                const breakpoints = [420, 640, 1200, 1600]
                const mediaQueries = breakpoints.map(width => \`@media screen and (min-width: \${width}px)\`)
                
                export default {
                  breakpoints,
                  mediaQueries
                }
        `
        }
    }
}


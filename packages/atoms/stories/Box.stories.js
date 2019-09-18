import React from 'react';

import { Box } from '../src/Box';


export default {
    title: 'Design System|Box',
    parameters: {
        component: Box,
    },
};

export const simple = () => (
    <Box bg={'primary'} color={'white'}>Text in the box</Box>
);

export const withWidth = () => (
        <Box bg={'primary'} color={'white'} width={1/2}>Text in the box</Box>
);

withWidth.story= {
    parameters: {
        info: {
            text: `
          Компонент принимает на вход параметр width в пикселях (только число), или в долях для установки ширины по сетке
        `
        },
    },
};

export const paddingAndMarginAndGreen = () => (
    <Box width={1/2} bg="success" color="white" p={3} m={2}>
        Box
    </Box>
);

paddingAndMarginAndGreen.story= {
    parameters: {
        info: {
            text: `
          Компонент принимает на вход ряд параметров (см. выше таблицу), например padding и margin.
          
          Значения выбираются из массива theme.space
        `
        },
    },
};

export const responsive = ()=>{
    return (
        <Box
            bg={['white', 'orange', 'primary']}
            color={['black', 'green', 'white']}
            width={[1, 1/2, 1/4, 1/10]}
            fontSize={[0, 1, 2, 3]}
            py={[0, 1, 2, 3]}
            px={[0, 1, 2]}
        >
            Hello
        </Box>
    )
}
responsive.story= {
    parameters: {
        info: {
            text: `
          Для адаптивной верстки параметры в качестве значения могут принимать массивы, в котором каждый индекс соответсвует брейкпойнту из настроек темы.

          Изменяйте ширину экрана для проверки работы брейкпоинтов. 
        `,
        },
    },
};

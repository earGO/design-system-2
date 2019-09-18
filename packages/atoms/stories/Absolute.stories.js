import React from 'react';

import {Absolute} from '../src/Absolute';
import Box from "../src/Box";

export default {
    title: 'Design System|Absolute',
    parameters: {
        component: Absolute,
    },
};

export const basic = () => (
    <Box width={1/2} height={50} bg={'success'}>
    <Absolute bg={'primary'} color={'white'} p={2} m={2}>Absolute</Absolute>
    </Box>
);
basic.story = {
    parameters: {
        info: {
            text: `
          Без параметров смещения компонент ведёт себя как обычный Box
        `
        },
    },
};


export const shiftTop = () => (
    <Box width={1/2} height={50} bg={'success'}>
        <Absolute top={'30px'} bg={'primary'} color={'white'}>Absolute со смещением на 30 px от верхней границы</Absolute>
    </Box>

);

shiftTop.story = {
    parameters: {
        info: {
            text: `
          Пример со смещением относительно верхней границы компонента на 30рх вниз
        `
        },
    },
};

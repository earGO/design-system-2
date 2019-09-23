import React from 'react';

import {ContentBox} from '../src/ContentBox';
import Box from "../src/Box";


export default {
    title: 'Design System|ContentBox',
    parameters: {
        component: ContentBox,
    },
};

export const basic = () => (
    <ContentBox bg={'lightGrey'}>
        <Box bg={'primary'} p={2} m={2} color={'white'}>Я синий блок</Box>
        <Box bg={'success'} p={2} m={2} color={'white'}>Я зеленый блок</Box>
        <Box bg={'warning'} p={2} m={2} color={'white'}>Я оранжевый блок</Box>
    </ContentBox>
);

basic.story = {
    parameters: {
        info: {
            text: `
         По умолчанию ширина 1120рх,
          
         контент у левого края,
          
         вертикально выравнивание по верхнему краю,
          
         компонент самовыравнивается по центру родителя.
         
        `
        },
    },
};

export const customWidth = () => (
    <ContentBox bg={'lightGrey'} contentwidth={750} justifyContent={'space-between'}>
        <Box bg={'primary'} p={2} m={2} color={'white'}>Я синий блок</Box>
        <Box bg={'success'} p={2} m={2} color={'white'}>Я зеленый блок</Box>
        <Box bg={'warning'} p={2} m={2} color={'white'}>Я оранжевый блок</Box>
    </ContentBox>
);

customWidth.story = {
    parameters: {
        info: {
            text: `
          Можно передать изменененную ширину, и по-другому распределить компоненты внутри блока
        `
        },
    },
};

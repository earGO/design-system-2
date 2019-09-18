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

export const paddingAndMarginAndGreen = () => (
    <Box width={1/2} bg="success" color="white" p={3} m={2}>
        Box
    </Box>
);

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
          description or documentation about my component, supports markdown

          ~~~js
          <Button>Click Here</Button>
          ~~~
        `,
        },
    },
};

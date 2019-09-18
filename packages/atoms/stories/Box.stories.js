import React from 'react';

import { Box } from '../src/Box';

export default {
    title: 'Design System|Box',

    parameters: {
        component: Box,
    },
};

export const large = () => (
    <div>
        <Box bg={'primary'} color={'white'}>Text in the box</Box>
    </div>
);


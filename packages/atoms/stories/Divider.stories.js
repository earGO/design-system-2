import React from 'react';

import {Divider} from '../src/Divider';


export default {
    title: 'Design System|Divider',
    parameters: {
        component: Divider,
    },
};

export const basic = () => (
    <Divider/>
);
basic.story = {
    parameters: {
        info: {
            text: `
          Компонент не обладает параметрами. Всегда занимает всю ширину родителя, при этом сам шириной не обладает
        `
        },
    },
};

export const vertical = () => (
    <Divider vertical />
);

vertical.story = {
    parameters: {
        info: {
            text: `
          **vertical** превращает разделитель в inline-элемент с вертикальной линией.
        `
        },
    },
};

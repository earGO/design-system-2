import React from 'react';
import { configure, addDecorator,addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import {withThemesProvider} from 'storybook-addon-styled-component-theme'
import theme from '@design-system/theme'
import TableStub from "./TableStub";

addDecorator(withInfo( {
    inline: true,
    header: false,
    source: false,
    TableComponent:TableStub,
    styles: {
        source:{
            h1:{
                display:'none'
            }
        },
        propTableHead: {
            display:'none',
            margin: '20px 0 0 0',
        },
}}));

addDecorator(withA11y);
addDecorator(withThemesProvider([theme]))

configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
      require.context('../stories', true, /\.stories\.js$/),
  ],
  module
);


import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import {withThemesProvider} from 'storybook-addon-styled-component-theme'
import theme from '@design-system/theme'


addDecorator(withA11y);
addDecorator(withThemesProvider([theme]))

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
      require.context('../stories', true, /\.stories\.js$/),
      require.context('../intros', true, /\.stories\.mdx$/),
  ],
  module
);


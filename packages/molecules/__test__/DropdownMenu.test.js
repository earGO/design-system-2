import React from 'react'
import renderer from 'react-test-renderer'
import DropdownMenu from '../src/DropdownMenu'

import theme, {ThemeProvider} from '@design-system/theme'
import {mount} from 'enzyme/build'

describe('DropdownMenu', () => {
  test('mounts', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <DropdownMenu />
      </ThemeProvider>
    )
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})

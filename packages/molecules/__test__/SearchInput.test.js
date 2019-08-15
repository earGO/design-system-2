import {mount} from 'enzyme/build'
import SearchInput from '../src/SearchInput'
import theme, {ThemeProvider} from '@design-system/theme'
import React from 'react'

describe('SearchInput DOM and snapshot', () => {
  test('mounts', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <SearchInput />
      </ThemeProvider>
    )
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})

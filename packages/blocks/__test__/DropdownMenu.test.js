import React from 'react'
import renderer from 'react-test-renderer'
import DropdownMenu from '../src/DropdownMenu'
import theme from '@design-system/theme'
import {mount} from 'enzyme/build'

describe('DropdownMenu', () => {
  test('mounts', () => {
    const wrapper = mount(<DropdownMenu theme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})

import {mount} from 'enzyme/build'
import Loading from '../src/Loading'
import theme from '@design-system/theme'
import React from 'react'

describe('Loading DOM and snapshot', () => {
  test('mounts', () => {
    const wrapper = mount(<Loading theme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})
